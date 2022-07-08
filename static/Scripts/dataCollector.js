function collector () {
    //Collect value from input text fields

    let name = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    
    //Collect value from radio button
    let food = document.querySelector("input[name='comida']:checked").value;
    
    //Returns array of collected data
    return [name, lastName, email, phone, food];
}

export { collector };