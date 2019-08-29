
var wordOptions = ["dog", "hippo", "lion", "wolf", "moose"];

var winsInt = 0;

var loseInt = 0;

var remainInt = 5;

//creating a variable to target the html of user choice
var userChoiceEL = document.getElementById("Youchoose");


//creating a variable to target the html of wins
var WinsEL = document.getElementById("Wins");

//creating a variable to target the html of losses
var LossesEL = document.getElementById("Losses");

//creating a variable to target the html of letters tried
var lettersEL = document.getElementById("Letters");

//my empty letters array
var lettersArray = [];

//empty array to push new letters to
var wordArray= [];

var remainsEL = document.getElementById("Remain");

//randomly picking a choice within the array listed above
var computerChoice = wordOptions[Math.floor(Math.random() * wordOptions.length)];
console.log(computerChoice);

var wordBox = document.getElementById("wordBox");


//for the length of commputer choice, add an underscore to the HTML id WordBox
    for (let index = 0; index < computerChoice.length; index++) {
        //with this we are pushing underscores equal to the amount of letters within our randomized letter
       wordArray.push('_');
        //this changes the DOM to represent whats happening with the loop above
       wordBox.textContent =wordArray;

       //for myself--- console .log wordArray
       console.log(wordArray)
      
    }

   ;


//declaring that once a key has been pressed a function begins
document.onkeyup = function (event) {

    //within that function we have created a variable that grabs what key the usr has pressed
    var userGuess = event.key.toLowerCase(); //Thats this ctoode here


    //if the user Guess is within the computer word choice go into a code block 
    if(computerChoice.includes(userGuess)){
        //set up a code bock within the if statment to iterate through the computer word choice
        for(var j= 0; j < computerChoice.length; j++){

            //if the user input is equal to one of the  interations within the random computer word 
            if(userGuess === computerChoice[j]) {

               //word Array or a blank space ("_") at the index of the letter is now that letter 
                wordArray[j] = computerChoice[j];

                //this updates the dom to be the same as the word array
                wordBox.textContent = wordArray;


                console.log(wordArray);
                
                
            }
        }

    }else {
        loseInt++;

        LossesEL.textContent=loseInt;

        remainInt--;

        remainsEL.textContent = remainInt;

        


    }

    if(remainInt===0){
        alert("better luck next time!")
        location.reload();

        
    }
    //if my words array is equal to the computer generated word run this block
    if(wordArray.join('') === computerChoice){
        
        winsInt++;

        WinsEL.textContent = winsInt;

        alert("You win!!!")

        location.reload();
        

        

    }




    //this pushes any of the users guess to the empty letters array
    lettersArray.push(userGuess);

    //this is a console.log to make sure those letters are indeed going into the array
    console.log(lettersArray);

    //this is to change my Html element that appear on the screen to be equal to my letters array in string form
    lettersEL.textContent = lettersArray;
};

//functions

//-----incomplete not sure 
function restart() {
var computerChoice = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    wordbox.textContent = 
console.log(computerChoice);


}
