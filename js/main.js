
//Excercise 1
function getGrades(grades1, grades2, grades3, areaGrades, objectSelect) {
    return grades1 + grades2 + grades3 + areaGrades + objectSelect;
}

function checkGrades(gradesTotal, basisPoint) {
    return gradesTotal >= basisPoint ? true : false;
}

function enrollMent() {
    var basisPoint = Number(document.getElementById("inputBasisPoint").value);

    var areaGrades = Number(document.getElementById("areaSelect").value);
    var objectSelect = Number(document.getElementById("objectSelect").value);

    var grades1 = Number(document.getElementById("inputGrades1").value);
    var grades2 = Number(document.getElementById("inputGrades2").value);
    var grades3 = Number(document.getElementById("inputGrades3").value);

    var gradesTotal = getGrades(grades1, grades2, grades3, areaGrades, objectSelect);

    var isPass = true;
    if(grades1 == 0 || grades2 == 0 || grades3 == 0) {
       isPass = false;
    } else {
        isPass = checkGrades(gradesTotal, basisPoint);
    }

    var stringIsPass = (isPass == true) ? "đậu" : "rớt";

    document.getElementById("resultEx1").value = "Bạn đã " + stringIsPass + ". Tổng điểm: " + gradesTotal;
}

document.getElementById("resultEx1").disabled = true;
document.getElementById("btnEx1").onclick = enrollMent;



//Excercise 2
const DISTANCE_0_TO_50 = 500;
const DISTANCE_51_TO_100 = 650;
const DISTANCE_101_TO_200 = 850;
const DISTANCE_201_TO_350 = 1100;
const DISTANCE_LARGER_THAN_350 = 1300;

function calcElectricityBill(inputKm) {
    var totalMoney = 0, totalKm = 0;
    if(inputKm > 0) {
        if(inputKm <= 50) {
            totalMoney += inputKm * DISTANCE_0_TO_50;
            return totalMoney;
        }
        totalMoney += 50 * DISTANCE_0_TO_50;
        totalKm += 50;
    }

    if(inputKm > 50) {
        if(inputKm <= 100) {
            totalMoney += (inputKm - totalKm) * DISTANCE_51_TO_100;
            return totalMoney;
        }
        totalKm += 50;
        totalMoney +=  50 * DISTANCE_51_TO_100;
    } 

    if(inputKm > 100) {
        if(inputKm <= 200) {
            totalMoney += (inputKm - totalKm) * DISTANCE_101_TO_200;
            return totalMoney;
        }
        totalMoney += 100 * DISTANCE_101_TO_200;
        totalKm += 100;
    } 
    
    if(inputKm > 200) {
        if(inputKm <= 350) {
            totalMoney += (inputKm - totalKm) * DISTANCE_201_TO_350;
            return totalMoney;
        }
        totalKm += 150;
        totalMoney += 150 * DISTANCE_201_TO_350;
    } 


    totalMoney += (inputKm - totalKm) * DISTANCE_LARGER_THAN_350;
    return totalMoney;
}

function electricityBill() {
    var fullName = document.getElementById("inputNameEx2").value;
    var inputKm = Number(document.getElementById("inputKW").value);

    var resultOfBill = calcElectricityBill(inputKm);
    console.log(resultOfBill);

    document.getElementById("resultEx2").value = "Họ tên: " + fullName + "; Tiền điện: " + resultOfBill;
}
document.getElementById("resultEx2").disabled = true;
document.getElementById("btnEx2").onclick = electricityBill;



//Excercise 3

const TAX_RATE_1_TO_60 = 0.05;
const TAX_RATE_61_TO_120 = 0.1;
const TAX_RATE_121_TO_210 = 0.15;
const TAX_RATE_211_TO_384 = 0.2;
const TAX_RATE_385_TO_624 = 0.25;
const TAX_RATE_625_TO_960 = 0.3;
const TAX_RATE_LARGER_THAN_961 = 0.35;

function incomeTax(totalSalaryYear, people) {
    return totalSalaryYear - 4e+6 - (people * 1.6e+6);
}

function calcIndividualIncomeTax(totalSalaryYear, people) {
    var income_tax = incomeTax(totalSalaryYear, people);
    if(income_tax <= 60e+6) {
        income_tax *= TAX_RATE_1_TO_60;
    } else if(income_tax <= 120e+6) {
        income_tax *= TAX_RATE_61_TO_120;
    } else if(income_tax <= 210e+6) {
        income_tax *= TAX_RATE_121_TO_210;
    } else if(income_tax <= 384e+6) { 
        income_tax *= TAX_RATE_211_TO_384;
    } else if(income_tax <= 624e+6) {
        income_tax *= TAX_RATE_385_TO_624;
    }else if(income_tax <= 960e+6){
        income_tax *= TAX_RATE_625_TO_960;
    } else {
        income_tax *= TAX_RATE_LARGER_THAN_961;
    }
    return income_tax;
}

function individualIncomeTax() {
    var fullName = document.getElementById("intputNameEx3").value;
    var totalSalaryYear = Number(document.getElementById("inputToTalSalaryYear").value);
    var people = Number(document.getElementById("inputPeople").value);

    var result = calcIndividualIncomeTax(totalSalaryYear, people);

    document.getElementById("resultEx3").value = "Họ tên: " + fullName + "; Tiền thu nhập thuế cá nhân: " + result;
}

document.getElementById("resultEx3").disabled = true;
document.getElementById("btnEx3").onclick = individualIncomeTax;


//Exercise 4

function tinhTienNhaDan(soKenhCaoCap) {
    var phiXuLyHoaDon = 4.5, phiDichVuCoBan = 20.5, thueKenhCaoCap = 7.5;
    return phiXuLyHoaDon + phiDichVuCoBan + (thueKenhCaoCap * soKenhCaoCap);    
}

function tinhTienDoanhNghiep(soKenhCaoCap, soKetNoi) {
    var phiXuLyHoaDon = 15, phiDichVuCoBan = 75, thueKenhCaoCap = 50;
    if(soKetNoi > 10) phiDichVuCoBan +=  (soKetNoi - 10) * 5;
    return phiDichVuCoBan + phiXuLyHoaDon + (thueKenhCaoCap * soKenhCaoCap);
}

function tinhTienCap(loaiKhachHang, soKenhCaoCap, soKetNoi) {
    if(loaiKhachHang == 1) {
        return tinhTienNhaDan(soKenhCaoCap);
    }
    return tinhTienDoanhNghiep(soKenhCaoCap, soKetNoi);
}

function tienCap() {
    var loaiKhachHang = Number(document.getElementById("loaiKhachHang").value);
    var maKhachHang = document.getElementById("maKhacHang").value;
    var soKenhCaoCap = Number(document.getElementById("soKenhCaoCap").value);
    var soKetNoi = Number(document.getElementById("soKetNoi").value);

    var ketQua = tinhTienCap(loaiKhachHang, soKenhCaoCap, soKetNoi);
    if(loaiKhachHang == 0) ketQua = 0;
    document.getElementById("resultEx4").value = "Mã khách hàng: " + maKhachHang + "; Tiền cáp:$" + ketQua;
}


function showDiv(loaiKhachHang) {
    var style = (loaiKhachHang == 1) ? 'none' : 'block';
    document.getElementById("soKetNoi").style.display = style;
}

document.getElementById("loaiKhachHang").onchange = function() {
    var loaiKhachHang = Number(document.getElementById("loaiKhachHang").value);
    showDiv(loaiKhachHang) // ko có ;
};
document.getElementById("resultEx4").disabled = true;
document.getElementById("btnEx4").onclick = tienCap;



