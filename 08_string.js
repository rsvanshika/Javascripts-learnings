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
console.log(wel.substring(3,7));
console.log(wel.substring(0,7));
console.log(wel.substring(11));

//substring with length

var str = "education" ;
var str1=str.substring(str.length-1);
console.log(str1);

// comparison between three
var string="Edureka Javascript";
var substring=string.substring(0,7);
console.log(substring);

var subStr= string.substr(2,2); // startindex,length
console.log(subStr);

var slice=string.slice(0,7);
console.log(slice);
var slice2=string.slice(0);
console.log(slice2);
var slice3=string.slice(-7);//count from right
console.log(slice3);


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
result=mystring.search("welcome");
console.log(result);

