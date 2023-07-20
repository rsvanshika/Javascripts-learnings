// var student= [
//     {name:"Ram",age:15},
//     {name:"sia",age:20}
// ]
// console.log(student)//[ { name: 'Ram', age: 15 }, { name: 'sia', age: 20 } ]
// document.write(student[1].name);

// for(let i=0;i<student.length;i++){
//     document.write(student[i].name);
// }

// --const variable with array and object---
// const a=34;
// a=23;
// console.log(a); // error assignment to const var


const a=["sita",23,"girl"];

// a=30;
// a=["ram",40,"boy"]
// console.log(a);// Assignment to constant variable. error
// but you can assign one by one

a[0]="sia";

console.log(a);
// same is goes with object

//for in loop --> to print object

const obj= {
    fname:"ram",
    lname:"raj",
    age:23
};

for(let key in obj){
    console.log(obj[key]);
    console.log(key +" :" +obj[key])
    
//ram
// fname :ram
// raj
// lname :raj
// 23
// age :23

}