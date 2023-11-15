"use strict";
console.log('   Uzd. 1  ')
const amz = 40
if (amz >= 40){
    console.log('Tinkamas amzius')
}
console.log('   Uzd. 2  ')
const sk = 40
sk%2==0 ? console.log('Lyginis') : console.log('Nelyginis')
console.log('   Uzd. 3  ')
const sask = 128.36
sask > 50 ? console.log('Uzteks apmoketi mokescius') : console.log('Neuzteks apmoketi mokescius')
console.log('   Uzd. 4  ')
const vidurkis = 8
const lankomumas = 'geras'
if (vidurkis >= 8 && lankomumas == 'geras'){
    console.log(`Jusu vidurkis ${vidurkis} ir lankomumas geras, stipendija gausit`)
}
else{
    console.log('Deja, stipendija nepriklauso')
}
console.log('   Uzd. 5  ')
const sk1 = 10
const sk2 = 9
const sk3 = 7
if (sk1>sk2 && sk>sk3)console.log(`${sk1} yra didesnis uz ${sk2} ir ${sk3}`)
else if (sk2>sk1 && sk2>sk3)console.log(`${sk2} yra didesnis uz ${sk1} ir ${sk3}`)
else if (sk3>sk1 && sk3>sk2)console.log(`${sk3} yra didesnis uz ${sk1} ir ${sk2}`)
console.log('   Uzd. 6  ')
const vedes = false
const atlyginimas = 950
const vardas = 'Petras'
if (vedes == false && atlyginimas >= 950)console.log('Sveikiname, jus gavote paskola!')
else if (vedes == true && atlyginimas >= 1500)console.log('Paskola bus suteikta')
else console.log('Kai uzdibsi daugiau, ateik, pakalbesim')
console.log('   Uzd. 7  ')
const diena = '3'
switch (diena){
    case"1":
        console.log('Pirmadienis')
        break
    case"2":
        console.log('Antradienis')
        break
    case"3":
        console.log('Treciadienis')
        break
    case"4":
        console.log('Ketvirtadienis')
        break
    case"5":
        console.log('Penktadienis')
        break
    case"6":
        console.log('Sestadienis')
        break
    case"7":
        console.log('Sekmadienis')
        break
    default:
        console.log('Neteisingas nurodytas skaicius')
        break
}
console.log('   Uzd. 8  ')
const men = '10'
switch (men){
    case"1":
        console.log('Sausis')
        break
    case"2":
        console.log('Vasaris')
        break
    case"3":
        console.log('Kovas')
        break
    case"4":
        console.log('Balandis')
        break
    case"5":
        console.log('Geguze')
        break
    case"6":
        console.log('Birzelis')
        break
    case"7":
        console.log('Liepa')
        break
    case"8":
        console.log('Rugpjutis')
        break
    case"9":
        console.log('Rugsejis')
        break
    case"10":
        console.log('Spalis')
        break
    case"11":
        console.log('Lapkritis')
        break
    case"12":
        console.log('Gruodis')
        break
    default:
        console.log('Neteisingas nurodytas skaicius')
        break
}