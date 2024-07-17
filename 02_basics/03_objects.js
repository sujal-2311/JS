//singleton
//Object.create

//object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "sujal",
    "full name": "Sujal Mirani",
    [mySym]: "myKey1",
    age: 22,
    location: "Ahmedabad",
    email: "sujal@gmail.com",
    isLoggedIn: false,
    lastLoginDays:  ["Monday", "Saturday"]
}

console.log(JsUser.name)
console.log(JsUser["name"])

console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "sujal@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "sujal@demo.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

