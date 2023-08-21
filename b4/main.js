/*
- In: 
    4 biến dai, rong, cv, dt, nút tính lương, div hiện kết quả
- Xử lí:
    DOM đến 2 biến dai, rong đề lấy giá trị
    CV = (dai + rong)/2
    DOM đến id của nút tính 
- Out:
    CV, DT

*/

var tinh = document.getElementById("tinh");
tinh.onclick = function () {
  console.log(123);
  var rong = document.getElementById("rong").value;
  var dai = document.getElementById("dai").value;
  var dt = dai * rong;
  var cv = (+dai + +rong) / 2;
  var divKetQua = document.getElementById("ketqua");
  divKetQua.innerText = "Chu vi là: " + cv;
  divKetQua.innerHTML += "<br/>";
  divKetQua.innerText += "Diện tích là: " + dt;
};
