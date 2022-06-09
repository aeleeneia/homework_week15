
function changeTheme() {
    switch (document.getElementById("backgroundTheme").value) {
        case "darkTheme":
            document.getElementById("background").style.backgroundColor = "black";
            break;
        case "lightTheme":
            document.getElementById("background").style.backgroundColor = "white";
            break;
        case "greenTheme":
            document.getElementById("background").style.backgroundColor = "green";
            break;
    }
}