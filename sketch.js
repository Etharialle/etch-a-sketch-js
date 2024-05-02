
function createGrid() {
    const gridSize = 16;
    //let divColumn;
    //let divRow;
    const container = document.querySelector("#container");
    let b = 1;
    for (let i = 1; i <= gridSize; i++) {
        //let divColumn = i;
        const divColumn = document.createElement("div");
        divColumn.classList.add("no-padding");
        for (let j = 1; j <= gridSize; j++) {
            const divRow = document.createElement("div");
            divRow.style.opacity = 0;
            divRow.className = "grid-box";
            divRow.id = i + j;
            
            const divGridLines = document.createElement("div");
            divGridLines.className = "grid-borders";
            
            divColumn.appendChild(divGridLines);
            divGridLines.appendChild(divRow);
            
        }
        container.appendChild(divColumn);
    }
    return;
}

function darkenGrid() {
    let gridBox = document.getElementsByClassName("grid-box");
    let opacity =
    console.log(gridBox);
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




createGrid();
darkenGrid();

const mouseTarget = document.getElementById("mouseTarget");