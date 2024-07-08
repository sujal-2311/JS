// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint
const score = 100
const scoreValue = 100.3


const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 34567891234567890n

//JS is dynamically typed language

//Reference (Non primitive)

// Array, Object, Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name : "sujal",
    age: 22,
}

const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof bigNumber)