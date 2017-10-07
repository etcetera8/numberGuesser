var num = 0;
var guess = 0;

function setNum() {
  num = Math.ceil((Math.random() * 100));
  console.log(num);
}

function hiLow () {

  if (guess > num) {
    document.getElementById("tooLow").innerHTML ="your guess was too high";
  } 
  else if (guess < num) {
    document.getElementById("tooLow").innerHTML = "your guess was too low";
  }
  else {
    document.getElementById("tooLow").innerHTML = "BOOM!";
  }
}

function guessSave() {
    var display = document.getElementById("guessDisplay");
    guess = document.getElementById("guessInput").value;
    hiLow();
    display.innerHTML = guess;
    document.getElementById("guessInput").value = '';
};

function reset() {
  var feedback = document.getElementById("tooLow");
  var display = document.getElementById("guessDisplay");
  setNum();
  display.innerHTML = ' ';
  feedback.innerHTML = ' ';
}

function numOnly() {
  var guessInput = document.getElementById("guessInput");
  guessInput.value=guessInput.value.replace(/[^\d]/,'');
}

function disable() {
  if (this.value == ' ') {
    document.getElementById("clear").disabled = true;
  } else {
    document.getElementById("clear").disabled = false;
  }
}