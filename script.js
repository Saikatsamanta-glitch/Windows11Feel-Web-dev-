let taskbar =document.getElementsByClassName("icons")[0]
let startmenu=document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", ()=>{
    if(startmenu.style.bottom=="50px"){
        startmenu.style.bottom ="-655px"
    }
    else{
        startmenu.style.bottom ="50px"
    }
})