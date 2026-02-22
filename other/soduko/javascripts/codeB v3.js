const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
var leftMargin = 4*80;
var topMargin = 2*80;
var turnNumbRow = 1;
var noOfColumns = 4;
var maxColors = 6;
var maxColorsRepeat = 6;//really means no repeat

let gridSizeX = noOfColumns;//4;
const gridSizeY = 12;
const cellSize = 80; // Doubled from 50 to 100
let canvasSizeX = gridSizeX * cellSize;
const canvasSizeY = gridSizeY * cellSize;

// Sudoku board
let board = Array.from({ length: 9 }, () => Array(9).fill(0));
let board50pc = Array.from({ length: 9 }, () => Array(9).fill(0));//holds if num displayed

// Arrays to hold rows, columns, and 3x3 blocks
let rows = Array.from({ length: 9 }, () => []);
let cols = Array.from({ length: 9 }, () => []);
let blocks = Array.from({ length: 9 }, () => []);

// Define colors
//const oddBlockColors = ["#ffff99", "#ffcc66"]; // yellow and orange
//const evenBlockColors = ["#ccff99", "#66cc66"]; // lime and leaf-green
const mainBlockColors = ["#ffff99", "#ffcc66"]; // yellow and orange
const green2BlockColors = ["#bbff99", "#66cc66"]; // ["#ddffaa", "#77cc77"]; // lime and leaf-green
const greenBlockColors = ["#bbbbbb", "#888888"];//["#ccff99", "#66cc66"];//["#ddff99", "#aacc66"]; // lime and leaf-green
const purple2BlockColors = ["#ffbbff", "#cc55cc"]; // lime and leaf-green
const greyBlockColors = ["#999999", "#666666"];//["#ff99ff", "#cc66cc"];//["#ffccff", "#dd9999"]; // lime and leaf-green
var letArray = ["A","B","C","D","E","F","G","H","I","J"];

function fillCanvas(){
  //down the top side
  ctx.width = 1218;
  ctx.height = 1200;
  ctx.beginPath();
  ctx.fillStyle = "Black";
  ctx.fillRect(0,0,1218,2000);//1080
  ctx.closePath();

  var changeA = ["#010100","#010100","#010100","#010000", "#000100","#010000", "#000100","#010000", "#000100","#010000", "#000100","#010000", "#000100","#010100", "#010101"];

  if(true){
    var colorNowH = "Green";//col2Hex(baseColor);
    for(tx=0;tx<10000;tx++){//extra colours
      var dirColor = "add";
      if(Math.random()<0.5){dirColor="sub"}
      var randColChange1 = Math.floor(Math.random()*changeA.length);
      var randColChange2 = changeA[randColChange1];
      //var randColChange2 = "#010000";
      colorNow = shiftColor(colorNowH, randColChange2, dirColor);
      colorNowH = colorNow;
      colorNow = "#"+colorNow;
        var texWd_x = 0 +Math.round(Math.random()*(1218));//1080
        var texWd_y = 0 +Math.round(Math.random()*(2000));
        //var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
        //var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
      ctx.fillStyle = colorNow;
    ctx.beginPath();
    ctx.globalAlpha = 0.2;
    //different styles of patterning
    if(Math.random()<0.1){
    var randradius = Math.round(Math.random()*100)+1;}
    else if(Math.random()<0.1){
    var randradius = Math.round(Math.random()*40)+Math.round(Math.random()*30)+Math.round(Math.random()*20)+Math.round(Math.random()*10)+1;}
    else{
    var randradius = Math.round(Math.random()*4)+Math.round(Math.random()*3)+Math.round(Math.random()*2)+Math.round(Math.random()*1)+1;}
    ctx.arc(texWd_x, texWd_y, randradius, 0, Math.PI*2);
    ctx.fill();
    }
  }
  ctx.globalAlpha = 1;
  init2();
}

  //export function shiftColor(base, change, direction) {//direction = 'add' or 'sub'
function shiftColor(base, change, direction) {//direction = 'add' or 'sub'
    const colorRegEx = /^\#?[A-Fa-f0-9]{6}$/;

    // Missing parameter(s)
    if (!base || !change) {
      return '000000';
    }

    // Invalid parameter(s)
    if (!base.match(colorRegEx) || !change.match(colorRegEx)) {
      return '000000';
    }

    // Remove any '#'s
    base = base.replace(/\#/g, '');
    change = change.replace(/\#/g, '');

    // Build new color
    let newColor = '';
    for (let i = 0; i < 3; i++) {
      const basePiece = parseInt(base.substring(i * 2, i * 2 + 2), 16);
      const changePiece = parseInt(change.substring(i * 2, i * 2 + 2), 16);
      let newPiece = '';

      if (direction === 'add') {
        newPiece = (basePiece + changePiece);
        newPiece = newPiece > 255 ? 255 : newPiece;
      }
      if (direction === 'sub') {
        newPiece = (basePiece - changePiece);
        newPiece = newPiece < 0 ? 0 : newPiece;
      }

      newPiece = newPiece.toString(16);
      newPiece = newPiece.length < 2 ? '0' + newPiece : newPiece;
      newColor += newPiece;
    }

    return newColor;
  }


// Draw background boxes with checkerboard colors
function drawCheckerboard() {
  for (let row = 0; row < gridSizeY; row++) {
    for (let col = 0; col < gridSizeX; col++) {
      const blockIndex = row;//Math.floor(row / 3) * 3 + Math.floor(col / 3);
      const isOddBlock = blockIndex < +turnNumbRow ;//blockIndex % 2 !== 0;
      var colorSet = isOddBlock ? mainBlockColors : greyBlockColors;
      const color = colorSet[(row + col) % 2];
      ctx.fillStyle = color;
      ctx.fillRect(col * cellSize+leftMargin, row * cellSize+topMargin, cellSize, cellSize);
    }
  }
}

// Draw the grid lines
function drawGrid() {
  for (let i = 0; i <= gridSizeX; i++) {
    ctx.beginPath();
    ctx.lineWidth = (i < 1 || i > noOfColumns-1) ? 4 : 1;//(i % 2 === 0) ? 4 : 1;//(i % 3 === 0) ? 4 : 1;
    ctx.moveTo(i * cellSize+leftMargin, 0+topMargin);
    ctx.lineTo(i * cellSize+leftMargin, canvasSizeY+topMargin);
    ctx.stroke();
    ctx.closePath();
  }

for (let i = 0; i <= gridSizeY; i++) {
    ctx.beginPath();
    ctx.lineWidth = (i < 1 || i > 11) ? 4 : 1;//(i < 2 || i > 6) ? 4 : 1;
    ctx.moveTo(0+leftMargin, i * cellSize+topMargin);
    ctx.lineTo(canvasSizeX+leftMargin, i * cellSize+topMargin);
    ctx.stroke();
    ctx.closePath();
  }
}

function drawScore() {
    ctx.beginPath();
    ctx.font = "bold 42px Arial";
    ctx.fillStyle = "White";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = "4";
    ctx.fillText("B:"+blackPegs+" W:"+whitePegs, leftMargin/2,  (turnNumbRow-2)*cellSize+205, 250);
    ctx.closePath();
    if(winFlag){
        ctx.beginPath();
        ctx.font = "bold 42px Arial";
        ctx.fillStyle = "Yellow";
        ctx.textAlign = "left";
        ctx.textBaseline = "centre";
        ctx.lineWidth = "4";
        for(w=0;w<noOfColumns;w++){
        ctx.fillStyle = ""+codeArray[w];
        ctx.fillRect(w * cellSize+leftMargin+10, (turnNumbRow-1)*cellSize+205-35, 60, 60)
        }
        ctx.fillStyle = "Yellow";
        ctx.fillRect(leftMargin, (turnNumbRow)*cellSize+205-40, noOfColumns*80, 80)
        ctx.fillStyle = "Black";
        ctx.fillText(""+codeArray, leftMargin,  (turnNumbRow)*cellSize+205, noOfColumns*80);
        ctx.closePath();
      alert("CODE CRACKED!\n"+codeArray);
      }
  }

  function drawQuit() {
    let text = "Are you sure you want to quit?\nEither OK or Cancel.";
    if (confirm(text) == true) {
      drawScore2();
    } else {
      //text = "You canceled!";
    }
    //document.getElementById("demo").innerHTML = text;
  }


  function drawScore2() {
          ctx.beginPath();
          ctx.font = "bold 42px Arial";
          ctx.fillStyle = "Yellow";
          ctx.textAlign = "left";
          ctx.textBaseline = "centre";
          ctx.lineWidth = "4";
          for(w=0;w<noOfColumns;w++){
          ctx.fillStyle = ""+codeArray[w];
          ctx.fillRect(w * cellSize+leftMargin+10, (turnNumbRow)*cellSize+205-35, 60, 60)
          }
          ctx.fillStyle = "Yellow";
          ctx.fillRect(leftMargin, (turnNumbRow+1)*cellSize+205-40, noOfColumns*80, 80)
          ctx.fillStyle = "Black";
          ctx.fillText(""+codeArray, leftMargin,  (turnNumbRow+1)*cellSize+205, noOfColumns*80);
          ctx.closePath();
        alert("Hidden code:\n"+codeArray);
      }

// Draw the coordinates
function drawCoords() {
  for (let i = 0; i < noOfColumns; i++) {
    ctx.beginPath();
    ctx.font = "bold 36px Arial";
    ctx.fillStyle = "Yellow";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = "4";
    //var coordX = +i+1;
    var coordX = letArray[i];
    ////console.log("x"+i);
    ctx.fillText(""+ coordX, i * cellSize+leftMargin+cellSize-cellSize/2,  cellSize+60, 150);
    //ctx.fillText(""+ coordX, i * cellSize+leftMargin+cellSize-cellSize/2,  13*cellSize+105, 150);
    //ctx.fillText("X", i * cellSize + cellSize / 2+leftMargin, 1 * cellSize + cellSize / 2+leftMargin);
    ctx.closePath();
  }

  for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.font = "bold 36px Arial";
      ctx.fillStyle = "Yellow";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.lineWidth = "4";
      var coordX = +1+i;
      ////console.log("x"+i);
      ctx.fillText(""+ coordX, leftMargin-cellSize/2,  i*cellSize+205, 150);
      //ctx.fillText(""+ coordX, noOfColumns * cellSize+leftMargin+cellSize/2,  i*cellSize+205, 150);
      //ctx.fillText("X", i * cellSize + cellSize / 2+leftMargin, 1 * cellSize + cellSize / 2+leftMargin);
      ctx.closePath();
    }

}


function drawButton(){
        ctx.beginPath();
        ctx.font = "bold 24px Arial";
        ctx.fillStyle = "White";
        ctx.fillRect(leftMargin/4-5,  105, 157, 57);
        ctx.closePath();
        //ctx.beginPath();
        ctx.fillStyle = "#444444";
        //ctx.fillRect(leftMargin/4+5,  115, 145, 45);
        //ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(leftMargin/4+2,  153);
        ctx.lineTo(leftMargin/4-3,  160);
        ctx.lineTo(leftMargin/4+150,  160);
        ctx.lineTo(leftMargin/4+150,  107);
        ctx.lineTo(leftMargin/4+142,  113);
        ctx.lineTo(leftMargin/4+2,  153);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.strokeStyle = "#444444";
        ctx.lineWidth = "1";
        //ctx.moveTo(leftMargin/4-5,  154);
        ctx.moveTo(leftMargin/4-5,  105);
        ctx.lineTo(leftMargin/4+2,  113);
        //ctx.lineTo(leftMargin/4-5,  105);
        //ctx.lineTo(leftMargin/4+152,  105);
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = "#aaaaaa";
        ctx.fillRect(leftMargin/4+2,  113, 140, 40);
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = "Black";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.lineWidth = "4";
        ctx.fillText("check code", leftMargin/2-7,  133, 140);
        //ctx.fillText(""+ coordX, noOfColumns * cellSize+leftMargin+cellSize/2,  i*cellSize+205, 150);
        //ctx.fillText("X", i * cellSize + cellSize / 2+leftMargin, 1 * cellSize + cellSize / 2+leftMargin);
        ctx.closePath();
}


function drawButton2(){
        ctx.beginPath();
        ctx.font = "bold 24px Arial";
        ctx.fillStyle = "White";
        ctx.fillRect(leftMargin*1.25-5+noOfColumns*80,  105, 157, 57);
        ctx.closePath();
        //ctx.beginPath();
        ctx.fillStyle = "#444444";
        //ctx.fillRect(leftMargin/4+5,  115, 145, 45);
        //ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(leftMargin*1.25+2+noOfColumns*80,  153);
        ctx.lineTo(leftMargin*1.25-3+noOfColumns*80,  160);
        ctx.lineTo(leftMargin*1.25+150+noOfColumns*80,  160);
        ctx.lineTo(leftMargin*1.25+150+noOfColumns*80,  107);
        ctx.lineTo(leftMargin*1.25+142+noOfColumns*80,  113);
        ctx.lineTo(leftMargin*1.25+2+noOfColumns*80,  153);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.strokeStyle = "#444444";
        ctx.lineWidth = "1";
        //ctx.moveTo(leftMargin/4-5,  154);
        ctx.moveTo(leftMargin*1.25-5+noOfColumns*80,  105);
        ctx.lineTo(leftMargin*1.25+2+noOfColumns*80,  113);
        //ctx.lineTo(leftMargin/4-5,  105);
        //ctx.lineTo(leftMargin/4+152,  105);
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = "#aaaaaa";
        ctx.fillRect(leftMargin*1.25+2+noOfColumns*80,  113, 140, 40);
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = "Black";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.lineWidth = "4";
        ctx.fillText("Reveal", leftMargin*1.5-7+noOfColumns*80,  133, 140);
        //ctx.fillText(""+ coordX, noOfColumns * cellSize+leftMargin+cellSize/2,  i*cellSize+205, 150);
        //ctx.fillText("X", i * cellSize + cellSize / 2+leftMargin, 1 * cellSize + cellSize / 2+leftMargin);
        ctx.closePath();
}

function clickButton2(){

}


function clickButton(){
        ctx.beginPath();
        ctx.font = "bold 24px Arial";
        ctx.fillStyle = "#444444";//"White";
        ctx.fillRect(leftMargin/4-5,  105, 157, 57);
        ctx.closePath();
        //ctx.beginPath();
        ctx.fillStyle = "White";//"#444444";
        //ctx.fillRect(leftMargin/4+5,  115, 145, 45);
        //ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(leftMargin/4+2,  153);
        ctx.lineTo(leftMargin/4-3,  160);
        ctx.lineTo(leftMargin/4+150,  160);
        ctx.lineTo(leftMargin/4+150,  107);
        ctx.lineTo(leftMargin/4+142,  113);
        ctx.lineTo(leftMargin/4+2,  153);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.strokeStyle = "White";//"#444444";
        ctx.lineWidth = "1";
        //ctx.moveTo(leftMargin/4-5,  154);
        ctx.moveTo(leftMargin/4-5,  105);
        ctx.lineTo(leftMargin/4+2,  113);
        //ctx.lineTo(leftMargin/4-5,  105);
        //ctx.lineTo(leftMargin/4+152,  105);
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = "#888888";
        ctx.fillRect(leftMargin/4+2,  113, 140, 40);
        ctx.closePath();
}

function init2() {
  drawCheckerboard();
  drawGrid();
  drawCoords();
  drawButton();
  drawButton2();
  //drawNumbers();

  // Debugging output
  ////console.log("Rows:", rows);
  ////console.log("Columns:", cols);
  ////console.log("Blocks:", blocks);
}
