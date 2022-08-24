document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup1").classList.add("active");
});

document.querySelector(".popup1 .close-button").addEventListener("click",function(){
    document.querySelector(".popup1").classList.remove("active");
});

// popup2

document.querySelector("#show-signIn").addEventListener("click",function(){
    document.querySelector(".popup2").classList.add("active");
});

document.querySelector(".popup2 .close-button").addEventListener("click",function(){
    document.querySelector(".popup2").classList.remove("active");
});