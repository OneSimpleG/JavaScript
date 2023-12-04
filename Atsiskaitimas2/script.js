"use strict";
//------Uzd. 1------
// for (let i = false;i!=true;){
//     let num = parseInt(prompt('Iveskite skaicu: '))
//     if (num<0){
//         alert(num)
//         break
//     }
// }
//------Uzd. 2------
// for (let i = 1;i<=100;i++){
//     if (i%3!=0) console.log(i);
// }
//------Uzd. 3------
// for (let i = 2;i<=12;i++){
//     console.log(i**2);
// }
//------Uzd. 4------
// const persons = {
//     jonas: 30,
//     petras: 26,
//     ona: 45,
//     maryte: 36,
//     antanas: 77,
//     "teta zita": 86,
// };
// for (let i in persons){
//     console.log(i,persons[i]);
// }
//------Uzd. 5------
// const people = {
//     petras: 42,
//     vilhelmas: 63,
//     jolanta: 41,
//     daiva: 34,
//     abromas: 37,
//     deimantas: 21,
// };
// let kiek = 0
// for (let i in people){
//     kiek++
// }
// console.log(kiek);
//------Uzd. 6------
// let sak = prompt('Iveskite sakiny').split(" ")
// for (let word of sak){
//     console.log(word);
// }
//------Uzd. 7------
// let sak2 = prompt('Iveskite sakiny')
// let kiek = 0
// for (let char of sak2){
//     kiek++
// }
// console.log(`Naudojant cikla: ${kiek}`);
// console.log(`Naudojant .lenght: ${sak2.length}`);
//------Uzd. 8------
// let i = 20
// while (i<=50){
//     if (i%2==0) console.log(i);
//     i++
// }
//------Uzd. 9------
// let sk = true
// while (sk == true){
//     let skaicius = parseInt(prompt('Iveskite skaiciu'))
//     if (skaicius%2!=0){
//         alert('Ivedete nelygini skaiciu!')
//         sk = false
//     }
// }
//------Uzd. 10------
// let suma = 0
// let stabdyti = false
// do{
//     let skaiciai = parseInt(prompt('Iveskite teigiama skaiciu'))
//     if (skaiciai>0) suma+= skaiciai
//     else if (skaiciai==0){
//         alert('Ivestas nulis ciklas bus sustabdytas')
//         stabdyti = true
//     } 
// }while (stabdyti == false)
// console.log(suma);