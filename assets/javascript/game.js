// Ready the document
$(document).ready(function() {


    // Create Variables
    // ===========================================================================================

    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    var minNumber = 19;
    var maxNumber = 120;
    var targetScore = targetScoreRandom(minNumber, maxNumber);

    // Create Function and Logic
    // ============================================================================================

    // Create function to create objects of each crystal
    function Crystal(color, picURL, ranVal) {
        this.color = color;
        this.picURL = picURL;
        this.ranVal = ranVal;
    }

    // Create an instance of each crystal
    var crystalYellow = new Crystal("yellow", "https://cdn1.iconfinder.com/data/icons/crystal-1/60/yellow_crystal-512.png", 0);
    var crystalBlue = new Crystal("blue", "https://cdn1.iconfinder.com/data/icons/crystal-1/60/blue_crystal-512.png", 0);
    var crystalGreen = new Crystal("green", "https://cdn1.iconfinder.com/data/icons/crystal-1/60/green_crystal_copy-512.png", 0);
    var crystalPurple = new Crystal("purple", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2m528Ek7hzOAhQVNGbzQPQHAWdX160irwI3Q9hctg7XmaZ1d", 0);

    // Create an array of the objects
    var crystalArray = [
        crystalYellow,
        crystalBlue,
        crystalGreen,
        crystalPurple
    ]

    $.each(crystalArray, function(i){
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", crystalArray[i].picURL);
        $("#crystals").append(imageCrystal);
    })
    // Create a function to calculate the Target Score
    function targetScoreRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    console.log(targetScore);

    $("#tarScore").text(targetScore);
    var objectRandom = Math.floor((Math.random() * 12) + 1);

    $.each()
});
