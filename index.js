let drivers = ['0', '1', '2', '3']
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

console.log(selectingDrivers[1](drivers));

function createFareMultiplier(num) {
    return function (number) {
        return number * num;
    }
}
console.log(createFareMultiplier(2)(7))

const fareDoubler = function (number) {
    return createFareMultiplier(2)(number);
}
const fareTripler = function (number) {
    return createFareMultiplier(3)(number);
}
function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}
console.log(selectDifferentDrivers(drivers));