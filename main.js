const squares = 16; // default squares value 
const gridContainer = document.querySelector('.square-grid-container');

// link to the form that will give the new squares value
const numberSubmit = document.querySelector('.numberSubmit');
const numberField = document.querySelector('.numberField');

function createGrid () {
for (let i = 0; i<(squares+1); i++) {   // column counter
    // Create a row container for each row 
    const gridRowContainer = document.createElement('div');
    gridRowContainer.classList.add(`row${i}`,'row-container');
    gridContainer.appendChild(gridRowContainer);
    for (let j = 0; j<(squares+1); j++) {   // row counter
        const gridItem = document.createElement('div');
        gridItem.classList.add(`column${j}`,'grid-item');
        gridRowContainer.appendChild(gridItem);
    }
}
}

numberSubmit.addEventListener('click', createGrid);
