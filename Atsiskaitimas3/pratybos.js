const zodziai = ['Sveiki','visi','mano','vardas','Grantas']
const reverseZodiai = []
for(let i of zodziai){
    i = i.split('').reverse().join('')
    reverseZodiai.push(i)
}
console.log(reverseZodiai);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join