const startButton = document.getElementById('startButton');
const nameInput = document.getElementById('nameInput');
const nameInputContainer = document.getElementById('nameInputContainer');
const gameContainer = document.getElementById('gameContainer');
const sudokuContainer = document.getElementById('sudoku-container');
const checkButton = document.getElementById('checkButton');
const resultDiv = document.getElementById('result');

// Simple 4x4 Sudoku puzzle
const puzzle = [
    [1, 0, 0, 4],
    [0, 0, 3, 0],
    [0, 4, 0, 0],
    [3, 0, 0, 0],
];

// Function to create the Sudoku grid
function createSudokuGrid() {
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.min = '1';
            input.max = '4';
            input.value = puzzle[row][col] !== 0 ? puzzle[row][col] : '';
            input.disabled = puzzle[row][col] !== 0; // Disable inputs for pre-filled cells
            sudokuContainer.appendChild(input);
        }
    }
}

// Function to check the Sudoku solution
function checkSolution() {
    const inputs = document.querySelectorAll('.sudoku-container input');
    const solution = [
        [1, 2, 4, 3],
        [4, 3, 2, 1],
        [2, 1, 3, 4],
        [3, 4, 1, 2],
    ];
    
    let correct = true;
    
    inputs.forEach((input, index) => {
        const row = Math.floor(index / 4);
        const col = index % 4;
        if (input.value != solution[row][col]) {
            correct = false;
        }
    });

    resultDiv.textContent = correct ? `Congratulations, ${nameInput.value}! You solved it!` : 'Try again!';
    resultDiv.classList.remove('hidden');
}

// Event listeners
startButton.addEventListener('click', () => {
    const name = nameInput.value;
    if (name) {
        nameInputContainer.classList.add('hidden');
        gameContainer.classList.remove('hidden');
        createSudokuGrid();
    } else {
        alert("Please enter your name!");
    }
});

checkButton.addEventListener('click', checkSolution);
