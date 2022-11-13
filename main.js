// const squares = 16; // default squares value 
const gridContainer = document.querySelector('.square-grid-container');
const gridSize = 400; //pixels

// link to the form that will give the new squares value
const numberSubmit = document.querySelector('.numberSubmit');
const numberField = document.querySelector('.numberField');

function hoverState() {
    this.style.backgroundColor = "coral";
}

function createGrid () {
const squares = Number(numberField.value);
// clear old grid if any
if (document.querySelector('.grid-item') !== null) {
    const oldGrid = document.querySelectorAll('.grid-item');
    oldGrid.forEach((element) => element.remove());
}
for (let i = 0; i<(squares+1); i++) {   // column counter
    // Create a row container for each row 
    const gridRowContainer = document.createElement('div');
    gridRowContainer.classList.add(`row${i}`,'row-container');
    gridContainer.appendChild(gridRowContainer);
    for (let j = 0; j<(squares+1); j++) {   // row counter
        const gridItem = document.createElement('div');
        gridItem.classList.add(`column${j}`,'grid-item');
        gridRowContainer.appendChild(gridItem);
        let gridWidth = (gridSize/squares);
        gridItem.setAttribute("style", `width: ${gridWidth}px; height: ${gridWidth}px`);
    }
}
// Add hover listener event to all grid items
const gridItem = document.querySelectorAll('.grid-item');
gridItem.forEach(grid => grid.addEventListener('mouseover', hoverState));

}

numberSubmit.addEventListener('click', createGrid);
