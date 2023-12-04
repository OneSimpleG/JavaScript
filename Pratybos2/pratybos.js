"use strict";
//------Uzd. 1------
function HelloWorld() {
    console.log('Hello World!');
}
HelloWorld()
//------Uzd. 2------
function Hello(vardas){
    console.log(`Hello ${vardas}!`);
}
Hello('Grantas')
Hello('Mark')
//------Uzd. 3------
let vardas = 'Petras'
let amzius = 0
function prabegoMetai(){
    console.log(`${vardas} ${amzius++}`);
}
for (let i=0; i<5; i++){
    prabegoMetai()
}
//------Uzd. 4------
function minSkaicius(x,y,z){
    return Math.min(x,y,z)
}
let minXYZ = minSkaicius(10,15,20)
console.log(minXYZ);
//------Uzd. 5------
function vidSkaicius(x,y,z) {
    let vidukis = (x + y + z)/3
    console.log(vidukis);
}
vidSkaicius(15,minXYZ,3)
//------Uzd. 6------
function pliusVienas(x){
    console.log(x+1);
}
pliusVienas(6)