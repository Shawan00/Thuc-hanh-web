function xuLy() {
    var hoTen = document.getElementById("hoTen").value;
    var ngaySinh = document.getElementById("date").value;
    var cccd = document.getElementById("cccd").value;
    var diaChi = document.getElementById("diaChi").value;
    var minDate = new Date("1900-01-01");
    var maxDate = new Date("2009-01-01");
    if (hoTen === "" || cccd === "" || diaChi === "" || ngaySinh === "") {
        alert ("Vui lòng điền đầy đủ thông tin!");
    }
    else {
        window.location.href = "khaoSat.html";
        alert("Lưu thông tin thành công! Bắt đầu làm khảo sát.");
    }
}