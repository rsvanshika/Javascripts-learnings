const form=document.querySelector('form');


// this use case will give you empty value
// const height = parserInt(document.querySelector('#height').value)
// const Weight = parserInt(document.querySelector('#weight').value)

//stop default action

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const result =document.querySelector("#result")

if(height===''||height<0||isNaN(height)){
    result.innerHTML=`Please give a valid height ${height}`
}

else if(weight===''||weight<0||isNaN(weight)){
    result.innerHTML=`Please give a valid weight ${weight}`
}

else{
  const bmi =  (weight/((height*height)/10000)).toFixed(2)
  //show results
 let weightstatus;
 if(bmi<18.5){
    weightstatus="Underweight"
 }
 else if(bmi>=18.5 && bmi<=24.9)
 {
    weightstatus="Normal weight" 
 }
 else if(bmi>=25.0 && bmi<=29.0)
 {
    weightstatus="Over weight" 
 }
 else if(bmi>=30 && bmi<=34.9)
 {
    weightstatus="Obesity class I" 
 }
 else if(bmi>=35.0 && bmi<=39.0)
 {
    weightstatus="Obesity class II" 
 }
 else if(bmi>=40)
 {
    weightstatus="Obesity class III" 
 }
result.innerHTML=`<span> ${bmi} (${weightstatus}) </span>`

}



})



