/* =====================================================================
 * NGÂN HÀNG BỔ SUNG ĐỢT 2 (soạn mới 20260619) - Toán & Tư duy khoa học
 *   Câu hỏi gốc, soạn theo đúng dạng đề V-ACT (không sao chép nguồn ngoài).
 *   Đáp án các câu tính toán đã kiểm chứng tự động bằng Python.
 *   Mục đích: tăng độ đa dạng (đỡ lặp câu khi luyện nhiều lần).
 * ===================================================================== */
window.QUESTION_BANK = (window.QUESTION_BANK || []).concat(
[
  {
    "id": "ext2-toan-001",
    "part": "toan",
    "topic": "Chuyển động",
    "question": "Một người đi xe đạp 36 km trong 2 giờ rồi đi tiếp 24 km trong 1 giờ. Tốc độ trung bình cả hành trình là:",
    "choices": [
      "18 km/h",
      "20 km/h",
      "24 km/h",
      "30 km/h"
    ],
    "answer": 1,
    "explanation": "Tổng quãng đường 60 km trong 3 giờ → 60 ÷ 3 = 20 km/h."
  },
  {
    "id": "ext2-toan-002",
    "part": "toan",
    "topic": "Đổi đơn vị",
    "question": "Một vật chuyển động với tốc độ 54 km/h. Đổi sang m/s được:",
    "choices": [
      "10 m/s",
      "15 m/s",
      "18 m/s",
      "20 m/s"
    ],
    "answer": 1,
    "explanation": "54 km/h = 54 × 1000 ÷ 3600 = 15 m/s."
  },
  {
    "id": "ext2-toan-003",
    "part": "toan",
    "topic": "Tỉ lệ bản đồ",
    "question": "Bản đồ tỉ lệ 1:200000. Hai điểm cách nhau 4 cm trên bản đồ thì ngoài thực địa cách nhau:",
    "choices": [
      "4 km",
      "8 km",
      "12 km",
      "800 m"
    ],
    "answer": 1,
    "explanation": "4 cm × 200000 = 800000 cm = 8 km."
  },
  {
    "id": "ext2-toan-004",
    "part": "toan",
    "topic": "Phần trăm",
    "question": "Một số sau khi tăng 25% thì bằng 150. Số ban đầu là:",
    "choices": [
      "100",
      "110",
      "120",
      "125"
    ],
    "answer": 2,
    "explanation": "Số ban đầu × 1,25 = 150 → 150 ÷ 1,25 = 120."
  },
  {
    "id": "ext2-toan-005",
    "part": "toan",
    "topic": "Phần trăm",
    "question": "Một mặt hàng giảm giá hai lần liên tiếp, mỗi lần 10%. So với giá gốc, đã giảm tổng cộng:",
    "choices": [
      "18%",
      "19%",
      "20%",
      "21%"
    ],
    "answer": 1,
    "explanation": "Còn lại 0,9 × 0,9 = 0,81 = 81% giá gốc → giảm 19%."
  },
  {
    "id": "ext2-toan-006",
    "part": "toan",
    "topic": "Trung bình",
    "question": "Trung bình của 4 số là 25. Thêm số thứ năm thì trung bình thành 28. Số thứ năm là:",
    "choices": [
      "34",
      "37",
      "40",
      "43"
    ],
    "answer": 2,
    "explanation": "Tổng 5 số = 28×5 = 140; tổng 4 số = 25×4 = 100. Số thứ năm = 140 − 100 = 40."
  },
  {
    "id": "ext2-toan-007",
    "part": "toan",
    "topic": "Hỗn hợp",
    "question": "Trộn 3 lít nước ép giá 20.000đ/lít với 2 lít nước giá 5.000đ/lít. Giá trung bình mỗi lít hỗn hợp là:",
    "choices": [
      "12.000đ",
      "13.000đ",
      "14.000đ",
      "15.000đ"
    ],
    "answer": 2,
    "explanation": "Tổng tiền = 3×20.000 + 2×5.000 = 70.000đ cho 5 lít → 14.000đ/lít."
  },
  {
    "id": "ext2-toan-008",
    "part": "toan",
    "topic": "Xác suất",
    "question": "Một bài thi có 2 câu, xác suất làm đúng mỗi câu là 0,5 và độc lập. Xác suất đúng cả hai câu là:",
    "choices": [
      "0,25",
      "0,5",
      "0,75",
      "1"
    ],
    "answer": 0,
    "explanation": "Hai biến cố độc lập: 0,5 × 0,5 = 0,25."
  },
  {
    "id": "ext2-toan-009",
    "part": "toan",
    "topic": "Xác suất",
    "question": "Xác suất một học sinh đậu là 0,8. Xác suất KHÔNG đậu là:",
    "choices": [
      "0,1",
      "0,2",
      "0,3",
      "0,8"
    ],
    "answer": 1,
    "explanation": "Xác suất phần bù = 1 − 0,8 = 0,2."
  },
  {
    "id": "ext2-toan-010",
    "part": "toan",
    "topic": "Hình học",
    "question": "Một bể hình hộp chữ nhật dài 4 m, rộng 3 m, cao 2 m. Thể tích bể là:",
    "choices": [
      "9 m³",
      "12 m³",
      "24 m³",
      "48 m³"
    ],
    "answer": 2,
    "explanation": "Thể tích hình hộp = dài × rộng × cao = 4 × 3 × 2 = 24 m³."
  },
  {
    "id": "ext2-toan-011",
    "part": "toan",
    "topic": "Hình học",
    "question": "Tam giác vuông có hai cạnh góc vuông 6 cm và 8 cm. Cạnh huyền dài:",
    "choices": [
      "10 cm",
      "12 cm",
      "14 cm",
      "48 cm"
    ],
    "answer": 0,
    "explanation": "Theo Pythagoras: √(6² + 8²) = √(36+64) = √100 = 10 cm."
  },
  {
    "id": "ext2-toan-012",
    "part": "toan",
    "topic": "Tỉ lệ nghịch",
    "question": "12 người làm xong việc trong 8 ngày. Nếu chỉ có 8 người (cùng năng suất) thì cần:",
    "choices": [
      "10 ngày",
      "12 ngày",
      "14 ngày",
      "16 ngày"
    ],
    "answer": 1,
    "explanation": "Số ngày tỉ lệ nghịch số người: 12×8 = 96 ngày-công; 96 ÷ 8 = 12 ngày."
  },
  {
    "id": "ext2-toan-013",
    "part": "toan",
    "topic": "Cấp số nhân",
    "question": "Dãy: 2, 6, 18, 54, … Số hạng kế tiếp là:",
    "choices": [
      "108",
      "126",
      "162",
      "216"
    ],
    "answer": 2,
    "explanation": "Mỗi số gấp 3 lần số trước: 54 × 3 = 162."
  },
  {
    "id": "ext2-toan-014",
    "part": "toan",
    "topic": "Năng suất",
    "question": "Một máy in 1.200 trang trong 30 phút. Để in 2.000 trang cần khoảng:",
    "choices": [
      "40 phút",
      "45 phút",
      "50 phút",
      "60 phút"
    ],
    "answer": 2,
    "explanation": "Tốc độ 40 trang/phút (1200÷30). 2000 ÷ 40 = 50 phút."
  },
  {
    "id": "ext2-toan-015",
    "part": "toan",
    "topic": "Phân tích số liệu",
    "question": "Số sách bán 4 tuần: 80, 100, 60, 120. Trung bình mỗi tuần bán được:",
    "choices": [
      "80 cuốn",
      "90 cuốn",
      "100 cuốn",
      "110 cuốn"
    ],
    "answer": 1,
    "explanation": "(80+100+60+120) ÷ 4 = 360 ÷ 4 = 90 cuốn."
  },
  {
    "id": "ext2-toan-016",
    "part": "toan",
    "topic": "Phân tích số liệu",
    "question": "Trong biểu đồ tròn, phần A chiếm 25%, B chiếm 35%, C chiếm 15%. Phần D chiếm:",
    "choices": [
      "20%",
      "25%",
      "30%",
      "35%"
    ],
    "answer": 1,
    "explanation": "Tổng 100% → D = 100 − (25+35+15) = 25%."
  },
  {
    "id": "ext2-toan-017",
    "part": "toan",
    "topic": "Tăng trưởng",
    "question": "Doanh thu tăng từ 200 lên 250 triệu. Mức tăng trưởng là:",
    "choices": [
      "20%",
      "25%",
      "30%",
      "50%"
    ],
    "answer": 1,
    "explanation": "Mức tăng = (250 − 200)/200 = 50/200 = 25%."
  },
  {
    "id": "ext2-toan-018",
    "part": "toan",
    "topic": "Toán đố",
    "question": "Hiện nay mẹ 36 tuổi, con 12 tuổi. Sau bao nhiêu năm nữa tuổi mẹ gấp đôi tuổi con?",
    "choices": [
      "8 năm",
      "10 năm",
      "12 năm",
      "14 năm"
    ],
    "answer": 2,
    "explanation": "Sau x năm: 36+x = 2(12+x) → 36+x = 24+2x → x = 12 năm."
  },
  {
    "id": "ext2-toan-019",
    "part": "toan",
    "topic": "Thống kê",
    "question": "Trung vị của dãy số 3, 7, 9, 12, 20 là:",
    "choices": [
      "7",
      "9",
      "11",
      "12"
    ],
    "answer": 1,
    "explanation": "Dãy đã sắp xếp, số đứng giữa (vị trí thứ 3) là 9."
  },
  {
    "id": "ext2-toan-020",
    "part": "toan",
    "topic": "Thống kê",
    "question": "Mốt của dãy 4, 5, 5, 6, 7, 5, 8 là:",
    "choices": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": 1,
    "explanation": "Mốt là giá trị xuất hiện nhiều nhất: số 5 xuất hiện 3 lần."
  },
  {
    "id": "ext2-toan-021",
    "part": "toan",
    "topic": "Thống kê",
    "question": "Khoảng biến thiên của dãy 12, 7, 20, 15, 9 là:",
    "choices": [
      "11",
      "13",
      "15",
      "20"
    ],
    "answer": 1,
    "explanation": "Khoảng biến thiên = lớn nhất − nhỏ nhất = 20 − 7 = 13."
  },
  {
    "id": "ext2-toan-022",
    "part": "toan",
    "topic": "Phần trăm",
    "question": "Mua một món hàng giá 500.000đ, bán lại 600.000đ. Phần trăm lãi so với giá mua là:",
    "choices": [
      "10%",
      "15%",
      "20%",
      "25%"
    ],
    "answer": 2,
    "explanation": "Lãi = 100.000đ trên vốn 500.000đ → 100/500 = 20%."
  },
  {
    "id": "ext2-toan-023",
    "part": "toan",
    "topic": "Tỉ lệ",
    "question": "Chia 540.000đ cho ba người theo tỉ lệ 2 : 3 : 4. Người theo phần 4 nhận:",
    "choices": [
      "120.000đ",
      "180.000đ",
      "200.000đ",
      "240.000đ"
    ],
    "answer": 3,
    "explanation": "Tổng phần = 9; mỗi phần = 540.000 ÷ 9 = 60.000. Người phần 4 nhận 4 × 60.000 = 240.000đ."
  },
  {
    "id": "ext2-toan-024",
    "part": "toan",
    "topic": "Phần trăm",
    "question": "Một bồn chứa đã đầy 40%, cần thêm 900 lít nữa thì đầy. Dung tích bồn là:",
    "choices": [
      "1.200 lít",
      "1.500 lít",
      "1.800 lít",
      "2.250 lít"
    ],
    "answer": 1,
    "explanation": "Phần còn thiếu là 60% = 900 lít → 100% = 900 ÷ 0,6 = 1.500 lít."
  },
  {
    "id": "ext2-toan-025",
    "part": "toan",
    "topic": "Trung bình trọng số",
    "question": "Môn A hệ số 2 được 8 điểm, môn B hệ số 3 được 6 điểm. Điểm trung bình là:",
    "choices": [
      "6,4",
      "6,8",
      "7,0",
      "7,2"
    ],
    "answer": 1,
    "explanation": "(8×2 + 6×3) ÷ (2+3) = (16+18) ÷ 5 = 34/5 = 6,8."
  },
  {
    "id": "ext2-toan-026",
    "part": "toan",
    "topic": "Xác suất",
    "question": "Một hộp có 12 thẻ đánh số 1–12. Rút ngẫu nhiên 1 thẻ. Xác suất rút được số nguyên tố là:",
    "choices": [
      "1/3",
      "5/12",
      "1/2",
      "7/12"
    ],
    "answer": 1,
    "explanation": "Số nguyên tố trong 1–12: 2,3,5,7,11 → 5 số. Xác suất = 5/12."
  },
  {
    "id": "ext2-toan-027",
    "part": "toan",
    "topic": "Chuyển động",
    "question": "Hai xe cùng chiều cách nhau 20 km. Xe sau 60 km/h đuổi xe trước 40 km/h. Thời gian đuổi kịp là:",
    "choices": [
      "0,5 giờ",
      "1 giờ",
      "1,5 giờ",
      "2 giờ"
    ],
    "answer": 1,
    "explanation": "Hiệu tốc độ = 20 km/h; thời gian = 20 ÷ 20 = 1 giờ."
  },
  {
    "id": "ext2-toan-028",
    "part": "toan",
    "topic": "Phần trăm",
    "question": "Lớp có 45 học sinh, trong đó 40% là học sinh giỏi. Số học sinh giỏi là:",
    "choices": [
      "15",
      "18",
      "20",
      "22"
    ],
    "answer": 1,
    "explanation": "40% × 45 = 0,4 × 45 = 18 học sinh."
  },
  {
    "id": "ext2-toan-029",
    "part": "toan",
    "topic": "Hình học",
    "question": "Hình vuông có chu vi 36 cm. Diện tích hình vuông là:",
    "choices": [
      "49 cm²",
      "64 cm²",
      "81 cm²",
      "100 cm²"
    ],
    "answer": 2,
    "explanation": "Cạnh = 36 ÷ 4 = 9 cm. Diện tích = 9² = 81 cm²."
  },
  {
    "id": "ext2-toan-030",
    "part": "toan",
    "topic": "Tỉ lệ nghịch",
    "question": "2 máy bơm đầy bể trong 3 giờ. Hỏi 3 máy bơm (cùng công suất) đầy bể trong bao lâu?",
    "choices": [
      "1,5 giờ",
      "2 giờ",
      "2,5 giờ",
      "4 giờ"
    ],
    "answer": 1,
    "explanation": "Số giờ tỉ lệ nghịch số máy: 2×3 = 6 (máy-giờ); 6 ÷ 3 = 2 giờ."
  },
  {
    "id": "ext2-tk-001",
    "part": "tukhoahoc",
    "topic": "Suy luận logic",
    "question": "Tất cả số chia hết cho 4 đều chia hết cho 2. Số 12 chia hết cho 4. Vậy:",
    "choices": [
      "12 không chia hết cho 2",
      "12 chia hết cho 2",
      "Mọi số chia hết cho 2 đều chia hết cho 4",
      "Không kết luận được"
    ],
    "answer": 1,
    "explanation": "Tam đoạn luận: chia hết cho 4 → chia hết cho 2; 12 chia hết cho 4 → 12 chia hết cho 2."
  },
  {
    "id": "ext2-tk-002",
    "part": "tukhoahoc",
    "topic": "Suy luận logic",
    "question": "“Nếu trời nắng thì sân khô.” Hôm nay sân KHÔNG khô. Suy ra:",
    "choices": [
      "Trời nắng",
      "Trời không nắng",
      "Sân sắp khô",
      "Không suy ra được"
    ],
    "answer": 1,
    "explanation": "Phản đảo (modus tollens): nắng → sân khô; sân không khô nên trời không nắng."
  },
  {
    "id": "ext2-tk-003",
    "part": "tukhoahoc",
    "topic": "Suy luận logic",
    "question": "“Nếu chăm tập thì khỏe.” Bạn Nam chăm tập. Kết luận chắc chắn đúng:",
    "choices": [
      "Nam không khỏe",
      "Nam khỏe",
      "Ai khỏe cũng chăm tập",
      "Nam lười"
    ],
    "answer": 1,
    "explanation": "Modus ponens: chăm tập → khỏe; Nam chăm tập → Nam khỏe."
  },
  {
    "id": "ext2-tk-004",
    "part": "tukhoahoc",
    "topic": "Suy luận logic",
    "question": "Bốn bạn xếp hàng. Hùng đứng trước Bình. Bình đứng trước Cường. An đứng cuối cùng. Ai đứng đầu hàng?",
    "choices": [
      "An",
      "Bình",
      "Cường",
      "Hùng"
    ],
    "answer": 3,
    "explanation": "Thứ tự Hùng–Bình–Cường, An cuối → đầu hàng là Hùng."
  },
  {
    "id": "ext2-tk-005",
    "part": "tukhoahoc",
    "topic": "Quy luật dãy số",
    "question": "Tìm số tiếp theo: 1, 3, 7, 15, 31, ___",
    "choices": [
      "47",
      "55",
      "63",
      "75"
    ],
    "answer": 2,
    "explanation": "Mỗi số = số trước ×2 +1: 31×2+1 = 63."
  },
  {
    "id": "ext2-tk-006",
    "part": "tukhoahoc",
    "topic": "Quy luật dãy số",
    "question": "Tìm số tiếp theo: 4, 9, 16, 25, 36, ___",
    "choices": [
      "42",
      "45",
      "49",
      "64"
    ],
    "answer": 2,
    "explanation": "Các số chính phương 2²,3²,4²,5²,6² → tiếp theo 7² = 49."
  },
  {
    "id": "ext2-tk-007",
    "part": "tukhoahoc",
    "topic": "Quy luật dãy số",
    "question": "Tìm số tiếp theo: 2, 6, 18, 54, ___",
    "choices": [
      "108",
      "126",
      "162",
      "216"
    ],
    "answer": 2,
    "explanation": "Mỗi số gấp 3 lần: 54×3 = 162."
  },
  {
    "id": "ext2-tk-008",
    "part": "tukhoahoc",
    "topic": "Quy luật dãy số",
    "question": "Tìm số tiếp theo: 1, 2, 4, 7, 11, 16, ___",
    "choices": [
      "20",
      "21",
      "22",
      "23"
    ],
    "answer": 2,
    "explanation": "Hiệu tăng dần 1,2,3,4,5,…: 16 + 6 = 22."
  },
  {
    "id": "ext2-tk-009",
    "part": "tukhoahoc",
    "topic": "Quy luật dãy số",
    "question": "Tìm số tiếp theo: 81, 27, 9, 3, ___",
    "choices": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": 1,
    "explanation": "Mỗi số chia 3: 3 ÷ 3 = 1."
  },
  {
    "id": "ext2-tk-010",
    "part": "tukhoahoc",
    "topic": "Tương tự (analogy)",
    "question": "“Chim : Tổ” thì “Người : ?”. Cặp tương ứng nhất là:",
    "choices": [
      "Cây",
      "Nhà",
      "Trời",
      "Sông"
    ],
    "answer": 1,
    "explanation": "Chim sống ở tổ như người sống trong nhà → quan hệ nơi ở."
  },
  {
    "id": "ext2-tk-011",
    "part": "tukhoahoc",
    "topic": "Loại trừ",
    "question": "Từ nào khác nhóm: Tam giác, Hình vuông, Hình tròn, Hình chữ nhật?",
    "choices": [
      "Tam giác",
      "Hình vuông",
      "Hình tròn",
      "Hình chữ nhật"
    ],
    "answer": 2,
    "explanation": "Tam giác, hình vuông, hình chữ nhật đều có cạnh thẳng (đa giác); hình tròn không có cạnh → khác nhóm."
  },
  {
    "id": "ext2-tk-012",
    "part": "tukhoahoc",
    "topic": "Phân tích số liệu",
    "question": "Bảng điểm 5 bạn: 6, 8, 5, 9, 7. Có bao nhiêu bạn đạt từ 7 điểm trở lên?",
    "choices": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 1,
    "explanation": "Các điểm ≥ 7 là 8, 9, 7 → 3 bạn."
  },
  {
    "id": "ext2-tk-013",
    "part": "tukhoahoc",
    "topic": "Phân tích số liệu",
    "question": "Một cửa hàng bán: bút 40%, vở 35%, khác 25%. Nếu tổng 200 sản phẩm, số vở bán được là:",
    "choices": [
      "50",
      "60",
      "70",
      "80"
    ],
    "answer": 2,
    "explanation": "35% × 200 = 0,35 × 200 = 70 sản phẩm."
  },
  {
    "id": "ext2-tk-014",
    "part": "tukhoahoc",
    "topic": "Phân tích số liệu",
    "question": "Lượng mưa 4 tháng (mm): 50, 80, 120, 90. Tháng có lượng mưa cao nhất hơn tháng thấp nhất bao nhiêu?",
    "choices": [
      "40 mm",
      "60 mm",
      "70 mm",
      "120 mm"
    ],
    "answer": 2,
    "explanation": "Cao nhất 120, thấp nhất 50 → chênh 70 mm."
  },
  {
    "id": "ext2-tk-015",
    "part": "tukhoahoc",
    "topic": "Phân tích số liệu",
    "question": "Số liệu bán hàng tăng: tháng 1=10, tháng 2=14, tháng 3=22. Nhận định ĐÚNG:",
    "choices": [
      "Mỗi tháng tăng đều 4 đơn vị",
      "Mức tăng tháng sau lớn hơn tháng trước",
      "Doanh số giảm dần",
      "Tháng 3 thấp nhất"
    ],
    "answer": 1,
    "explanation": "Tăng từ T1→T2 là 4, T2→T3 là 8 → mức tăng tháng sau lớn hơn."
  },
  {
    "id": "ext2-tk-016",
    "part": "tukhoahoc",
    "topic": "Suy luận khoa học",
    "question": "Thí nghiệm so sánh cây tưới nước muối và cây tưới nước thường, các yếu tố khác như nhau. Biến độc lập là:",
    "choices": [
      "Chiều cao cây",
      "Loại nước tưới",
      "Số lá cây",
      "Màu lá"
    ],
    "answer": 1,
    "explanation": "Yếu tố được chủ động thay đổi (loại nước tưới) là biến độc lập."
  },
  {
    "id": "ext2-tk-017",
    "part": "tukhoahoc",
    "topic": "Suy luận khoa học",
    "question": "Trong thí nghiệm trên, cây tưới nước thường đóng vai trò:",
    "choices": [
      "Nhóm đối chứng",
      "Biến độc lập",
      "Giả thuyết",
      "Biến gây nhiễu"
    ],
    "answer": 0,
    "explanation": "Nhóm không chịu tác động đặc biệt, dùng để so sánh → nhóm đối chứng."
  },
  {
    "id": "ext2-tk-018",
    "part": "tukhoahoc",
    "topic": "Suy luận khoa học",
    "question": "Quan sát: học sinh ngủ đủ giấc thường điểm cao hơn. Kết luận THẬN TRỌNG nhất là:",
    "choices": [
      "Ngủ nhiều chắc chắn gây điểm cao",
      "Có mối liên hệ giữa giấc ngủ và điểm số, cần nghiên cứu thêm",
      "Điểm cao khiến học sinh ngủ nhiều",
      "Giấc ngủ không liên quan điểm số"
    ],
    "answer": 1,
    "explanation": "Tương quan chưa khẳng định nhân quả; kết luận thận trọng là ghi nhận mối liên hệ và cần nghiên cứu thêm."
  },
  {
    "id": "ext2-tk-019",
    "part": "tukhoahoc",
    "topic": "Suy luận khoa học",
    "question": "Để kiểm tra một loại phân bón có tăng năng suất không, cách làm đáng tin cậy nhất là:",
    "choices": [
      "Hỏi vài nông dân từng dùng",
      "So sánh ruộng có bón và ruộng không bón trong cùng điều kiện",
      "Đọc quảng cáo của nhà sản xuất",
      "Chỉ theo dõi ruộng có bón"
    ],
    "answer": 1,
    "explanation": "Cần nhóm đối chứng và điều kiện như nhau để loại trừ yếu tố nhiễu."
  },
  {
    "id": "ext2-tk-020",
    "part": "tukhoahoc",
    "topic": "Suy luận khoa học",
    "question": "Một quảng cáo nói '8/10 nha sĩ khuyên dùng'. Câu hỏi quan trọng nhất để đánh giá là:",
    "choices": [
      "Quảng cáo dài bao nhiêu",
      "Hỏi bao nhiêu nha sĩ và chọn thế nào",
      "Màu sắc bao bì",
      "Giá sản phẩm"
    ],
    "answer": 1,
    "explanation": "Cỡ mẫu và cách chọn mẫu quyết định độ tin cậy của tỉ lệ '8/10'."
  },
  {
    "id": "ext2-tk-021",
    "part": "tukhoahoc",
    "topic": "Suy luận khoa học",
    "question": "Một thí nghiệm muốn biết ánh sáng ảnh hưởng cây thế nào, nhưng đặt cây sáng ở nơi ấm, cây tối ở nơi lạnh. Lỗi ở đây là:",
    "choices": [
      "Không có giả thuyết",
      "Có biến gây nhiễu (nhiệt độ)",
      "Quá nhiều cây",
      "Thiếu số liệu"
    ],
    "answer": 1,
    "explanation": "Nhiệt độ thay đổi cùng ánh sáng nên không tách được ảnh hưởng — đây là biến gây nhiễu."
  },
  {
    "id": "ext2-tk-022",
    "part": "tukhoahoc",
    "topic": "Suy luận logic",
    "question": "Phát biểu: 'Mọi loài cá đều bơi được.' Phủ định đúng là:",
    "choices": [
      "Mọi loài cá đều không bơi được",
      "Có ít nhất một loài cá không bơi được",
      "Một số loài cá bơi được",
      "Cá không phải động vật"
    ],
    "answer": 1,
    "explanation": "Phủ định của 'mọi… đều' là 'tồn tại ít nhất một… không'."
  },
  {
    "id": "ext2-tk-023",
    "part": "tukhoahoc",
    "topic": "Suy luận logic",
    "question": "Điều kiện cần và đủ: 'Một số chia hết cho 10 khi và chỉ khi tận cùng bằng 0.' Số 250:",
    "choices": [
      "Không chia hết cho 10",
      "Chia hết cho 10",
      "Chỉ chia hết cho 5",
      "Không xác định"
    ],
    "answer": 1,
    "explanation": "250 tận cùng bằng 0 nên chia hết cho 10 (điều kiện cần và đủ thỏa)."
  },
  {
    "id": "ext2-tk-024",
    "part": "tukhoahoc",
    "topic": "Giải quyết vấn đề",
    "question": "Một lớp 40 học sinh đi tham quan, mỗi xe chở tối đa 12 người. Cần ít nhất bao nhiêu xe?",
    "choices": [
      "3 xe",
      "4 xe",
      "5 xe",
      "6 xe"
    ],
    "answer": 1,
    "explanation": "40 ÷ 12 = 3 dư 4 → cần 4 xe (xe thứ tư chở 4 người)."
  },
  {
    "id": "ext2-tk-025",
    "part": "tukhoahoc",
    "topic": "Giải quyết vấn đề",
    "question": "Một công nhân lắp 5 sản phẩm/giờ. Để lắp 90 sản phẩm cần số giờ là:",
    "choices": [
      "15 giờ",
      "16 giờ",
      "18 giờ",
      "20 giờ"
    ],
    "answer": 2,
    "explanation": "90 ÷ 5 = 18 giờ."
  },
  {
    "id": "ext2-tk-026",
    "part": "tukhoahoc",
    "topic": "Giải quyết vấn đề",
    "question": "Vé người lớn 80.000đ, trẻ em bằng nửa. Một gia đình 2 người lớn, 3 trẻ em mua vé hết:",
    "choices": [
      "240.000đ",
      "280.000đ",
      "320.000đ",
      "360.000đ"
    ],
    "answer": 1,
    "explanation": "Trẻ em 40.000đ. Tổng = 2×80.000 + 3×40.000 = 160.000 + 120.000 = 280.000đ."
  },
  {
    "id": "ext2-tk-027",
    "part": "tukhoahoc",
    "topic": "Suy luận tập hợp",
    "question": "Lớp có 30 bạn: 18 bạn thích Toán, 15 bạn thích Lý, 8 bạn thích cả hai. Số bạn thích ít nhất một môn là:",
    "choices": [
      "23",
      "25",
      "26",
      "33"
    ],
    "answer": 1,
    "explanation": "Theo công thức: 18 + 15 − 8 = 25 bạn thích ít nhất một môn."
  },
  {
    "id": "ext2-tk-028",
    "part": "tukhoahoc",
    "topic": "Suy luận khoa học",
    "question": "Giả thuyết: 'Uống cà phê giúp tỉnh táo.' Bằng chứng ỦNG HỘ là:",
    "choices": [
      "Nhiều người thích cà phê",
      "Nhóm uống cà phê làm bài kiểm tra tỉnh táo tốt hơn nhóm không uống, cùng điều kiện",
      "Cà phê có màu nâu",
      "Cà phê đắt tiền"
    ],
    "answer": 1,
    "explanation": "Bằng chứng ủng hộ phải so sánh trực tiếp nhóm uống và không uống về mức độ tỉnh táo."
  },
  {
    "id": "ext2-tk-029",
    "part": "tukhoahoc",
    "topic": "Quy luật",
    "question": "Quy luật chữ cái: A, C, E, G, … Chữ tiếp theo là:",
    "choices": [
      "H",
      "I",
      "J",
      "K"
    ],
    "answer": 1,
    "explanation": "Bỏ cách 1 chữ (A,_,C,_,E,_,G,_,I) → chữ tiếp theo là I."
  }
]
);
