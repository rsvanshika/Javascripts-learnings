// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

// console.log(sumWithInitial);
// // Expected output: 10


// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

//reduce method


const myNum=[1,2,3]


const myTotal =myNum.reduce( (acc,currval)=>{
    console.log(`acc=${acc} and currVal =${currval}`)
    return(acc+currval)},0);

console.log(myTotal)


const shoppingCart=[
    {
        item:"Js course",
        price:2
    },
    {
        item:"web dev course",
        price:2
    },
    {
        item:"data sci course",
        price:29
    },
    {
        item:"mobile dev course",
        price:2
    }
]

const total=shoppingCart.reduce((acc,course)=>{return acc+course.price},0)

console.log(total)