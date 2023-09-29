const coding =["js","cpp","java","css","html"]


// for each doesn't return anything it return undefined


const values=coding.forEach((item)=>{
    console.log(item);
    // return item
})

console.log(values) //undefined


// sometime we want to use operation on some values and 
//  to return values that passes the function.


//filter  

const myNums=[4,3,24,22,12,33,1]

// const newnum=myNums.filter((element)=>{
//     return element>4
// })

// console.log(newnum)

const newNum =[]

myNums.forEach((element)=>{
     if(element>4){
        newNum.push(element)
     }
})

console.log(newNum)
