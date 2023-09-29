//  Array specific loop

// for of

// ["","",""] - string Array

// [{},{},{}] - object array


const arr = [1,2,3,4,5]


//for of - kis object pr aapko loop lgana ,object can be string also
  
//syntax

// for(const iterator of object){

      
// }

for (const num of arr){
    console.log(num);
}


const greetings="Hello world"

for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}


//maps - have unique values


const map = new Map()
map.set('IN',"Indian")
map.set('FR',"France")
map.set('AUS',"Australia")


console.log(map)


for(const key of map){
    console.log(key) // it will print both
}

// [ 'IN', 'Indian' ]
// [ 'FR', 'France' ]
// [ 'AUS', 'Australia' ]

// if you want to print it separately use destructuring



for(const [key,value] of map){
    console.log(`key is ${key} and value is ${value}`)  
}

// const myObj={'name':"vaani", 'age':23,'city':"agra"}

///it will show error 

// for(const [key,value] in myObj){
//     console.log(key) 
// }



//for in map

