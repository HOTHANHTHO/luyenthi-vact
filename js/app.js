/* =====================================================================
 * Luyện thi V-ACT — logic ứng dụng (vanilla JS, không cần build)
 * ===================================================================== */
(function () {
  "use strict";

  // --- Định nghĩa 4 phần đề + tỉ lệ câu trong đề thi thật (để mô phỏng) ---
  var PARTS = [
    { key: "ngonngu_tv", name: "Tiếng Việt",      group: "Sử dụng ngôn ngữ", real: 30 },
    { key: "ngonngu_ta", name: "Tiếng Anh",       group: "Sử dụng ngôn ngữ", real: 30 },
    { key: "toan",       name: "Toán học",        group: "Toán học",         real: 30 },
    { key: "tukhoahoc",  name: "Tư duy khoa học", group: "Tư duy khoa học",  real: 30 }
  ];
  var REAL_TOTAL = 120;
  var REAL_MINUTES = 150;
  var SEC_PER_Q = (REAL_MINUTES * 60) / REAL_TOTAL; // 75 giây/câu (chuẩn V-ACT)
  var STORE_KEY = "vact_progress_v1";

  var BANK = (window.QUESTION_BANK || []).slice();

  // --- Trạng thái phiên làm bài hiện tại ---
  var S = null; // {mode, questions[], answers[], index, locked[], timerEnd, timerId, durationSec}

  /* ---------------- Tiện ích ---------------- */
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function partOf(key) { for (var i = 0; i < PARTS.length; i++) if (PARTS[i].key === key) return PARTS[i]; return { name: key, group: key }; }
  function fmtTime(s) { if (s < 0) s = 0; var m = Math.floor(s / 60), ss = s % 60; return (m < 10 ? "0" : "") + m + ":" + (ss < 10 ? "0" : "") + ss; }
  function availCount(partKey) { return BANK.filter(function (q) { return q.part === partKey; }).length; }
  // Tính phương án đề thi thử theo số phút chọn: số câu = phút*60 / 75; chia đều 4 phần (cấu trúc V-ACT 30/30/30/30)
  function computeMockPlan(minutes) {
    var n = Math.round(minutes * 60 / SEC_PER_Q);
    var per = {}, base = Math.floor(n / 4), rem = n - base * 4;
    PARTS.forEach(function (p) { per[p.key] = base; });
    for (var i = 0; i < rem; i++) per[PARTS[i].key]++;
    return { n: n, per: per, durSec: minutes * 60 };
  }
  // Cập nhật gợi ý số câu tối đa cho phần luyện theo chủ đề
  function updateTopicMax() {
    var sel = $("topic-part"); if (!sel) return;
    var n = availCount(sel.value), hint = $("topic-max"), inp = $("topic-count");
    if (hint) hint.textContent = "(tối đa " + n + " câu)";
    if (inp) inp.setAttribute("max", n);
  }
  // Cập nhật thông tin số câu + tỉ lệ phần cho màn thi thử
  function updateMockInfo() {
    var mEl = $("mock-minutes"); if (!mEl) return;
    var plan = computeMockPlan(parseInt(mEl.value, 10));
    var parts = PARTS.map(function (p) { return { name: p.name, take: Math.min(plan.per[p.key], availCount(p.key)) }; });
    var realN = parts.reduce(function (s, x) { return s + x.take; }, 0);
    $("mock-info").innerHTML = "Đề gồm khoảng <b>" + realN + " câu</b> (" + Math.round(SEC_PER_Q) +
      " giây/câu), chia đều 4 phần — " + parts.map(function (x) { return x.name + ": " + x.take; }).join("; ") + ".";
  }

  // Render công thức LaTeX ($...$) bằng KaTeX nếu đã tải (chạy được khi có mạng/đã cache)
  function renderMath(el) {
    if (el && window.renderMathInElement) {
      try {
        renderMathInElement(el, {
          delimiters: [{ left: "$", right: "$", display: false }],
          throwOnError: false,
          ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code", "option"]
        });
      } catch (e) {}
    }
  }

  function showScreen(id) {
    ["home", "topic", "mock", "quiz", "result", "progress", "about"].forEach(function (s) {
      $("screen-" + s).classList.add("hidden");
    });
    $("screen-" + id).classList.remove("hidden");
    window.scrollTo(0, 0);
  }

  /* ---------------- Lưu trữ tiến độ ---------------- */
  function loadStore() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || defaultStore(); }
    catch (e) { return defaultStore(); }
  }
  function defaultStore() {
    var byPart = {};
    PARTS.forEach(function (p) { byPart[p.key] = { seen: 0, correct: 0 }; });
    return { byPart: byPart, history: [], totalAnswered: 0, totalCorrect: 0 };
  }
  function saveStore(st) { try { localStorage.setItem(STORE_KEY, JSON.stringify(st)); } catch (e) {} }

  function recordAnswer(partKey, isCorrect) {
    var st = loadStore();
    if (!st.byPart[partKey]) st.byPart[partKey] = { seen: 0, correct: 0 };
    st.byPart[partKey].seen++;
    st.totalAnswered++;
    if (isCorrect) { st.byPart[partKey].correct++; st.totalCorrect++; }
    saveStore(st);
  }
  function recordMock(scoreInfo) {
    var st = loadStore();
    st.history.unshift(scoreInfo);
    if (st.history.length > 30) st.history.length = 30;
    saveStore(st);
  }

  /* ---------------- Khởi tạo trang chủ ---------------- */
  function initHome() {
    $("about-count").textContent = BANK.length;
    // Gợi ý cài đặt theo thiết bị
    var tip = $("install-tip");
    var ua = navigator.userAgent || "";
    var isiOS = /iPhone|iPad|iPod/.test(ua);
    if (isiOS) tip.textContent = "Mẹo cài ra màn hình chính iPhone/iPad: bấm nút Chia sẻ ⬆ trong Safari → “Thêm vào MH chính”.";
    else tip.textContent = "Mẹo trên PC: mở bằng Chrome/Edge, bấm biểu tượng Cài đặt ⊕ trên thanh địa chỉ để dùng như một ứng dụng.";

    var sel = $("topic-part");
    sel.innerHTML = "";
    PARTS.forEach(function (p) {
      var n = BANK.filter(function (q) { return q.part === p.key; }).length;
      var o = el("option"); o.value = p.key; o.textContent = p.name + " (" + n + " câu)";
      if (n === 0) o.disabled = true;
      sel.appendChild(o);
    });
    sel.onchange = updateTopicMax;
    updateTopicMax();
    var mm = $("mock-minutes"); if (mm) { mm.onchange = updateMockInfo; }
  }

  /* ---------------- Bắt đầu phiên ---------------- */
  function beginSession(questions, mode, durationSec) {
    S = {
      mode: mode, questions: questions,
      answers: new Array(questions.length).fill(null),
      locked: new Array(questions.length).fill(false),
      order: questions.map(function (q) { return shuffle(q.choices.map(function (_, i) { return i; })); }),
      index: 0, durationSec: durationSec || 0, timerId: null, timerEnd: 0
    };
    $("quiz-mode-pill").textContent = mode === "mock" ? "Thi thử" : "Luyện tập";
    var timerEl = $("quiz-timer"), navmap = $("quiz-navmap");
    if (mode === "mock") {
      timerEl.classList.remove("hidden"); navmap.classList.remove("hidden");
      startTimer(durationSec); buildNavMap();
    } else {
      timerEl.classList.add("hidden"); navmap.classList.add("hidden");
    }
    showScreen("quiz");
    renderQ();
  }

  function startTimer(sec) {
    S.timerEnd = Date.now() + sec * 1000;
    if (S.timerId) clearInterval(S.timerId);
    tick();
    S.timerId = setInterval(tick, 1000);
  }
  function tick() {
    var remain = Math.round((S.timerEnd - Date.now()) / 1000);
    var t = $("quiz-timer");
    t.textContent = fmtTime(remain);
    t.classList.toggle("warn", remain <= 300 && remain > 60);
    t.classList.toggle("danger", remain <= 60);
    if (remain <= 0) { clearInterval(S.timerId); submitMock(true); }
  }

  /* ---------------- Hiển thị câu hỏi ---------------- */
  function renderQ() {
    var q = S.questions[S.index];
    var p = partOf(q.part);
    $("quiz-meta").innerHTML = "Câu " + (S.index + 1) + "/" + S.questions.length +
      " · <b>" + p.name + "</b>" + (q.topic ? " · " + q.topic : "");
    $("quiz-question").textContent = q.question;
    $("quiz-progress").style.width = ((S.index + 1) / S.questions.length * 100) + "%";

    var box = $("quiz-choices"); box.innerHTML = "";
    var keys = ["A", "B", "C", "D", "E", "F"];
    var locked = S.locked[S.index];
    var order = S.order[S.index];      // thứ tự hiển thị (đã đảo) của các phương án
    var chosen = S.answers[S.index];   // CHỈ SỐ GỐC của phương án đã chọn
    order.forEach(function (origIdx, pos) {
      var c = el("div", "choice");
      c.appendChild(el("span", "key", keys[pos]));
      c.appendChild(el("span", null, q.choices[origIdx]));
      if (chosen === origIdx) c.classList.add("selected");
      if (locked) {
        c.classList.add("locked");
        if (origIdx === q.answer) c.classList.add("correct");
        else if (chosen === origIdx) c.classList.add("wrong");
      } else {
        c.onclick = (function (oi) { return function () { chooseAnswer(oi); }; })(origIdx);
      }
      box.appendChild(c);
    });

    // Giải thích (chế độ luyện tập: hiện sau khi chọn) — chữ cái theo vị trí hiển thị đã đảo
    var ex = $("quiz-explain");
    if (S.mode === "practice" && locked) {
      var correctTxt = "<b>Đáp án đúng: " + keys[order.indexOf(q.answer)] + ".</b> ";
      ex.innerHTML = correctTxt + (q.explanation || "");
      ex.classList.add("show");
    } else { ex.classList.remove("show"); ex.innerHTML = ""; }

    // Nút điều hướng
    $("btn-prev").disabled = S.index === 0;
    var isLast = S.index === S.questions.length - 1;
    $("btn-next").textContent = isLast ? (S.mode === "mock" ? "Tới bảng nộp bài →" : "Xem kết quả →") : "Câu sau →";
    if (S.mode === "mock") updateNavMap();
    renderMath($("quiz-question")); renderMath($("quiz-choices")); renderMath($("quiz-explain"));
  }

  function chooseAnswer(i) {
    if (S.locked[S.index]) return;
    S.answers[S.index] = i;
    if (S.mode === "practice") {
      // Khóa câu, chấm ngay, ghi tiến độ
      S.locked[S.index] = true;
      var q = S.questions[S.index];
      recordAnswer(q.part, i === q.answer);
    }
    renderQ();
  }

  function nextQ() {
    if (S.index < S.questions.length - 1) { S.index++; renderQ(); }
    else { if (S.mode === "mock") { $("quiz-navmap").scrollIntoView({ behavior: "smooth" }); } else finishPractice(); }
  }
  function prevQ() { if (S.index > 0) { S.index--; renderQ(); } }

  /* ---------------- Bảng câu hỏi (chế độ thi thử) ---------------- */
  function buildNavMap() {
    var g = $("nav-grid"); g.innerHTML = "";
    S.questions.forEach(function (q, i) {
      var cell = el("div", "nav-cell", String(i + 1));
      cell.onclick = function () { S.index = i; renderQ(); window.scrollTo(0, 0); };
      g.appendChild(cell);
    });
  }
  function updateNavMap() {
    var cells = $("nav-grid").children;
    for (var i = 0; i < cells.length; i++) {
      cells[i].classList.toggle("done", S.answers[i] != null);
      cells[i].classList.toggle("current", i === S.index);
    }
  }

  /* ---------------- Kết thúc & chấm điểm ---------------- */
  function finishPractice() {
    // Chế độ luyện: điểm = số đúng / tổng
    var correct = 0;
    S.questions.forEach(function (q, i) { if (S.answers[i] === q.answer) correct++; });
    showResult({
      mode: "practice", total: S.questions.length, correct: correct,
      score: Math.round(correct / S.questions.length * 100),
      scoreLabel: "%", breakdown: breakdownByPart()
    });
  }

  function submitMock(auto) {
    if (!auto) {
      var unanswered = S.answers.filter(function (a) { return a == null; }).length;
      if (unanswered > 0 && !confirm("Còn " + unanswered + " câu chưa trả lời. Nộp bài luôn?")) return;
    }
    if (S.timerId) clearInterval(S.timerId);
    var correct = 0;
    S.questions.forEach(function (q, i) {
      var ok = S.answers[i] === q.answer;
      if (ok) correct++;
      recordAnswer(q.part, ok); // ghi vào tiến độ tổng
    });
    var score = Math.round(correct / S.questions.length * 100);
    var info = {
      mode: "mock", total: S.questions.length, correct: correct,
      score: score, scoreLabel: "%", breakdown: breakdownByPart(),
      date: new Date().toISOString()
    };
    recordMock({ date: info.date, total: info.total, correct: correct, score: score });
    showResult(info);
  }

  function breakdownByPart() {
    var map = {};
    S.questions.forEach(function (q, i) {
      if (!map[q.part]) map[q.part] = { total: 0, correct: 0 };
      map[q.part].total++;
      if (S.answers[i] === q.answer) map[q.part].correct++;
    });
    return map;
  }

  function showResult(info) {
    $("res-score").textContent = info.score;
    var pass = info.score >= 50;
    $("res-title").textContent = info.mode === "mock" ? "Đã nộp bài thi thử" : "Hoàn thành buổi luyện";
    $("res-sub").textContent = "Đúng " + info.correct + "/" + info.total + " câu" +
      (info.mode === "mock" ? " · đề mô phỏng V-ACT" : "");
    var circle = document.querySelector(".result-circle");
    circle.style.borderColor = pass ? "var(--green)" : "var(--amber)";
    circle.style.color = pass ? "var(--green)" : "var(--amber)";

    var bd = $("res-breakdown"); bd.innerHTML = "";
    Object.keys(info.breakdown).forEach(function (k) {
      var b = info.breakdown[k];
      var pct = Math.round(b.correct / b.total * 100);
      var row = el("div", "stat");
      row.innerHTML = "<span>" + partOf(k).name + "</span><b>" + b.correct + "/" + b.total + " · " + pct + "%</b>";
      bd.appendChild(row);
    });
    S._review = true;
    showScreen("result");
  }

  function reviewAnswers() {
    // Quay lại xem từng câu kèm đáp án đúng (khóa hết)
    if (!S) return;
    S.locked = S.locked.map(function () { return true; });
    S.mode = "practice"; // để hiện giải thích
    S.index = 0;
    $("quiz-mode-pill").textContent = "Xem lại";
    $("quiz-timer").classList.add("hidden");
    $("quiz-navmap").classList.add("hidden");
    showScreen("quiz");
    renderQ();
  }

  /* ---------------- Trang tiến độ ---------------- */
  function renderProgress() {
    var st = loadStore();
    var ov = $("prog-overview"); ov.innerHTML = "";
    var acc = st.totalAnswered ? Math.round(st.totalCorrect / st.totalAnswered * 100) : 0;
    ov.appendChild(rowStat("Tổng số câu đã làm", st.totalAnswered));
    ov.appendChild(rowStat("Số câu đúng", st.totalCorrect));
    ov.appendChild(rowStat("Độ chính xác chung", acc + "%"));
    ov.appendChild(rowStat("Số lần thi thử", st.history.length));

    var bp = $("prog-byparts"); bp.innerHTML = "";
    var weakest = null;
    PARTS.forEach(function (p) {
      var d = st.byPart[p.key] || { seen: 0, correct: 0 };
      var pct = d.seen ? Math.round(d.correct / d.seen * 100) : null;
      var row = el("div", "stat");
      row.innerHTML = "<span>" + p.name + "</span><b>" + (d.seen ? (d.correct + "/" + d.seen + " · " + pct + "%") : "chưa làm") + "</b>";
      bp.appendChild(row);
      if (d.seen >= 3 && (weakest === null || pct < weakest.pct)) weakest = { name: p.name, pct: pct };
    });
    if (weakest) {
      var tip = el("div", "stat");
      tip.innerHTML = "<span class='muted'>💡 Nên ôn thêm</span><b style='color:var(--amber)'>" + weakest.name + " (" + weakest.pct + "%)</b>";
      bp.appendChild(tip);
    }

    var h = $("prog-history"); h.innerHTML = "";
    if (!st.history.length) {
      h.innerHTML = "<p class='muted' style='margin:0'>Chưa có lần thi thử nào.</p>";
    } else {
      // So sánh lần thi gần nhất với lần trước đó
      if (st.history.length >= 2) {
        var dlt = st.history[0].score - st.history[1].score;
        var col = dlt > 0 ? "var(--green)" : (dlt < 0 ? "var(--red)" : "var(--muted)");
        var word = dlt > 0 ? "▲ Tiến bộ +" + dlt + " điểm %" : (dlt < 0 ? "▼ Giảm " + dlt + " điểm %" : "• Không đổi");
        var sumRow = el("div", "stat");
        sumRow.innerHTML = "<span>Lần gần nhất so với lần trước</span><b style='color:" + col + "'>" + word + "</b>";
        h.appendChild(sumRow);
      }
      st.history.forEach(function (r, idx) {
        var d = new Date(r.date), older = st.history[idx + 1], deltaHtml = "";
        if (older) {
          var dd = r.score - older.score, c = dd > 0 ? "var(--green)" : (dd < 0 ? "var(--red)" : "var(--muted)");
          var ar = dd > 0 ? "▲+" + dd : (dd < 0 ? "▼" + dd : "•0");
          deltaHtml = " <span style='color:" + c + ";font-size:12px'>" + ar + "</span>";
        }
        var row = el("div", "stat");
        row.innerHTML = "<span>" + d.toLocaleDateString("vi-VN") + " " + d.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }) +
          "</span><b>" + r.correct + "/" + r.total + " · " + r.score + "%" + deltaHtml + "</b>";
        h.appendChild(row);
      });
    }
    showScreen("progress");
  }
  function rowStat(label, val) { var r = el("div", "stat"); r.innerHTML = "<span>" + label + "</span><b>" + val + "</b>"; return r; }

  /* ---------------- API công khai (gọi từ HTML) ---------------- */
  window.App = {
    goHome: function () { if (S && S.timerId) clearInterval(S.timerId); showScreen("home"); },
    goTopicSelect: function () { updateTopicMax(); showScreen("topic"); },
    goMockSelect: function () { updateMockInfo(); showScreen("mock"); },
    goProgress: function () { renderProgress(); },
    goAbout: function () { showScreen("about"); },

    startTopic: function () {
      var part = $("topic-part").value, avail = availCount(part);
      if (!avail) { alert("Phần này chưa có câu hỏi."); return; }
      var count = parseInt($("topic-count").value, 10);
      if (isNaN(count) || count < 1) { alert("Vui lòng nhập số câu muốn luyện (tối thiểu 1)."); return; }
      if (count > avail) { count = avail; alert("Phần này chỉ có " + avail + " câu, sẽ luyện " + avail + " câu."); }
      var pool = shuffle(BANK.filter(function (q) { return q.part === part; })).slice(0, count);
      beginSession(pool, "practice", 0);
    },

    startMock: function () {
      if (BANK.length === 0) { alert("Chưa có câu hỏi nào trong ngân hàng."); return; }
      var plan = computeMockPlan(parseInt($("mock-minutes").value, 10));
      var picked = [];
      PARTS.forEach(function (p) {
        var pool = shuffle(BANK.filter(function (q) { return q.part === p.key; }));
        picked = picked.concat(pool.slice(0, Math.min(plan.per[p.key], pool.length)));
      });
      picked = shuffle(picked);
      if (!picked.length) { alert("Không đủ câu hỏi để tạo đề."); return; }
      beginSession(picked, "mock", plan.durSec);
    },

    nextQ: nextQ, prevQ: prevQ,
    submitMock: function () { submitMock(false); },
    reviewAnswers: reviewAnswers,

    confirmExit: function () {
      if (confirm("Thoát buổi làm bài? Tiến trình hiện tại sẽ không được lưu thành lần thi.")) {
        if (S && S.timerId) clearInterval(S.timerId);
        showScreen("home");
      }
    },

    resetProgress: function () {
      if (confirm("Xóa toàn bộ dữ liệu tiến độ trên thiết bị này? Không thể hoàn tác.")) {
        localStorage.removeItem(STORE_KEY); renderProgress();
      }
    }
  };

  /* ---------------- Khởi động ---------------- */
  document.addEventListener("DOMContentLoaded", function () {
    if (!BANK.length) console.warn("Ngân hàng câu hỏi trống — kiểm tra data/questions.js");
    initHome();
    showScreen("home");
  });
})();
