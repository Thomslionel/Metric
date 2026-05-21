
let btnEl = document.getElementById("convert-btn");
let inputEl = document.getElementById("value");
let lengthEl = document.getElementById("length-result")
let volumeEl = document.getElementById("volume-result")
let masshEl = document.getElementById("mass-result")
const gallonsLitter = 0.264;
const meterFeet = 3.281;
const kiloPound = 2.204

function convertLitterToGallons(value) {
    return (value * gallonsLitter).toFixed(3);
}


function convertGallonsToLitters(value){

        return (value / gallonsLitter).toFixed(3);

}



function convertMeterToFeet(value) {
    return (value * meterFeet).toFixed(3);
}

function convertFeetToMeter(value) {
    return (value / meterFeet).toFixed(3);
}


function convertKiloToPound(value) {
    return (value * kiloPound).toFixed(3);
}

function convertPoundToKilo(value) {
    return (value / kiloPound).toFixed(3);
}


btnEl.addEventListener("click", function (){
    console.log(inputEl.value)
    let value = Number(inputEl.value);
    let litterToGallons = convertLitterToGallons(value);
    let gallonsToLitters = convertGallonsToLitters(value);
    let meterToFeet = convertMeterToFeet(value);
    let feetToMeter = convertFeetToMeter(value);
    let kiloToPound = convertKiloToPound(value);
    let poundToKilo = convertPoundToKilo(value);


    lengthEl.innerHTML = `${value} meters = ${meterToFeet} feet | ${value} feet = ${feetToMeter} meters`;
    volumeEl.innerHTML = `${value} liters = ${litterToGallons} gallons | ${value} gallons = ${gallonsToLitters} liters`;
    masshEl.innerHTML = `${value} kilos = ${kiloToPound} pounds | ${value} pounds = ${poundToKilo} kilos`;

});
