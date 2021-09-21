
class tinh {
 
    constructor(...diem) {
      
        let tinhTong = (...diem) => {
            let ketQua = 0;
            let tb = 0;
            for (let phanTu of diem) {
                ketQua += phanTu;
                tb = ketQua / diem.length;
            }
            return ketQua, tb;

        }
        console.log(tinhTong(...diem));
        document.getElementById("tbKhoi1").innerHTML = tinhTong(...diem);
        // document.getElementById("tbKhoi2").innerHTML = tinhTong(...diem);



    


    }

}
class tinh1 {
  
    constructor(...diem) {
      
        let tinhTong = (...diem) => {
            let ketQua = 0;
            let tb = 0;
            for (let phanTu of diem) {
                ketQua += phanTu;
                tb = ketQua / diem.length;
            }
            return ketQua, tb;

        }
        console.log(tinhTong(...diem));
        // document.getElementById("tbKhoi1").innerHTML = tinhTong(...diem);
        document.getElementById("tbKhoi2").innerHTML = tinhTong(...diem);



      



    }

}
const dtb1 = () => {

    let toan = Number(document.getElementById("inpToan").value);
    let ly = Number(document.getElementById("inpLy").value);
    let hoa = Number(document.getElementById("inpHoa").value);

 
    const dtb = new tinh(toan, ly, hoa);
    console.log(toan, ly, hoa);
    console.log(dtb);


}
const dtb2 = () => {

 

    let van = Number(document.getElementById("inpVan").value);
    let su = Number(document.getElementById("inpSu").value);
    let dia = Number(document.getElementById("inpDia").value);
    let anh = Number(document.getElementById("inpEnglish").value);
    const dtb = new tinh1(van, su, dia,anh);
    console.log(van, su, dia,anh);
    console.log(dtb);


}




document.querySelector("#btnKhoi1").addEventListener("click", dtb1);
document.querySelector("#btnKhoi2").addEventListener("click", dtb2);

// document.querySelector("#btnKhoi2").addEventListener("click", dtb);


























