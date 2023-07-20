//what is a callback function in javascript
// Function that is passed on as argument to another 
//function is called callback function.
//here y is callback function bcz its upto x when y is called by it.

// function x(y){

// }
// x(function y(){
    
// }) 
//js is a sychronous and single-threaded language

//how it work in async

// setTimeout(function(){
//     console.log("timer")
// },5000) //it will came to callstack after 5sec while everything clear out
// //Js only one call stack (one main thread )
// function x(y){
// console.log("x");
// y();
// }
// x(function y(){
//    console.log("y") ;
// }) 
//x y timer(after 5 sec)

//if we have any operation blocks the call stack its called blocking main thread
//Use async operation for things that takes time
/*
without firstclass function,callbacks we can't do async operation



*/
 function counter(){
    let count=0;
document.getElementById("clickme")
.addEventListener("click",function xyz(){
 console.log("button clicked",++count)
});

 }
 counter();
