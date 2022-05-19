function checkSignupForm(form) {
    //If First name not entered
    if(form.firstname.value==""){
        alert("Please enter first name");
        return false;
    }
    //If last name is not entered
    if(form.lastname.value=""){
        alert("Please enter last name");
        return false;
    }
    //if email is not entered
    if(form.email.value==""){
        alert("Please enter the email");
        return false;
    }
    //if phone number is not entered
    if(form.phonenumber.value=""){
        alert("Please enter the phone number");
        return false;
    }
    // If password not entered
    if (form.password1.value == ''){
        alert ("Please enter Password");
        return false;
    }
    // If confirm password not entered
    if (form.password2.value== ''){
        alert ("Please enter confirm password");
        return false;
    }
    // If Not same return False.    
    if (form.password1.value != form.password2.value) {
        alert ("\nPassword did not match: Please try again...")
        return false;
    }
    else{
        alert("Registration Successful");
        return true;
    }
}