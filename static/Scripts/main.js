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

    console.log(newPerson);

    alert("Se ha realizado la inscripción");
    form.submit();
})