// Function to generate grid
function genGrid(x) {
    var container = document.getElementById("grid-container");
    for (i=0; i < x; i++){
        var row = document.createElement("div");
        row.className("grid-row");
        for (j=0; j < x; j++){
            var square = document.createElement("div");
            square.className("grid-square");
            row.appendChild("square");
        }
        container.appendChild("row");
    }
}