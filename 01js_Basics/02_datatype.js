"use strict";//treat all JS code as new version

// alert(3+3) // we are using node js not browser


/*\
(primitive)
number
null
string
symbol
boolean
bigInt
undefined
(non-primitive)
object  





*/




// 1.Number (have some range)

let n=34;
console.log(typeof n);

//2.String

const sentence='this is me';
console.log(typeof sentence);
//3.boolean
let bool = 5>6;
console.log(typeof bool);

// 4.null (standalone value)

let user=null;
console.log(typeof user); //object



// 5.undefined

var iAmStandBy;   //when no value is assigned
 console.log(iAmStandBy);
 console.log(typeof iAmStandBy); //unefined

//  6. symbol (to find uniqueness)


//object
const person ={
    name:"vaani",
    age:23,
    isUser:true,


}
console.log(person);


