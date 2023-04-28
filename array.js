/*
let array_name=[item1,item2....]
special type of object
have function in array
*/

// define array in two ways
let arr=[];
let arr1= new Array();
//define obj
let obj1={};

/*array methods
1.arr.length-total items present
2.concate method
arr1.concat(arr2)
3.push("value")-add elements to end and provide new length (updated)
4.pop()-return last element and remove it
5.reverse()- reverse all elements
6.shift()-delete the first and return thr first element
7.unshift(values)-to add values from starting and return the length of the new array
8.slice(begin,end)-extract section of array give end-1 value
9. join("+")-join values in form of string
*/
let list=['bag','shoes','dress']
console.log(list);
console.log(list[1]);
list[3]='watch';//to add new value
console.log(list);
console.log(list.length);
let color=['blue','green','red'];
console.log(color.concat(list));
console.log(list.pop());
console.log(list.push('heels'));
console.log(list);

//reverse the entire method
console.log(list.reverse());

console.log(list.shift())
console.log(list.unshift('pen','book'));

console.log(list.slice(0,1));
console.log(list.join("+"));


/*
1.sort()- arrange alphabetically
for number there is different code

*/
console.log(list.sort());
let ar=[23,44,22,1,4];
ar.sort(function(a,b){return a-b});
console.log(ar);
let ar1=[23,2,3,26,43];
ar1.sort((a,b)=>a-b);
console.log(ar1);


//sorting in array
let a1=['a','b','c'];
let a2=['b','c','a'];
console.log(a1.sort()===a1,a2.sort()==a2,a1.sort===a2.sort())
console.log(typeof a1)
console.log(typeof a2)


const letters=['b','P','c','a']; //sorted acc to utf-16 code unit value
console.log(letters.sort());

//to find unicode value

letters.forEach((letter)=>{
    console.log(letter, ' ',letter.charCodeAt(0))
})

//to sort the properties of object
