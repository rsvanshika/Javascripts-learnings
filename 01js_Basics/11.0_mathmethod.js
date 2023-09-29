//methods of math
// all function are followed my "Math"
/*
1.ceil()- give upper value nearest integer when no. is  in decimal
2.floor()-give lower value nearest integer when no. is  in decimal
3.round()- nearest integer value;
4.trunc()-eliminate all decimal






*/




// ceil()


var a=2.35;
console.log(Math.abs(a))
console.log(Math.ceil(a));//3
console.log(Math.ceil(-a))//-2
// floor()
console.log(Math.floor(a));//2
console.log(Math.floor(-a))//-3

//round()
console.log(Math.round(a)); //2

//truc()
console.log(Math.trunc(a)); //2

//min

console.log(Math.max(2,3,4,5))

//random

console.log(Math.random()); //gives value 0-1

console.log((Math.random()*10)); //gives value from 0 to 10
console.log((Math.random()*10)+1); //gives value from 1 to 10
console.log(Math.floor(Math.random()*10)+1); //gives value from 1 to 10 //3
const min=10;
const max=20;

// formula

console.log(Math.floor(Math.random()*(max-min+1))+min)



