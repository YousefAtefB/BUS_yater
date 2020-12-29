var vehicleId=document.getElementById("idspan"),
    vehicleType=document.getElementById("tspan"),
    BTN=document.getElementById("btn");

vehicleId.innerHTML="#123456";
vehicleType.innerHTML="MCV";

BTN.onclick = function() {
    "use strict";
    var id = vehicleId.innerText;
    console.log(id);
}