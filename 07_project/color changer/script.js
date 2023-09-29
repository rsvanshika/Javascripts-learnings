
const buttonEl = document.querySelectorAll(".button")
// console.log(buttonEl)

const bodyEl=document.querySelector("body")

buttonEl.forEach((button)=>{
    console.log(button);
    button.addEventListener('click',function(e){
        // console.log(e);
        // console.log(e.target);
        if(e.target.id=="grey")
        {
            bodyEl.style.background=e.target.id;
        }
        if(e.target.id=="white")
        {
            bodyEl.style.background=e.target.id;
        }
        if(e.target.id=="blue")
        {
            bodyEl.style.background=e.target.id;
        }
        if(e.target.id=="yellow")
        {
            bodyEl.style.background=e.target.id;
        }
        if(e.target.id=="green")
        {
            bodyEl.style.background=e.target.id;
        }
        if(e.target.id=="purple")
        {
            bodyEl.style.background=e.target.id;
        }

    })

}
   
)