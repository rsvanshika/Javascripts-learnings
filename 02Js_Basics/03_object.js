// object---> advance version of array
var a ={
    firstName:"ria",
    lastName:"jain",
    age:25,
    email:"abc@123",
    favourite:["food","movie","sing"],
    salary:function(){
        return 25000;
    },
    fullname:function(){
        return this.firstName + " " + this.lastName
    },
    living:{
        city:"fzd",
        state:"up"

    }
}
console.log(a);//{
//     firstName: 'ria',
//     lastName: 'jain',
//     age: 25,
//     email: 'abc@123',
//     favourite: [ 'food', 'movie', 'sing' ],
//     salary: [Function: salary],
//     fullname: [Function: fullname],
//     living: { city: 'fzd', state: 'up' }
//   }
// document.write(a.email);
// document.write("</br>")
// document.write(a.favourite)
// document.write("</br>")
// document.write(a.salary())
// document.write("</br>")
// document.write(a.fullname());
// document.write("</br>")
// document.write(a.living.city);


//another way to creating an object

var per = new Object();
per.fname="ram";
per.lname="raj";
per.age=30;
console.log(per);//{ fname: 'ram', lname: 'raj', age: 30 }





// --------------chai or code------------


const mySym=Symbol("key1") //object literal
const jsUser={
    name:"vaani",
    // mySym:"mykey1", //type:string

   [mySym] :"mykey1",
    age:22,
    "full name":"vrs",
    email:"vrs@gamil.com",
    lastLogin:["sunday","monday"]
}

console.log(jsUser)
console.log(jsUser.name)  //not preferred
console.log(jsUser["email"])

// vaani
// vrs@gamil.com

// console.log(jsUser.full name)
//NOte: in case of string key you can't access using .


console.log(jsUser["full name"])

// incase of symbol

// symbol as key

console.log(jsUser.mySym) 
console.log(typeof jsUser.mySym)  // string


console.log(jsUser[mySym])  

console.log(typeof jsUser[mySym])

// Object.freeze --> changes is not made now



//function in object

jsUser.greeting = function(){
    console.log("hey dear ")
}

jsUser.greeting2 = function(){
    console.log(`hey dear ${this.name} `)
}

console.log(jsUser.greeting); //[Function (anonymous)]

jsUser.greeting();  //hey dear

jsUser.greeting2(); //hey dear vaani









