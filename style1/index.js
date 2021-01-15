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

let textmonial = [
    {
        id : 1,
        name : "Taniya",
        img : "foodImage/taniya.png.png",
        text : "Keep it easy with these simple but delicious recipes. From make-ahead lunches and midweek meals to fuss-free sides and moreish cakes, we've got everything you need.",
        barendName : "Taniya"

    },

    {
        id : 2,
        name : "James",
        img : "foodImage/James.png.png",
        text : " Once the green beans are crisp-tender, about 4-6 minutes, reduce the heat to medium and add the fresh garlic. QUICKLY toss the green beans in the garlic and remove from the skillet.a",
        barendName : "James"
        
    }
]

let indexList = 0;
let nameText = document.getElementById("name");
let imgText = document.getElementById("imgTextmonial");
let text = document.getElementById("textMonialText");
let barendNameText = document.getElementById("barendName");

const activeBtn = document.getElementById("active");
const activeBtn1 = document.getElementById("active1");

window.addEventListener("DOMContentLoaded", function(){
    functionActive();
})

function functionActive(){
    const itemList = textmonial[indexList];
    nameText.textContent = itemList.name;
    imgText.src = itemList.img;
    text.textContent = itemList.text;
    barendNameText.textContent = itemList.barendName;
}

activeBtn.addEventListener("click", function(){
    indexList++;
    if(indexList > textmonial.length - 1){
        indexList = 0;
    }
    functionActive();
})

activeBtn1.addEventListener("click", function(){
    indexList--;
    if(indexList < 0){
        indexList = textmonial.length - 1;
    }
    functionActive();
})

// website link