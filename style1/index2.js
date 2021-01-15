let btn = document.querySelector("#toggle");
let navList = document.querySelector("#nav");

btn.addEventListener("click", function(){
    navList.classList.toggle("active");
})

// time container show day and time 
window.addEventListener("DOMContentLoaded", function(){
    setInterval(function(){
        let newDay = new Date();
        let dataList = document.querySelectorAll("#days,#hourse,#minutes,#secound");
        
        for(let i = 0; i < dataList.length; i++){
            dataList[0].innerHTML = newDay.getDay();
            dataList[1].innerHTML = newDay.getHours();
            dataList[2].innerHTML = newDay.getMinutes();
            dataList[3].innerHTML = newDay.getSeconds();
        }   
    }, 1000);
}, false);

// slider image 

const sliderImg = document.getElementById("sliderImgeArray");
const imgButton = document.querySelectorAll(".arrow_circle");

imgButton[0].addEventListener("click", function(){
    sliderImg.setAttribute("src", "foodImage/gallery4.jpg.jpg");
})
imgButton[1].addEventListener("click", function(){
    sliderImg.setAttribute("src", "foodImage/gallery5.jpg.jpg");
})
imgButton[2].addEventListener("click", function(){
    sliderImg.setAttribute("src", "foodImage/gallery3.jpg.jpg");
})
imgButton[3].addEventListener("click", function(){
    sliderImg.setAttribute("src", "foodImage/gallery5.jpg.jpg");
})

// scroll button 
const buttonScroll = document.querySelector(".scroll_top");

window.addEventListener("scroll", function(){
    if(window.pageYOffset > 150){
        buttonScroll.classList.add("activeScrollButton");
    }else{
        buttonScroll.classList.remove("activeScrollButton");
    }
})