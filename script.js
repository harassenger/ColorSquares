
var oneOne = document.getElementById("one-one");
var oneTwo = document.getElementById("one-two");
var oneThree = document.getElementById("one-three");
var twoOne = document.getElementById("two-one");
var twoTwo = document.getElementById("two-two");
var twoThree = document.getElementById("two-three");
var threeOne = document.getElementById("three-one");
var threeTwo = document.getElementById("three-two");
var threeThree = document.getElementById("three-three");

//["blue", "green", "red", "yellow", "orange", "purple"]
var colorsArray = ["#3498DB", "#28B463", "#CB4335", "#D4AC0D", "#BA4A00", "#7D3C98"];
var i = 0;
var colorChange;
var intervalColor;
var countInterval;

//Incerases "i" from 0 to length of colorsArray
function countNumbers() { 
    i++;
    if(i >= colorsArray.length) { i = 0; }
}

/*Calls the functions to change colours
with time offset*/
function changeAuto() {
    setTimeout(changeOneOne, 0);
    setTimeout(changeOneTwo, 50);
    setTimeout(changeOneThree, 100);
    setTimeout(changeTwoOne, 150);
    setTimeout(changeTwoTwo, 200);
    setTimeout(changeTwoThree, 250);
    setTimeout(changeThreeOne, 300);
    setTimeout(changeThreeTwo, 350);
    setTimeout(changeThreeThree, 400);
}

/*Starts "Auto" function 
calls functions immediately then
calls them every 450ms, becouse "changeAuto"
function takes 400ms to finish*/
function startColors() {
    changeAuto();
    countNumbers();
    intervalColor = setInterval(changeAuto, 450);
    countInterval = setInterval(countNumbers, 450);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("red").disabled = true;
    document.getElementById("green").disabled = true;
    document.getElementById("blue").disabled = true;
    document.getElementById("yellow").disabled = true;
    document.getElementById("orange").disabled = true;
    document.getElementById("purple").disabled = true;
    document.getElementById("clearButton").disabled = true;
}

/*Stops functions from looping and changing colours*/
function stopColors() {
    clearInterval(intervalColor);
    clearInterval(countInterval);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    document.getElementById("red").disabled = false;
    document.getElementById("green").disabled = false;
    document.getElementById("blue").disabled = false;
    document.getElementById("yellow").disabled = false;
    document.getElementById("orange").disabled = false;
    document.getElementById("purple").disabled = false;
    document.getElementById("clearButton").disabled = false;
}

/*Resets all ffields to white*/
function resetColors() {
    oneOne.style.backgroundColor = "white";
    oneTwo.style.backgroundColor = "white";
    oneThree.style.backgroundColor = "white";
    twoOne.style.backgroundColor = "white";
    twoTwo.style.backgroundColor = "white";
    twoThree.style.backgroundColor = "white";
    threeOne.style.backgroundColor = "white";
    threeTwo.style.backgroundColor = "white";
    threeThree.style.backgroundColor = "white";
}

/*Changes the value of "i" and
calls the "changeAuto" function*/
function changeBlue() {
    i = 0;
    changeAuto();
}

function changeGreen() {
    i = 1;
    changeAuto();
}

function changeRed() {
    i = 2;
    changeAuto();
}

function changeYellow() {
    i = 3;
    changeAuto();
}

function changeOrange() {
    i = 4;
    changeAuto();
}

function changePurple() {
    i = 5;
    changeAuto();
}


/*Assigns colour to fields*/
function changeOneOne() {
    oneOne.style.backgroundColor = colorsArray[i];
}

function changeOneTwo() {
    oneTwo.style.backgroundColor = colorsArray[i];
}

function changeOneThree() {
    oneThree.style.backgroundColor = colorsArray[i];
}

function changeTwoOne() {
    twoOne.style.backgroundColor = colorsArray[i];
}

function changeTwoTwo() {
    twoTwo.style.backgroundColor = colorsArray[i];
}

function changeTwoThree() {
    twoThree.style.backgroundColor = colorsArray[i];
}

function changeThreeOne() {
    threeOne.style.backgroundColor = colorsArray[i];
}

function changeThreeTwo() {
    threeTwo.style.backgroundColor = colorsArray[i];
}

function changeThreeThree() {
    threeThree.style.backgroundColor = colorsArray[i];
}