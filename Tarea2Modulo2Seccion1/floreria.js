let precRosa = 8;
let cantRosa = 70;

let precLirio = 10;
let cantLirio = 50;

let precTulipan = 2;
let cantTulipan = 120;

let precTotalRosa = precRosa * cantRosa;
let precTotalLirio = precLirio * cantLirio;
let precTotalTulipan = precTulipan * cantTulipan;

let precTotalFlores = precTotalRosa + precTotalLirio + precTotalTulipan;

console.log(`Rosa: precio unitario: ${precRosa} , cantidad: ${cantRosa} , valor: ${precTotalRosa}\nLirio: precio unitario: ${precLirio} , cantidad: ${cantLirio} , valor: ${precTotalLirio}\nTulipan: precio unitario: ${precTulipan} , cantidad: ${cantTulipan} , valor: ${precTotalTulipan}\nTotal: ${precTotalFlores}`);