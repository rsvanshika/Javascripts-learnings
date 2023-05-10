// function logMsg(msg,number){
//     console.log(msg,number);
// }
// // logMsg(100,"vaani"); // o/p : 100 vaani
// logMsg(100); //o/p:100 undefined

// //if you want to pass default value
// function logMsg(msg="val",number=100){ //default value override when you pass any value
//     console.log(msg,number); //o/p 100 100
// }
//  logMsg(100) ;

 //function if defined again it will over ride the previous function bcz all function stored as variable

 //In js you can assign function to variable it is called function epression
//   here you don't need to name the function that's why it is anonymous function
// now you can call/access the function using var name only
// it don't have name so it is anonymous function
 
//Anonymous function
// let logMsgVar=function(msg,number){
//     console.log(msg,number);
// }
// logMsgVar("test"); // op:test undefined  [you are calling a function]
// console.log(logMsgVar) //it will return function  O/p:[Function: logMsgVar]

// logMsgVar("test",10);
// logMsgVar=40; //this variable can be reasssigned
// console.log(logMsgVar);
// // logMsgVar(); // error:= logMsgVar is not a function



//function scope
// function add(a){
//     var b=90; // var acts functional scope inside function
//     return a+b;
// }

// var sum=add(100);

// console.log(sum); //op:190
// console.log(b); // b is not defined bcz whenevr we call a function it will have function scope 
//with the end of function execution .scope will be destroyed

function add(a){
      b=90; //now it will be created at global scope so it is become accessible outside
    return a+b;
}

var sum=add(100);

console.log(sum);   //op:190
console.log(b); //op:90