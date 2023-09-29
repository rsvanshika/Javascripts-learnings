
// this- talks about current context

// const user ={

//     username:"hitesh",
//     price:999,


//     welcomeMessage:function(){
//         console.log((`${this.username},welcome to website`));
//         console.log(this);
//     }
// }

// user.welcomeMessage(); //hitesh,welcome to website


// user.username="Sam"

// user.welcomeMessage(); //Sam,welcome to website
// console.log(this); //{} empty  in case of browser window will be displayes



// normal function this-----

// function chai(){
//     console.log(this);  //show various detaila[global,idealtime]
// }
 
// chai() 


// function chai(){
//     let username="hitesh"
//     console.log(this.username);   // undefined [we can't use this in function like that]
// }
 
// chai() 


// --ARRow function---

// const chai= ()=>
// {
//     let username="hitesh"
//     console.log(this.username) //undefined
//     console.log(this) //{} return
// }

// chai()

// const addtwo =(num1,num2)=>{

//     return num1+num2
// }
// console.log(addtwo(2,2))


// ------implicit return----
// const addtwo =(num1,num2)=> (num1+num2
//     ) 

// to return object
    const addtwo =(num1,num2)=> ({username:"hites"}
        ) 
console.log(addtwo(2,2)) 

// in case of array 

// const myArray=[22,34,2,3,432]
// myArray.forEach((num)=>(console.log(num+1)));

// console.log(myArray)


