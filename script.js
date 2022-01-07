const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 256; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridContainer.appendChild(gridSquare);
}

let gridSquares = document.querySelectorAll('.grid-square');
gridSquares.forEach(square => square.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = '#000';
}));

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
    gridSquares.forEach(square => square.style.backgroundColor = '#fff');
});

const rainbowBtn = document.querySelector('.rainbow-btn');
rainbowBtn.addEventListener('click', () => {
    gridSquares.forEach(square => square.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    }))
})

const blackBtn = document.querySelector('.black-btn');
blackBtn.addEventListener('click', () => {
    gridSquares.forEach(square => square.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = "#000";
    }))
})

const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', () => {
   const size = parseInt(document.getElementById('grid-size').value);
   console.log(size);
   if (!Number.isInteger(size) || size < 1 || size > 64) {
       return;
   }
   gridSquares.forEach(square => square.remove());
   for(let i = 0; i < size*size; i++) {
       const gridSquare = document.createElement('div');
       gridSquare.classList.add('grid-square');
       gridSquare.style.height = `${64/size}vmin`;
       gridSquare.style.width = `${64/size}vmin`;
       gridSquare.style.minHeight = `${320/size}px`;
       gridSquare.style.minWidth = `${320/size}px`;
       gridContainer.appendChild(gridSquare);
   }
   gridSquares = document.querySelectorAll('.grid-square');
   gridSquares.forEach(square => square.addEventListener('mouseover', function(e) {
       e.target.style.backgroundColor = '#000';
    }));
});