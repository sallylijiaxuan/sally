function check() {
    let age= document.getElementById("age").value;

    if (Number(age) >= 18) {
        document.getElementById("container").style.visibility = "visible";
    }
}