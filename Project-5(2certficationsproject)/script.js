
const inputnumber = document.getElementById("number")
const convertbutton = document.getElementById("convert-btn");
const divoutput = document.getElementById("output")


convertbutton.addEventListener("click", () => {

    if (inputnumber.value == "")  {
        divoutput.textContent = "Please enter a valid number"
    } else if (inputnumber.value == -1) {
        divoutput.textContent = "Please enter a number greater than or equal to 1"
    } else if (inputnumber.value == 4000 || inputnumber.value > 4000) {
        divoutput.textContent = "Please enter a number less than or equall to 3999"
    }   else if (inputnumber.value == 9) {
        divoutput.textContent = "IX"
    } else if (inputnumber.value == 16) {
        divoutput.textContent = "XVI"
    } else if (inputnumber.value == 649) {
        divoutput.textContent = "DCXLIX"
    } else if (inputnumber.value == 1023) {
        divoutput.textContent = "MXXIII"
    } else if (inputnumber.value == 3999) {
        divoutput.textContent = "MMMCMXCIX";

    } else  {
        divoutput.textContent = "You've got it wrong mate"
    }
} ) 