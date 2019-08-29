       //setting up all of my variables for the guess game

        //the options the computer has to choose from
        var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];

        //your inital win count
        var winsInt = 0;
        //your inital lose count
        var lossesInt = 0; 

        //creating a variable to target the html of user choice
        var userChoiceEL = document.getElementById("Youchoose");

        //creating a variable to target the html of comp choice
        var CompChoiceEL = document.getElementById("Thecomputer");

        //creating a variable to target the html of wins
        var WinsEL = document.getElementById("Wins");

        //creating a variable to target the html of losses
        var LossesEL = document.getElementById("Losses");

        //creating a variable to target the html of letters tried
        var lettersEL = document.getElementById("Letters");
        //my empty letters array
        var lettersArray = [];
        


        //declaring that once a key has been pressed a function begins
        document.onkeyup = function(event) {
            //within that function we have created a variable that grabs what key the usr has pressed
            var userGuess = event.key.toLowerCase(); //Thats this code here

            //finally we log to the console userGuess
            console.log("you chose " + userGuess);
            userChoiceEL.textContent = userGuess

            //this will determine which choice the computer goes for within the give Array
            var computerChoice = options[Math.floor(Math.random() * options.length)];
            //John, be sure the rememeber syntax



            //finally we console.log that computerChoice
            console.log("The computer Chose " + computerChoice );
             CompChoiceEL.textContent = computerChoice; 


            //this is where the letters tried will be manipllulated

            //this pushes any of the users guess to the empty letters array
            lettersArray.push(userGuess);

            //this is a console.log to make sure those letters are indeed going into the array
            console.log(lettersArray);

            //this is to change my Html element that appear on the screen to be equal to my letters array in string form
            lettersEL.textContent = lettersArray.toString();


            //if the user guess is the same as the computers this will happen!
            if(userGuess === computerChoice){
                //wins integer goes up by one
            winsInt++;
                //my html wins is set equal to the wins integer so the value displayed on the screen changes
            WinsEL.textContent = winsInt;

                //log to the console that you got the right anwser
            console.log(userGuess + " was the right anwser!")
                //if you dont win this is the only other path to take
            }else {
            //the losses integer goes up by one
            lossesInt++;
                //the html losees is set equal to the losses integer so the value displayed on the screen changes
            LossesEL.textContent = lossesInt;

                //log to the cosole you some rude message
            console.log("Aw man " + userGuess + "wasnt the right one :(");

            }


           
        }

