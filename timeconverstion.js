let inputEleHours = document.getElementById("hoursInput");
let inputEleMinutes = document.getElementById("minutesInput");
let btnEle = document.getElementById("convertBtn");

let errEle = document.getElementById("errorMsg");
let resultsContainer = document.getElementById("timeInSeconds");


btnEle.addEventListener("click", function() {
    let inputHoursValue = (inputEleHours.value);
    let inputMinutesValue = (inputEleMinutes.value);

    if (inputHoursValue === "") {
        errEle.textContent = "Please enter a valid number of hours";
    } else if (inputMinutesValue === "") {
        errEle.textContent = "Please enter a valid number of minutes";
    } else {
        let timeInSeconds = (parseInt(inputHoursValue) * 3600) + (parseInt(inputMinutesValue) * 60);
        resultsContainer.textContent = timeInSeconds + "s";
    }

});