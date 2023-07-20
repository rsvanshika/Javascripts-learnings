









/* 
switch syntax

switch(variable){
   case value1 : {
       " statement";
   break;
   }
  
 default:"  ";

}




1.for
a.ForEach--used when each element is parsed
b.for of-- used for iterable ie.array and string
c.for in-- used for enumerable ie object  also used for iterable  in which index acts as key
2.while
3.do...while

*/

// //for loop
// var a=1;
// var b=2;
// for(var num=0;num<11;num+=2)
// {
//     console.log(num);
// }
// //for each
//  var a=[1,2,3,4,5]
//  a.forEach(item=>console.log(item));

//  //for of
 
//  for(var item of a){
//     console.log(item);
//  }

//   //for in  (to access index )
 
//   for(var item in a){
//     console.log(item);
//  }


 //while





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

var a= 10;
 var b=20;
 var ans= (a>b)?a:b;
 console.log(ans)