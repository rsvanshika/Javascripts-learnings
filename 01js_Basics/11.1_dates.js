// /* methods of date
// 1.toDateString()->gives date in readable form
// 2.getDate();
// 3.getMonth();
// 4.getDay();
// 5.getFullYear();
// 6.getHour();
// 7.getMinutes();
// 8.getSeconds();
// 9.setDate(); to set the date
// 10.setMonth();
// 11.setFullYear();
// 12.setHours();  


// */


// // var now=new Date();
// // console.log(now); //2023-05-20T15:04:25.537Z
// //this time comes from system,bcz js is client side script so it first load on system
// // console.log(now.toDateString());//Sat May 20 2023


// // console.log(now.getDate()) //20

// // console.log(now.getMonth()) //4 

// // console.log(now.getDay()) //6

// // var info= new Date();
// // console.log(info.getDay("20 April 2023")) //6

// //setDate
// var now = new Date();
// now.setDate("23")
// // console.log(now); //2023-07-23T13:11:05.252Z


// //(chai aur code)
// // Dates

// let myDate= new Date();

// console.log(myDate); //2023-07-20T13:00:18.626Z

// console.log(myDate.toString()); //Thu Jul 20 2023 18:30:58 GMT+0530 (India Standard Time)

// console.log(myDate.toISOString()); //2023-07-20T13:01:56.833Z
 
// console.log(myDate.toDateString());// Thu Jul 20 2023


// console.log(typeof myDate) //object

// // let myCreateDate= new Date(2023,0,23); //Mon Jan 23 2023


// // let myCreateDate= new Date("2023-01-14")//Sat Jan 14 2023

//  let myCreateDate= new Date("01-14-2023") //Sat Jan 14 2023


// console.log(myCreateDate.toDateString());

// // timestamp used for quiz

// let myTimeStamp= Date.now();

// console.log(myTimeStamp) //1689858572177
// console.log(myCreateDate.getTime()) //1689858572177


//most used

let newDate=new Date();

newDate.toLocaleString('default',{
    weekday:"long",
})

console.log(newDate.getDay());

