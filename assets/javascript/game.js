// Ready the document
$(document).ready(function () {


    // Create Variables
    // ===========================================================================================

    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    var targetScore = 0;
    var counter = 0;

    // Create Function and Logic
    // ============================================================================================

    // // Create function to create objects of each crystal
    // function Crystal(color, picURL, ranVal) {
    //     this.color = color;
    //     this.picURL = picURL;
    //     this.ranVal = ranVal;
    // }

    // // Create an instance of each crystal
    // var crystalYellow = new Crystal("yellow", "https://cdn1.iconfinder.com/data/icons/crystal-1/60/yellow_crystal-512.png", "0");
    // var crystalBlue = new Crystal("blue", "https://cdn1.iconfinder.com/data/icons/crystal-1/60/blue_crystal-512.png", "0");
    // var crystalGreen = new Crystal("green", "https://cdn1.iconfinder.com/data/icons/crystal-1/60/green_crystal_copy-512.png", "0");
    // var crystalPurple = new Crystal("purple", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2m528Ek7hzOAhQVNGbzQPQHAWdX160irwI3Q9hctg7XmaZ1d", "0");

    // // Create an array of the objects
    // var crystalArray = [
    //     crystalYellow,
    //     crystalBlue,
    //     crystalGreen,
    //     crystalPurple
    ]

    function initGame() {

        // Empty the crystals
        $("#crystals").empty();

        // Create an array to hold the image url
        var img = [
            "https://cdn1.iconfinder.com/data/icons/crystal-1/60/yellow_crystal-512.png",
            "https://cdn1.iconfinder.com/data/icons/crystal-1/60/blue_crystal-512.png",
            "https://cdn1.iconfinder.com/data/icons/crystal-1/60/green_crystal_copy-512.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2m528Ek7hzOAhQVNGbzQPQHAWdX160irwI3Q9hctg7XmaZ1d"
        ]

        // Set targetScore variable to a random number between 19 - 120
        targetScore = Math.floor(Math.random() * (120 - 19 + 1) + 19);

        // Display the random number in the tarScore div text
        $("#tarScore").html(targetScore);

        // Console log the random number
        console.log(targetScore);

        // Create a loop to interate thru the object array to append picURLs to correct div
        $.each(crystalArray, function (i) {

            // Create random value for each crystal
            var random = Math.floor((Math.random() * 12) + 1);

            // Create a new img element
            var imgCrystal = $("<img>");

            // Add a class to style the images
            imgCrystal.addClass("crystal-image");

            // Added the src and url to the image element
            imgCrystal.attr("src", img[i]);

            // Add data-value attribute to hold the value of each crystal
            imgCrystal.attr("data-value", random);

            // Append the crystals div with the new image elements
            $("#crystals").append(imgCrystal);

            // Set your score to zero 0
            $("#playerScore").html(totalScore);
        })
    }

    initGame();

    // Create click function on each crystal
    $(".crystal-image").on("click", function () {

        // Set a variable to each crytals data-value
        var crystalVal = ($(this).attr("data-value"));

        // Convert text to number
        crystalVal = parseInt(crystalVal);

        // Use counter to calculate score 
        counter += crystalVal;

        // Display player score in the playerScore div
        $("#playerScore").html(counter);

        // Create logic to inform players they won or lose
        // Create if statement if player wins
        if (counter === targetScore) {

            // alert the player they won
            alert("You Win!!");

            // increase wins by 1
            wins++;

            // display wins 
            $("#numWins").html(wins);

            // Reset game 
            initGame();

            // Reset counter
            counter = 0;

        // Create another if statement if player losses    
        } else if (counter >= targetScore) {

            //Alert player that they lost the game
            alert("You lost, Try again!!");

            //increment losses by 1
            losses++;

            //display losses
            $("#numLosses").html(losses);

            // restart game
            initGame();

            // reset counter
            counter = 0;
        }
    })
});