/* =====================================================================
 * NGÂN HÀNG CÂU HỎI - Luyện thi V-ACT (ĐGNL ĐHQG-HCM)
 * ---------------------------------------------------------------------
 * CÁCH THÊM CÂU HỎI (thầy chỉ cần sửa file này bằng Notepad/VS Code):
 *
 *   {
 *     id: "tv-007",                 // mã duy nhất, không trùng
 *     part: "ngonngu_tv",           // 1 trong 4: ngonngu_tv | ngonngu_ta | toan | tukhoahoc
 *     topic: "Từ vựng",             // chủ đề nhỏ (tùy thầy đặt)
 *     question: "Nội dung câu hỏi...",
 *     choices: ["Phương án A", "Phương án B", "Phương án C", "Phương án D"],
 *     answer: 2,                    // CHỈ SỐ đáp án đúng: 0=A, 1=B, 2=C, 3=D
 *     explanation: "Giải thích vì sao chọn đáp án này..."
 *   },
 *
 * Lưu ý:
 *  - Mỗi câu cách nhau bằng dấu phẩy.
 *  - "answer" đếm từ 0 (A=0, B=1, C=2, D=3).
 *  - Sau khi sửa xong, lưu file rồi mở lại app (F5) là cập nhật ngay.
 *
 * 4 phần đề V-ACT 2026: 120 câu / 150 phút
 *   - ngonngu_tv  : Tiếng Việt        (30 câu trong đề thật)
 *   - ngonngu_ta  : Tiếng Anh         (30 câu)
 *   - toan        : Toán học          (30 câu)
 *   - tukhoahoc   : Tư duy khoa học   (30 câu)
 * ===================================================================== */

window.QUESTION_BANK = [

  /* ---------------- TIẾNG VIỆT ---------------- */
  {
    id: "tv-001", part: "ngonngu_tv", topic: "Chính tả",
    question: "Từ nào sau đây viết ĐÚNG chính tả?",
    choices: ["Xán lạn", "Sáng lạng", "Xáng lạng", "Sán lạn"],
    answer: 0,
    explanation: "“Xán lạn” mới đúng (nghĩa: rực rỡ, tươi sáng). Các cách viết “sáng lạng”, “xáng lạng” đều sai chính tả."
  },
  {
    id: "tv-002", part: "ngonngu_tv", topic: "Từ loại",
    question: "Trong câu “Những cánh đồng lúa chín vàng trải dài đến tận chân trời.”, từ “vàng” thuộc từ loại nào?",
    choices: ["Danh từ", "Động từ", "Tính từ", "Phó từ"],
    answer: 2,
    explanation: "“Vàng” ở đây chỉ tính chất, màu sắc của lúa chín → là tính từ."
  },
  {
    id: "tv-003", part: "ngonngu_tv", topic: "Thành ngữ",
    question: "Thành ngữ “Nước đổ lá khoai” có nghĩa gần nhất với:",
    choices: ["Làm việc rất nhanh", "Khuyên bảo mà không có tác dụng", "Tiết kiệm của cải", "Đoàn kết một lòng"],
    answer: 1,
    explanation: "Nước đổ trên lá khoai thì trôi tuột đi, không thấm; ý chỉ lời khuyên răn không có tác dụng với người nghe."
  },
  {
    id: "tv-004", part: "ngonngu_tv", topic: "Đọc hiểu",
    question: "“Anh ấy không những giỏi chuyên môn mà còn rất khiêm tốn.” Quan hệ ý nghĩa giữa hai vế câu là:",
    choices: ["Nguyên nhân – kết quả", "Tăng tiến", "Tương phản", "Điều kiện – giả thiết"],
    answer: 1,
    explanation: "Cặp quan hệ từ “không những… mà còn…” biểu thị quan hệ tăng tiến."
  },
  {
    id: "tv-005", part: "ngonngu_tv", topic: "Biện pháp tu từ",
    question: "Câu thơ “Mặt trời xuống biển như hòn lửa” sử dụng biện pháp tu từ nào?",
    choices: ["Ẩn dụ", "Hoán dụ", "So sánh", "Nhân hóa"],
    answer: 2,
    explanation: "Có từ “như” đối chiếu mặt trời với hòn lửa → biện pháp so sánh."
  },
  {
    id: "tv-006", part: "ngonngu_tv", topic: "Dùng từ",
    question: "Chọn từ thích hợp điền vào chỗ trống: “Kết quả nghiên cứu đã ___ giả thuyết ban đầu của nhóm tác giả.”",
    choices: ["chứng thực", "chứng kiến", "chứng nhận", "chứng giám"],
    answer: 0,
    explanation: "“Chứng thực” = xác nhận tính đúng đắn, phù hợp ngữ cảnh khoa học. Các từ còn lại sai nghĩa hoặc không phù hợp văn phong."
  },

  /* ---------------- TIẾNG ANH ---------------- */
  {
    id: "ta-001", part: "ngonngu_ta", topic: "Grammar - Tenses",
    question: "Choose the best option: “By the time we arrived, the film ___.”",
    choices: ["already started", "has already started", "had already started", "was already starting"],
    answer: 2,
    explanation: "Hành động xảy ra trước một mốc quá khứ khác → dùng quá khứ hoàn thành (had + V3): had already started."
  },
  {
    id: "ta-002", part: "ngonngu_ta", topic: "Vocabulary",
    question: "Choose the word closest in meaning to “meticulous”.",
    choices: ["careless", "careful", "generous", "confident"],
    answer: 1,
    explanation: "“Meticulous” = rất cẩn thận, tỉ mỉ → gần nghĩa nhất với “careful”."
  },
  {
    id: "ta-003", part: "ngonngu_ta", topic: "Preposition",
    question: "Choose the correct preposition: “She is responsible ___ training new staff.”",
    choices: ["of", "for", "to", "with"],
    answer: 1,
    explanation: "Cụm cố định: be responsible FOR something/doing something."
  },
  {
    id: "ta-004", part: "ngonngu_ta", topic: "Conditionals",
    question: "“If I ___ you, I would accept the offer.”",
    choices: ["am", "was", "were", "had been"],
    answer: 2,
    explanation: "Câu điều kiện loại 2 (giả định hiện tại), với “I” trang trọng dùng “were”: If I were you."
  },
  {
    id: "ta-005", part: "ngonngu_ta", topic: "Reading - inference",
    question: "“Despite the heavy rain, the outdoor concert went ahead as planned.” What can be inferred?",
    choices: ["The concert was cancelled.", "The concert took place even though it rained.", "It did not rain.", "The concert was moved indoors."],
    answer: 1,
    explanation: "“Despite the heavy rain… went ahead as planned” = dù mưa to, buổi hòa nhạc vẫn diễn ra như kế hoạch."
  },
  {
    id: "ta-006", part: "ngonngu_ta", topic: "Word form",
    question: "Choose the correct form: “Her presentation was highly ___.”",
    choices: ["inform", "informative", "information", "informatively"],
    answer: 1,
    explanation: "Sau “highly” cần một tính từ bổ nghĩa cho danh từ “presentation” qua “was” → “informative”."
  },

  /* ---------------- TOÁN HỌC ---------------- */
  {
    id: "to-001", part: "toan", topic: "Hàm số",
    question: "Cho hàm số y = 2x − 3. Giá trị của y khi x = 4 là:",
    choices: ["5", "8", "11", "−5"],
    answer: 0,
    explanation: "Thay x = 4: y = 2·4 − 3 = 8 − 3 = 5."
  },
  {
    id: "to-002", part: "toan", topic: "Xác suất",
    question: "Gieo một con súc sắc cân đối. Xác suất xuất hiện mặt có số chấm là số chẵn là:",
    choices: ["1/6", "1/3", "1/2", "2/3"],
    answer: 2,
    explanation: "Các mặt chẵn: 2, 4, 6 → 3 trong 6 khả năng → 3/6 = 1/2."
  },
  {
    id: "to-003", part: "toan", topic: "Cấp số cộng",
    question: "Cấp số cộng có số hạng đầu u₁ = 3 và công sai d = 4. Số hạng thứ 5 (u₅) bằng:",
    choices: ["15", "19", "23", "27"],
    answer: 1,
    explanation: "u₅ = u₁ + 4d = 3 + 4·4 = 3 + 16 = 19."
  },
  {
    id: "to-004", part: "toan", topic: "Logarit",
    question: "Giá trị của log₂ 32 là:",
    choices: ["4", "5", "6", "16"],
    answer: 1,
    explanation: "32 = 2⁵ nên log₂ 32 = 5."
  },
  {
    id: "to-005", part: "toan", topic: "Phương trình bậc hai",
    question: "Phương trình x² − 5x + 6 = 0 có hai nghiệm là:",
    choices: ["1 và 6", "2 và 3", "−2 và −3", "−1 và −6"],
    answer: 1,
    explanation: "Tích = 6, tổng = 5 → hai nghiệm 2 và 3 (vì 2+3=5, 2·3=6)."
  },
  {
    id: "to-006", part: "toan", topic: "Phần trăm",
    question: "Một sản phẩm giá 800.000đ được giảm 15%. Giá sau khi giảm là:",
    choices: ["680.000đ", "720.000đ", "740.000đ", "120.000đ"],
    answer: 0,
    explanation: "Giảm 15% → còn lại 85%: 800.000 × 0,85 = 680.000đ."
  },

  /* ---------------- TƯ DUY KHOA HỌC ---------------- */
  {
    id: "tk-001", part: "tukhoahoc", topic: "Suy luận logic",
    question: "Tất cả các loài chim đều có lông vũ. Chim cánh cụt là chim. Vậy kết luận nào ĐÚNG?",
    choices: ["Chim cánh cụt không có lông vũ", "Chim cánh cụt có lông vũ", "Mọi loài có lông vũ đều là chim cánh cụt", "Không thể kết luận"],
    answer: 1,
    explanation: "Tam đoạn luận: chim → có lông vũ; chim cánh cụt là chim → chim cánh cụt có lông vũ."
  },
  {
    id: "tk-002", part: "tukhoahoc", topic: "Quy luật dãy số",
    question: "Tìm số tiếp theo của dãy: 2, 6, 12, 20, 30, ___",
    choices: ["36", "40", "42", "44"],
    answer: 2,
    explanation: "Hiệu giữa các số: 4, 6, 8, 10, … (tăng 2). Số kế tiếp = 30 + 12 = 42."
  },
  {
    id: "tk-003", part: "tukhoahoc", topic: "Phân tích số liệu",
    question: "Một lớp có 40 học sinh, trong đó 60% là nữ. Số học sinh nam là:",
    choices: ["16", "20", "24", "30"],
    answer: 0,
    explanation: "Nữ = 60% → nam = 40% × 40 = 16 học sinh."
  },
  {
    id: "tk-004", part: "tukhoahoc", topic: "Suy luận khoa học",
    question: "Thí nghiệm cho thấy cây để trong tối không quang hợp tạo tinh bột, cây có ánh sáng thì tạo tinh bột. Yếu tố nào là biến độc lập?",
    choices: ["Lượng tinh bột tạo ra", "Ánh sáng", "Loại cây", "Nhiệt độ phòng"],
    answer: 1,
    explanation: "Biến độc lập là yếu tố được chủ động thay đổi để quan sát ảnh hưởng — ở đây là ánh sáng. Lượng tinh bột là biến phụ thuộc."
  },
  {
    id: "tk-005", part: "tukhoahoc", topic: "Suy luận logic",
    question: "Nếu trời mưa thì sân ướt. Hiện sân KHÔNG ướt. Kết luận đúng là:",
    choices: ["Trời đang mưa", "Trời không mưa", "Sân sắp ướt", "Không kết luận được"],
    answer: 1,
    explanation: "Phản đảo (modus tollens): “mưa → sân ướt”; sân không ướt → trời không mưa."
  },
  {
    id: "tk-006", part: "tukhoahoc", topic: "Phân tích số liệu",
    question: "Doanh thu 3 tháng lần lượt là 120, 150, 180 triệu. Doanh thu trung bình mỗi tháng là:",
    choices: ["140 triệu", "150 triệu", "160 triệu", "165 triệu"],
    answer: 1,
    explanation: "(120 + 150 + 180) / 3 = 450 / 3 = 150 triệu."
  }

];
