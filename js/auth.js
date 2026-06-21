/* =====================================================================
 * Khoa nhe cho app: MOI LAN MO DEU PHAI NHAP MAT KHAU (khong luu/nho).
 * App cong khai tren GitHub nen day chi la khoa nhe - chan nguoi dung
 * pho thong, KHONG bao ve tuyet doi noi dung.
 *
 * DOI MAT KHAU: thay PASS_HASH ben duoi bang ma bam SHA-256 cua mat khau
 * moi (tao bang trang tools/0lcia_20260619_TaoMatKhau.html), luu va day
 * file nay len GitHub.
 * ===================================================================== */
(function () {
  "use strict";
  var PASS_HASH = "5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5";

  async function sha256(s) {
    var buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
    return Array.from(new Uint8Array(buf)).map(function (b) { return b.toString(16).padStart(2, "0"); }).join("");
  }
  function unlock() { var g = document.getElementById("auth-gate"); if (g) g.classList.add("hidden"); }

  document.addEventListener("DOMContentLoaded", function () {
    var gate = document.getElementById("auth-gate");
    if (!gate) return;
    gate.classList.remove("hidden");
    var inp = document.getElementById("auth-input"),
        btn = document.getElementById("auth-btn"),
        err = document.getElementById("auth-err");
    async function tryLogin() {
      if (!inp.value) { return; }
      var h = await sha256(inp.value);
      if (h === PASS_HASH) { err.textContent = ""; inp.value = ""; unlock(); }
      else { err.textContent = "Mat khau chua dung. Thu lai."; inp.select(); }
    }
    btn.onclick = tryLogin;
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter") tryLogin(); });
    setTimeout(function () { inp.focus(); }, 100);
  });
})();
