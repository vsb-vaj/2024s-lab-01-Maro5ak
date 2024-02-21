// 1#  ========== BONUS =======================
// With nested cycle display this:
// *
// * *
// * * *
// * * * *
// * * * * *

// Your code:
const drawTriangle = (length = 5) => {
  
    // ... write code ...
    for (let i = 1; i <= length; i++) {
        let triangle = "";
        for (let j = 0; j < i; j++) {
            triangle += "* ";
        }
        console.log(triangle);
    }
};

// 2#  ========== BONUS =======================
// Write function which will (with cycles) display this (keep in mind that there is no space after the last char):
// * * * * * * * * * *
// * * * * * * * * * T
// * * * * * * * * P T
// * * * * * * * I P T
// * * * * * * R I P T
// * * * * * C R I P T
// * * * * S C R I P T
// * * * A S C R I P T
// * * V A S C R I P T
// * A V A S C R I P T
// J A V A S C R I P T

// Your code:
const drawJavascriptWord = (word = "javascript") => {
  // ... write code ...

    word = word.toUpperCase();
    let fill = word.length;
    for (let i = 0; i <= word.length; i++) {
        let message = "";
        let separator = "";
        for (let j = 0; j < fill; j++) {
            message += separator + "*";
            separator = " ";
        }
        for (let j = fill; j < word.length; j++) {
            message += separator + word[j];
            separator = " ";
        }
        fill--;
        console.log(message);
    }
};


// 3#  ========== BONUS =======================
// Create function that takes array of vehicles with measured top speeds. Return array of vehicle with top speed.
// Example:
// const vehicles = [
//   { name: "Executor Star Dreadnought", measuredSpeeds: [555, 545, 577, 600] },
//   { name: "T-47 Airspeeder", measuredSpeeds: [300, 311, 299, 350] },
//   { name: "AT-AT", measuredSpeeds: [20, 21, 20, 19] },
// ];
// getVehiclesAndTopSpeed(vehicles) ➞ will return ➞ [
//     { name: "Executor Star Dreadnought", topSpeed: 600},
//     { name: "T-47 Airspeeder", topSpeed: 350 },
//     { name: "AT-AT", topSpeed: 21 },
//   ];

// Your code:
const getVehiclesAndTopSpeed = (vehicles) => {
    function compare(x, y) {
        if(x.topSpeed < y.topSpeed) return 1;
        if(x.topSpeed > y.topSpeed) return -1;
        else return 0;
    }
    let result = [];
    vehicles.forEach((x) => result.push({name: x.name, topSpeed: Math.max(...x.measuredSpeeds)}));
    return result.sort(compare);
};
