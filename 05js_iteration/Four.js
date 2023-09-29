//how to make object key and value iterable



 const myObj={
    name:"vaani",
     age:23,
     city:"agra"}

//for in

//to print keys
for(const key in myObj){
    console.log(key)
}


//to print value

for(const key in myObj){
    console.log(myObj[key])
}


// how for in works in array

const prog =["js","html","c++","css"]

 //it will print keys 0,1,2,3
for(const key in prog){
    console.log(key)
}

//to print value
for(const key in prog){
    console.log(prog[key])
}



// for in  use in map


const map = new Map()
map.set('IN',"Indian")
map.set('FR',"France")
map.set('AUS',"Australia")


console.log(map)

 // it is not iterable
// for(const key in map){
//     console.log(key) // it will print both
// }
