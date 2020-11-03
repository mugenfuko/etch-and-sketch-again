const container = document.querySelector('.container');
const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const grid = document.querySelector('#grid');
let gridSize = 0;
let enterKeyPressed = false;

input.value = '1-100';

function setGridSize() {
    gridSize = input.value;
    if (gridSize >= 0 && gridSize <= 100 && gridSize != NaN) {
        return createGrid(gridSize);
    }
}

function createGrid(gridSize) {
    const rowAmount = gridSize;
    grid.textContent = '';
    for (let i = 0; i < gridSize; i++) {
        createRow(rowAmount);
    }
}

function createRow(rowAmount) {
    const row = document.createElement('div');
    row.classList.toggle('row');
    for (let i = 0; i < rowAmount; i++) {
        const pixel = document.createElement('div');
        pixel.classList.toggle('pixel');
        pixel.addEventListener('mouseenter', () => {
            pixel.classList.add('pixelfill');
        });
        row.appendChild(pixel);
    }
    grid.appendChild(row);
}

input.addEventListener('focusin', () => {
    input.value = '';
    input.style.color = 'black';
});

input.addEventListener('focusout', () => {
    if (input.value == '') {
        input.style.color = 'grey';
        input.value = '1-100';
    }
});

input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        enterKeyPressed = true;
        setGridSize();
    }
});

input.addEventListener('click', () => {
    if (enterKeyPressed == true) {
        input.value = '';
        enterKeyPressed = false;
    }
});

submit.addEventListener('click', () => {
    setGridSize();
});