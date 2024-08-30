//if the value of var is redeclared then the redeclared value of the var will be used
var c = 300
let a = 300

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}
// console.log(a) 
// console.log(b) not defined
// console.log(c) 30

function one(){
    const username = 'sujal'
    function two(){
        const website = 'youtube'
        console.log(username)
    }
    console.log(website)
    two()
}
// one()

if(true){
    const username = 'sujal'
    if(username === 'sujal'){
        const website = ' Youtube'
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

// ------------------- interesting ----------------

console.log(addone(5))
function addone(num){
    return num + 1;
}

// console.log(addTwo(5))
const addTwo = function(num){
    return num + 2;
}

