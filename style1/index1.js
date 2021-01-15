let btn = document.querySelector("#toggle");
let navList = document.querySelector("#nav");

btn.addEventListener("click", function(){
    navList.classList.toggle("active");
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

// text show 

const textShow = document.querySelector("#img");
textShow.addEventListener("click", imgClickFunction, false);
const showImg = document.querySelectorAll(".img_text");

function imgClickFunction(e){
    if(e.target !== e.currentTarget){
        let idImg = e.target.id;
        for(let i = 0; i < showImg.length; i++){
            showImg[i].style.display = "block";
        }
    }

    e.stopPropagation();
}

// let object in textmonial 

let textmonila = [
    {
        id : 0,
        img : "foodImage/about_chif2.jpg.jpg",
        name : "William",
        peragraf : "Pull Apart Dabeli is an interesting appetizer recipe made with round bread. This easy monsoon recipe from Kutch region can be served with hot tea to create a perfect fusion."
    },

    {
        id : 1,
        img : "foodImage/about_chif3.jpg.jpg",
        name : "James",
        peragraf : "Grilled Fish with Sauteed Veggies is a Continental recipe that can be prepared on any occasion. This is an easy-to-make main dish recipe that can be made easily at home."
    },

    {
        id : 2,
        img : "foodImage/about_chif4.jpg.jpg",
        name : "Lucas",
        peragraf : "To prepare this easy recipe, take a bowl and add fish fillets in it. Add salt, black pepper and lemon juice over the fillets and marinate for some time."
    },

    {
        id : 3,
        img : "foodImage/about_chif5.jpg.jpg",
        name : "John",
        peragraf : "Chocolate and Walnut Silk Cake is a dessert of your dreams. This flour-free and incredibly moist chocolate cake is topped with silky chocolate frosting. Prepared butter, sugar, egg, chocolate ganache,"
    },

    {
        id : 4,
        img : "foodImage/about_chif6.jpg.jpg",
        name : "David",
        peragraf : "Egg and Bread Pudding is a Continental dessert made with bread, eggs, milk and fresh cream. This moist and creamy pudding is a treat for kids and an ideal dessert recipe that you can"
    }
]


const imgSlider = document.getElementById("imageSlider");
const nameText = document.getElementById("nameText");
const peragrahText = document.getElementById("peragrahText");
let indexTextmonial = 0;

window.addEventListener("DOMContentLoaded", function(){
    textmonialFunction();
}, false);

function textmonialFunction(){
    let totalTextmonialList = textmonila[indexTextmonial];
    imgSlider.src = totalTextmonialList.img;
    nameText.textContent = totalTextmonialList.name;
    peragrahText.textContent = totalTextmonialList.peragraf;
}

const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");

leftButton.addEventListener("click", function(){
    indexTextmonial++;
    if(indexTextmonial > textmonila.length - 1){
        indexTextmonial = 0;
    }
    textmonialFunction();
})

rightButton.addEventListener("click", function(){
    indexTextmonial--;
    if(indexTextmonial < 0){
        indexTextmonial = textmonila.length - 1;
    }
    textmonialFunction();
})