var trongluongToan = 65; //kg
var trongluongMinh = 70;
var chieucaoToan = 173; //cm
var chieucaoMinh = 165;
var BMIToan = trongluongToan / (chieucaoToan / 100 * chieucaoToan / 100); //chieu cao qui ra cm
var BMIMinh = trongluongMinh / (chieucaoToan / 100 * chieucaoToan / 100); //chieu cao qui ra cm
console.log("BMI của Toàn là " + BMIToan);
console.log("BMI của Minh là " + BMIMinh);
//so sanh dieu kien khi BMIToan > BMIMinh
if (BMIToan > BMIMinh) {
    console.log("BMI của Toàn lớn hơn BMI của Minh");
    //so sanh dieu kien khi BMIToan < BMIMinh
} else if (BMIToan < BMIMinh) {
    console.log("BMI của Toàn nhỏ hơn BMI của Minh");
    //so sanh dieu kien khi BMIToan = BMIMinh
} else {
    console.log("BMI của Toàn bằng BMI của Minh");

}

// phan nang cao

function calculatorBMI() {
    var trongluong = parseInt(document.getElementById("weight").value); // lay gia tri number cua input weight
    var chieucao = parseInt(document.getElementById("height").value); // lay gia tri number cua input height
    //khi gia tri nhap vao > 0
    if (trongluong > 0 && chieucao > 0) {
        var bmi = trongluong / (chieucao / 100 * chieucao / 100);
        document.getElementById('result').innerHTML = bmi.toFixed(2); //lay 2 so thap phan
        // khi gia tri nhap vao < 0
    } else {
        alert("Giá trị trọng lượng và chiều cao phải lớn hơn 0")
    }
}