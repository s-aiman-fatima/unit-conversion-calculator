// Function for unit conversion
function convertUnit() {
    let inputValue = parseFloat(document.getElementById("inputValue").value);
    let conversionType = document.getElementById("conversionType").value;
    let result;

    switch (conversionType) {
        case "gallonsToMG":
            result = inputValue / 1_000_000;
            break;
        case "mgToGallons":
            result = inputValue * 1_000_000;
            break;
        case "ftToGallons":
            result = inputValue * 7.48;
            break;
        case "gallonsToFt":
            result = inputValue / 7.48;
            break;
        case "gallonsToLbs":
            result = inputValue * 8.34;
            break;
        case "lbsToGallons":
            result = inputValue / 8.34;
            break;
        case "gpmToMgd":
            result = inputValue * 0.00144;
            break;
        case "mgdToGpm":
            result = inputValue / 0.00144;
            break;
        case "gpmToGph":
            result = inputValue * 60;
            break;
        case "gphToGpm":
            result = inputValue / 60;
            break;
        case "gpmToGps":
            result = inputValue / 60;
            break;
        case "gpsToGpm":
            result = inputValue * 60;
            break;
        case "gphToGps":
            result = inputValue / 3600;
            break;
        case "gpsToGph":
            result = inputValue * 3600;
            break;
        default:
            result = "Invalid selection!";
    }

    document.getElementById("conversionResult").textContent = result;
}

// Function for Lbs/Day Calculation
function calculateLbsPerDay() {
    let concentration = parseFloat(document.getElementById("concentration").value);
    let flow = parseFloat(document.getElementById("flow").value);
    
    if (isNaN(concentration) || isNaN(flow)) {
        document.getElementById("lbsResult").textContent = "Please enter valid numbers!";
        return;
    }

    let lbsPerDay = concentration * flow * 8.34;
    document.getElementById("lbsResult").textContent = lbsPerDay.toFixed(2);
}
