let entries = document.querySelectorAll(".pc-entry");


entries.forEach(function(element){
    element.addEventListener("click", clickHandler)
});

function clickHandler (event){
   
    if(event.target.className == "pc-more"){
        
        this.classList.toggle("exp");
        
    }
}

let menuBackground = document.querySelector("header .solid-bg");
window.setTimeout(function(){
    menuBackground.style.background = "yellow";
}, 3000);






/*

entry.forEach(function(element){
    element.addEventListener("click", clickFunction)
});

function clickFunction(evt){
    let tex = evt.target.previousElementSibling;
    
}

*/