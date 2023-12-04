"use strict";
//------Uzd. 1------
function suma(){
    let sk1 = parseInt(prompt('Iveskite pirma skaiciu'))
    let sk2 = parseInt(prompt('Iveskite antra skaiciu'))
    alert(`${sk1} + ${sk2} = ${sk1+sk2}`)
}
// suma()
//------Uzd. 2------
function squared(){
    let sk1 = parseInt(prompt('iveskite skaiciu'))
    alert(`${sk1} kvadratu yra ${sk1**2}`)
}
// squared()
//------Uzd. 3------
function positive(){
    let sk1 = parseInt(prompt('iveskite skaiciu'))
    if (sk1>0) alert(`${sk1} yra teigiamas`)
    else if (sk1==0) alert('nulis')
    else alert(`${sk1} yra neigiamas`)
}
// positive()
//------Uzd. 4------
function WordCombine(){
    let sk1 = prompt('iveskite pirma zodi')
    let sk2 = prompt('iveskite antra zodi')
    alert(sk1 +' '+ sk2)
}
// WordCombine()
//------Uzd. 5------
function evenOdd(){
    let sk1 = parseInt(prompt('iveskite skaiciu'))
    if (sk1%2==0) alert(`${sk1} yra lyginis`);
    else alert(`${sk1} yra nelyginis`);
}
// evenOdd()
//------Uzd. 6------
function remains(){
    let sk1 = parseInt(prompt('Iveskite pirma skaiciu'))
    let sk2 = parseInt(prompt('Iveskite antra skaiciu'))
    if (sk1%sk2==0) alert(`${sk1} ir ${sk2} dalijasi be liekanos`)
    else alert(`${sk1} ir ${sk2} nesidalija be liekanos`)
}
// remains()
//------Uzd. 7------
function maxNum(sk1,sk2,sk3){
    let largestNumber = Math.max(sk1,sk2,sk3)
    alert(`${largestNumber} yra didziausias skaicius`);
}
// maxNum(100,50,20)
//------Uzd. 8------
function addition(){
    let sk1 = parseInt(prompt('Iveskite skaiciu'))
    alert(sk1+21+7)
}
// addition()

//------Pratybos su Math------

//------Uzd. 1------
function root(){
    let sk1 = parseInt(prompt('Iveskite pirma skaiciu'))
    alert(`skaiciaus ${sk1} saknis yra ${Math.trunc(Math.sqrt(sk1))}`)
}
// root()
//------Uzd. 2------
function intervalRandom(sk1,sk2){
    alert(Math.trunc(Math.random() * (sk2 - sk1) + sk1))
}
// intervalRandom(5,45)
//------Uzd. 3------
function maxMathNum(sk1,sk2,sk3){
    let largestNumber = Math.max(sk1,sk2,sk3)
    alert(`${largestNumber} yra didziausias skaicius`);
}
// maxMathNum(100,50,20)