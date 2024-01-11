"use strict";
class Person {
    constructor(name,lastname,age){
        this.name = name
        this.lastname = lastname
        this.age = age
    }
    showInfo(){
        for (const key in this) {
            console.log(`${key}: ${this[key]}`);
        }
        console.log("");
    }
}
const bob = new Person("Bob","Bobric",32)
const mike = new Person("Mike","Stand",46)
bob.showInfo()
///////////////////////////////////////////////////
class Animal{
    static greeting(){
        console.log("I am an animal species");
    }
}
Animal.greeting() // static funkcija kvieciama ant klases
///////////////////////////////////////////////////
class Student extends Person{
    constructor(name,lastname,age,coarse,avarege){
        super(name,lastname,age)
        this.coarse = coarse
        this.avarege = avarege 
    }
}
const james = new Student("James","Regal","21","JavaScript",8.3)
james.showInfo()
///////////////////////////////////////////////////
class Teacher extends Person{
    constructor(name,lastname,age,salary,subject){
        super(name,lastname,age)
        this.salary = salary
        this.subject = subject
        this.topics = []
    }
    showHapiness(){
        super.showInfo()
        if(this.salary>1200){
            console.log("Hoooray!!!");
        }else if(this.salary>800){
            console.log("Not Bad");
        }else{
            console.log("ok");
        }
    }
    setTopic(topic){
        topic.forEach(el=>this.topics.push(el))
        // this.topics.push(topic)
    }
    getTopics(){
        this.topics.forEach(el=>console.log(el))
    }
}
const steve = new Teacher("Steve","Craftington",21,900)
steve.setTopic(["JS","DB","Linux"])
steve.showHapiness()
steve.getTopics()