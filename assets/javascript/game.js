// Ready the document
// $(document).ready(function () {
//     console.log("Ready");
// });

// Create Variables
// ===========================================================================================

var totalScore = 0;
var targetScore = randomNumber;
var wins = 0;
var losses = 0;
var minNumber = 19;
var maxNumber = 120;
var randomNumber = targetScoreRandom(minNumber, maxNumber);

// var crystal = {
//     color:
//     randomNum: 0;
// }

// Create Function and Logic
// ============================================================================================

// Create a function to calculate the Target Score
function targetScoreRandom(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

// Console log the random number
console.log(randomNumber);

$("#tarScore").html(targetScore);



