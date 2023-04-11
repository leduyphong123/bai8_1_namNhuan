let year = parseInt(prompt("Nhap so nam:"));
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            alert(" nam nhuan");

        } else {
            alert("khong phai nam nhuan");

        }
    }else{
    alert(" nam nhuan");

    }
} else {
    alert("khong phai nam nhuan");
}