// Ejercicio1 clase3 - Lunes 25 de Abril
// Estructuras de Control - AUTOS DE CARRERA

/* • En una prueba, un piloto tiene que completar 4
vueltas
• Se necesita un programa que permita ingresar
por teclado el tiempo de cada vuelta
• El programa debe retornar el tiempo total y el
promedio de vuelta */

let dat1: number = document.getElementById("dato1");
let dat2: number = document.getElementById("dato2");
let dat3: number = document.getElementById("dato3");
let dat4: number = document.getElementById("dato4");
let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click" , () => {
let tiempo1 : number = Number(dat1.value);
let tiempo2 : number = Number(dat2.value);
let tiempo3 : number = Number(dat3.value);
let tiempo4 : number = Number(dat4.value);

let total: number = tiempo1 + tiempo2 + tiempo3 + tiempo4;

console.log("el tiempo total es ", total);
console.log("el promedio de vuelta es", total / 4);
});