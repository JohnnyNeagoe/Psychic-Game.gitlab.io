var computerChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l" , "z", "x", "c", "v", "b", "n", "m"]

var totalGuesses = 9;
var wins = 0;
var losses = 0;
var past = [];


startGame();

function startGame() {
    
    
    var answer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("Computer Chose ", answer)

    uPsychic();

    function uPsychic() {
        
        document.onkeyup = function(event) {
            var userGuess = event.key;
            console.log("User Chose ",userGuess)

            if (event.keyCode < 65 || event.keyCode > 90) {
            alert("Invalid Entry")
            }

            else if (past.indexOf(userGuess) >=0) {
            alert("You already guessed that!");
            }
        
            else if ((userGuess === answer)) {
                wins++;
                document.querySelector("#ws").innerHTML = wins;
                alert("CONGRATULATIONS! YOU WON!")
                
                resetGame();
            } 
            else { 
                totalGuesses = totalGuesses -1;
                document.querySelector("#tries").innerHTML = totalGuesses;
                past.push(userGuess);
                document.querySelector("#gsf").innerHTML = past;
                
                noMoreGuesses();
            }
        };
    };

    function resetGame() {
        past = [];
        totalGuesses = 9;
        answer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        document.querySelector("#gsf").innerHTML = past;
        document.querySelector("#tries").innerHTML = totalGuesses; 

        startGame();
    };

    function noMoreGuesses() {
        if (totalGuesses === 0){
        losses++;
        past = [];
        totalGuesses = 9;
        answer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        document.querySelector("#ls").innerHTML = losses;
        document.querySelector("#tries").innerHTML = totalGuesses;
        document.querySelector("#gsf").innerHTML = past;
        alert("YOU LOST, SORRY TRY AGAIN!")

        startGame();
        };
    };
};










