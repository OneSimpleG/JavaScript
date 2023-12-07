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
//     if (i=='topping'){
//         console.log('topping:');
//         for (let j in Object.entries(duomenys.topping)){
//             console.log(duomenys.topping[j]);
//         }
//         break
//     }
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
// let knyguMas = []
// for (let i in knygos){
//     for (let a in knygos[i]){
//         console.log(`${a} --> ${knygos[i][a]}`);
//     }
//     console.log('');
//     if (knygos[i].year >2015) knyguMas.push(knygos[i])
// }
// console.log(...knyguMas);

//------Uzd. 13------
// const seimosSumos = [36, 78, 200]
// const arbatpinigiai = []
// const galSuma = []
// function arbatCal(sumos){
//     for (let i of sumos){
//         if (i<50){
//             galSuma.push(((0.2*i)+i).toFixed(2))
//             arbatpinigiai.push((0.2*i).toFixed(2))
//         } 
//         else if (i>50 && i<200){
//             galSuma.push(((0.15*i)+i).toFixed(2))
//             arbatpinigiai.push((0.15*i).toFixed(2))
//         } 
//         else if (i>=200){
//             galSuma.push(((0.1*i)+i).toFixed(2))
//             arbatpinigiai.push((0.1*i).toFixed(2))
//         }
//     }
//     return `arbatpinigiai: ${arbatpinigiai}. Galutine suma: ${galSuma}`
// }
// console.log(arbatCal(seimosSumos));

//------Uzd. 14------
// const questions1 = [
//     {
//       id: 1,
//       question: "Kuri HTML versija yra naudojama šiuo metu?",
//       answers: [
//         { text: 2, isCorrect: false },
//         { text: 5, isCorrect: true },
//         { text: 7, isCorrect: false },
//         { text: 3, isCorrect: false },
//         { text: 8.3, isCorrect: false },
//       ],
//     },
//     {
//       id: 2,
//       question:
//         "Kokį HTML semantinį elementą parinktumėte tinklapio naujienai aprašyti?",
//       answers: [
//         { text: "<news>", isCorrect: false },
//         { text: "<article>", isCorrect: true },
//         { text: "<section>", isCorrect: false },
//         { text: "<main>", isCorrect: false },
//         { text: "Nėra teisingo atsakymo", isCorrect: false },
//       ],
//     },
//     {
//       id: 3,
//       question: "Kokią display reikšmę turi HTML a elementas pagal nutylėjimą?",
//       answers: [
//         { text: "inline", isCorrect: true },
//         { text: "block", isCorrect: false },
//         { text: "inline-block", isCorrect: false },
//         { text: "table", isCorrect: false },
//       ],
//     },
//     {
//       id: 4,
//       question:
//         "Kuris selektorius yra teisingas norint stilių taikyti tik pdf failams?",
//       answers: [
//         { text: "a[href >='.pdf']", isCorrect: false },
//         { text: "a[href $='.pdf']", isCorrect: false },
//         { text: "a[href only ='.pdf']", isCorrect: false },
//         { text: "a[href='.pdf']", isCorrect: true },
//         { text: "Nėra teisingo atsakymo", isCorrect: false },
//       ],
//     },
//     {
//       id: 5,
//       question:
//         "Kokią klasę reikia priskirti HTML blokui, kad jis Bootstrap grid'e užimtų 5 stulpelius praleidžiant vieną stulpelį?",
//       answers: [
//         { text: ".columns-5-offset-1", isCorrect: false },
//         { text: ".col-sm5-1", isCorrect: false },
//         { text: ".col-sm-5 .col-offset-1", isCorrect: false },
//         { text: ".col-sm-5 .col-sm-offset-1", isCorrect: true }, // ar tikrai?
//       ],
//     },
//     {
//       id: 6,
//       question:
//         "Kaip kintamajam antraste, kuriam priskirtas HTML elementas header pakeisti fono spalvą naudojant JavaScript?",
//       answers: [
//         { text: "antraste.style.background-color = 'tomato';", isCorrect: false },
//         { text: "antraste.style.backgroundColor = 'tomato';", isCorrect: true },
//         { text: "antraste.css.background-color= 'tomato';", isCorrect: false },
//         { text: "Teisingo atsakymo nėra", isCorrect: false },
//       ],
//     },
//     {
//       id: 7,
//       question: "Kaip importuoti išorinį scss failą į pagrindinį scss failą?",
//       answers: [
//         { text: "@include isorinis_failas", isCorrect: false },
//         { text: "@add isorinis_failas", isCorrect: false },
//         { text: "@import isorinis_failas", isCorrect: true },
//         { text: "Nėra teisingo varianto", isCorrect: false },
//       ],
//     },
//     {
//       id: 8,
//       question:
//         "Kaip padaryt nuorodą į tėvinį html elementą a su tikslu aprašyti pseudo klasės :hover formatavimą?",
//       answers: [
//         { text: "extend a:hover", isCorrect: false },
//         { text: "into a:hover", isCorrect: false },
//         { text: "&:hover", isCorrect: true },
//         { text: "@:hover", isCorrect: false },
//       ],
//     },
//     {
//       id: 9,
//       question: "Kuris iš sąrašo nėra preprocesorius?",
//       answers: [
//         { text: "Ruby", isCorrect: true },
//         { text: "SASS", isCorrect: false },
//         { text: "LESS", isCorrect: false },
//         { text: "Stylus", isCorrect: false },
//         { text: "Nėra teisingo varianto", isCorrect: false },
//       ],
//     },
//     {
//       id: 10,
//       question:
//         "Kaip pasirinkti header elementą ir jį paslėpti naudojant jQuery?",
//       answers: [
//         { text: "$('header').diplayNone();", isCorrect: false }, //nezinau
//         { text: "$('header').hide();", isCorrect: true },
//         { text: "$('header').hideIt();", isCorrect: false },
//         { text: "Nėra teisingo atsakymo.", isCorrect: false },
//       ],
//     },
//     {
//       id: 11,
//       question: "Kokią template sistemą naudoja Drupal 8?",
//       answers: [
//         { text: "HTML", isCorrect: false },
//         { text: "Smarty", isCorrect: false },
//         { text: "Twig", isCorrect: true },
//         { text: "PHP", isCorrect: false },
//         { text: "Nėra teisingo varianto", isCorrect: false },
//       ],
//     },
//     {
//       id: 12,
//       question: "Kuo skiriasi kintamieji let nuo var ?",
//       answers: [
//         { text: "Nesiskiria", isCorrect: false },
//         {
//           text: "Var yra globalus kintamasis naudojamas visoje funkcijoje, o let yra vietinis kintamasis, naudojamas blokuose",
//           isCorrect: true,
//         },
//         {
//           text: "Var kintamasis yra skirtas tik tekstiniams kintamiesiams aprašyti, o let numerių kintamiesiems",
//           isCorrect: false,
//         },
//         {
//           text: "Var naudojamas tuomet kai kintamojo ilgis ne didesnis nei 5 simboliai, o let, kuomet daugiau nei 5",
//           isCorrect: false,
//         },
//         { text: "Nėra teisingo atsakymo", isCorrect: false },
//       ],
//     },
//     {
//       id: 13,
//       question: "Kam naudojamas 'use strict'?",
//       answers: [
//         {
//           text: "‘Use strict’ naudojimas apsaugo neleisdamas atlikti tam tikrų veiksmų ir suteikia daugiau išimčių",
//           isCorrect: false,
//         },
//         {
//           text: "Užkerta kelią klaidoms kai atliekami palyginti “nesaugūs” veiksami",
//           isCorrect: false,
//         },
//         {
//           text: "Išjungia painias ir blogai apgalvotas funkcijas",
//           isCorrect: false,
//         },
//         { text: "Visi atsakymai tesisingi", isCorrect: true },
//         { text: "Nėra teisingo atsakymo", isCorrect: false },
//       ],
//     },
//     {
//       id: 14,
//       question: "Kodėl CSS vadinami pakopiniais stiliais?",
//       answers: [
//         { text: "Kodas rašomas pakopomis", isCorrect: false },
//         {
//           text: "Pakopos nusako, kuri taisyklė yra svarbesnė ir bus taikoma elementui",
//           isCorrect: true,
//         },
//         {
//           text: "Įjungus CSS pakopas, galima naudoti !important",
//           isCorrect: false,
//         },
//         { text: "Teisingo atsakymo nėra", isCorrect: false },
//       ],
//     },
//     {
//       id: 15,
//       question: "Koks metodas naudojamas, norint sužinoti masyvo ilgį JS?",
//       answers: [
//         { text: "count", isCorrect: false },
//         { text: "length", isCorrect: true },
//         { text: "valueOf", isCorrect: false },
//         { text: "Nėra teisingo atsakymo", isCorrect: false },
//       ],
//     },
//     {
//       id: 16,
//       question: "Kiek laiko duomenys saugomi local storage?",
//       answers: [
//         { text: "Iki perkraunant puslapį", isCorrect: false },
//         { text: "Vieną parą", isCorrect: false },
//         { text: "Vieną mėnesį", isCorrect: false },
//         { text: "Metus laiko", isCorrect: false },
//         { text: "Neturi galiojimo laiko", isCorrect: true },
//       ],
//     },
//     {
//       id: 17,
//       question:
//         "let kiekis = 12; \n" +
//         "console.log(++kiekis); \n" +
//         "Ką išves konsolėje?",
//       answers: [
//         { text: "undefined", isCorrect: false },
//         { text: "12", isCorrect: false },
//         { text: "13", isCorrect: true },
//         { text: "Nieko", isCorrect: false },
//       ],
//     },
//     {
//       id: 18,
//       question: "Koks metodas naudojamas eilutės duomenis konvertuoti į masyvą?",
//       answers: [
//         { text: "shift()", isCorrect: false },
//         { text: "pop()", isCorrect: false },
//         { text: "splice()", isCorrect: false },
//         { text: "split()", isCorrect: true },
//       ],
//     },
//     {
//       id: 19,
//       question:
//         "function sveikas(){ \n" +
//         ' let vardas="Jonas" \n' +
//         "console.log(vardas)\n" +
//         "} \n" +
//         "sveikas();\n" +
//         "Ką atspausdins konsolėje?",
//       answers: [
//         { text: "Jonas", isCorrect: true },
//         { text: "vardas", isCorrect: false },
//         { text: "sveikas", isCorrect: false },
//         { text: "undefined", isCorrect: false },
//         { text: "nieko", isCorrect: false },
//       ],
//     },
//     {
//       id: 20,
//       question: "Kaip apibrėžiamas SASS kintamasis vardu spalva?",
//       answers: [
//         { text: "const sass spalva;", isCorrect: false },
//         { text: "const spalva;", isCorrect: false },
//         { text: "let spalva;", isCorrect: false },
//         { text: "$spalva string", isCorrect: false },
//         { text: "$spalva", isCorrect: true },
//       ],
//     },
//   ];
// for (let i in questions1){
//     console.log(`${questions1[i].id}. ${questions1[i].question}`);
//     for (let a in questions1[i].answers){
//         if (questions1[i].answers[a].isCorrect)
//             console.log(`Ats: ${questions1[i].answers[a].text}`);
//     }
//     console.log(''); //del grozio
// }