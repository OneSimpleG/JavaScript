"use strict";
//------Uzd. 1------
// for (let i = 0; i<10;i++){
//     console.log(i+1);
// }
//------Uzd. 2------
// for (let i = 0; i<10;i++){
//     console.log(10-i);
// }
//------Uzd. 3------
// for (let i = 2; i<=10;i+=2){
//     console.log(i);
// }
//------Uzd. 4------
// for (let i = 1; i<=10;i++){
//     console.log(i*2);
// }
//------Uzd. 5------
// for (let i = 0;i<=5;i++){
//     if (i==3) break
//     console.log(i);
// }
//------Uzd. 6------
// for (let i = 0;i<=10;i++){
//     if (i>6 && i<8) continue
//     else console.log(i);
// }

//------For...In------

//------Uzd. 1------
// const leFamily = {
//     me: 33,
//     father: 55,
//     mother: 53,
//     sister: 32,
//     brother1: 28,
//     brother2: 25,
//     aunt: 61,
//     uncle: 60,
//     cousin1: 37,
//     cousin2: 37,
//     grandfather1: 79,
//     grandmother1: 77,
//     grandfather2: 81,
//     grandmother2: 80,
//     cat: 3,
//     dog: 7,
//     parrot: 2,
//   };
// for (let key in leFamily){
//     if (leFamily[key]>65) console.log(`${key} ${leFamily[key]}`);
// }
//------Uzd. 2------
// let lyg = 0
// let nlyg = 0
// for (let key in leFamily){
//     if (leFamily[key]%2 === 0) lyg++
//     else nlyg++
// }
// console.log(`${lyg} lyginiu. ${nlyg} nelyginiu`);

//------For...Of------

//------Uzd. 1------
// const numbers = [2,34,54,67,77,1,99]
// let suma = 0
// for (let num of numbers){
//     suma += num
// }
// console.log(suma);
//------Uzd. 2------
// const words = ['Geros','dienytes','skanios','kavytes']
// for (let str of words){
//     console.log(str +' '+ str.length);
// }

//------While------

//------Uzd. 1------
// let i = 1
// while (i <= 10){
//     console.log(i);
//     i++
// }
//------Uzd. 2------
// let j = 10
// while (j >= 1){
//     console.log(j);
//     j--
// }
//------Uzd. 3------
// let k = 0
// while (k < 10){
//     k++
//     if (k%2==0) continue
//     else console.log(k);
// }

//------Do...While------

//------Uzd. 1------
// let suma = 0
// let num = 0
// do {
//     num = parseInt(prompt('iveskite skaiciu'))
//     suma += num
// } while (num>0)
// console.log(suma);
//------Uzd. 2------
// let x = Math.trunc(Math.random() * (10 - 1 + 1) + 1)
// let y = parseInt(prompt('Iveskite skaiciu'))
// do{
//     if (y>x) y = parseInt(prompt(`${y} yra didesnis uz nezinoma skaiciu`))
//     else if (y<x) y = parseInt(prompt(`${y} yra mazesnis uz nizinoma skaiciu`))
// } while (y!=x)
// alert('Jus teisingai pataiket')

//------Pratybos------

//------Uzd. 1------
// for (let i = 1;i<10;i++){
//     console.log(i);
// }
//------Uzd. 2------
// for (let i = 1;i<10;i++){
//     console.log(i**2);
// }
//------Uzd. 3------
// for (let i =10;i<100;i++){
//     if (i%2==0) console.log(i);
// }
//------Uzd. 4------
// let loopMax = parseInt(prompt('Iveskite loop paskutini skaiciu'))
// for (let i = 1;i<=loopMax;i++){
//     console.log(i);
// }
//------Uzd. 5------
// let loopInterval = [10,20]
// for (let i = loopInterval[0];i<=loopInterval[1];i++){
//     console.log(i);
// }
//------Uzd. 6------
// let vardas = 'Grantas'
// let n = parseInt(prompt('Kiek kartu atspausdinti varda ?'))
// for (let i = 1;i<=n;i++){
//     console.log(vardas + ' ' + i);
// }
//------Uzd. 7------
// let n = parseInt(prompt('Kokio skaiciaus daugybos lentele atspausdinti ?'))
// for (let i = 1;i<=10;i++){
//     console.log(n*i);
// }
//------Uzd. 8------
// let m = [-10,10]
// for (let x = m[0];x<=m[1];x++){
//     let y = 7*2 + 5*x - 3
//     console.log(y);
// }
//------Uzd. 9------
// let kiekis = parseInt(prompt('Iveskite egluciu kieki'))
// let totalH = 0
// for (let i = 1;i<=kiekis;i++){
//     let aukstis = parseInt(prompt('Iveskite eglutes auksti'))
//     totalH += aukstis
// }
// let vid = totalH/kiekis
// alert(`Vidutinis eglutes aukstis yra ${vid.toFixed(2)}`)