var num = 0;
var guess = 0;
var min = 1;
var max = 100;
var guessArray = [];
const display = document.getElementById("guessDisplay");
var feedback = document.getElementById("tooLow");

function setNum() {
  num = Math.ceil((Math.random() * 100));
  console.log(num);
}

function hiLow () {
  if (guess > max) {
    feedback.innerHTML = "Your guess is above the range"
    display.innerHTML = " ";
  }
  else if (guess < min) {
    feedback.innerHTML = "Your guess is below the range"
    display.innerHTML = " ";
  }
  else if (guess > num) {
    feedback.innerHTML ="your guess was too high";
  } 
  else if (guess < num) {
    feedback.innerHTML = "your guess was too low";
  }
  else if (guess == num){
    feedback.innerHTML = "BOOM!";
  }
  else {
    feedback.innerHTML = "You need to make a guess if you want to play"
    display.innerHTML = " ";
  }
}

function guessSave() {
    guess = parseInt(document.getElementById("guessInput").value);
    guessArray.push(guess);
    console.log(guessArray);
    display.innerHTML = guess;
    hiLow();
    document.getElementById("guessInput").value = '';
};

function setReset() {
    if (guessArray.length > 0) {
    document.getElementById("reset").disabled = false;
  } else if (guessArray.length === 0) {
    document.getElementById("reset").disabled = true;
  }
}

function resetGame() {
  setNum();
  display.innerHTML = ' ';
  feedback.innerHTML = ' ';
  guessArray.length = 0;
  document.getElementById("reset").disabled = true;  
}

function numOnly() {
  var guessInput = document.getElementById("guessInput");
  guessInput.value=guessInput.value.replace(/[^\d]/,'');
}

function disable() {
  var guessInput = document.getElementById("guessInput");
  if (guessInput.value.length == 0) {
    document.getElementById("clear").disabled = true;
  } else {
    document.getElementById("clear").disabled = false;
  }
}
