// Get container element 
const container = document.getElementById("grid-container");

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
}


// Add color change event on mousover 
function colorChangeEventListener(color) {
    var nodeList = document.querySelectorAll(".grid-square");
    for(var i = 0, len = nodeList.length; i < len; i++) {
        nodeList[i].addEventListener(
            "mouseover", function(e) {
                if(e.buttons == 1 || e.buttons == 3) {
                    this.style.backgroundColor = color;
                }
                
            });
    }
}

// Clears grid 
function clearGrid() {
    var nodeList = document.querySelectorAll(".grid-square");
    for(var i = 0, len = nodeList.length; i < len; i++) {
        nodeList[i].style.backgroundColor = "white";
    }
}

genGrid(100);

// Change grid-square color on mouseover
colorChangeEventListener("black");