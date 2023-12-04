"use strict";
//------Uzd. 1------
// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// for (let i of fruits){
//     console.log(i);
// }
// console.log(fruits.toString());
//------Uzd. 2------
// const skaiciai = [15,21,4,48,32,10]
// let suma = 0
// for (let i of skaiciai){
//     suma+=i
// }
// console.log(suma);
// let sum = 0
// skaiciai.forEach(num=>{
//     sum+=num
// })
// console.log(sum);
// let sum2 = skaiciai.reduce((accumulator,currentValue)=>{
//     return accumulator + currentValue
// },0)
// console.log(sum2);
//------Uzd. 3------
// let sakinys = "viena diena viduri miesto maciau didele juoda meska kuri valge"
// const sakinysArray = sakinys.split(" ")
// let lygSak = []
// let nelygSak = []
// for(let i of sakinysArray){
//     if (i.length%2==0) lygSak.push(i)
//     else nelygSak.push(i)
// }
// lygSak = lygSak.toString()
// nelygSak = nelygSak.toString()
// console.log(lygSak);
// console.log(nelygSak);
//------Uzd. 4------
// let skaiciuArray = [10,15,98,14,23,54,12,74,104,56,20,32]
// for (let i=1;i<=3;i++){
//     let smallest = Math.min(...skaiciuArray)
//     let index = skaiciuArray.indexOf(smallest)
//     skaiciuArray.splice(index,1)
//     console.log(skaiciuArray);
// }


//------Uzd. 5------
// const markes = ["vw","ferrari","lexus","ford"]
// if (markes.indexOf("bentley")>-1) console.log(markes.indexOf("bentley"));
// else{
//     markes.push("bentley")
//     console.log(markes);
// } 
//------Uzd. 6------
// const prekes = ["bananas","uobuolys","ledai","knyga","bananas","ledai"]
// const prekesUnique = []
// for (let i of prekes){
//     if (prekesUnique.indexOf(i)>-1) continue
//     else prekesUnique.push(i)
// }
// console.log(prekesUnique);
//------Uzd. 7------
// const fruits = ["apple","pear","banana","mango","apple","kiwi","kiwi","pear"]
// const fruitsUnique = []
// for (let i of fruits){
//     if (fruitsUnique.includes(i)) continue
//     else fruitsUnique.push(i)
// }
// console.log(fruitsUnique);
//------Uzd. 8------
// const numbers = [15,20,49,32,13,14,94,73]
// for (let i of numbers){
//     if (i%2==0) numbers.splice(numbers.indexOf(i),1,"jonas")
// }
// let upperNumbers = numbers.toString().toUpperCase()
// console.log(numbers);
// console.log(upperNumbers);


//------Uzd. 9------
// const randomArray = []
// for (let i=1;i<=30;i++){
//     let rng = Math.trunc(Math.random() * (25 - 5 + 1) + 5)
//     randomArray.push(rng)
// }
// console.log(randomArray);
//------Uzd. 10------
// A
// let kiek = 0
// for (let i of randomArray){
//     if (i>10) kiek++
// }
// console.log(kiek);
// B
// let index = 0
// for (let i of randomArray){
//     let biggest = Math.max(...randomArray)
//     if (i===biggest){ 
//         console.log(index, i);
//     } 
//     index++
// }
// C
// let sum = 0
// for (let i in randomArray){
//     if (i%2==0) sum+=randomArray[i]
// }
// console.log(sum);
// D
// const indexedArray = []
// for (let i in randomArray){
//     let indexedNum = randomArray[i] - i
//     indexedArray.push(indexedNum)
// }
// console.log(indexedArray);
// E
// for (let i=1;i<=10;i++){
//     let rng2 = Math.trunc(Math.random() * (25 - 5 + 1) +5)
//     randomArray.push(rng2)
// }
// console.log(randomArray);
// F
// let lygIndex = []
// let nelygIndex = []
// for (let i=1;i<randomArray.length;i++){
//     if (i%2==0) lygIndex.push(randomArray[i])
//     else nelygIndex.push( randomArray[i])
// }
// console.log(lygIndex);
// console.log(nelygIndex);
// G
// for (let i=1;i<randomArray.length;i++){
//     if (i%2==0 && randomArray[i]>15) randomArray[i]=0
// }
// console.log(randomArray);
// H
// for (let i of randomArray){
//     if (i>10) {
//         console.log(randomArray.indexOf(i));
//         break
//     } 
// }

//------Uzd. 11------
// let duomenys = {
//     id: "0001",
//     type: "donut",
//     name: "Cake",
//     ppu: 0.55,
//     topping: [
//         {id: "5001", type: "None"},
//         {id: "5002", type: "Glazed"},
//         {id: "5005", type: "Sugar"},
//         {id: "5007", type: "Powdered Suar"},
//         {id: "5006", type: "Chocolate with Sprinkles"},
//         {id: "5003", type: "Chocolate"},
//         {id: "5004", type: "Maple"},
//     ]
// }
// for (let i in duomenys){
//     console.log(i,duomenys[i]);
// }

//------Uzd. 12------
// const family = {
//     grandparents: {
//         grandma: "Marge",
//         gradpa: "Homer",
//     },
//     parents: {
//         mom: "Lisa",
//         dad: "Millhouse"
//     },
//     children: {
//         daugther: "Anne",
//         son1: "Peter",
//         son2: "Bob"
//     },
// }
// for (let i in family){
//     let txt = Object.values(family[i])
//     console.log(`${i}: ${txt}`);
// }
// const knygos = [
//     {
//       isbn: 9786098233346,
//       price: 7.99,
//       year: 2006,
//       title: "Bloga dukte",
//       pagecount: 250,
//     },
//     {
//       isbn: 9786098233391,
//       price: 7.99,
//       year: 2015,
//       title: "Mergina kuria jis pazinojo",
//       pagecount: 315,
//     },
//     {
//       isbn: 9786099609324,
//       price: 7.99,
//       year: 2019,
//       title: "Tapk ragana",
//       pagecount: 150,
//     },
//     {
//       isbn: 9786094792250,
//       price: 6.99,
//       year: 2007,
//       title: "Sfera",
//       pagecount: 450,
//     },
//     {
//       isbn: 9786094792335,
//       price: 9.99,
//       year: 2019,
//       title: "Mes susitinkame cia",
//       pagecount: 500,
//     },
//     {
//       isbn: 9786094273780,
//       price: 7.99,
//       year: 2019,
//       title: "Sunaikinimas",
//       pagecount: 509,
//     },
//     {
//       isbn: 9786098233483,
//       price: 12.99,
//       year: 2018,
//       title: "Artemide",
//       pagecount: 199,
//     },
//     {
//       isbn: 9786094273872,
//       price: 4.99,
//       year: 2015,
//       title: "Fondas ir imperija",
//       pagecount: 185,
//     },
//     {
//       isbn: 9786094273902,
//       price: 7.99,
//       year: 2019,
//       title: "Amzinybes fjordo pranasai",
//       pagecount: 333,
//     },
//     {
//       isbn: 9786094442742,
//       price: 5.99,
//       year: 2004,
//       title: "Bejegiai",
//       pagecount: 777,
//     },
//     {
//       isbn: 9786094442940,
//       price: 14.99,
//       year: 2019,
//       title: "Klajunai",
//       pagecount: 172,
//     },
//     {
//       isbn: 9786090404386,
//       price: 7.99,
//       year: 2015,
//       title: "Mergina, kuri pakliuvo i voratinkli",
//       pagecount: 356,
//     },
//   ];
// let knyguArray = []
// for (let i in Object.entries(knygos)){
//     for(let j in Object.keys(knygos[i])){
//         let key = Object.keys(knygos[i])
//         let value = Object.values(knygos[i])
//         console.log(`${key[j]} --> ${value[j]}`);
//         if (key[j]=='year' && value[j]>2015){
//             knyguArray.push(value)
//         }
//     }
// }
// console.log(knyguArray);

//------Uzd. 13------
