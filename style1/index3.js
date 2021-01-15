let btn = document.querySelector("#toggle");
let navList = document.querySelector("#nav");

btn.addEventListener("click", function(){
    navList.classList.toggle("active");
})

const buttonScroll = document.querySelector(".scroll_top");

window.addEventListener("scroll", function(){
    if(window.pageYOffset > 150){
        buttonScroll.classList.add("activeScrollButton");
    }else{
        buttonScroll.classList.remove("activeScrollButton");
    }
})