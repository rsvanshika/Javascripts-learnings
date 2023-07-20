//function is block of used to perform a particular task

//function definition:(function definition and function declaration)
//consist of function keyword followed by: 1.name 2.paramter 3.js statement inside{}



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
let logMsgVar=function(msg,number){
    console.log(msg,number);
}
logMsgVar("test"); // op:test undefined  [you are calling a function]
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


// function parameter vs function arguments
//function parameter are the name listed in function's definition.

//function arguments are the real values passed to the function.

// why function?
// reusuability  dry
  



// -------------akshay saini notes--------

// 1. Function statement or function declaration
// a(); // a called

function a(){
    console.log("a called")
} //this is function statement
a(); // a called

// 2.Function expression
// b(); throws error
var b= function 
(){
    console.log("b called")
}   //this is function expression
b() ; //b called

// difference is hoisting 
//When we assign a function into a variable that is Function Expression. &
//  We can not do Hoisting by this becz it acts like variable

//3.Anonymous function (function without name ,does not have their own identity)
//anonuous function is used when function are used as values 
//means u can used to assign as a variable
var c=function(){

}

//4.Named function expression
var b= function xyz(){
    console.log(xyz)
}   //this is function expression
b() ; //b called
// xyz() //error [reference error bcz xyz is not created in global scope
//  it can be call inside]

//difference between parameter and argument
// When we creating a function  & put some variabels in this ( )
//  that is our Parameters.
        function ab( param1, param2 ){
                              console.log("")}
  //     & When we call this function & pass a variabel in this ( ) that is our Arguments
        ab( 4, 5 );


//First class function
/* 1.function can be passed into another func as argument,
can be received as parameter
2. we can return a function from a function
3.  The Ability of use function as value,
*     Can be passed as an Argument,
*     Can be executed inside a closured function &
*     Can be taken as return form.
is knowns as first class function

*/

var f=function(parameter1){
    console.log(parameter1)

    
}
function st(){

}
f(st)


var f1=function(){
   
    return function xy(){
        console.log("inside xy")

    }
}
console.log(f1())




// Arrow function

var j=()=>{
  console.log("inside arrow funtion")  
}

j();



 





/////higher ordr function