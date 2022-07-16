// Code your solution here

// findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

function findMatching(driverArray, string) {
    const match = driverArray.filter(function (words) { return words.toLowerCase() === string.toLowerCase()});
    return match;
}

function fuzzyMatch(driverArray, string) {
    const fuzzy = driverArray.filter(function (words) { return words.toLowerCase().indexOf(string.toLowerCase()) === 0 });
    return fuzzy;
}

function matchName(driverArray, string) {
    const property = driverArray.filter(function (words) {return words.name === string});
    return property;
}