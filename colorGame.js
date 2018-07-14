//variables
var numOfSquare = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1Background = document.querySelector("#colorBackground");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButton();
  setupSquare();
  reset();

}

function setupSquare() {
  for (var i = 0; i < squares.length; i++) {

    //add click listerners to squares
    squares[i].addEventListener("click", function() {
      //grab colors of clicked square and compare to picked colors
      var clickedColor = this.style.backgroundColor;

      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1Background.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
      }
      else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }

    });

  }

}

function setupModeButton() {
  for (var i = 0; i < modeButton.length; i++) {
    modeButton[i].addEventListener("click", function() {
      modeButton[0].classList.remove("selected");
      modeButton[1].classList.remove("selected");
      this.classList.add("selected");

      this.textContent === "Easy" ? numOfSquare = 3: numOfSquare = 6;

      reset();

    });
  }
}

function reset() {
  colors = generateRandomColors(numOfSquare);
  pickedColor = pickColor();
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = " ";
  //pick a new random color from array
  //change color display to match pick colors
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1Background.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
});

function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each colors
    squares[i].style.backgroundColor = color;

  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);

  return colors[random];

}

function generateRandomColors(num) {

  //make array
  var arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    //get random color and push to array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";

}
