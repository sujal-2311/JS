function sayMyName(){
    console.log("S")
    console.log("U")
    console.log("J")
    console.log("A")
    console.log("L")
}
// sayMyName();

// function addTwoNumber(number1,number2){
//     console.log(number1 + number2)
// }

function addTwoNumber(number1,number2){
    // let result = number1 + number2
    // return result;
    return number1 + number2
}


const result = addTwoNumber(10,20)
console.log("Result : ",result)

function loginUserMessage(username = 'sam'){
    if(username === undefined){
        console.log("Please enter a username")
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("sujal"))

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500))


//function with object
const user = {
    username: 'sujal',
    age: 23
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`)
}
handleObject(user)

//function with Array
const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
