/*
spread operator (.....)
1.Used with array 
...[1,2,3]
spread out value in array








*/
const arr=[1,2,3];
console.log(...arr);//spread out array individually
console.log([...arr]); //put into another array

function fun(...arg){

    console.log(arg);

}
fun(1,2,3)
