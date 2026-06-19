# Luyện thi V-ACT — ĐGNL ĐHQG-HCM

Web app/PWA luyện thi Đánh giá năng lực (V-ACT) cho học sinh lớp 12. Chạy trên **cả PC Windows và iPhone/iPad** bằng trình duyệt, một bộ mã nguồn duy nhất, không cần cài đặt phức tạp.

## Tính năng
- **Luyện theo chủ đề** — chọn từng phần (Tiếng Việt, Tiếng Anh, Toán, Tư duy khoa học), chấm và hiện giải thích ngay sau mỗi câu.
- **Thi thử bấm giờ** — mô phỏng đề V-ACT theo tỉ lệ thật (Ngôn ngữ 60 / Toán 30 / Tư duy khoa học 30), đồng hồ đếm ngược, bảng câu hỏi, nộp bài chấm điểm.
- **Theo dõi tiến độ** — thống kê số câu đã làm, độ chính xác từng phần, gợi ý phần còn yếu, lịch sử các lần thi thử (lưu ngay trên thiết bị).
- **Giải thích đáp án** — mỗi câu có lời giải; xem lại toàn bộ bài sau khi nộp.

> Cấu trúc đề tham chiếu: 120 câu / 150 phút, 3 phần. Nguồn xem mục cuối.

---

## Cách chạy

### Trên PC Windows (nhanh nhất)
Mở File Explorer vào thư mục này, **bấm đúp vào `index.html`** — app mở ngay trong trình duyệt mặc định.
Khuyến nghị dùng **Chrome hoặc Edge**. Muốn dùng như một ứng dụng riêng: mở bằng Chrome/Edge → bấm biểu tượng **Cài đặt (⊕)** trên thanh địa chỉ → "Cài đặt".

### Trên iPhone / iPad
iOS không cho cài PWA trực tiếp từ file, nên cần đưa app lên một địa chỉ web (miễn phí). Hai cách dễ nhất:

1. **GitHub Pages (miễn phí, ổn định):** tạo repo trên github.com, tải toàn bộ thư mục này lên, bật Settings → Pages. Sau vài phút có địa chỉ dạng `https://<tên>.github.io/...`.
2. **Netlify Drop (không cần tài khoản kỹ thuật):** vào `app.netlify.com/drop`, kéo–thả nguyên thư mục này vào, nhận ngay một địa chỉ https.

Sau khi có địa chỉ https, trên iPhone mở bằng **Safari** → bấm nút **Chia sẻ ⬆** → **"Thêm vào Màn hình chính"**. App sẽ chạy toàn màn hình như app thật và **dùng được offline** sau lần mở đầu.

> Nếu thầy muốn, tôi có thể hướng dẫn từng bước đưa lên GitHub Pages hoặc Netlify.

---

## Ngân hàng câu hỏi đã nhập

- **Câu mẫu** (`data/questions.js`): 24 câu minh họa, 6 câu/phần.
- **Đã nhập tự động** từ **4 đề VIP HSA 2025** (Ngôn ngữ + Tiếng Anh, kèm đáp án và lời giải):
  - `data/questions_hsa_de1.js`: 100 câu (Đề 1).
  - `data/questions_hsa_de2_4.js`: 299 câu (Đề 2, 3, 4).
  - Đây là đề **HSA (ĐHQG Hà Nội)**, dùng làm bài luyện chung kỹ năng Ngôn ngữ/Tiếng Anh, *không* phải định dạng V-ACT (HCM).
  - Một số câu đọc hiểu nhắc tới "bài viết/đoạn trích trên" — đoạn văn gốc nằm ở file đề bài, chưa nhúng kèm; phần lời giải thường đã nêu đủ ý.
- **Soạn mới** (`data/questions_bosung_20260619.js`): 48 câu **Toán (24)** + **Tư duy khoa học (24)**, soạn theo đúng dạng V-ACT (tốc độ–quãng đường, tỉ lệ–phần trăm, hình học, xác suất–thống kê, đọc bảng số liệu; logic, quy luật dãy, suy luận khoa học). Đáp án các câu tính toán đã được **kiểm chứng tự động bằng Python**.
- **Soạn mới đợt 2** (`data/questions_bosung2_20260619.js`): 59 câu Toán (30) + Tư duy khoa học (29), chủ đề/số liệu khác đợt 1 để đỡ lặp, đáp án kiểm chứng bằng Python.
- **Tổng ngân hàng hiện có: 530 câu** — Tiếng Việt 205, Tiếng Anh 206, Toán 60, Tư duy khoa học 59.

Công cụ nhập đặt ở `tools/0lcia_20260618_NhapDeHSA.py` — chạy lại để nhập tiếp 3 đề HSA còn lại khi cần.

---

## Thêm câu hỏi của thầy

Mở file **`data/questions.js`** bằng Notepad hoặc VS Code. Thêm câu mới theo mẫu:

```js
{
  id: "to-007",                 // mã duy nhất, không trùng
  part: "toan",                 // ngonngu_tv | ngonngu_ta | toan | tukhoahoc
  topic: "Tích phân",           // chủ đề nhỏ (tùy đặt)
  question: "Nội dung câu hỏi...",
  choices: ["A", "B", "C", "D"],
  answer: 1,                    // chỉ số đáp án đúng: 0=A, 1=B, 2=C, 3=D
  explanation: "Giải thích..."
},
```

Quy tắc: mỗi câu cách nhau bằng dấu phẩy; `answer` đếm **từ 0**. Lưu file, mở lại app (F5) là cập nhật. Ngân hàng hiện có **24 câu mẫu** (6 câu/phần) để thầy dùng làm khuôn.

Để thi thử đầy đủ 120 câu như đề thật, cần bổ sung dần cho đủ 30 câu mỗi phần; khi chưa đủ, app tự rút gọn đề theo số câu đang có và chỉnh thời gian tương ứng (75 giây/câu).

---

## Cấu trúc thư mục
```
0lcia_20260618_LuyenThi_VACT/
├─ index.html              giao diện chính
├─ js/app.js               toàn bộ logic
├─ data/questions.js       ngân hàng câu hỏi (sửa file này để thêm câu)
├─ manifest.webmanifest    cấu hình PWA
├─ service-worker.js       cho phép chạy offline khi đã host
├─ icons/                  biểu tượng app
└─ README.md               hướng dẫn này
```

## Lưu ý
- Dữ liệu tiến độ lưu cục bộ trong trình duyệt (localStorage) trên từng thiết bị, không gửi đi đâu. Xóa lịch sử duyệt web có thể làm mất dữ liệu này.
- Câu hỏi mẫu do tôi soạn để minh họa, **không phải đề thi thật**; thầy nên kiểm duyệt và thay bằng ngân hàng của mình.

## Nguồn cấu trúc đề
- Báo Thanh Niên — Cấu trúc bài thi ĐGNL ĐHQG TP.HCM 2026: https://thanhnien.vn/cau-truc-bai-thi-danh-gia-nang-luc-dh-quoc-gia-tphcm-nam-2026-18526012214150519.htm
- Cổng TTĐT Chính phủ — Tuyển sinh 2026, lịch thi V-ACT: https://xaydungchinhsach.chinhphu.vn/tuyen-sinh-2026-lich-thi-danh-gia-nang-luc-v-act-cua-dhqg-tp-hcm-119260122173243835.htm
