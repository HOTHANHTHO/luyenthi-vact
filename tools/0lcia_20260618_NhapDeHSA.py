# -*- coding: utf-8 -*-
"""
Công cụ NHẬP NGÂN HÀNG CÂU HỎI từ file Word "đáp án và lời giải chi tiết" (bộ HSA).
Tách phần Ngôn ngữ-Văn học và Tiếng Anh thành định dạng QUESTION_BANK của app.

Cách dùng (chạy trên máy có Python + thư viện python-docx):
    pip install python-docx
    python 0lcia_20260618_NhapDeHSA.py "duong_dan_file_NGON_NGU.docx" ngonngu_tv "HSA Đề 2" > out_tv.js
    python 0lcia_20260618_NhapDeHSA.py "duong_dan_file_TIENG_ANH.docx" ngonngu_ta "HSA Đề 2" > out_ta.js
Sau đó dán nội dung vào một file .js trong thư mục data/ và khai báo trong index.html.

Hạn chế: chỉ dùng tốt cho phần text (Ngôn ngữ, Tiếng Anh). Phần Toán/Lý/Hóa/Sinh
có công thức và hình nên KHÔNG dùng script này.
"""
import sys, re, json
import docx

LET = "ABCD"
ANS = re.compile(r'(?:Đáp án đúng là|Bạn đã chọn đúng|Đáp án)\s*:?\s*([ABCDabcd])')
SKIP = re.compile(r'^(Phương pháp giải|Lời giải|Dạng bài|Cách giải|Kiến thức|Nội dung/)', re.I)

def has_marker(t):
    return bool(re.search(r'(?i)\b[ABCD][\.\)]\s', t)) or bool(re.match(r'(?i)^\s*[ABCD][\.\)]', t))

def split_choices(text):
    pos = []; start = 0
    for lab in LET:
        m = re.search(r'(?i)\b' + lab + r'[\.\)]', text[start:])
        if not m: return None
        p = start + m.start(); pos.append(p); start = p + 1
    out = []
    for i, p in enumerate(pos):
        end = pos[i + 1] if i + 1 < len(pos) else len(text)
        out.append(re.sub(r'(?i)^\s*[ABCD][\.\)]\s*', '', text[p:end]).strip())
    return out if all(out) else None

def parse(path, part, source_tag):
    d = docx.Document(path)
    paras = [p.text.strip() for p in d.paragraphs if p.text.strip()]
    idxs = [i for i, t in enumerate(paras) if re.match(r'^Câu\s*\d+\s*[:\.]?', t)]
    idxs.append(len(paras))
    qs = []; fail = 0
    tag = "tv" if part == "ngonngu_tv" else "ta"
    for k in range(len(idxs) - 1):
        block = paras[idxs[k]:idxs[k + 1]]
        num = re.match(r'^Câu\s*(\d+)', block[0]).group(1)
        ai = ans = None
        for j, t in enumerate(block):
            m = ANS.search(t)
            if m: ai = j; ans = LET.index(m.group(1).upper()); break
        if ai is None: fail += 1; continue
        cs = cstart = None
        for j in range(1, ai):
            if has_marker(block[j]):
                cs = split_choices(" ".join(block[j:ai])); cstart = j; break
        if not cs: fail += 1; continue
        stem = re.sub(r'^(Choose A, B, C or D[^\.]*\.\s*)', '', " ".join(block[1:cstart]).strip())
        ex = " ".join(t for t in block[ai + 1:] if not SKIP.match(t)).strip()
        if len(ex) > 650: ex = ex[:650].rsplit(" ", 1)[0] + "…"
        slug = re.sub(r'\s+', '', source_tag).lower()
        qs.append({
            "id": f"{slug}-{tag}-{num}", "part": part,
            "topic": f"{source_tag} - " + ("Ngôn ngữ" if tag == "tv" else "Tiếng Anh"),
            "question": stem or "(Câu đọc hiểu - xem lời giải)",
            "choices": cs, "answer": ans, "explanation": ex
        })
    return qs, fail

if __name__ == "__main__":
    if len(sys.argv) < 4:
        print("Cú pháp: python script.py <file.docx> <ngonngu_tv|ngonngu_ta> <nhãn nguồn>", file=sys.stderr)
        sys.exit(1)
    path, part, tag = sys.argv[1], sys.argv[2], sys.argv[3]
    qs, fail = parse(path, part, tag)
    print(f"// Tách được {len(qs)} câu, bỏ {fail}", file=sys.stderr)
    print("window.QUESTION_BANK = (window.QUESTION_BANK || []).concat(")
    print(json.dumps(qs, ensure_ascii=False, indent=2))
    print(");")
