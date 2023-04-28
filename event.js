/* Document object Model -Events
keyBoard event -keydown,keypress,keyup
form events- focus,blur,change,submit
window events- scroll ,resize,hashchange,load,unload


*/
function paraclicked(){
    document.getElementById("abc").setAttribute("style","color:blue")
}

document.getElementById("abc").addEventListener("click",paraclicked)