//map--> v=basically return array after perfi=orming function

var ary=[
    {fname:"ria",lname:"jain"},

    {fname:"sia",lname:"raj"},

    {fname:"jia",lname:"jain"}
];

var b=ary.map(test2);
console.log(b);//[ 'ria', 'sia', 'jia' ]
function test2(c){
    return c.fname; 
}



var arr=[11,4,8,7];
var b=arr.map(test);
console.log(b); //[ 110, 40, 80, 70 ]
function test(x){
    return x*10;
}