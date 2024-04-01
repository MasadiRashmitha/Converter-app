let weight = document.getElementById("Weight")
weight.addEventListener("input", function(){
    let kg = weight.value
    let pounds = document.getElementById("pounds")
    pounds.innerHTML = `pounds: ${kg * 2.205}`

})
let Measure = document.getElementById("Measurement")
Measure.addEventListener("input", function(){
    let feet = Measure.value
    let centi = document.getElementById("centi")
    centi.innerHTML = `Centimeter: ${feet * 30.48}`

})


let temperature = document.getElementById("Temperature")
temperature.addEventListener("input", function(){
    let cel = temperature.value
    let faren = document.getElementById("faren")
    faren.innerHTML = `Farenheit: ${(cel * 1.8) + 32}`


})