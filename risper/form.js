document.addEventListener("DOMContentLoaded", function() {
    const nameDisplay = document.querySelector("#nameDisplay");
    const nameinput = document.querySelector("#nameinput");
    const regNumberInput = document.getElementById("regNo");
    const phoneNumberInput = document.getElementById("phoneNo");
    const myForm = document.getElementById("myForm");
    const formDetailsDisplay = document.getElementById("formDetailsDisplay");

    nameinput.addEventListener("change", function(event) {
        nameDisplay.textContent = event.target.value;
    });

    myForm.addEventListener("submit", function(event) {
        event.preventDefault();

        formDetailsDisplay.innerHTML += '<br>' + regNumberInput.value + ' ' + phoneNumberInput.value;

        regNumberInput.value = "";
        phoneNumberInput.value = "";
    });
});

function validateForm() {
    var regNo = document.forms["myForm"]["regNo"].value;
    var phoneNo = document.forms["myForm"]["phoneNo"].value;
    var regNoErr = false;
    var phoneNoErr = false;

    
    if (regNo === "") {
        printError("regErr", "Registration number is required");
        regNoErr = true;
    } else {
        var regex = /^[a-zA-Z0-9]+$/;
        if (!regex.test(regNo)) {
            printError("regErr", "Please enter a valid registration number");
            regNoErr = true;
        }
    }

    
    if (phoneNo === "") {
        printError("phoneErr", "Phone number is required");
        phoneNoErr = true;
    } else {
        var regex = /^[0-9]+$/;
        if (!regex.test(phoneNo)) {
            printError("phoneErr", "Please enter a valid phone number");
            phoneNoErr = true;
        }
    }

    
    return !regNoErr && !phoneNoErr;
}

function printError(id, Msg) {
    document.getElementById(id).innerHTML = Msg;
}
