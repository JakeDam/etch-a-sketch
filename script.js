// Get container element 
const container = document.getElementById("grid-container");

// Function to generate grid
function genGrid(x) {
    for(i = 0; i < x; i++){
        for(j = 0; j < x; j++) {
            var gridSquare = document.createElement("div"); 
            gridSquare.className = "grid-square";
            container.appendChild(gridSquare);
            console.log("new square");
        }
    }
    var newRow = document.createElement("br"); 
    container.appendChild(newRow);
}
   

genGrid(16);