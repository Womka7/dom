let one =document.getElementById("btn-one")
let two =document.getElementsByClassName("btn-two")
let three=document.getElementsByName("btn-three")
let four= document.getElementsByTagName("button")

console.log(one);
console.log(two[0]);
console.log(three[0]);
console.log(four);
console.log(four[3]);

let five=document.querySelector(".btn-five")
let six=document.querySelector("#btn-six")
let sixx=document.querySelector("#btn-sixx span")
let seven=document.querySelectorAll("button")
let eigth=document.querySelector("[name='btn-eigth']")
let allButtons=document.querySelectorAll("button")

console.log(five);
console.log(six);
console.log(seven[6]);
console.log(eigth);
console.log(allButtons);
console.log(sixx);

sixx.textContent="Hola mundo"
sixx.addEventListener('click',function () {
    alert("holaMUNDO")
})