

// if condition


//<,>,<=,>=,==,===,!=,!==



//if else


// else if




/* 
switch syntax

switch(variable){
   case value1 : {
       " statement";
   break;
   }
  
 default:"  ";

}






 //scope
 /*
global - can be accessible from anywhere
var make variable global 


 */

//  var a1=10;
//  if(a1>=10)
//  {
//   var b=90; //var has global scope so it can be accessed from anyhwhere
//  }
// console.log(b);//  o/p- 90

// var a2=10;
//  if(a2>=10)
//  {
//   let b2=90; //let has block scope so it can,t  be accessed outside block
//   }
// console.log(b2); //refrence error:b2 is not defined


// challenge
// let year=2020;
// if(year%4===0){
//   debbuger;
//   if(year%100!=0)
//   {
//     console.log("true")
     

//   }
//   else{
//     if(year%400==0){
//       console.log("true")
//     }
//     else{
//       console.log("true")
//     }
//     console.log("false")
//   }}
//   else{
//     console.log("false")
//   }

// ternary operator:


//conditoion ? true : false

var a= 10;
 var b=20;
 var ans= (a>b)?a:b;

 


//  false value

// false,0,-0,BigInt 0n,"",null,undefined,NaN


// True value

//"0",'false'," ",[],{},function(){}

// to check if array is empty

const userEmail=[];

if(userEmail.length===0){
    console.log("array is empty")
}

const emptyObj={};

    if(Object.keys(emptyObj).length===0){

        console.log("object is empty")

    }


// important!!!!!!!!!!!!!!

// [---------Nullish Coalescing Operator (??): null  undefined------------]

let val1;
val1=5??10

console.log(val1)  //5


val1=null?? 10;

console.log(val1) //10


val1=undefined ?? 15;

console.log(val1) //15


val1=null?? 10?? 15;

console.log(val1) //10



