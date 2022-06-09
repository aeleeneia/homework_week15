let userGender = document.getElementsByName("customRadioInline1").find((element) => element.checked);


function check()
{
    let email1 = document.getElementById("exampleInputEmail1");
    let email2 = document.getElementById("exampleInputEmail2");
    let password = document.getElementById("exampleInputPassword");
    let userName = document.getElementById("exampleInputUserName");
    let birthMonth = document.getElementById("inputMonth");
    let birthDay = document.getElementById("inputDay");
    let birthYear = document.getElementById("inputYear");
    // let userGender = document.getElementsByName("customRadioInline1").find((element) => element.checked);

    // document.getElementById('errorMessage').innerHTML = "";
    document.getElementById('errorMessage1').innerHTML = "";
    document.getElementById('errorMessage2').innerHTML = "";
    document.getElementById('errorMessage3').innerHTML = "";
    document.getElementById('errorMessage4').innerHTML = "";
    document.getElementById('errorMessage5').innerHTML = "";
    document.getElementById('errorMessage6').innerHTML = "";

    if(email1.value == '') {
        document.getElementById('errorMessage1').innerHTML += "You need to enter your email.<br>";
        document.getElementById('exampleInputEmail1').style.borderColor = "red";
    }

    if(email2.value == '') {
        document.getElementById('errorMessage2').innerHTML += "You need to confirm your email.<br>";
        document.getElementById('exampleInputEmail2').style.borderColor = "red";
    }


    if(password.value == '') {
        document.getElementById('errorMessage3').innerHTML += "You need to enter a password.<br>";
        document.getElementById('exampleInputPassword').style.borderColor = "red";
    }

    if(password.value.length <=5) {
        document.getElementById('errorMessage3').innerHTML += "Your password is too short.<br>";
        document.getElementById('exampleInputUserName').style.borderColor = "red";
    }

    if(userName.value == '') {
        document.getElementById('errorMessage4').innerHTML += "Enter a name for your profile.<br>";
        document.getElementById('exampleInputUserName').style.borderColor = "red";
    }

    if(birthMonth.value == 'Month') {
        document.getElementById('errorMessage5').innerHTML += "Select your birth month.<br>";
        document.getElementById('inputMonth').style.borderColor = "red";
    }

    if(birthDay.value == '') {
        document.getElementById('errorMessage5').innerHTML += "Select a valid day of the month.<br>";
        document.getElementById('inputDay').style.borderColor = "red";
    }

    if(birthYear.value == '') {
        document.getElementById('errorMessage5').innerHTML += "Enter a valid year.<br>";
        document.getElementById('inputYear').style.borderColor = "red";
    }

    if(userGender.value == '') {
        document.getElementById('errorMessage6').innerHTML += "Select your gender.<br>";
    }

    
} 