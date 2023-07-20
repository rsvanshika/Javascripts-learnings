/*
1.Substring- return the portion of string 
 string.substring(start,end)


2.Substr-same as substring it has two para start inde and length
 string.subStr(start,length)


3.slice- same as substring 
string.slice(start,end)


*/
//substring
let wel="welcome to javascript code";

//to find character store in a given index
// console.log(wel[8]); //t
// console.log(wel.charAt(8)) //t
// // -------------------------------------
// //to get ascii
// console.log(wel.charCodeAt(8)) //116

// ////
// console.log(wel.substring(3,7));
// console.log(wel.substring(0,7));
// console.log(wel.substring(11));

// //substring with length

// var str = "education" ;
// var str1=str.substring(str.length-1);
// console.log(str1);

// // comparison between three
// var string="Edureka Javascript";
// var substring=string.substring(0,7);
// console.log(substring);

// var subStr= string.substr(2,2); // startindex,length
// console.log(subStr);

// var slice=string.slice(0,7);
// console.log(slice);
// var slice2=string.slice(0);
// console.log(slice2);
// var slice3=string.slice(-7);//count from right
// console.log(slice3);


/*
1.string.startsWith("value")

2.string.endsWith("value")
3.string.includes("value")
---all above return true or false

4.string.indexof("value")
5.string.charAt(index)
6.string.lastIndexOf("value")

7.string.search(value)---- returns start index of value







*/
let mystring="Hello,welcome to my world";
let result=mystring.startsWith("Hello");
console.log(result);
result=mystring.endsWith("d");
console.log(result);
// ---search---
result=mystring.search("welcome");
console.log(result);

//  -------split string into array----

var words = mystring.split(" "); // word ny word
console.log(words);

console.log( mystring.split("")); //character by character

// 




// let mystring="Hello,welcome to my world";
// ----use of match--- 
//if you want to get the substring
var res = mystring.match("to"); 
// console.log(res) // return 
// [
//     'to',
//     index: 14,
//     input: 'Hello,welcome to my world',
//     groups: undefined
//   ]
var regularExpression = /to/g;


// ------regular expression----(used for pattern matching)
// syntax 
//  var varname= /msg/(g/gi)  g-case sensitive gi-case insensitive

var updatedsentence =mystring.match(regularExpression);

console.log(updatedsentence)

var numst="This is 2345 the number given in 40858928 the string means sample 84925502 45322 "

var redEx= /[0-4]+/g; //to give range
var ans =numst.match(redEx);
console.log(ans)





