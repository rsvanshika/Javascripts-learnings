/* 
how data is stored and acces in memory data type are of two type:
Primitive
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol   
 
Non-primitive(Reference type)  typeaof=>object
1. arrays
2.Objects
3.Function
*/

// javascript is dynamically typed (we don't need any type for variable)

//symbol
const score =100;

const id=Symbol('123');
const anotheraid=Symbol('123')

console.log(id===anotheraid)// false

//arr
const arr=["vaani",34,"ria"]
console.log(arr)

// object
const person ={
    name:"vaani",
    age:23,
    isUser:true,


}
console.log(person);

const myFunc=function(){
    console.log("myfunction")
}



//typeOf

// Primitive datatypes:
// String - string
// Number - number
// Boolean - Boolean
// Null - object(****)
// Undefined - undefined
// BigInt - bigint
//symbol-uniqueness
// Non-primitive datatypes:
// Array - object
// Function - function(object)
// Object - object





//+++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(primitive-get copy),heap(NonPrimitive -get refrence)

let myYtname="Vani'stastytreat";
let anotherName=myYtname;

anotherName="panchayat"; //change in copy

console.log(myYtname); //Vani'stastytreat

console.log(anotherName); //panchayat

//non primituve


const person1 ={
    nam:"vaani",
    age:23,
    isUser:true,


}
console.log(person1);

const person2 = person1;
person2.age=34;
 console.log(person1.age); //34
 console.log(person2.age); //34 
 //bcz pointing to same object (refrence)





