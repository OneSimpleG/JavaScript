"use strict";
// Pratybos 2 /////////////////////////////////////
import Animal from "./model.js";
const tomas = new Animal('Tomas',10)
console.log(tomas);
tomas.getInfo()
tomas.setAge()
tomas.getInfo()
///////////////////////////////////////////////////
class Dog extends Animal{
    constructor(vardas,amzius,kailioSpal,kojuKiek){
        super(vardas,amzius)
        this.furColor = kailioSpal
        this.legNumber = kojuKiek
    }
    getInfo(){
        for(let i in this){
            console.log(`${i}: ${this[i]}`);
        }
    }
}
const dog = new Dog("Reksas",7,"Juodas",4)
dog.getInfo()
///////////////////////////////////////////////////
