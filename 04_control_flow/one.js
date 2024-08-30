//if

const isUserloggedIn = true;
const temperature = 40;

// if(temperature < 50){
//     console.log("less than 50")
// } else{
//     console.log("greater than 50")
// }

// < , > , <= , >= , == , != , === , !== - comparasion operator

// const score = 200

// if(score > 100){
//     const power = 'fly';
//     console.log(`User power ${power}`)
// }
// console.log(`User power ${power}`)

const balance = 1000;

// if(balance > 500) console.log("test"),console.log("test2") - bad practice

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInfromGoogle = false;
const loggedInfromEmail = true;
if (userLoggedIn && debitCard) {
  console.log("Allow to buy courses");
}
if (loggedInfromGoogle || loggedInfromEmail) {
  console.log("user logged in");
}
