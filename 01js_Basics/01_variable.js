// values and variable in js



const accountId= 144553;
let accountEmail="abc123@gmail.com";
var accountPassword="12345";
accountCity="Agra"; //can be done but not preferred
let accountState;


/*
prefer not to use var bcz of block scope and functional scope

*/

// accountId=2; //not allowed

console.log(accountId);

accountEmail="abcs@gmail.com";
accountPassword=2312;
accountCity="jaipur";
//print in tabular form
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])



