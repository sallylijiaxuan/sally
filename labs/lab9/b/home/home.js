let age

function check() {
    age = document.getElementById("input").value;
    let output = document.getElementById("output");

    if (age <= 0) { // checking for negative number
        document.getElementById("output").style.display = "block";
        output.innerHTML = "Negative number is not acceptable";
        document.getElementById("container").style.visibility = "hidden";
    }

    else if (isNaN(Number(age))) { // checking for non number
        document.getElementById("output").style.display = "block";
        output.innerHTML = "User has failed to enter a number";
        document.getElementById("container").style.visibility = "hidden";
    }
    else if (age % 1 !== 0) { // checking for decimal
        document.getElementById("output").style.display = "block";
        output.innerHTML = "User has not entered a valid age";
        document.getElementById("container").style.visibility = "hidden";
    }

    else if (age >= 18 && age <= 120) { // checking for valid age between 18 and 120
        document.getElementById("container").style.visibility = "visible";
        document.getElementById("output").style.display = "none";
    }

    else { // all other conditions
        document.getElementById("output").style.visibility = "block";
        output.innerHTML = "You may not see the content";
        document.getElementById("container").style.visibility = "hidden";
    }
}