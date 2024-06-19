let first;
let second;

function addition() {
    first = document.getElementById('first').value;
    second = document.getElementById('second').value;
    document.getElementById('output').innerHTML = String(Number(first) + Number(second));
}

function subtraction() {
    first = document.getElementById('first').value;
    second = document.getElementById('second').value;
    document.getElementById('output').innerHTML = String(Number(first) - Number(second));
}

function multiplication() {
    first = document.getElementById('first').value;
    second = document.getElementById('second').value;
    document.getElementById('output').innerHTML = String(Number(first) * Number(second));
}

function division() {
    first = document.getElementById('first').value;
    second = document.getElementById('second').value;
    document.getElementById('output').innerHTML = String(Number(first) / Number(second));
}