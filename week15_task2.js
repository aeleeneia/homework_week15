function check()
{
    let email1 = document.getElementById("exampleInputEmail1");
    let email2 = documment.getElementById("exampleInputEmail2");
    let password = document.getElementById("exampleInputPassword");
    let userName = document.getElementById("exampleInputUserName");

    document.getElementById('errorMessage').innerHTML = "";

    if(email1.value == '') {
        document.getElementById('errorMessage').innerHTML += "Ваш email не заполнен<br>";
    }

    if(password.value == '') {
        document.getElementById('errorMessage').innerHTML += "Ваш пароль не заполнен<br>";
    }

    if(password.value.length<=5) {
        document.getElementById('errorMessage').innerHTML += "Ваш пароль слишком короткий<br>";
    }
} 