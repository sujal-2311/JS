const name = "sujal"
const repoCount = 20

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sujal-sm-com')

console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(0,4)
console.log(anotherString)  

const newStringOne = "   sujal   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://sujal.com/sujal%20mirani"

console.log(url.replace('%20', '-'))

console.log(url.includes('sujal'))

console.log(gameName.split('-'))
