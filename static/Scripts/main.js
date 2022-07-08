import { Volunteer } from "./Model.js";
import { collector } from "./dataCollector.js";

//Event for submitting the form
let form = document.getElementById("form");

form.addEventListener("submit", (event) =>{
    //Prevents form from submitting with default behaviour
    event.preventDefault();

    //Collects data and creates user bsed on the data
    let collectedData = collector();
    let newPerson = new Volunteer(... collectedData);

    fetch("destinationURL", {
        method: "POST",
        body: JSON.stringify(newPerson)})
        .then(alert("Se ha realizado la inscripción"))
        .catch((error) => console.error(`Ha habido un error: ${error}`));

    form.submit();
})