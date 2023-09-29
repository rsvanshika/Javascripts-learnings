var a=["sanjay","ram","ajay","sia"];
//sorting
a.sort();
console.log(a); //[ 'ajay', 'ram', 'sanjay', 'sia' ]'
//reverse
a.reverse();
console.log(a); //[ 'sia', 'sanjay', 'ram', 'ajay' ]

// to add value in last

a.push("jia");
console.log(a);//[ 'sia', 'sanjay', 'ram', 'ajay', 'jia' ]


//delete from last
a.pop();
console.log(a);//[ 'sia', 'sanjay', 'ram', 'ajay' ]




//delete in the start
a.shift();
console.log(a); //[ 'sanjay', 'ram', 'ajay' ]

//enter in start
a.unshift("anay");
console.log(a); //[ 'anay', 'sanjay', 'ram', 'ajay' ]

//concat array
var s =["raj","karan"]
var c= a.concat(s);
console.log(c) //[ 'anay', 'sanjay', 'ram', 'ajay', 'raj', 'karan' ]

//join-- to make array in to string ,, you can use a symbol to separate
var d= c.join("-");
console.log(d);//(string)anay-sanjay-ram-ajay-raj-karan

//slice -- arr.slice(start,end) -slice out part of array
console.log(a);//[ 'anay', 'sanjay', 'ram', 'ajay' ]
console.log(a.slice(2,3)) //[ 'ram' ]
console.log(a.slice(-2,-1))//[ 'ram' ]

//splice- arr.splice(start,howmany,"newvalue")   (how many{optional} used tp del)
//make changes in existing array;
console.log(a);//[ 'anay', 'sanjay', 'ram', 'ajay' ]
a.splice(2,1,"via","ama");
console.log(a);

 // Array.isArray(name of array)--> to check if its array or not
 console.log(Array.isArray(a));


 //name.indexOf("sia") indexOf (search fromfirst) and lastIndexOf ( search from last)

 var name=["sia","jia","nia","tina","sia"];
 var e=name.indexOf("sia");//0
 var e=name.indexOf("sia",2);//4
 console.log(e);

 var e=name.lastIndexOf("sia");
 console.log(e);//4

 //includes ()--> name.includes("value to check")


console.log(name.includes("sia"));//true

//some()==>check if any element of array pass the result
// array.some(function)
var ages=[25,2,18,5]
console.log(ages);//[ 25, 2, 4, 5 ]
var b= ages.some(isAdult); //trues
console.log(b);
function isAdult(age){
    return age>=18;
}

//every()==>check for every element of array pass the result

var b= ages.every(isAdult); 
console.log(b); //false

//find()==> returns the value of the first element in an array that pass a test

var b= ages.find(isAdult); 
console.log(b); // 25

//findIndex()--> same as find bt return only index

var b= ages.findIndex(isAdult); 
console.log(b); // 0

// -----------------Array filter------------------

// filter()--->return array of  all elements pass the condition
console.log(ages);//[ 25, 2, 18, 5 ]
 var b= ages.filter(isAdult);
 console.log(b); //[ 25, 18 ]

 //fill()---> fill all elements in a array with a static value
  ages.fill(2);
  console.log(ages); //[ 2, 2, 2, 2 ]

//   ----------for each---------(to print method one by one)

var arr=["jai","ram","cat","neha"]

    arr.forEach(function loop(value){
        console.log(value);
    })
    
// jai
// ram
// cat
// neha

arr.forEach(function loop(value,index){
    console.log(value,index);
})
// jai 0
// ram 1
// cat 2
// neha 3

// to convert into array usimg from

console.log(Array.from("hitesh"));  
//[ 'h', 'i', 't', 'e', 's', 'h' ]

console.log(Array.from({name:"Hitesh"}));   //make empty array


let score1=100;
let score2=200;

console.log(Array.of(score1,score2));   //[ 100, 200 ]