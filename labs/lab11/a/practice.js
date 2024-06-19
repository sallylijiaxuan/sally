let num = 0;

function boo() {
    if (booli === 0) {
        document.getElementById("image").style.visibility = "hidden";
        document.getElementById("button").style.backgroundColor = "black";
        document.getElementById("button").style.color = "white";
        document.getElementById("page-wrapper").style.backgroundColor = "black";
        booli++;
    } else {
        document.getElementById("image").style.visibility = "visible";
        document.getElementById("button").style.backgroundColor = "white";
        document.getElementById("button").style.color = "black";
        document.getElementById("page-wrapper").style.backgroundColor = "white";
        booli--;
    }
}