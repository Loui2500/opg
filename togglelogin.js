let toggleBtn = document.getElementById("toggle-login");
let loginForm = document.getElementById("form-login");

toggleBtn.addEventListener("click", function(){
    loginForm.classList.toggle("flex-all");

if(loginForm.classList.contains("hidden")){
    this.innerHTML = "Log ind";
}
else{
    this.innerHTML = "Annulér";
}

});
