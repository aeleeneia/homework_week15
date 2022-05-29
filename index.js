function check() {
    let result = document.getElementById("test").value;
    if(result== '') {
        alert('Ваше поле не заполнено');
    }
}  

function compare(a,b) {
    if(a > b) {
        console.log(a);
        return a;
    } 
    else {
        return b;
    }
}


