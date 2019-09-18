// Ready the document
$(document).ready(function () {


    // Create Variables
    // ===========================================================================================

    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    var targetScore = 0;

    // Create Function and Logic
    // ============================================================================================

    // Create function to create objects of each crystal
    function Crystal(color, picURL, ranVal) {
        this.color = color;
        this.picURL = picURL;
        this.ranVal = ranVal;
    }

    // Create an instance of each crystal
    var crystalYellow = new Crystal("yellow", "https://cdn1.iconfinder.com/data/icons/crystal-1/60/yellow_crystal-512.png", "0");
    var crystalBlue = new Crystal("blue", "https://cdn1.iconfinder.com/data/icons/crystal-1/60/blue_crystal-512.png", "0");
    var crystalGreen = new Crystal("green", "https://cdn1.iconfinder.com/data/icons/crystal-1/60/green_crystal_copy-512.png", "0");
    var crystalPurple = new Crystal("purple", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2m528Ek7hzOAhQVNGbzQPQHAWdX160irwI3Q9hctg7XmaZ1d", "0");

    // Create an array of the objects
    var crystalArray = [
        crystalYellow,
        crystalBlue,
        crystalGreen,
        crystalPurple
    ]

    targetScoreRandom();
    ranCrystalVal();

    // startGame();


    // Create a loop to interate thru the object array to append picURLs to correct div
    $.each(crystalArray, function (i) {

        // Create a new img element
        let imageCrystal = $("<img>");

        // Add a class to style the images
        imageCrystal.addClass("crystal-image");

        // Added the src and url to the image element
        imageCrystal.attr("src", crystalArray[i].picURL);

        // Append the crystals div with the new image elements
        $("#crystals").append(imageCrystal);
    })

    // Create a function to calculate the Target Score
    function targetScoreRandom() {
        targetScore = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        $("#tarScore").text(targetScore);
        console.log(targetScore);
    };

    //Create a function to calculate a random number for each crystal
    function ranCrystalVal(){
        $.each(crystalArray, function(i){
            crystalArray[i].ranVal = Math.floor((Math.random() * 12) + 1);
            console.log(crystalArray[i].ranVal);
        })
    }

    
    
});