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

let today = new Date();

let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
let hour = today.getHours();
let min = today.getMinutes();
// let time

if (day < 10) {
    day = "0" + day;
}

if (month < 10) {
    month = "0" + month;
}

// if (hour > 12) {
//     hour -= 12;
//     if (hour < 10 && hour !== 0) {
//         hour = "0" + hour;
//     }
//     time = hour + ":" + minute + "PM";
// } else {
//     if (hour < 10) {
//         hour = "0" + hour;
//     }
//     time = hour + ":" + minute + "AM";
// }

let ampm = hour < 12 ? "AM" : "PM";
hour = (hour % 12) || 12;
if (hour < 10) {
    hour = "0" + hour;
}
min = min < 10 ? "0" + min : min;

document.getElementById("time-date").innerHTML =
    `
        <h3> ${hour}:${min} ${ampm} </h3>
        <h5> ${month}/${day}/${year} </h5>
    `
;