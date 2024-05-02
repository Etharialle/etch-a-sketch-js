
function createGrid(gridSize) {
    const container = document.querySelector("#container");
    resizeGrid();
    const paddingSize = (12 / gridSize);
    for (let i = 1; i <= gridSize; i++) {
        const divColumn = document.createElement("div");
        divColumn.classList.add("no-padding");
        for (let j = 1; j <= gridSize; j++) {
            const divRow = document.createElement("div");
            divRow.style.opacity = 0;
            divRow.className = "grid-box";
            divRow.id = i + j;
            divRow.style.padding = paddingSize + "rem";
            const divGridLines = document.createElement("div");
            divGridLines.className = "grid-borders";
            divColumn.appendChild(divGridLines);
            divGridLines.appendChild(divRow);
            //divColumn.appendChild(divRow);
        }
        container.appendChild(divColumn);
    }
    darkenGrid();
    return;
}

function darkenGrid() {
    let gridBox = document.getElementsByClassName("grid-box");
    for (const x of gridBox) {
        x.addEventListener(
            "mouseover",
            (e) => {
            e.target.style.backgroundColor = "black";
            let opacity = parseFloat(e.target.style.opacity);
            opacity = opacity + .1;
            if (opacity < 1){
            e.currentTarget.style.opacity = opacity;
            }
            console.log(opacity);
            });
    }
    return;
}

function resizeGrid() {
    var gridBorder = document.getElementsByClassName("grid-borders");
    var gridPadding = document.getElementsByClassName("grid-box");
    var gridColumns = document.getElementsByClassName("no-padding");
    while(gridBorder[0]) {
        gridBorder[0].parentNode.removeChild(gridBorder[0]);
    }
    while(gridPadding[0]) {
        gridPadding[0].parentNode.removeChild(gridPadding[0]);
    }
    while(gridColumns[0]) {
        gridColumns[0].parentNode.removeChild(gridColumns[0]);
    }
}

const gridSizeInput = document.getElementById("grid-size");
let newGridSizeValue = gridSizeInput.value;
gridSizeInput.addEventListener("change", (event) => {
  newGridSizeValue = event.target.value
  //console.log(number)
})
const resize = document.querySelector("#resize");
resize.addEventListener("click", function (e) {
    //let newGridSizeId = document.getElementById("grid-size");
    //let newGridSizeValue = newGridSizeId.getAttribute("value");
    console.log(newGridSizeValue);
    createGrid(newGridSizeValue);
  });

const gridSize = 16;
createGrid(gridSize); 