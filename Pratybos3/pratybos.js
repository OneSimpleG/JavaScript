"use strict";
//------Uzd. 1------
let paz = [10,6,8,9,4,10]
let viso = 0
function pazVidurkis(){
    for (let i = 0; i<paz.length; i++){
        viso += paz[i]
    }
    let vidurkis = viso / paz.length
    return vidurkis;
}
let vidurkis = pazVidurkis()
console.log(vidurkis);
//------Uzd. 2------
function stipendija(vardas){
    if (vidurkis >= 7) console.log(`${vardas} gaus stipendija`);
    else console.log(`${vardas} negaus stipendijos`);
}
stipendija('Petras')
//------Uzd. 3------
function user(vardas){
    console.log(vardas);
    return vardas
}
let username = user('Jonas')
//------Uzd. 4------
let loginTimes = 0
function userLogin(){
    console.log(`Sveiki ${username} jus prisijunget ${++loginTimes} kartus`);
}
for (let i = 0;i < 5;i++){
    userLogin()
}
//------Uzd. 5------
function metAtlyg(vardas,menAtlyg){
    console.log(`${vardas} metinis atlyginimas yra ${menAtlyg*12}`);
}
metAtlyg('Antanas',500)
//------Uzd. 6------
function kelionesKaina(ilgis,kaina){
    let kuroVar = 23.91 // KM/L
    console.log(((ilgis/kuroVar)*kaina).toFixed(2));
}
kelionesKaina(500,7)
//------Uzd. 7------
let metai = 2022
if (metai%2 == 0) console.log('metai lyginiai');
else console.log('metai nelyginiai');