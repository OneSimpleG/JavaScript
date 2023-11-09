"use strict";
const sentence = 'The quick brown fox jumps over the lazy dog';
const name = 'Petras petraitis'
const hello = 'hello world'
const salis = 'Lietuva'
let num = 42
const gap = '   Tarpas  '

console.log(sentence.concat(' , ',name,' , ',salis))// 'The quick brown fox jumps over the lazy dog , Petras petraitis , Lietuva'
console.log(salis.endsWith('a'))                    // true
console.log(hello.indexOf('world'))                 // 6
console.log(sentence.length)                        // 43
console.log(sentence.match(/[A-Z]/g))               // ['T']
console.log(hello.concat(' ').repeat(3))            // hello world hello world hello world 
console.log(sentence.replace('dog','cat'))          // The quick brown fox jumps over the lazy cat
console.log(sentence.search('fox'))                 // 16
console.log(name.slice(0,6))                        // 'Petras'
console.log(salis.split())                          // ['Lietuva']
console.log(name.startsWith('L'))                   // false
console.log(salis.substring(2,6))                   // 'etuva'
console.log(name.toLowerCase())                     // 'petras petraitis'
console.log(num.toString())                         // '42'
console.log(hello.toUpperCase())                    // 'HELLO WORLD'
console.log(gap.trim())                             // 'Tarpas'
console.log(num++)                                  // 42
console.log(num)                                    // 43
console.log(++num)                                  // 44