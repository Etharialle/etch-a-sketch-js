
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
        }
        container.appendChild(divColumn);
    }
    darkenGrid(penStyle);
    return;
}

function darkenGrid(penStyle) {
    let gridBox = document.getElementsByClassName("grid-box");
    for (const x of gridBox) {
        x.replaceWith(x.cloneNode(true));
    }
    gridBox = document.getElementsByClassName("grid-box");
    for (const x of gridBox) {
        x.addEventListener(
            "touchmove",
            (e) => {
            if (penStyle == "color") {
                e.target.style.backgroundColor = randomHexColorCode();
            } else {
                e.target.style.backgroundColor = "black";
            }
            let opacity = parseFloat(e.target.style.opacity);
            opacity = opacity + .1;
            if (opacity < 1){
            e.currentTarget.style.opacity = opacity;
            }
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

const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

const gridSizeInput = document.getElementById("grid-size");
let newGridSizeValue = gridSizeInput.value;
gridSizeInput.addEventListener("change", (event) => {
  newGridSizeValue = event.target.value
});

const resize = document.querySelector("#resize");
resize.addEventListener("click", () => {
    if (newGridSizeValue <= 100 && newGridSizeValue >= 1) {
        createGrid(newGridSizeValue);
    } else {
        window.alert("Grid Size out of Range!")
        document.getElementById("grid-size").value = "16";
    }
});

const colorRadio = document.querySelector("#color");
const monochromeRadio = document.querySelector("#monochrome");
const colorChoice = document.querySelectorAll('input[name="color-choice"]');
colorRadio.addEventListener("click", () => {
    if (colorRadio.checked) {
        penStyle = "color";
        darkenGrid(penStyle);
    }
});

monochromeRadio.addEventListener("click", () => {
    if (monochromeRadio.checked) {
        penStyle = "black";
        darkenGrid(penStyle);
    }
  });

let penStyle = "black";
const gridSize = 16;
createGrid(gridSize); 
