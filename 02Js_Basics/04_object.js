

// const tinderUser= new Object(); //singleton object


const tinderUser={}; //non singleton

tinderUser.id="23dc";
tinderUser.name="Sammy";
tinderUser.isLoggedIn =false;

console.log(tinderUser);


const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userFullname:{
            firstname:"hit",
            lastname:"jain"
        }
    }
}

console.log(regularUser.fullname.userFullname.firstname) //hit

const obj1={ 1:"w", 2:"x"}
const obj2={ 3:"w", 4:"x"}

//to combine object
// const obj3={ obj1,obj2}  
//{ obj1: { '1': 'w', '2': 'x' }, obj2: { '3': 'w', '4': 'x' } }



// const obj3=Object.assign(obj1,obj2); 
//source,target [make change in first array]
// { '1': 'w', '2': 'x', '3': 'w', '4': 'x' }

//to avoid this use empty object first

// const obj3=Object.assign({}, obj1 , obj2);  

// another way

const obj3={...obj1 , ...obj2};  




// console.log(obj3)

// console.log(obj1)

//how values comes from database in form of array object
const user =[

    
    {
        id:1,
        email:"jia@gmail.com"

    },

    {
        id:1,
        email:"jia@gmail.com"

    },
    {
        id:1,
        email:"jia@gmail.com"

    },
]

user[1].email;
console.log(tinderUser)

console.log(Object.keys(tinderUser))  //data type of result is array
console.log(Object.values(tinderUser))

console.log(Object.entries(tinderUser))


console.log(tinderUser.hasOwnProperty("isLoggedIn"));

console.log(tinderUser.hasOwnProperty("isLogged"));


// -----------destructring----

const course ={
    coursename:"js in hindi",
    price:"222",
    courseintructor:"hitesh"
}
//to access value using key
const {courseintructor}=course;

console.log(courseintructor)

//to change key name

const {courseintructor:instructor}=course;

console.log(instructor)


// //react props

// const navbar = ({company}) =>{

// }
// navbar(company="hitesh")


// concept of API  (apna kaam kisipr dalna)

// values from backened comes in json format
  

//json  [javascript object notation]
// {
//    "name" :"hitesh",
//     "courseName":"js in hindi",
//     "price":200;
// }


// // api also comes in array format


// // https://randomuser.me/api/

// {"results":[{"gender":"female","name":{"title":"Mrs","first":"Ceyhan","last":"Türkyılmaz"},"location":{"street":{"number":1136,"name":"Atatürk Sk"},"city":"Kütahya","state":"Bitlis","country":"Turkey","postcode":79260,"coordinates":{"latitude":"67.1359","longitude":"67.6338"},"timezone":{"offset":"+5:30","description":"Bombay, Calcutta, Madras, New Delhi"}},"email":"ceyhan.turkyilmaz@example.com","login":{"uuid":"2d6b1082-c4b5-4e2d-ae2f-9c7a7b3eac5b","username":"whitemeercat804","password":"bird33","salt":"sUv5iZx3","md5":"dea5b7380d2c5828ed95ce03f6c0b83b","sha1":"414c99f26a4e812c8c23be94d7ec553ac71fae89","sha256":"69f47b89056e37c990892e157c6523aa3d5a4bfb0c37807f7aa53b5a6dc6cbac"},"dob":{"date":"1971-08-01T22:36:53.166Z","age":52},"registered":{"date":"2016-01-03T09:04:24.908Z","age":7},"phone":"(728)-673-7750","cell":"(509)-293-9406","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/45.jpg","medium":"https://randomuser.me/api/portraits/med/women/45.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/45.jpg"},"nat":"TR"}],"info":{"seed":"d29620ee9cfd41c4","results":1,"page":1,"version":"1.4"}}







