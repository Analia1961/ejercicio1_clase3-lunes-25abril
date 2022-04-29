//... funcionalidad de ingreso de datos

let dat1: number = document.getElementById("dato1");
let dat2: number = document.getElementById("dato2");
let dat3: number = document.getElementById("dato3");
let dat4: number = document.getElementById("dato4");
let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click" , () => {
let tiempo1 : number = Number(dat1value);
let tiempo2 : number = Number(dat2value);
let tiempo3 : number = Number(dat3value);
let tiempo4 : number = Number(dat4value);

let total: number = tiempo1 + tiempo2 + tiempo3 + tiempo4;

console.log("el tiempo total es ", total);
console log("el promedio de vuelta es", total / 4);
});







