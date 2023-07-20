
// one way-----

document.getElementById("header").onmouseenter=colorChange;


// another way---
document.getElementById("header").addEventListener("click",function(){
    // document.getElementById("header").style.border="10px solid red"  
    this.style.border="10px solid red"   //same as above

});

function colorChange(){
    document.getElementById("header").style.background="green";

}