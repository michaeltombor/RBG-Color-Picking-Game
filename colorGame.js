var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    //mode buttons event listeners
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
            reset();
        });
    }
    //loops through the squares and assigns a color to var color[i].
    for (var i = 0; i < squares.length; i++) {
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];

        //add click listeners to squares
        squares[i].addEventListener("click", function() {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = pickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
    reset();
}

function reset() {
    colors = generateRandomColors(numSquares);
    //pick a new random collor from array
    pickedColor = pickColor();
    //Change colorDisplay in title
    colorDisplay.textContent = pickedColor.toUpperCase();
    //change colors of squares
    messageDisplay.textContent = "";
    this.textContent = "New Colors";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}
// easyBtn.addEventListener("click", function(){
//      easyBtn.classList.add("selected");
//      hardBtn.classList.remove("selected");
//      numSquares = 3;
//      //generate 3 random colors
//      colors = generateRandomColors(numSquares);
//      //pick a new random color from array
//      pickedColor = pickColor();
//      //Change colorDisplay in title
//      colorDisplay.textContent = pickedColor.toUpperCase();
//      //Change colors of squares AND hide bottom 3
//      for(var i = 0; i<squares.length; i++) {
//          if(colors[i]) {
//              squares[i].style.backgroundColor = colors[i];
//          } else{
//              squares[i].style.display = "none";
//          }
//      }
// });

// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor.toUpperCase();
//     for(var i = 0; i<squares.length; i++) {
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//         }

// });

resetButton.addEventListener("click", function() {
    reset();
});

function changeColors(color) {
    //loop thorugh all squares
    //change each color to match given color
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    //return array at the end
    return arr;
}

function randomColor() {
    //pick a "red", "green", or "blue" from 0-255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
