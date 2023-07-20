/* methods of date
1.toDateString()->gives date in readable form
2.getDate();
3.getMonth();
4.getDay();
5.getFullYear();
6.getHour();
7.getMinutes();
8.getSeconds();
9.setDate(); to set the date
10.setMonth();
11.setFullYear();
12.setHours();  


*/


// var now=new Date();
// console.log(now); //2023-05-20T15:04:25.537Z
//this time comes from system,bcz js is client side script so it first load on system
// console.log(now.toDateString());//Sat May 20 2023


// console.log(now.getDate()) //20

// console.log(now.getMonth()) //4 

// console.log(now.getDay()) //6

var info= new Date();
console.log(info.getDay("20 April 2023")) //6

//setDate
var now = new Date();
now.setDate("23")
document.write(now);
