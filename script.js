var num = 0;
var guess = 0;
var min = 1;
var max = 100;
var guessArray = [];
const display = document.getElementById("guessDisplay");
var feedback = document.getElementById("tooLow");
var resetButton = document.getElementById("reset");
var clearButton = document.getElementById("clear");
var guessInput = document.getElementById("guessInput");
var userSetRangeButton = document.getElementById("rangeButton");

function setNum(min, max) {
  num = Math.ceil(Math.random() * (max - min + 1))+min;
  console.log(num);
}

function setRange () {
  min = parseInt(document.getElementById("setMin").value);
  max = parseInt(document.getElementById("setMax").value);
}

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
    feedback.innerHTML = "BOOM!";
  }
  else {
    feedback.innerHTML = "You need to make a guess if you want to play"
    display.innerHTML = "!";
  }
}

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

function resetGame() {
  setNum(min, max);
  display.innerHTML = ' ';
  feedback.innerHTML = ' ';
  guessArray.length = 0;
  resetButton.disabled = true;  
}

function disableClear() {
  clear.disabled = true;
  document.getElementById("guessInput").value = '';
}
 
 guessInput.addEventListener("keydown", function(e) {
  if ([69, 187].includes(e.keyCode)) {
    e.preventDefault();
  }
 });

function disable() {
  if (guessInput.value.length == 0) {
    document.getElementById("clear").disabled = true;
  } else {
    document.getElementById("clear").disabled = false;
  }
}

function showMod() {
  var modWindow = document.getElementById("modifier");
  modWindow.style.display = modWindow.style.display == "none" ? "inline" : "none";
}

userSetRangeButton.addEventListener('click', function() {
  min = parseInt(document.getElementById("setMin").value);
  max = parseInt(document.getElementById("setMax").value);
  document.querySelector(".display-min").innerText = min;
  document.querySelector(".display-max").innerText = max;
  setNum(min,max);
})



