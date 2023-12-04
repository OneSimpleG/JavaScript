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
const randomArray = []
for (let i=1;i<=30;i++){
    let rng = Math.trunc(Math.random() * (25 - 5 + 1) + 5)
    randomArray.push(rng)
}
console.log(randomArray);
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