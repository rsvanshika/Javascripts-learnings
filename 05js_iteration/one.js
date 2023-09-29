// for
// 1.for
// a.ForEach--used when each element is parsed
// b.for of-- used for iterable ie.array and string
// c.for in-- used for enumerable ie object  also used for iterable  in which index acts as key
// 2.while
// 3.do...while

// */

// //for loop
// var a=1;
// var b=2;
// for(var num=0;num<11;num+=2)
// {
//     console.log(num);
// }




// //for each

//  var a=[1,2,3,4,5]
//  a.forEach(item=>console.log(item));

//  //for of
 
//  for(var item of a){
//     console.log(item);
//  }

//   //for in  (to access index )
 
//   for(var item in a){
//     console.log(item);
//  }


 




//  code or chai

// break(break the loop) and continue (skip the condition and continue)


for(let i=1;i<=20;i++){

    if(i==4)
    {
        continue;
    }

    if(i==5){
        console.log(" 5 is detected");
        break;
    }

console.log(`value of i is ${i}`)

}
