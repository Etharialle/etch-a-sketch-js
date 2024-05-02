function createGrid() {
    const gridSize = 2;
    //let divColumn;
    //let divRow;
    const container = document.querySelector("#container");
    //divColumn = document.createElement("div");
    //container.appendChild(divColumn);
    //divRow = document.createElement("div");
    //divColumn.appendChild(divRow);
    
    for (let i=1; i === gridSize; i++) {
        let divColumn = i;
        divColumn = document.createElement("div");
        container.appendChild(divColumn);
        for (let j=1; j === gridSize; j++) {
            let divRow = j;
            divRow = document.createElement("div");
            divColumn.appendChild(divRow);
        }
    }
    
    return;
}
createGrid();