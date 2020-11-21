// Variables 
const container = document.getElementById("grid-container");
let pencil = false;

// Generates grid of squares based on input number 
function genGrid(x) {
    for(var i = 0; i < x; i++){
        var gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        for(var j = 0; j < x; j++) {
            var gridSquare = document.createElement("div"); 
            gridSquare.classList.add("grid-square");
            gridRow.appendChild(gridSquare);
        }
        container.appendChild(gridRow);
    }
    let colorValue = document.getElementById("color-picker").value;
    if (colorValue != "rgb(0, 0, 0)") {
        colorChangeEventListener(colorValue);
    }
    else {
        colorChangeEventListener("rgb(0, 0, 0)");
    } 
}


// Add color change event on mousover 
function colorChangeEventListener(color) {
    var nodeList = document.querySelectorAll(".grid-square");
    for(var i = 0, len = nodeList.length; i < len; i++) {
        nodeList[i].addEventListener(
            "mouseover", function(e) {
                if(e.buttons == 1) {
                    this.style.backgroundColor = color;
                }
                
            });
    }
}

// Add random color change on mouseover 
function randomColors() {
    var nodeList = document.querySelectorAll(".grid-square");
    for(var i = 0, len = nodeList.length; i < len; i++) {
        let x = Math.floor(Math.random() * Math.floor(256));
        let y = Math.floor(Math.random() * Math.floor(256));
        let z = Math.floor(Math.random() * Math.floor(256));
        nodeList[i].addEventListener(
            "mouseover", function(e) {
                if(e.buttons == 1) {
                    this.style.backgroundColor = `rgb(${x},${y},${z})`;
                }
                
            });
    }
}

// Pencil shading that goes from light grey to black after 10 passes
function pencilShader() {
    var nodeList = document.querySelectorAll(".grid-square");
    for(var i = 0, len = nodeList.length; i < len; i++) {
        nodeList[i].setAttribute("data-counter", 0);
        nodeList[i].addEventListener(
            "mousover", function(e) {
                if(e.buttons == 1) {
                    if(this.counter == 0) {
                        this.style.backgroundColor = "rgb(0, 0, 0, 0.1)";
                        this.counter += 0.1;
                    }
                    else if (this.counter <= 1) {
                        this.style.backgroundColor = `rgb(0, 0, 0, ${this.counter})`;
                        this.counter += 0.1;
                    }
                    else {
                        return;
                    }
                }
            });
        }
    }


// Clears grid 
function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    var slideValue = document.getElementById("grid-slider").value;
    genGrid(slideValue);
    let colorValue = document.getElementById("color-picker").value;
    if (colorValue != "rgb(0, 0, 0)") {
        colorChangeEventListener(colorValue);
    }
    else {
        colorChangeEventListener("rgb(0, 0, 0)");
    }
}

// Updates display to match grid slider value 
function updateValue(value) {
    document.getElementById("slider-display").textContent = value + " x " + value;
}

// Toggles gridlines 
function toggleGridlines() {
    var nodeList = document.querySelectorAll(".grid-square");
    for(var i = 0, len = nodeList.length; i < len; i++) { 
        nodeList[i].classList.toggle("no-border");
    }
}


// Set initial grid 
genGrid(36);
updateValue(36);

// Set initial color to black 
colorChangeEventListener("rgb(0, 0, 0)");