// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    console.log('DB CONNECTED')
})();

( (name) => {
    console.log(`${name}, DB CONNECTED`)
})('sujal')
