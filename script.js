//GLOBAL VARIABLES
var num = 0;
var guess = 0;
var min = 0;
var max = 100;
var guessArray = [];
const display = document.getElementById("guessDisplay");
var feedback = document.getElementById("tooLow");
var resetButton = document.getElementById("reset");
var clearButton = document.getElementById("clear");
var guessInput = document.getElementById("guessInput");
var userSetRangeButton = document.getElementById("rangeButton");


//SET THE RANDOM NUMBER
function setNum(min, max) {
  num = Math.ceil(Math.random() * (max - min + 1))+min;
  console.log(num);
}

//USER SETS THE RANGE
function setRange () {
  min = parseInt(document.getElementById("setMin").value);
  max = parseInt(document.getElementById("setMax").value);
}

//IF ELSE FOR GUESS IS CORRECT/HI/LOW/NAN
function hiLow () {
  if (guess > max) {
    feedback.innerHTML = "Your guess is above the range"
    display.innerHTML = "!";
  }
  else if (guess < min) {
    feedback.innerHTML = "Your guess is below the range"
    display.innerHTML = "!";
  }
  else if (guess > num) {
    feedback.innerHTML ="That is too high";
  } 
  else if (guess < num) {
    feedback.innerHTML = "That is too low";
  }
  else if (guess == num){
    feedback.innerHTML = "<p>BOOM!<br > <br >Your range has been adjusted! Click reset to start a new game.</p>";
    winIncrement();
  }
  else {
    feedback.innerHTML = "You need to make a guess if you want to play"
    display.innerHTML = "!";
  }
}

//IF USER WINS INCREMENT 10 +/- AND RESET NUM AND DISPLAY TO DOM
function winIncrement() {
  min = min - 10;
  max = max + 10;
  setNum(min,max);
  document.getElementById("setMin").value = min;
  document.getElementById("setMax").value = max;
  document.querySelector(".display-min").innerText = min;
  document.querySelector(".display-max").innerText = max;
}

//SAVE USER GUESS, PUSH TO ARRAY, ENABLE RESET, GET RANGE, CLEAR DOM, DISABLE BUTTONS
function guessSave() {
    guess = parseInt(document.getElementById("guessInput").value);
    guessArray.push(guess);
    resetButton.disabled = false;
    display.innerHTML = guess;
    setRange();
    hiLow();
    document.getElementById("guessInput").value = '';
    disableClear();
};

//WELL... RESETS THE GAME.
function resetGame() {
  setNum(min, max);
  display.innerHTML = ' ';
  feedback.innerHTML = ' ';
  guessArray.length = 0;
  resetButton.disabled = true;  
}

//CLEARS INPUT, DISABLES CLEAR BUTTON
function disableClear() {
  clear.disabled = true;
  document.getElementById("guessInput").value = '';
}
 
 guessInput.addEventListener("keydown", function(e) {
  if ([69, 187].includes(e.keyCode)) {
    e.preventDefault();
  }
 });

 //INPUT LISTENS FOR 'E' AND '+' PREVENTS APPEARANCE
function disable() {
  if (guessInput.value.length == 0) {
    document.getElementById("clear").disabled = true;
  } else {
    document.getElementById("clear").disabled = false;
  }
}

//ONKEYUP CHECKS INPUT HAS CONTENT. IF YES, ENABLE. IF NO, DISABLE.
function showMod() {
  var modWindow = document.getElementById("modifier");
  modWindow.style.display = modWindow.style.display == "none" ? "inline" : "none";
}

//USER SETS THE MIN AND MAX RANGE ON CLICK
userSetRangeButton.addEventListener('click', function() {
  min = parseInt(document.getElementById("setMin").value);
  max = parseInt(document.getElementById("setMax").value);
  document.querySelector(".display-min").innerText = min;
  document.querySelector(".display-max").innerText = max;
  resetGame();
})



