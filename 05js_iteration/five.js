// MOst imp loop for array


const coding =["js","cpp","java","css","html"]

//higher order function
/*
1.for each 
array.forEach(element => {
    
});
it will iterate through all element and apply that function on the element




*/
coding.forEach(function(element) {
    console.log(element+ 1)
    
});


//Another variation is arrow function

coding.forEach(element => {
    console.log(element+ 2)
    
});

//another way

function printme(item){
    console.log(item)
}

coding.forEach(printme) // just give refrence don't execute it


// MOre points
//you can give more parameter like index and array



coding.forEach(function(element,index,arr) {
    console.log(element,index,arr)
    
});



// for each use in array of object

const myCoding =[
    {
        lang:"javascript",
        langFile:"js"
    },
    {
        lang:"java",
        langFile:"java"
    },
    {
        lang:"python",
        langFile:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.lang)
})
