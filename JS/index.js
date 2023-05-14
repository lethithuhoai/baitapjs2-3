// BÀI TẬP 1 : TÍNH TIỀN LƯƠNG NHÂN VIÊN
// Áp dụng mô hình 3 khối
//input: tienLuong1d:number, soNgayLam:number;
var button1 = document.getElementById("btntinhLuong");
button1.onclick = function tinhTongLuong() {
  var tienLuong1d = document.getElementById("tienLuong1d").value;
  var soNgayLam = document.getElementById("soNgayLam").value;
  //process: kiểm tra xem nó có đúng ko, có trả kết quả không
  //   console.log("tienLuong1d", tienLuong1d);
  //   console.log("soNgayLam", soNgayLam);
  // output: tongLuong:number;
  let tongLuong = 0;
  tongLuong = tienLuong1d * soNgayLam;
  document.getElementById("tongLuong").innerHTML = tongLuong;
  // tongLuong.toLocaleString();
};

//BÀI TẬP 2: TÍNH TRUNG BÌNH 5 SỐ THỰC
//input: soThu1, soThu2, soThu3, soThu4, soThu5: number;
var button2 = document.getElementById("btnTinhTrungBinh");
button2.onclick = function tinhTrungBinh() {
  var soThu1 = document.getElementById("soThu1").value * 1;
  var soThu2 = document.getElementById("soThu2").value * 1;
  var soThu4 = document.getElementById("soThu4").value * 1;
  var soThu3 = document.getElementById("soThu3").value * 1;
  var soThu5 = document.getElementById("soThu5").value * 1;
  //process: kiem tra xem no co dung khong bang console.log
  // console.log("soThu1", soThu1);
  // console.log("soThu2", soThu2);
  // console.log("soThu3", soThu3);
  // console.log("soThu4", soThu4);
  // console.log("soThu5", soThu5);
  // chuyển đổi sang Integer.parseInt
  //output:tinhTrungBinh: number;
  let trungbinh = 0;
  trungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
  document.getElementById("trungBinh").innerHTML = trungBinh;
};
//BÀI TẬP 3: BÀI TẬP QUY ĐỔI TIỀN
var button3 = document.getElementById("btnMoneyChange");
button3.onclick = function moneyChange() {
  var soTienCanDoi = document.getElementById("soTienCanDoi").value * 1;

  let thanhTien = 0;
  thanhTien = 23500 * soTienCanDoi;
  document.getElementById("thanhTien").innerHTML = thanhTien;
};
//BÀI TẬP 4: TÍNH DIỆN TÍCH, CHU VI HÌNH CHỮ NHẬT
var button4 = document.getElementById("btnResultCir");
button4.onclick = function ResultCir() {
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;

  var dienTich = chieuDai * chieuRong;
  var chuVi = (chieuDai + chieuRong) * 2;

  var ketQua = " Chu vi là : " + chuVi + " Diện tích là : " + dienTich;
  var bt5Result = document.getElementById("result");
  bt5Result.innerHTML = ketQua;
};
//BÀI TẬP 5: TÍNH TỔNG 2 KÝ SỐ
var button5 = document.getElementById("btnTotal");
button5.onclick = function btnTotal() {
  var number = parseInt(document.getElementById("total").value);
  console.log(number);
  var donVi = number % 10;
  var hangChuc = Math.floor(number / 10);
  var tongKySo = donVi + hangChuc;
  document.getElementById("tong-ket-qua").innerHTML = tongKySo;
};
