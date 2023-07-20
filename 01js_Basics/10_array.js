/*
let array_name=[item1,item2....]
special type of object
have function in array
*/

// define array in two ways
// let arr=[];
// let arr1= new Array();
// //define obj
// let obj1={};
// arr[0]=0;
// console.log(arr);

// //modify array
// arr[0]=1;
// console.log(arr)
// let a=[1,2,3,4,5,6]
// delete a[5]; //leaves space
// console.log(a)//[ 1, 2, 3, 4, 5, <1 empty item> ]
// console.log(a[5]);//undefined




var newArr=[1,3,4,5,67,44]
//return sum of the array:

// var sum=0; // accumulator is also used
var accumulator=0;
 
for(var value of newArr){
    // sum+=value;
    accumulator+=value;
}
//  console.log(sum);
 console.log(accumulator);

 //better approach
//accumulator value wil be created in memory
 function sumArr(accumulator,value){
    // console.log(accumulator,value)
   
    return accumulator+value; //if you dont return anything it will return undefined
 }
 
//Reduce is higher order function((logic you want to be apply on array)
// function will have two argument [accumalotr(to store result) and current value]) that takes another function as argument ]
 //return single element (max,min,sum)

 //accumulator will be initialised with first value to avoid it we passn
 //0 while calling the function and after first initiatlisation accum
 //store the result
 //[1,3,4,5,67,44]-> reduce
 
// var s=newArr.reduce(sumArr))
var maxVal= newArr.reduce(function(accum,val)
{ 
    if(accum<val){
        return val;
    }
    return accum;

  },-1)  //Number.MIN_SAFE_INTEGER

console.log(maxVal)

// console.log(s);
   