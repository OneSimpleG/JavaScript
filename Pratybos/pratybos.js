"use strict";
console.log('   Uzd 1.  ')
let num = '42'
num = Number(num)
console.log(num)
console.log('   Uzd 2.1.  ')
let plus = 10
console.log(plus++)
console.log(plus++)
console.log(plus++)
console.log('   Uzd 2.2.  ')
let minus = 10
console.log(--minus)
console.log(--minus)
console.log(--minus)
console.log(--minus)
console.log('   Uzd 2.3.  ')
let numb = '32'
console.log(numb*1)
console.log(+numb)
console.log(Number(numb))
console.log('   Uzd 3.  ')
let x = 80
let y = x + 14
console.log(y)
console.log('   Uzd 4.  ')
let xSvoris = 80
let xUgis = 180
let ySvoris = 60
let yUgis = 170
let xKmi = xSvoris/((xUgis/100)**2)
let yKmi = ySvoris/((yUgis/100)**2)
console.log('Petro KMI:',xKmi.toFixed(2))
console.log('Jono KMI:',yKmi.toFixed(2))
if (xKmi > yKmi){
    console.log('Petro KMI yra didesnis uz Jono')
}
else{
    console.log('Petro KMI yra mazesnis uz Jono')
}
console.log('   Uzd 5.  ')
let tx = 15
let ty = 20
let tz = Math.sqrt((tx**2)+(ty**2))
console.log('X =',tx,'Y =',ty,'Z =',tz)
console.log('   Uzd 6.  ')
let c = 50
let f = ((c * 9)/5)+32
console.log('',c,'°C =',f,'°F')
//-----------------------------