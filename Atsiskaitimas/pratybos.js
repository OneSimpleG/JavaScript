"use strict";
//------Uzd. 1------
function hello(sveikinimas){
    console.log(sveikinimas);
    return sveikinimas
}
let sveik = hello('Labas')
function greeting(vardas){
    console.log(sveik +' '+ vardas);
}
greeting('Grantas')
greeting('Rafis')
//------Uzd. 2------
function biggerSmaller(sk1,sk2){
    if (sk1>sk2) console.log(`${sk1} didesnis uz ${sk2}`);
    else if (sk2>sk1) console.log(`${sk2} didesnis uz ${sk1}`);
    else{
        console.log(`Skaiciai lygu ${sk1+sk2}`);
        return sk1+sk2
    } 
}
let bigSmall = biggerSmaller(20,20)
//------Uzd. 3------
function fizzAndBuzz(fizzBuzz){
    if (fizzBuzz === 'fizz') console.log('Bazz');
    else if (fizzBuzz === 'bazz') console.log('fizz');
    else console.log('Please provide fizz or buzz');
}
fizzAndBuzz('fizz')
//------Uzd. 4------
function triangle(sk1,sk2,sk3){
    if ((sk1**2)+(sk2**2)<=(sk3**2)) console.log('trikampis gausis');
    else console.log('trikampis nesigaus');
}
triangle(10,5,bigSmall)
//------Uzd. 5------
function figure(){
    let fPlotas = 0
    let shape = prompt('Iveskite kokia figura norike apskaicuoti (trikampis / kvadratas)')
    if (shape == 'trikampis'){
        function figureTri(){
            let b = parseInt(prompt('Iveskite trikampio pagrido ilgi'))
            let h = parseInt(prompt('Iveskite trikampio aukstine'))
            return (b*h)/2
        }
        alert(`figuros plotas yra ${figureTri()}`)
    }
    else if (shape === 'kvadratas'){
        function figureKvad(){
            let a = parseInt(prompt('Iveskite staciakampio pirmos krastines ilgi'))
            let a2 = parseInt(prompt('Iveskite staciakampio pirmos krastines ilgi'))
            return a*a2
        }
        alert(`figuros plotas yra ${figureKvad()}`)
    }
    else alert('Netaip Ivesta figura')
    
}
// figure()
//------Uzd. 6------
// function isSeven(x) { return x="7" ? false : true : false;}
function isSeven(x){x==7 ? console.log(x==7) : console.log(x==7);;}
isSeven(8)
//------Uzd. 7------
function isEqual(x,y){
    if (x===y) console.log(x===y);
    else console.log(x===y);
}
isEqual(1,1)
//------Uzd. 8------
function proPriPay(prob,prize,pay){
    if (prob*prize>pay) console.log(prob*prize>pay);
    else console.log(prob*prize>pay);
}
proPriPay(10,5,60)
//------Uzd. 9------
function minToSec(min){
    console.log(`${min} min = ${min*60} sec`);
}
minToSec(10)
//------Uzd. 10------
function calculator(){
    let x = parseInt(prompt('Iveskite pirma skaiciu'))
    let veik = prompt('Iveskite veiksma (+,-,*,/)')
    let y = parseInt(prompt('Iveskite antra skaiciu'))
    switch (veik) {
        case '+':
            console.log(`${x} + ${y} = ${x+y}`);
            break;
        case '-':
            console.log(`${x} - ${y} = ${x-y}`);
            break
        case '*':
            console.log(`${x} * ${y} = ${x*y}`);
            break
        case '/':
            console.log(`${x} / ${y} = ${x/y}`);
            break
        default:
            console.log('Netaip ivestas zenklas');
            break;
    }
}
// calculator()