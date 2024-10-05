let button = document.getElementById('OG');
let GQ = document.getElementById('GQ');
let GQ2 = document.getElementById('GQ2');
let GQ3 = document.getElementById('GQ3');
let input2 = document.getElementById('input2');
let input1 = document.getElementById('input1');
let OP = document.getElementById('OP');
let p = document.getElementById('p2');
let p1 = document.getElementById('p5');
let but = document.getElementById('but');
let exam = document.getElementById('btExam');
let img = document.querySelector('img');
let box = document.querySelector('box');

button?.addEventListener('click', () => {
    if (input1.value.trim() === "" && input2.value.trim() === "") {
        alert("Ad ve Soyadını yaz")
    } else if (input1.value === "") {
        alert("Adini Yaz")
    } else if (input2.value === "") {
        alert("Soyadini yaz")
    } else {
        location.href = "login.html"
    }
    localStorage.setItem("DD", JSON.stringify({ name: input1.value, surname: input2.value , img : img.src }))
    input1.value = "";
    input2.value = "";
    img.src = "";
});
but?.addEventListener("click",()=>{
    but.style.display = "none";
    img.style.display="flex";
})
GQ?.addEventListener('click', () => {
    location.href = "yeni.html"
});
GQ2?.addEventListener('click', () => {
    GQ.style.display = "none"
    GQ2.style.display = "none"
    exam.style.display = "flex"
});
GQ3?.addEventListener('click', () => {
    location.href = "Ser.html"
});
OP?.addEventListener('click', () => {
    location.href = "index.html"
})


exam?.addEventListener("click", ()=>{
    location.href = "exam.html"
})
let Ct = document.querySelector(".boxer")
let Ct1 = document.querySelector(".boxer1")
let SM = document.getElementById("SubmitM")
let Err = document.querySelector(".ErrACC")
let ErrBut = document.querySelector(".ErrACC button")
let Acc = document.querySelector(".AccACC")
let AccBut = document.querySelector(".AccACC button")


Ct?.addEventListener("click", ()=>{
    if (Ct.style.backgroundColor === "white"){
        Ct.style.backgroundColor !== "black"
    } else {
        Ct.style.backgroundColor = "white"
    }
})
Ct1?.addEventListener("click", ()=>{
    if (Ct1.style.backgroundColor === "white"){
        Ct1.style.backgroundColor !== "black"
    } else {
        Ct1.style.backgroundColor = "white"
    }
})

SM?.addEventListener("click", ()=>{

    if (Ct1.style.backgroundColor === "" && Ct.style.backgroundColor === ""){ 
        alert("Cavab Verin! Oğlanlıqdan məhrum ola bilərsiniz");
        Ct1.style.backgroundColor = ""
        Ct.style.backgroundColor = ""
    } else if (Ct.style.backgroundColor === "white" && Ct1.style.backgroundColor === "" ){
        Err.style.display = "flex"
        Acc.style.display = "none"
    } else if (Ct.style.backgroundColor === "" && Ct1.style.backgroundColor === "white" ){
        Err.style.display = "none"
        Acc.style.display = "flex"
    } else{
        Err.style.display = "flex"
        Acc.style.display = "none"
    }
})

ErrBut?.addEventListener("click", ()=>{
    location.href = "index.html"
})

AccBut?.addEventListener("click", ()=>{
    location.href = "Ser.html"
})

let scoredData = JSON.parse(localStorage?.getItem("DD"))
if (scoredData) {
    p.innerHTML = `Tebrikler ${scoredData.name} ${scoredData.surname} Bu sertifikati size qururla veririk bilirik bu oglanliqi almaq cox cetin oldu amma siz bacardiniz artiq rahat bir sekilde dostlarininizin yaninda,evde oglan oldugunu gostere bilersiinzi kimdese subhe yaransa onlara bu sertifikati gosterin`
    if (scoredData.img) {
        img.src = scoredData.img; 
        img.style.display = "flex"; // img elementini görünən edin
    } else {
        img.style.display = "none"; // Şəkil yoxdursa, img elementini gizləyin
    }
}