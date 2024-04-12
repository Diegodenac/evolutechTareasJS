const precRosa = 8;
let cantRosa = 70;

const precLirio = 10;
let cantLirio = 50;

const precTulipan = 2;
let cantTulipan = 120;

let precTotalRosa = precRosa * cantRosa;
let precTotalLirio = precLirio * cantLirio;
let precTotalTulipan = precTulipan * cantTulipan;

let precTotalFlores = precTotalRosa + precTotalLirio + precTotalTulipan;
console.log("Primer Resultado \n")
console.log(`Rosa: precio unitario: ${precRosa} , cantidad: ${cantRosa} , valor: ${precTotalRosa}\nLirio: precio unitario: ${precLirio} , cantidad: ${cantLirio} , valor: ${precTotalLirio}\nTulipan: precio unitario: ${precTulipan} , cantidad: ${cantTulipan} , valor: ${precTotalTulipan}\nTotal: ${precTotalFlores}`);
console.log("\n")
cantRosa -= 20;
cantLirio -= 30;
precTotalRosa = precRosa * cantRosa;
precTotalLirio = precLirio * cantLirio;
precTotalFlores = precTotalRosa + precTotalLirio + precTotalTulipan;

console.log("Segundo Resultado \n")
console.log(`Rosa: precio unitario: ${precRosa} , cantidad: ${cantRosa} , valor: ${precTotalRosa}\nLirio: precio unitario: ${precLirio} , cantidad: ${cantLirio} , valor: ${precTotalLirio}\nTulipan: precio unitario: ${precTulipan} , cantidad: ${cantTulipan} , valor: ${precTotalTulipan}\nTotal: ${precTotalFlores}`);
console.log("\n")