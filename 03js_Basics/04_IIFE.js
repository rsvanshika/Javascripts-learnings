//Immediately Invoked Funtion Expression(IEFE)


// in this way you can invoke function immedaitely

//but when you run two function like this it will create problem
// use ; to solve it


//this is named iife
(function chai(){
    console.log('i am iife');
} ) (); 


(()=>{console.log("i m iife 2")}) ();


//if u want to use parameter


((name)=>{console.log(`hi ${name}`)}) ("jia");
