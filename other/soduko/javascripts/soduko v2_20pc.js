const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");


  //down the top side
  ctx.beginPath();
  ctx.fillStyle = "Black";
  ctx.fillRect(0,0,1000,1000);
  ctx.closePath();

const gridSize = 9;
const cellSize = 80; // Doubled from 50 to 100
const canvasSize = gridSize * cellSize;
const randShow = 0.2;

// Sudoku board
let board = Array.from({ length: 9 }, () => Array(9).fill(0));
let board50pc = Array.from({ length: 9 }, () => Array(9).fill(0));//holds if num displayed

// Arrays to hold rows, columns, and 3x3 blocks
let rows = Array.from({ length: 9 }, () => []);
let cols = Array.from({ length: 9 }, () => []);
let blocks = Array.from({ length: 9 }, () => []);

// Define colors
const oddBlockColors = ["#ffff99", "#ffcc66"]; // yellow and orange
const evenBlockColors = ["#ccff99", "#66cc66"]; // lime and leaf-green

// Draw background boxes with checkerboard colors
function drawCheckerboard() {
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const blockIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);
      const isOddBlock = blockIndex % 2 !== 0;
      const colorSet = isOddBlock ? oddBlockColors : evenBlockColors;
      const color = colorSet[(row + col) % 2];
      ctx.fillStyle = color;
      ctx.fillRect(col * cellSize+140, row * cellSize+140, cellSize, cellSize);
    }
  }
}

// Draw the grid lines
function drawGrid() {
  for (let i = 0; i <= gridSize; i++) {
    ctx.beginPath();
    ctx.lineWidth = (i % 3 === 0) ? 4 : 1;
    ctx.moveTo(i * cellSize+140, 0+140);
    ctx.lineTo(i * cellSize+140, canvasSize+140);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = (i % 3 === 0) ? 4 : 1;
    ctx.moveTo(0+140, i * cellSize+140);
    ctx.lineTo(canvasSize+140, i * cellSize+140);
    ctx.stroke();
  }
}

// Write numbers with 50% chance of displaying each
function drawNumbers() {
  ctx.font = "40px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "black";

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const num = board[row][col];
      if (num !== 0 && Math.random() < 0.5) { // 50% chance to display
        ctx.fillText(num, col * cellSize + cellSize / 2+140, row * cellSize + cellSize / 2+140);
        board50pc[row][col] = 1;
      }
    }
  }
}

function rerandomNumbersAll() {
  drawCheckerboard();
  drawGrid();
  ctx.font = "40px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "black";

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const num = board[row][col];
      board50pc[row][col] = 0;
      if (num !== 0 && Math.random() < 0.5) { // 50% chance to display
        ctx.fillText(num, col * cellSize + cellSize / 2+140, row * cellSize + cellSize / 2+140);
        board50pc[row][col] = 1;
      }
    }
  }
}

function rerandomNumbers() {
  drawCheckerboard();
  drawGrid();
  ctx.font = "40px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "black";
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const num = board[row][col];
      board50pc[row][col] = 0;
      if (num !== 0 && Math.random() < randShow) { // 50% chance to display
        ctx.fillText(num, col * cellSize + cellSize / 2+140, row * cellSize + cellSize / 2+140);
        board50pc[row][col] = 1;
      }
    }
  }
}

function redrawNumbers() {
  console.log(""+board50pc);
  drawCheckerboard();
  drawGrid();
  ctx.font = "40px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "black";

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const num = board[row][col];
      if (board50pc[row][col] == 1) { // 50% chance to display
        ctx.fillText(num, col * cellSize + cellSize / 2+140, row * cellSize + cellSize / 2+140);
        //board50pc[row][col] = 1;
      }
    }
  }
}

// Write numbers on the canvas
function drawNumbersAll2() {
  ctx.font = "40px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  //ctx.fillStyle = "Red";
  ctx.globalAlpha = randShow;
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const num = board[row][col];
      if (num !== 0) {
        ctx.fillText(num, col * cellSize + cellSize / 2+140, row * cellSize + cellSize / 2+140);
      }
    }
  }
  //ctx.fillStyle = "black";
  ctx.globalAlpha = 1;
}

// Write numbers on the canvas
function drawNumbersAll() {
  ctx.font = "40px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.globalAlpha = 0.1;
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const num = board[row][col];
      if (num !== 0) {
        ctx.fillText(num, col * cellSize + cellSize / 2+140, row * cellSize + cellSize / 2+140);
      }
    }
  }
  ctx.globalAlpha = 1;
}

// Sudoku validity check
function isSafe(board, row, col, num) {
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num || board[x][col] === num) return false;
  }
  const startRow = row - row % 3;
  const startCol = col - col % 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[startRow + i][startCol + j] === num) return false;
    }
  }
  return true;
}

// Backtracking Sudoku fill
function fillSudoku(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        shuffle(numbers);
        for (let num of numbers) {
          if (isSafe(board, row, col, num)) {
            board[row][col] = num;
            if (fillSudoku(board)) return true;
            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

// Shuffle array
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// Extract rows, cols, blocks
function extractArrays(board) {
  for (let i = 0; i < 9; i++) {
    rows[i] = [...board[i]];
    cols[i] = board.map(row => row[i]);
  }

  for (let block = 0; block < 9; block++) {
    let br = Math.floor(block / 3) * 3;
    let bc = (block % 3) * 3;
    blocks[block] = [];
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        blocks[block].push(board[br + r][bc + c]);
      }
    }
  }
}

function init() {
  fillSudoku(board);
  extractArrays(board);
  drawCheckerboard();
  drawGrid();
  drawNumbers();

  // Debugging output
  console.log("Rows:", rows);
  console.log("Columns:", cols);
  console.log("Blocks:", blocks);
}

init();
