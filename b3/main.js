/*
- In: 
    2 biến vnd, usd nút chuyển đổi, div hiện kết quả
- Xử lí:
    DOM đến 2 biến vnd, usd để lấy giá trị
    vnd = usd * 23500
    DOM đến id của nút tính 
- Out:
    vnd

*/

var tinh = document.getElementById("tinh");
tinh.onclick = function () {
  console.log(123);
  var usd = document.getElementById("usd").value;
  var vnd = usd * 23500;
  var divKetQua = document.getElementById("ketqua");
  divKetQua.innerText = Intl.NumberFormat().format(vnd);
};
