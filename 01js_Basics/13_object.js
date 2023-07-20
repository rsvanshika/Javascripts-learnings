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