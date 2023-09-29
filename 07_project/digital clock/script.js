const clock=document.getElementById('clock');



//run on every second ->koi method dedo or btao kitni der me run krna h
setInterval(function(){

    let date = new Date();
    console.log(date.toLocaleTimeString())

    clock.innerHTML=date.toLocaleTimeString();

},1000)