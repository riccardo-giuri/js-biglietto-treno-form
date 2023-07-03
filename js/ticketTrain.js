"use strict"

let username;
let kilometers;
let age;
const kmPrice = 0.21;
let underAgeCouponPrecentage = 20;
let overAgeCouponPrecentage = 40;
let couponValue = 0;
let finalPrice = 0;
const Login_btn = document.querySelector(".generate_btn");


Login_btn.addEventListener("click", function () {
    const username = document.querySelector("[name='username']").value;
    const kilometers = document.querySelector("[name='kilometers']").value;
    const age = document.querySelector("[name='age']").value;
    const ridePrice = (kilometers * kmPrice);

    console.log(username, kilometers, age);

    switch (true){
        case age < 18:
            couponValue = (ridePrice / 100) * underAgeCouponPrecentage;
            finalPrice = (ridePrice - couponValue).toFixed(2);
            document.getElementById("username").innerHTML = username;
            document.getElementById("ticket_cost").innerHTML = `Il costo della sua tratta ferroviaria è di ${finalPrice}€`;
            break;
    
        case age > 65:
            couponValue = (ridePrice / 100) * overAgeCouponPrecentage;
            finalPrice = (ridePrice - couponValue).toFixed(2);
            document.getElementById("username").innerHTML = username;
            document.getElementById("ticket_cost").innerHTML = `Il costo della sua tratta ferroviaria è di ${finalPrice}€`;
            break;
    
        default:
            finalPrice = ridePrice.toFixed(2);
            document.getElementById("username").innerHTML = username;
            document.getElementById("ticket_cost").innerHTML = `Il costo della sua tratta ferroviaria è di ${finalPrice}€`;
    }
})



