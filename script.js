//calculator App
//global variables
var buttons = document.querySelectorAll(".numBtn");
var displayMemory = ""
var storeNum = ""
var operation = ""

buttons.forEach(function (btn) {
    console.log(btn);
//event handler
    btn.addEventListener("click", function () {
        buttonClick(btn)
    })

});
//function to capture buttons into input field
function buttonClick(btn) {
    var value = btn.value;
    var display = document.querySelector("#display")
    if (value >=0 && value <= 9) {
        displayMemory = displayMemory + value
        display.value = displayMemory

    }
    if (value == "clr") {
        displayMemory = ""
        storeNum = ""
        display.value = displayMemory
    }
    if (value == "+") {
        operation = value 
        calculate (operation)
    
    }
    if (value == "-") {
        operation = value 
        calculate (operation)
    }
    if (value == "*") {
        operation = value 
       calculate (operation)
    }
    if (value == "/") {
        operation = value 
        calculate (operation)
    }
    if (value == "equal") {
        calculate (operation)
    }
}
function calculate (operator) {
    if (storeNum == "") {
        storeNum = displayMemory
        displayMemory = ""
        display.value = ""
    }else {
        if (operator == "+") {
            storeNum = parseInt(storeNum) + parseInt(displayMemory);
        }
        else if (operator == "-"){
            storeNum = parseInt(storeNum) - parseInt(displayMemory);
        }
        else if (operator == "*"){
            storeNum = parseInt(storeNum) * parseInt(displayMemory);
        }
        else if (operator == "/"){
            storeNum = parseInt(storeNum) / parseInt(displayMemory);
        }
        displayMemory = ""
        display.value = storeNum
    }
}
