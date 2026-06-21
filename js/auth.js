/* =====================================================================
 * Khóa nhẹ cho app (màn hình nhập mật khẩu khi mở).
 * LƯU Ý: app công khai trên GitHub nên đây chỉ là khóa nhẹ — chặn người
 * dùng phổ thông, KHÔNG bảo vệ tuyệt đối nội dung.
 *
 * ĐỔI MẬT KHẨU: thay giá trị PASS_HASH bên dưới bằng mã băm SHA-256 của
 * mật khẩu mới. Tạo mã băm bằng trang: tools/0lcia_20260619_TaoMatKhau.html
 * (mở bằng trình duyệt, gõ mật khẩu mới, copy mã rồi dán vào đây, lưu lại,
 * đẩy file này lên GitHub). Mật khẩu mặc định hiện tại: vact2026
 * ===================================================================== */
(function () {
  "use strict";
  var PASS_HASH = "5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5";
  var STORE = "vact_authed_v1";

  async function sha256(s) {
    var buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
    return Array.from(new Uint8Array(buf)).map(function (b) { return b.toString(16).padStart(2, "0"); }).join("");
  }
  function unlock() { var g = document.getElementById("auth-gate"); if (g) g.classList.add("hidden"); }

  // Cho phép "khóa lại" (đăng xuất) từ nơi khác nếu cần
  window.AppAuth = {
    lock: function () { try { localStorage.removeItem(STORE); } catch (e) {} location.reload(); }
  };

  document.addEventListener("DOMContentLoaded", function () {
    var gate = document.getElementById("auth-gate");
    if (!gate) return;
    // Đã mở khóa trên thiết bị này thì bỏ qua
    try { if (localStorage.getItem(STORE) === "1") { unlock(); return; } } catch (e) {}
    gate.classList.remove("hidden");
    var inp = document.getElementById("auth-input"),
        btn = document.getElementById("auth-btn"),
        err = document.getElementById("auth-err"),
        rem = document.getElementById("auth-remember");
    async function tryLogin() {
      if (!inp.value) { return; }
      var h = await sha256(inp.value);
      if (h === PASS_HASH) {
        if (rem && rem.checked) { try { localStorage.setItem(STORE, "1"); } catch (e) {} }
        err.textContent = "";
        unlock();
      } else {
        err.textContent = "Mật khẩu chưa đúng. Thử lại.";
        inp.select();
      }
    }
    btn.onclick = tryLogin;
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter") tryLogin(); });
    setTimeout(function () { inp.focus(); }, 100);
  });
})();
