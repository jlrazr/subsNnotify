function collector () {
    //Collect value from input text fields
    let name = document.getElementById("fname").value;
    let lasName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    
    //Collect value from input text fields
    let food = document.querySelector("input[name='comida']:checked").value;
    
    //Returns array of collected data
    return [name, lasName, email, phone, food];
}

export { collector };