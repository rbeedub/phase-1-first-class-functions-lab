function returnFirstTwoDrivers (drivers) {
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers (drivers) {
    return drivers.slice(drivers.length - 2, drivers.length);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(fareNumber) {
    return function multiply(fareNumber) {
        return fareNumber * fareNumber;
    }
}

function fareDoubler(num) { 
    let num2 = createFareMultiplier()
    return function (num2) {
        return num * num2 
    }
}

function selectDifferentDrivers(drivers, driversArray) {
    if (driversArray === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers()
    } else {
        return returnLastTwoDrivers()
    }
}

