"use strict";

let cartBtn = document.getElementById("cartBtn");
let cart = document.getElementById("cart");
let cartExit = document.getElementById("exit");

const plushMap = new Map();

cart.classList.toggle("hide");

cartBtn.addEventListener("click", cartClick);
cartExit.addEventListener("click", cartClick);

function cartClick() {
    cart.classList.toggle("hide");
}


////////////////////////////////////

let bear = document.getElementById("bear");
let bearDesc = document.getElementById("1");

let penguin = document.getElementById("penguin");
let penguinDesc = document.getElementById("2");

let possum = document.getElementById("possum");
let possumDesc = document.getElementById("3");

let rat = document.getElementById("rat");
let ratDesc = document.getElementById("4");

let star = document.getElementById("star");
let starDesc = document.getElementById("5");

penguinDesc.classList.add("hide");
possumDesc.classList.add("hide");
ratDesc.classList.add("hide");
starDesc.classList.add("hide");

penguin.addEventListener("click", function(){
    penguinDesc.classList.toggle("hide");

    if(bearDesc.getAttribute("class") !== "hide"){
        bearDesc.classList.add("hide");
    } else if(possumDesc.getAttribute("class") !== "hide"){
        possumDesc.classList.add("hide");
    } else if(ratDesc.getAttribute("class") !== "hide"){
        ratDesc.classList.add("hide");
    }else if(starDesc.getAttribute("class") !== "hide"){
        starDesc.classList.add("hide");
    }
});

possum.addEventListener("click", function(){
    possumDesc.classList.remove("hide");

    if(bearDesc.getAttribute("class") !== "hide"){
        bearDesc.classList.toggle("hide");
    } else if(penguinDesc.getAttribute("class") !== "hide"){
        penguinDesc.classList.toggle("hide");
    } else if(ratDesc.getAttribute("class") !== "hide"){
        ratDesc.classList.toggle("hide");
    }else if(starDesc.getAttribute("class") !== "hide"){
        starDesc.classList.toggle("hide");
    }
});

rat.addEventListener("click", function(){
    ratDesc.classList.remove("hide");

    if(bearDesc.getAttribute("class") !== "hide"){
        bearDesc.classList.toggle("hide");
    } else if(penguinDesc.getAttribute("class") !== "hide"){
        penguinDesc.classList.toggle("hide");
    } else if(possumDesc.getAttribute("class") !== "hide"){
        possumDesc.classList.toggle("hide");
    }else if(starDesc.getAttribute("class") !== "hide"){
        starDesc.classList.toggle("hide");
    }
});

star.addEventListener("click", function(){
    starDesc.classList.remove("hide");

    if(bearDesc.getAttribute("class") !== "hide"){
        bearDesc.classList.toggle("hide");
    } else if(penguinDesc.getAttribute("class") !== "hide"){
        penguinDesc.classList.toggle("hide");
    } else if(possumDesc.getAttribute("class") !== "hide"){
        possumDesc.classList.toggle("hide");
    }else if(ratDesc.getAttribute("class") !== "hide"){
        ratDesc.classList.toggle("hide");
    }
});

bear.addEventListener("click", function(){
    bearDesc.classList.remove("hide");

    if(starDesc.getAttribute("class") !== "hide"){
        starDesc.classList.toggle("hide");
    } else if(penguinDesc.getAttribute("class") !== "hide"){
        penguinDesc.classList.toggle("hide");
    } else if(possumDesc.getAttribute("class") !== "hide"){
        possumDesc.classList.toggle("hide");
    }else if(ratDesc.getAttribute("class") !== "hide"){
        ratDesc.classList.toggle("hide");
    }
});


/////////////////////////////////////////
let bearPrice = 40;
let penguinPrice = 50;
let possumPrice = 30;
let ratPrice = 20;
let starPrice = 100;
let totalValue = 0;

let cartList = document.getElementById("cartList");
let total = document.getElementById("total");
let checkout = document.getElementById("checkout");


let addToCartBtn = document.getElementsByClassName("cartAdd");

for(let btn of addToCartBtn){
    btn.addEventListener("click", cartAddNum);
}

function cartAddNum() {
    if(bearDesc.getAttribute("class") !== "hide"){
        totalValue = totalValue + bearPrice;
        cartList.innerHTML += "Bear Plushie - $40<br>";
    } else if(penguinDesc.getAttribute("class") !== "hide"){
        totalValue = totalValue + penguinPrice;
        cartList.innerHTML += "Penguin Plushie - $50<br>";
    } else if(possumDesc.getAttribute("class") !== "hide"){
        totalValue = totalValue + possumPrice;
        cartList.innerHTML += "Possum Plushie - $30<br>";
    }else if(ratDesc.getAttribute("class") !== "hide"){
        totalValue = totalValue + ratPrice;
        cartList.innerHTML += "Rat Plushie - $20<br>";
    } else if(starDesc.getAttribute("class") !== "hide"){
        totalValue = totalValue + starPrice;
        cartList.innerHTML += "Star Plushie - $100<br>";
    }

    total.innerHTML = `<b>Tax: $${(totalValue*0.04).toFixed(2)}</b><br><b>Shipping: $5.00</b><br><b>Total: $${(totalValue + (totalValue*0.04) + 5).toFixed(2)}</b>`;
}

checkout.addEventListener("click", checkedOut);

function checkedOut() {
    cartList.innerHTML = "";
    total.innerHTML = "";
    total.innerHTML = "Thank you for shopping with us!"
}




////////////////////////////////////////

let generate = document.getElementById("generateButton");
let rightNum = document.getElementById("rightNum");

generate.addEventListener("click", randomNumbers)

function randomNumbers() {
    if(rightNum.value === "" || isNaN(rightNum.value)){
        num.innerHTML = "please enter a number";
    } else if (rightNum.value > 10 || rightNum.value < 1) {
        num.innerHTML = "please enter a number between 1-10";
    } else {
        let n = Math.floor(Math.random() * 10);
        num.innerHTML = n;

        if(rightNum.value == n){
            generate.innerHTML = "free plushie!";
        } else {
            generate.innerHTML = "generate!"
        }
    }
}






//////////////////////////////////
let form = document.querySelector("#form");

let userName = document.getElementById("name");

let phone = document.getElementById("phone");

let email = document.getElementById("email");
let emailRegex = /\w+@[a-z].\w/ig;


let prefEmail = document.getElementById("prefEmail");
let prefPhone = document.getElementById("prefPhone");
let radioSpan = document.getElementById("radioPref");

let message = document.getElementById("message");

let submit = document.getElementById("submit");

userName.nextElementSibling.innerHTML = "";
    radioSpan.innerHTML = "";
    message.nextElementSibling.innerHTML = "";
    email.nextElementSibling.innerHTML = "";
    phone.nextElementSibling.innerHTML = "";

    let nameValid = false;
    let phoneValid = false;
    let emailValid = false;
    let radioValid = false;
    let messageValid = false;

form.addEventListener("submit", checkValid);


function checkValid(e) {

    e.preventDefault();

        if(userName.value !== "" || userName.value.length !== 0){
            userName.nextElementSibling.classList.add("hide");
        userName.nextElementSibling.innerHTML = "";
        nameValid = true;
        } else if(userName.value === "" || userName.value.length == 0) {
            userName.nextElementSibling.classList.remove("hide");
            userName.nextElementSibling.innerHTML = "Please enter a valid name.";
            nameValid = false;
        } 
    

    
    if(!(prefEmail.checked) && !(prefPhone.checked)) {
        radioSpan.classList.remove("hide");
        radioSpan.innerHTML = "<br>Please choose a method of contact.";
    } else {
        radioValid = true;
        radioSpan.innerHTML = "";
        if(prefEmail.checked) {
            if (emailRegex.test(email.value)) {
                email.nextElementSibling.classList.add("hide");
                emailValid = true;
                email.nextElementSibling.innerHTML = "";
            } else if (!(emailRegex.test(email.value)) || email.value == "") {
                email.nextElementSibling.classList.remove("hide");
                email.nextElementSibling.innerHTML = "Please enter a valid email address.";
            }
        } 
        
        if(prefPhone.checked) {
            if (phone.value.length == 10 || phone.value !== ""){
                phoneValid = true;
                phone.nextElementSibling.classList.add("hide");
                phone.nextElementSibling.innerHTML = "";
            } else if (phone.value.length < 9 || phone.value.length > 12 || phone.value == ""){
                phone.nextElementSibling.classList.remove("hide");
                phone.nextElementSibling.innerHTML = "Please enter a valid phone number.";
            }
        }
    }
    
    
    if (message.value !== "") {
        message.nextElementSibling.classList.add("hide");
        messageValid = true;
        message.nextElementSibling.innerHTML = "";
    } else if (message.value.length == 0) {
        messageValid = false;
        message.nextElementSibling.classList.remove("hide");
        message.nextElementSibling.innerHTML = "Please enter a message.";
    }

    let isValid = false;

    if(phoneValid || emailValid){
        isValid = true;
        radioValid = true;
    }
    
    if(nameValid && messageValid && radioValid && isValid) {
        userName.nextElementSibling.innerHTML = "";
        radioSpan.innerHTML = "";
        message.nextElementSibling.innerHTML = "";
        email.nextElementSibling.innerHTML = "";
        phone.nextElementSibling.innerHTML = "";

        userName.nextElementSibling.classList.add("hide");
        email.nextElementSibling.classList.add("hide");
        phone.nextElementSibling.classList.add("hide");
        message.nextElementSibling.classList.add("hide");
        form.submit();
    }
}