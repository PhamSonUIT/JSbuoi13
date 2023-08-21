var tinh = document.getElementById("tinh");
tinh.onclick = function () {
  var n = document.getElementById("n").value;
  var chuc = Math.floor(n / 10);
  var donvi = n % 10;
  var tong = +chuc + +donvi;
  var divKetQua = document.getElementById("ketqua");
  divKetQua.innerText = "Tổng các kí số là: " + tong;
};
