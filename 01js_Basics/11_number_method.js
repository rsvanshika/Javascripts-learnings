/*
toString: converts to string
toExponential: convert to 10 base
toFixed:convert to fixed
toPrecision:to reduce length

Number Properties:
1.Number()
2.parseInt():return no. without decimal
3.parseFloat(): return no. with decimal
4.isFinite():check if given no. is finite
5.isInteger():check if given no. is integer
6.toFixed(no.digits):give decimal digit till 
7.toPrecision(no.of digit): give round figure
*/

var x=10;
console.log(x.toString()); //10
var x="20";
console.log(typeof x); //string
var x=Number("20");//convert into number
console.log(typeof x); //number

//parseInt
var a="99 99";
console.log(parseInt(a)); //99
//parseFloat
var b="99.23";
console.log(parseFloat(b));//99.23
//Number.isFinite()
var c="hello";
console.log(Number.isFinite())//false
//Number.isInteger()
var d=100;
console.log(Number.isInteger(d))//true

//toFixed (used in ecom app)

var e=34.22344;
console.log(e.toFixed(2));//34.22

// var f=34.4562;
// console.log(f.toFixed(2)); //34.46


// // strictly number
// const score=new Number(200);
// console.log(score);

// // toPreficion: to reduce length round offf

const p= 123.8955;
console.log(p.toPrecision(3)) //124


// const hundred =10000000;
// console.log(hundred.toLocaleString()); //10,000,000(us std)
// console.log(hundred.toLocaleString('en-IN'));// 1,00,00,000

// console.log(Number.MAX_SAFE_INTEGER)

