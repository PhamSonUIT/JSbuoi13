/*
- In: 
    3 biến luong1ngay, ngaylam, luong, nút tính lương, div hiện kết quả
- Xử lí:
    DOM đến 2 biến luong1ngay, ngaylam để lấy giá trị
    luong = luong1ngay * ngaylam
    DOM đến id của nút tính 
- Out:
    Tổng lương

*/

var tinh = document.getElementById("tinh");
tinh.onclick = function () {
  console.log(123);
  var luong1ngay = document.getElementById("luong").value;
  var ngaylam = document.getElementById("ngaylam").value;
  var luong = luong1ngay * ngaylam;
  var divKetQua = document.getElementById("ketqua");
  divKetQua.innerText = "Tổng lương là: " + luong;
};
