"use strict"

let username;
let kilometers;
let age = document.querySelector(".form-select");
const kmPrice = 0.21;
let underAgeCouponPrecentage = 20;
let overAgeCouponPrecentage = 40;
let couponValue = 0;
let finalPrice = 0;
const loginBtn = document.querySelector(".generate_btn");
const cancelBtn = document.querySelector(".cancel_btn");


loginBtn.addEventListener("click", function () {
    const username = document.querySelector("[name='username']").value;
    const kilometers = document.querySelector("[name='kilometers']").value;
    const ageValue = age.options[age.selectedIndex].text;
    const ridePrice = (kilometers * kmPrice);

    console.log(username, kilometers, age);

    switch (ageValue){
        case "Minorenne":
            couponValue = (ridePrice / 100) * underAgeCouponPrecentage;
            finalPrice = (ridePrice - couponValue).toFixed(2);
            document.querySelector(".t_name").innerHTML = username;
            document.querySelector(".t_offer").innerHTML = `minorenni`;
            document.querySelector(".t_carriage").innerHTML = Math.floor(Math.random() * (10) + 1);
            document.querySelector(".t_codeCP").innerHTML = Math.floor(Math.random() * (90000) + 10000);
            document.querySelector(".t_price").innerHTML = `${finalPrice}€`;
            break;
    
        case "Anziano":
            couponValue = (ridePrice / 100) * overAgeCouponPrecentage;
            finalPrice = (ridePrice - couponValue).toFixed(2);
            document.querySelector(".t_name").innerHTML = username;
            document.querySelector(".t_offer").innerHTML = `anziani`;
            document.querySelector(".t_carriage").innerHTML = Math.floor(Math.random() * (10) + 1);
            document.querySelector(".t_codeCP").innerHTML = Math.floor(Math.random() * (90000) + 10000);
            document.querySelector(".t_price").innerHTML = `${finalPrice}€`;
            break;
    
        default:
            finalPrice = ridePrice.toFixed(2);
            document.querySelector(".t_name").innerHTML = username;
            document.querySelector(".t_offer").innerHTML = `standard`;
            document.querySelector(".t_carriage").innerHTML = Math.floor(Math.random() * (10) + 1);
            document.querySelector(".t_codeCP").innerHTML = Math.floor(Math.random() * (90000) + 10000);
            document.querySelector(".t_price").innerHTML = `${finalPrice}€`;
    }
})

cancelBtn.addEventListener("click", function () {
    document.querySelector("[name='username']").value = "";
    document.querySelector("[name='kilometers']").value = "";
    document.querySelector(".t_name").innerHTML = "--";
    document.querySelector(".t_offer").innerHTML = "--";
    document.querySelector(".t_carriage").innerHTML = "--";
    document.querySelector(".t_codeCP").innerHTML = "--";
    document.querySelector(".t_price").innerHTML = "--";
})

