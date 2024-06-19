let first;
let second;
let ans;

function addition() {
    first = document.getElementById('first').value;
    second = document.getElementById('second').value;
    ans = Number(first) + Number(second);
    document.getElementById('output').innerHTML = String(ans);
    isNeg(ans);
}

function subtraction() {
    first = document.getElementById('first').value;
    second = document.getElementById('second').value;
    ans = Number(first) - Number(second);
    document.getElementById('output').innerHTML = String(ans);
    isNeg(ans);
}

function multiplication() {
    first = document.getElementById('first').value;
    second = document.getElementById('second').value;
    ans = Number(first) * Number(second);
    document.getElementById('output').innerHTML = String(ans);
    isNeg(ans);
}

function division() {
    first = document.getElementById('first').value;
    second = document.getElementById('second').value;
    ans = Number(first) / Number(second);
    document.getElementById('output').innerHTML = String(ans);
    isNeg(ans);
}

function power() {
    first = document.getElementById('first').value;
    second = document.getElementById('second').value;

    ans = 1
    for (let i = 0; i < second; i++) {
        ans *= Number(first)
    }

    document.getElementById('output').innerHTML = String(ans);
    isNeg(ans);
}

function erase() {
    document.getElementById('first').value = "";
    document.getElementById('second').value = "";
    document.getElementById('output').innerHTML = "";
}

function isNeg(ans) {
    if (ans < 0) {
        document.getElementById('output').style.color = "red";
    }
    else {
        document.getElementById('output').style.color = "black";
    }
}