document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.querySelector('.grid-container');
    const totalCells = 10; // Adjust the total number of cells
  
    for (let i = 0; i < totalCells; i++) {
      const cell = document.createElement('div');
      cell.classList.add('pipe_sprite');
  
      // Apply your color function logic here
      const colorValue = `hsl(${(i * 30) % 360}, 50%, 50%)`;
      cell.style.background = `radial-gradient(${colorValue} 50%, rgb(160, 161, 160))`;
  
      gridContainer.appendChild(cell);
    }
  
    // Access and change the color of the fifth cell (index 4)
    const fifthCell = gridContainer.children[4];
    fifthCell.style.background = 'red';
  });