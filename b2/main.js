/*
- In: 
    6 biến s1, s1, s3, s4, s5, TB, nút tính TB, div hiện kết quả
- Xử lí:
    DOM đến 5 biến để lấy giá trị
    var TB = (s1 +s2 +s3 +s4 +s5)/5
    DOM đến id của nút tính 
- Out:
    TB 5 số là: 

*/

var tinh = document.getElementById("tinh");
tinh.onclick = function () {
  console.log(123);
  var s1 = document.getElementById("s1").value;
  var s2 = document.getElementById("s2").value;
  var s3 = document.getElementById("s3").value;
  var s4 = document.getElementById("s4").value;
  var s5 = document.getElementById("s5").value;
  var TB = (+s1 + +s2 + +s3 + +s4 + +s5) / 5;
  var divKetQua = document.getElementById("ketqua");
  divKetQua.innerText = "TB 5 số là " + TB;
};
