const LAST_BANG = 4;

var canvW = 900;
var canvH = 550;
var houseW = Math.round(canvW / 10);//90;
var houseH1 = Math.round(1 * canvH / 11);//100; 2*
var houseH2 = Math.round(8.5 * canvH / 11);//350; 7*
var windSize = Math.round(houseW / 4);//350;
var windRows = Math.round(houseH2 / (windSize * 1.5));
var gorSize = Math.round(houseW / 2);//350;
var sunRadius = gorSize / 4;
var player1Name = "Player 1";
var player2Name = "Player 2";
var player1Score = 0;
var player2Score = 0;
var player1Shots = 0;
var player2Shots = 0;
var player1Speed = 50;
var player2Speed = 50;
var player1Angle = 45;
var player2Angle = 45;
var gorAPos = 2;
var gorBPos = 9;
var gorACol = "DarkMagenta";
var gorBCol = "SaddleBrown";
var gorAllColA = ["DarkMagenta", "SaddleBrown",
  "RosyBrown", "Tan", "Wheat", "WhiteSmoke",
  "Thistle", "Teal", "Chocolate", "DarkGoldenRod",
  "DarkGray", "DarkSlateGray", "DeepPink",
  "FireBrick", "GoldenRod", "Indigo", "RoyalBlue"]
var gorAllColALen = gorAllColA.length;
var skyCol = "LightSkyBlue";//"SkyBlue"
var noOfHs = Math.ceil(canvW / houseW);
var edge = 0;
var xmin = 0;
var xmax = canvW - xmin;
var ymin = 0;
var ymax = canvH - ymin / 2;
var midValX = (xmin + xmax) / 2;
var midValY = (ymin + ymax) / 2;
var Qx = 0;
var Qy = 0;
var touchRadius = 20;
var touchFlag = "no";
var houseHighA = new Array();
var houseColorA = new Array();
var gorPosA = new Array();
var windowsA = new Array();
var banX = 0;
var banY = 0;
var banAng = Math.PI / 4;
var angleNow = 55;
var speedNow = 70;
var speedV = speedNow * Math.sin(angleNow / 180 * Math.PI);
var speedH = speedNow * Math.cos(angleNow / 180 * Math.PI);
var delSV = 0.2;
var bangFlag = false;
var bangClock = 0;
var delT = 20;//10 for faster, 40 for slow mo
var gor2gor = 0;
var turnNumb = "A";
var catchText = "?";
var countText = 0;
var turnAng = true;
var turnSpd = false;
var hitFlag = false;
var colorStoreA = new Array();
var gameNumb = 0;
var setEnd = false;
var resetDone = false;
var gravity = 0.2;
var delGrav = 0.3;
var grav0 = 0.05;
var blueflag = true;
var boomTrailA = new Array();
var boomTrailLen = 0;
let playAPts = 0;
let playBPts = 0;
let shotSinceA = 0;
let shotSinceB = 0;
let timeCount = 0;
let dumGorInx = 2;
let gorAMove = 3;
let gorBMove = 3;
let textShots = "";

//no arms
let gorCoords0 = [7, 0, 7, 5, 1, 5, 1, 8, 6, 8, 6, 11, 5, 12, 
    5, 19, 8, 19, 7, 18, 7, 15, 12, 15, 12, 18, 
    11, 19, 14, 19, 14, 12, 13, 11, 13, 8, 18, 8,
    18, 5, 12, 5, 12, 0];
let coordsLen0 = gorCoords0.length;
//L up, no R
let gorCoords1 = [7, 0, 7, 5, 3, 5, 3, 0, 1, 0, 1, 8, 6, 8, 6, 11, 5, 12, 
    5, 19, 8, 19, 7, 18, 7, 15, 12, 15, 12, 18, 
    11, 19, 14, 19, 14, 12, 13, 11, 13, 8, 18, 8,
    18, 5, 12, 5, 12, 0];
let coordsLen1 = gorCoords1.length;
//L up, R down
let gorCoords2 = [7, 0, 7, 5, 3, 5, 3, 0, 1, 0, 1, 8, 6, 8, 6, 11, 5, 12, 
    5, 19, 8, 19, 7, 18, 7, 15, 12, 15, 12, 18, 
    11, 19, 14, 19, 14, 12, 13, 11, 13, 8, 16, 8, 16, 14, 18, 14,
    18, 5, 12, 5, 12, 0];
let coordsLen2 = gorCoords2.length;
//L down, R down
let gorCoords3 = [7, 0, 7, 5, 1, 5, 1, 14, 3, 14, 3, 8,  6, 8, 6, 11, 5, 12, 
    5, 19, 8, 19, 7, 18, 7, 15, 12, 15, 12, 18, 
    11, 19, 14, 19, 14, 12, 13, 11, 13, 8, 16, 8, 16, 14, 18, 14,
    18, 5, 12, 5, 12, 0];
let coordsLen3 = gorCoords3.length;
//L down, R up
let gorCoords4 = [7, 0, 7, 5, 1, 5, 1, 14, 3, 14, 3, 8,  6, 8, 6, 11, 5, 12, 
    5, 19, 8, 19, 7, 18, 7, 15, 12, 15, 12, 18, 
    11, 19, 14, 19, 14, 12, 13, 11, 13, 8, 
    18, 8, 18, 0,  16, 0, 16, 5, 12, 5, 12, 0];
let coordsLen4 = gorCoords4.length;
//L up, R up
let gorCoords5 = [7, 0, 7, 5, 3, 5, 3, 0, 1, 0, 1, 8, 6, 8, 6, 11, 5, 12, 
    5, 19, 8, 19, 7, 18, 7, 15, 12, 15, 12, 18, 
    11, 19, 14, 19, 14, 12, 13, 11, 13, 8, 
    18, 8, 18, 0,  16, 0, 16, 5, 12, 5, 12, 0];
let coordsLen5 = gorCoords5.length;

let gorCoords = [gorCoords0, gorCoords1, gorCoords2, gorCoords3, gorCoords4, gorCoords5];
let coordsLen = [coordsLen0, coordsLen1, coordsLen2, coordsLen3, coordsLen4, coordsLen5];
let gorCoordIndex = 2;

/*const getColorIndicesForCoord = (x, y, width) => {
  const red = y * (width * 4) + x * 4;
  return [red, red + 1, red + 2, red + 3];
};*/

window.onload = function () {
  bangClock = 0;
  gravity = Math.round(Math.random() * delGrav) + grav0;
  delSV = gravity;
  var dumGorCol = Math.round(Math.random() * gorAllColALen);
  gorACol = gorAllColA[dumGorCol];
  colorStoreA[0] = gorACol;
  gorAllColA[dumGorCol] = gorAllColA[gorAllColALen - 1];
  gorAllColALen--;
  dumGorCol = Math.round(Math.random() * gorAllColALen);
  gorBCol = gorAllColA[dumGorCol];
  colorStoreA[1] = gorBCol;

  var events = new Events("myCanvas");
  var canvas = events.getCanvas();
  var context = events.getContext();
  var isMouseDown = false;
  var canvasImg = getCanvasImg(canvas);
  var points = [];

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.canvas.width = canvW;
  ctx.canvas.height = canvH;

  // Blue rectangle
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.fillStyle = "#000077";
  ctx.rect(0, 0, canvW, canvH);//ctx.rect(30, 30, canvW-60, canvH-60);
  //ctx.stroke();
  ctx.fill();

  //draw houses
  for (i = 0; i < noOfHs; i++) {
    var newColorNum = Math.floor(Math.random() * 8) + 3;
    var newColorNumR = Math.floor(Math.random() * 11) + 3;
    if (newColorNumR < newColorNum) { newColorNumR = newColorNum; }
    if (newColorNum == 10) { newColorNum = "A"; }
    else if (newColorNum == 11) { newColorNum = "B"; }
    else if (newColorNum == 12) { newColorNum = "C"; }
    else if (newColorNum == 13) { newColorNum = "D"; }
    if (newColorNumR == 10) { newColorNumR = "A"; }
    else if (newColorNumR == 11) { newColorNumR = "B"; }
    else if (newColorNumR == 12) { newColorNumR = "C"; }
    else if (newColorNumR == 13) { newColorNumR = "D"; }
    newColorNum = "" + newColorNum;
    var newColor = "#" + newColorNumR + newColorNumR + newColorNum + newColorNum + newColorNum + newColorNum;
    houseColorA[i] = newColor;
    var houseX = houseW * i;
    var houseY = Math.round(Math.random() * (houseH2 - houseH1)) + houseH1;
    var houseY2 = ymax - houseY;
    houseHighA[i] = houseY;
    houseY = houseY - xmin;
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.fillStyle = newColor;//"Brown";
    ctx.rect(houseX, houseY2, houseW, houseY);//ctx.rect(30, 30, canvW-60, canvH-60);
    //ctx.stroke();
    ctx.fill();

    //windows
    for (k = 0; k < windRows; k++) {
      for (j = 0; j < 2; j++) {
        var windowX = houseW * i + 2 * windSize / 3 + windSize * j * 1.5;
        var windowY = ymax - houseHighA[i] + windSize / 2 + windSize * 1.5 * k;
        var windColor = "Yellow";
        if (Math.random() < 0.1) { windColor = "Orange"; }
        else if (Math.random() < 0.1) { windColor = "Black"; }
        else if (Math.random() < 0.05) { windColor = "Cyan"; }
        else { windColor = "Yellow"; }
        windowsA[i * 100 + j * 10 + k] = windColor;
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.fillStyle = windColor;//"Yellow";
        ctx.rect(windowX, windowY, windSize, windSize);//ctx.rect(30, 30, canvW-60, canvH-60);
        //ctx.stroke();
        ctx.fill();
      }
    }

   /* ctx.beginPath();
    ctx.font = "10px Arial";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText("" + newColor, houseX + 15, ymax - 15);//houseY2*1.2
    */
  }
  //draw gorillas
  var dummyGor = Math.floor(Math.random() * 4);
  var gorX = houseW * dummyGor + houseW * 0.25;
  var gorY = ymax - houseHighA[dummyGor] - gorSize;
  gorPosA[0] = gorX;
  gorPosA[1] = gorY;
  //banX=gorX;
  //banY=gorY;
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.fillStyle = "#000077";//gorACol;
  ctx.rect(gorX, gorY, gorSize, gorSize);
  ctx.fill();
  ctx.closePath();

  drawKong(ctx, gorX, gorY, gorACol, 3);
  //drawArm(ctx, gorX, gorY, gorACol, "L", "D");
  //drawArm(ctx, gorX, gorY, gorACol, "R", "D");
/*
  ctx.fillStyle=gorACol;//"Black";
  ctx.beginPath();
  let gorScale=2.4;
  let gorX0=gorX+gorCoords[0]*gorScale;
  let gorY0=gorY+gorCoords[1]*gorScale;
  ctx.moveTo(gorX0,gorY0);
  for(g=2;g<coordsLen;g=g+2){
    gorX0=gorX+gorCoords[g]*gorScale;
    gorY0=gorY+gorCoords[g+1]*gorScale;
    ctx.lineTo(gorX0,gorY0);
  }
  gorX0=gorX+gorCoords[0]*gorScale;
  gorY0=gorY+gorCoords[1]*gorScale;
  ctx.lineTo(gorX0,gorY0);
  ctx.fill();
  ctx.closePath();

  ctx.strokeStyle="Black";
  ctx.lineWidth = "1";
  ctx.beginPath();
  gorScale=2.4;
  gorX0=gorX+gorCoords[0]*gorScale;
  gorY0=gorY+gorCoords[1]*gorScale;
  ctx.moveTo(gorX0,gorY0);
  for(g=2;g<coordsLen;g=g+2){
    gorX0=gorX+gorCoords[g]*gorScale;
    gorY0=gorY+gorCoords[g+1]*gorScale;
    ctx.lineTo(gorX0,gorY0);
  }
  gorX0=gorX+gorCoords[0]*gorScale;
  gorY0=gorY+gorCoords[1]*gorScale;
  ctx.lineTo(gorX0,gorY0);
  ctx.stroke();
  ctx.closePath();
  
  //brow
  ctx.beginPath();
  gorScale=2.4;
  gorX0=gorX+7*gorScale;
  gorY0=gorY+2*gorScale;
  ctx.moveTo(gorX0,gorY0);
    gorX0=gorX+12*gorScale;
    gorY0=gorY+2*gorScale;
    ctx.lineTo(gorX0,gorY0);
  ctx.stroke();
  ctx.closePath();
  //chest
  ctx.beginPath();
  gorScale=2.4;
  gorX0=gorX+9.5*gorScale;
  gorY0=gorY+6*gorScale;
  ctx.moveTo(gorX0,gorY0);
    gorX0=gorX+9.5*gorScale;
    gorY0=gorY+9*gorScale;
    ctx.lineTo(gorX0,gorY0);
    gorX0=gorX+6*gorScale;
    gorY0=gorY+9*gorScale;
    ctx.lineTo(gorX0,gorY0);
    gorX0=gorX+13*gorScale;
    gorY0=gorY+9*gorScale;
    ctx.lineTo(gorX0,gorY0);
  ctx.stroke();
  ctx.closePath();
  //nose
  ctx.beginPath();
  gorX0=gorX+8.5*gorScale;
  gorY0=gorY+4*gorScale;
    ctx.arc(gorX0,gorY0, 1, 0, Math.PI*2);
    ctx.stroke();
    gorX0=gorX+10.5*gorScale;
    gorY0=gorY+4*gorScale;
    ctx.arc(gorX0,gorY0, 1, 0, Math.PI*2);
    ctx.stroke();
    ctx.closePath();
    //tummy button
  ctx.beginPath();
    gorX0=gorX+9.5*gorScale;
    gorY0=gorY+12*gorScale;
    ctx.arc(gorX0,gorY0, 1, 0, Math.PI*2);
    ctx.stroke();
    ctx.closePath();
    */
  /*  ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.fillStyle = gorACol;//body
    ctx.arc(gorX+gorSize/2, gorY+gorSize/2, gorSize/4, 0, Math.PI*2);
    ctx.fill();//head
    ctx.arc(gorX+gorSize/2, gorY+gorSize/4, gorSize/5, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.fillStyle = gorACol;//legs
    ctx.arc(gorX+gorSize/3, gorY+gorSize/4*3, gorSize/6, -Math.PI/2, Math.PI/2*0.8, true);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(gorX+gorSize/3*2, gorY+gorSize/4*3, gorSize/6, -Math.PI/2, Math.PI/2*1.2, false);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();//arms
    ctx.arc(gorX+gorSize/4, gorY+gorSize/2, gorSize/6, 0, Math.PI, true);
    ctx.fill();
    ctx.arc(gorX+gorSize/4*3, gorY+gorSize/2, gorSize/6, 0, Math.PI, true);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();//hands
    ctx.rect(gorX+gorSize/16, gorY+gorSize/2, gorSize/15, gorSize/10);
    ctx.rect(gorX+gorSize/16*13.5, gorY+gorSize/2, gorSize/15, gorSize/10);
    ctx.fill();*/

  dummyGor = Math.floor(Math.random() * 4) + 6;
  gorX = houseW * dummyGor + houseW * 0.25;
  gorY = ymax - houseHighA[dummyGor] - gorSize;
  gorPosA[2] = gorX;
  gorPosA[3] = gorY;
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.fillStyle = "#000077";//gorBCol;
  ctx.rect(gorX, gorY, gorSize, gorSize);
  ctx.fill();

  drawKong(ctx, gorX, gorY, gorBCol, 3);
  //drawArm(ctx, gorX, gorY, gorBCol, "L", "D");
  //drawArm(ctx, gorX, gorY, gorBCol, "R", "D");

  //draw Sun
  var sunX = midValX;
  var sunY = ymin + gorSize;
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.fillStyle = "Yellow";
  ctx.arc(sunX, sunY, gorSize / 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.fillStyle = "Black";
  ctx.arc(sunX - gorSize / 4 + gorSize / 8, sunY - gorSize / 16, 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.arc(sunX - gorSize / 4 + gorSize / 8 * 3, sunY - gorSize / 16, 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.lineWidth = "2";
  ctx.strokeStyle = "Black";
  ctx.arc(sunX, sunY + gorSize / 16, gorSize / 8, 0, Math.PI, false);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.lineWidth = "2";
  ctx.strokeStyle = "Yellow";
  ctx.fillText("" + gameNumb, sunX, sunY - 15);
  ctx.fill();


  ctx.beginPath();
  ctx.font = "20px Arial";
  ctx.fillStyle = "#ffff00";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText("" + player1Name, xmin + 15, sunY - 35);
  ctx.fillText("Shots: " + player1Shots, xmin + 15, sunY -15);
  ctx.fillText("Score: " + player1Score, xmin + 15, sunY + 5);
  ctx.fillText("Points: " + playAPts, xmin + 15, sunY + 25);
  ctx.fillText("Angle = ?", xmin + 15, sunY + 45);
  //ctx.fillText("Speed: "+speedNow,xmin+15, sunY+60);

  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  ctx.fillText("" + player2Name, xmax - 15, sunY - 35);
  ctx.fillText("Shots: " + player2Shots, xmax - 15, sunY - 15);
  ctx.fillText("Score: " + player2Score, xmax - 15, sunY + 5);
  ctx.fillText("Points: " + playBPts, xmax - 15, sunY + 25);

  document.getElementById("saveButton").addEventListener("click", function (evt) {
    // open new window with saved image so user
    // can right click and save to their computer
    window.open(canvas.toDataURL());
  }, false);

  canvas.addEventListener("mousedown", function () {
    var drawingPos = events.getMousePos();
    //newQflag = false;

    isMouseDown = true;
  }, false);

  canvas.addEventListener("mouseup", function () {
    var drawingPos = events.getMousePos();
    isMouseDown = false;
    touchFlag = "no";

    if (drawingPos !== null) {
      //points.push(drawingPos);
      Qx = drawingPos.x;
      Qy = drawingPos.y;
    }

    //moveF=true;
    canvasImg = getCanvasImg(this);
  }, false);

  canvas.addEventListener("mouseout", function () {
    if (document.createEvent) {
      var evt = document.createEvent('MouseEvents');
      evt.initEvent("mouseup", true, false);
      this.dispatchEvent(evt);
    }
    else {
      this.fireEvent("onmouseup");
    }
  }, false);

  events.setStage(function () {
    if (isMouseDown) {
      if (true) {
        //moveQ(events, points);
      }
    }
  });

  document.addEventListener(
    "keydown",
    (event) => {
      const keyName = event.key;
      //alert(""+keyName);
      if (setEnd) {
        if (keyName == "y" || keyName == "Y") {
          setEnd = false;
          resetSc();
        }
      }
      if (keyName == "Enter" || keyName == "0" || keyName == "1" || keyName == "2" || keyName == "3" || keyName == "4" || keyName == "5" || keyName == "6" || keyName == "7" || keyName == "8" || keyName == "9") {
        if (turnAng) {
          if (catchText == "?") { catchText = ""; }
          if (keyName != "Enter") {
            catchText = catchText + keyName;
            countText++;
          }
          if (countText == 2 || (countText > 0 && keyName == "Enter")) {
            turnAng = false;
            turnSpd = true;
            angleNow = 1 * catchText;
            catchText = "?";
            countText = "";
            if (angleNow < 0) { angleNow = 0; }
            else if (angleNow > 90) { angleNow = 90; }
            textShots = textShots + " " + angleNow;
          }
          plotActualPict();
        }
        else if (turnSpd) {
          if (catchText == "?") { catchText = ""; }
          if (keyName != "Enter") {
            catchText = catchText + keyName;
            countText++;
          }
          if (countText == 3 || (countText > 0 && keyName == "Enter")) {
            turnAng = false;
            turnSpd = false;
            speedNow = 1 * catchText;
            catchText = "";
            countText = "";
            if (speedNow < 10) { speedNow = 10; }
            else if (speedNow > 250) { speedNow = 250; }
            textShots = textShots + ", " + speedNow+";";
            makeBang();
          }
          plotActualPict();
        }
      }
      //alert(""+keyName);

      if (keyName === "Control") {
        // do not alert when only Control key is pressed.
        return;
      }

      if (event.ctrlKey) {
        // Even though event.key is not 'Control' (e.g., 'a' is pressed),
        // event.ctrlKey may be true if Ctrl key is pressed at the same time.
        //alert(`Combination of ctrlKey + ${keyName}`);
      } else {
        //alert(`Key pressed ${keyName}`);
      }
    },
    false,
  );

  document.addEventListener(
    "keyup",
    (event) => {
      const keyName = event.key;

      // As the user releases the Ctrl key, the key is no longer active,
      // so event.ctrlKey is false.
      if (keyName === "Control") {
        //alert("Control key was released");
      }
    },
    false,
  );

  //plotActualPict();
  //makeBang();
}

function makeBang() {//throw banana
  if (!bangFlag) {
    if (turnNumb == "A") {
      //gor2gor=(gorPosA[2]-gorPosA[0])*houseW;
      //var dumAng=Math.random()*40+25;
      //angleNow=Math.round(dumAng);
      //var dumTrig=Math.sin(2*angleNow/180*Math.PI);
      //speedNow=Math.round(Math.pow(gor2gor*0.2/2.37/dumTrig,0.5));
      speedV = speedNow * Math.sin(angleNow / 180 * Math.PI);
      speedH = speedNow * Math.cos(angleNow / 180 * Math.PI);
      banX = gorPosA[0] + gorSize / 2;
      banY = gorPosA[1] + gorSize / 2;
      player1Shots++;
      shotSinceA++;
      gorAMove=2;
      gorBMove=3;
    }
    else {
      //gor2gor=(gorPosA[2]-gorPosA[0])*houseW;
      //var dumAng=Math.random()*40+25;
      //angleNow=Math.round(dumAng);
      //var dumTrig=Math.sin(2*angleNow/180*Math.PI);
      //speedNow=Math.round(Math.pow(gor2gor*0.2/2.37/dumTrig,0.5));
      speedV = speedNow * Math.sin(angleNow / 180 * Math.PI);
      speedH = -1 * speedNow * Math.cos(angleNow / 180 * Math.PI);
      banX = gorPosA[2] + gorSize / 2;
      banY = gorPosA[3] + gorSize / 2;
      player2Shots++;
      shotSinceB++;
      gorAMove=3;
      gorBMove=2;
    }
    bangFlag = true;
    bangClock = 0;
    bangRing = 0;
    timeCount = 0;
    bangGo = setInterval(plotActualPict, delT);//100
  }
}

function endBang() {
  bangRing = 0;
  bangFlag = false;
  bangClock = 0;
  startScalar = false;
  oneFlag = true;
  testCount = 0;
  if (turnNumb == "A") { 
    turnNumb = "B"; }
  else {
    turnNumb = "A"; }
    if (gorBCol == "Red") { 
      //alert("A hits");
      player1Score++;
      playAPts=playAPts+shotSinceA;
      shotSinceA=0;
      }
    else if(gorACol == "Red"){ 
      //alert("B hits");
      player2Score++;
      playBPts=playBPts+shotSinceB;
      shotSinceB=0;
      }
  catchText = "?";
  turnAng = true;
  if (setEnd) { turnAng = false; }
  plotActualPict();
  //winGo = setInterval(winRoute, delT);//100
}

function plotStartAgain() {
  //alert("reset");
  //document.getElementById("myCanvas").focus();
  bangClock = 0;
  textShots = "";
  // `\_(--)_/`
  /*
    To start the match press "y" or "Y"
    Each player takes turn throwing a banana
    choose an Angle (0 to 90) and a Speed (10 to 250)
    For each match the gravity is slightly different,
    but stays the same for the whole match (until you refresh the page)
    Play until a certain number of hits (eg 1, 3, 5, ...)
    Or to a certain number of shots (eg 10, 12, 15,...) and whoever has the higher number of hits wins
  */
 /*
  gorAllColA0 = ["DarkMagenta", "SaddleBrown",
    "RosyBrown", "Tan", "Wheat", "WhiteSmoke",
    "Thistle", "Teal", "Chocolate", "DarkGoldenRod",
    "DarkBlue", "DarkGray", "DarlSlateGray", "DeepPink",
    "FireBrick", "GoldenRod", "Indigo", "RoyalBlue"]
  gorAllColALen = gorAllColA.length;

  var dumGorCol = Math.round(Math.random() * gorAllColALen);
  gorACol = gorAllColA[dumGorCol];
  colorStoreA[0] = gorACol;
  gorAllColA[dumGorCol] = gorAllColA[gorAllColALen - 1];
  gorAllColALen--;
  dumGorCol = Math.round(Math.random() * gorAllColALen);
  gorBCol = gorAllColA[dumGorCol];
  colorStoreA[1] = gorBCol;
    */
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.canvas.width = canvW;
  ctx.canvas.height = canvH;

  // Blue rectangle
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.fillStyle = "#000077";
  ctx.rect(0, 0, canvW, canvH);//ctx.rect(30, 30, canvW-60, canvH-60);
  //ctx.stroke();
  ctx.fill();

  //draw houses
  for (i = 0; i < noOfHs; i++) {
    var newColorNum = Math.floor(Math.random() * 8) + 3;
    var newColorNumR = Math.floor(Math.random() * 11) + 3;
    if (newColorNumR < newColorNum) { newColorNumR = newColorNum; }
    if (newColorNum == 10) { newColorNum = "A"; }
    else if (newColorNum == 11) { newColorNum = "B"; }
    else if (newColorNum == 12) { newColorNum = "C"; }
    else if (newColorNum == 13) { newColorNum = "D"; }
    if (newColorNumR == 10) { newColorNumR = "A"; }
    else if (newColorNumR == 11) { newColorNumR = "B"; }
    else if (newColorNumR == 12) { newColorNumR = "C"; }
    else if (newColorNumR == 13) { newColorNumR = "D"; }
    newColorNum = "" + newColorNum;
    var newColor = "#" + newColorNumR + newColorNumR + newColorNum + newColorNum + newColorNum + newColorNum;
    houseColorA[i] = newColor;
    var houseX = houseW * i;
    var houseY = Math.round(Math.random() * (houseH2 - houseH1)) + houseH1;
    var houseY2 = ymax - houseY;
    houseHighA[i] = houseY;
    houseY = houseY - xmin;
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.fillStyle = newColor;//"Brown";
    ctx.rect(houseX, houseY2, houseW, houseY);//ctx.rect(30, 30, canvW-60, canvH-60);
    //ctx.stroke();
    ctx.fill();

    //windows
    for (k = 0; k < windRows; k++) {
      for (j = 0; j < 2; j++) {
        var windowX = houseW * i + 2 * windSize / 3 + windSize * j * 1.5;
        var windowY = ymax - houseHighA[i] + windSize / 2 + windSize * 1.5 * k;
        var windColor = "Yellow";
        if (Math.random() < 0.1) { windColor = "Orange"; }
        else if (Math.random() < 0.1) { windColor = "Black"; }
        else if (Math.random() < 0.05) { windColor = "Cyan"; }
        else { windColor = "Yellow"; }
        windowsA[i * 100 + j * 10 + k] = windColor;
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.fillStyle = windColor;//"Yellow";
        ctx.rect(windowX, windowY, windSize, windSize);//ctx.rect(30, 30, canvW-60, canvH-60);
        //ctx.stroke();
        ctx.fill();
      }
    }

  /*  ctx.beginPath();
    ctx.font = "10px Arial";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText("" + newColor, houseX + 15, ymax - 15);//houseY2*1.2
*/
  }
  //draw gorillas
  var dummyGor = Math.floor(Math.random() * 4);
  var gorX = houseW * dummyGor + houseW * 0.25;
  var gorY = ymax - houseHighA[dummyGor] - gorSize;
  gorPosA[0] = gorX;
  gorPosA[1] = gorY;
  //banX=gorX;
  //banY=gorY;
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.fillStyle = "#000077";//gorACol;//"White";
  ctx.rect(gorX, gorY, gorSize, gorSize);
  ctx.fill();

  drawKong(ctx, gorX, gorY, gorACol, 2);
  //drawArm(ctx, gorX, gorY, gorACol, "L", "D");
  //drawArm(ctx, gorX, gorY, gorACol, "R", "D");
  /*
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.fillStyle = gorACol;//body
    ctx.arc(gorX+gorSize/2, gorY+gorSize/2, gorSize/4, 0, Math.PI*2);
    ctx.fill();//head
    ctx.arc(gorX+gorSize/2, gorY+gorSize/4, gorSize/5, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.fillStyle = gorACol;//legs
    ctx.arc(gorX+gorSize/3, gorY+gorSize/4*3, gorSize/6, -Math.PI/2, Math.PI/2*0.8, true);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(gorX+gorSize/3*2, gorY+gorSize/4*3, gorSize/6, -Math.PI/2, Math.PI/2*1.2, false);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();//arms
    ctx.arc(gorX+gorSize/4, gorY+gorSize/2, gorSize/6, 0, Math.PI, true);
    ctx.fill();
    ctx.arc(gorX+gorSize/4*3, gorY+gorSize/2, gorSize/6, 0, Math.PI, true);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();//hands
    ctx.rect(gorX+gorSize/16, gorY+gorSize/2, gorSize/15, gorSize/10);
    ctx.rect(gorX+gorSize/16*13.5, gorY+gorSize/2, gorSize/15, gorSize/10);
    ctx.fill();*/

  dummyGor = Math.floor(Math.random() * 4) + 6;
  gorX = houseW * dummyGor + houseW * 0.25;
  gorY = ymax - houseHighA[dummyGor] - gorSize;
  gorPosA[2] = gorX;
  gorPosA[3] = gorY;
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.fillStyle = "#000077";//gorBCol;
  ctx.rect(gorX, gorY, gorSize, gorSize);
  ctx.fill();
  drawKong(ctx, gorX, gorY, gorBCol, 2);
  //drawArm(ctx, gorX, gorY, gorBCol, "L", "D");
  //drawArm(ctx, gorX, gorY, gorBCol, "R", "D");


  //draw Sun
  var sunX = midValX;
  var sunY = ymin + gorSize;
  sunRadius++; sunRadius++;
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.fillStyle = "Yellow";
  ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.fillStyle = "Black";
  ctx.arc(sunX - gorSize / 4 + gorSize / 8, sunY - gorSize / 16, 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.arc(sunX - gorSize / 4 + gorSize / 8 * 3, sunY - gorSize / 16, 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.lineWidth = "2";
  ctx.strokeStyle = "Black";
  ctx.arc(sunX, sunY + gorSize / 16, gorSize / 8, 0, Math.PI, false);
  ctx.stroke();
  /*
  ctx.closePath();
  ctx.beginPath();
  ctx.lineWidth = "2";
  ctx.fillStyle = "Yellow";
  ctx.fillText("" + gorCoordIndex, sunX, sunY - 15);//gameNumb
  ctx.fill();*/


  ctx.beginPath();
  ctx.font = "20px Arial";
  ctx.fillStyle = "#ffff00";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText("" + player1Name, xmin + 15, sunY - 35);
  ctx.fillText("Shots: " + player1Shots, xmin + 15, sunY -15);
  ctx.fillText("Score: " + player1Score, xmin + 15, sunY + 5);
  ctx.fillText("Points: " + playAPts, xmin + 15, sunY + 25);
  if (turnNumb == "A") {
    ctx.fillText("Angle = ?", xmin + 15, sunY + 45);
  }

  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  ctx.fillText("" + player2Name, xmax - 15, sunY - 35);
  ctx.fillText("Shots: " + player2Shots, xmax - 15, sunY - 15);
  ctx.fillText("Score: " + player2Score, xmax - 15, sunY + 5);
  ctx.fillText("Points: " + playBPts, xmax - 15, sunY + 25);
  if (turnNumb == "B") {
    ctx.fillText("Angle = ?", xmax - 15, sunY + 45);
  }
}

function plotActualPict() {

  //const myImageData = ctx.getImageData(0, 0, canvW, canvH);//left, top, width, height

  //ctx.clearRect(0, 0, canvW/2, canvH/2);//ctx.clearRect(30, 30, canvW-60, canvH-60);//
  timeCount++;

  let armDirA="D";
  let armDirB="D";

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.canvas.width = canvW;
  ctx.canvas.height = canvH;

  // Blue rectangle
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.fillStyle = "#000077";
  ctx.rect(0, 0, canvW, canvH);//ctx.rect(30, 30, canvW-60, canvH-60);
  //ctx.stroke();
  ctx.fill();

  //draw houses
  for (i = 0; i < noOfHs; i++) {
    var newColor = houseColorA[i];
    var houseX = houseW * i;
    var houseY = houseHighA[i];
    var houseY2 = ymax - houseY;
    houseY = houseY - xmin;
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.fillStyle = newColor;//"Brown";
    ctx.rect(houseX, houseY2, houseW, houseY);//ctx.rect(30, 30, canvW-60, canvH-60);
    //ctx.stroke();
    ctx.fill();

    //windows
    for (k = 0; k < windRows; k++) {
      for (j = 0; j < 2; j++) {
        var windowX = houseW * i + 2 * windSize / 3 + windSize * j * 1.5;
        var windowY = ymax - houseHighA[i] + windSize / 2 + windSize * 1.5 * k;
        var windColor = windowsA[i * 100 + j * 10 + k];
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.fillStyle = windColor;//"Yellow";
        ctx.rect(windowX, windowY, windSize, windSize);//ctx.rect(30, 30, canvW-60, canvH-60);
        //ctx.stroke();
        ctx.fill();
      }
    }

  }
  //draw gorillas
  var gorX = gorPosA[0];
  var gorY = gorPosA[1];
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.fillStyle = "#000077";//gorACol;
  ctx.rect(gorX, gorY, gorSize, gorSize);
  ctx.fill();
  ctx.closePath();
  if(timeCount%35==0){
    dumGorInx = Math.floor(Math.random()*4)+2;
  //gorCoordIndex++;
  //if(gorCoordIndex>5){gorCoordIndex=2;}
    }
  drawKong(ctx, gorX, gorY, gorACol, gorAMove);
  //drawArm(ctx, gorX, gorY, gorACol, "L", armDirA);
  //drawArm(ctx, gorX, gorY, gorACol, "R", "D");

  gorX = gorPosA[2];
  gorY = gorPosA[3];
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.fillStyle = "#000077";//gorBCol;
  ctx.rect(gorX, gorY, gorSize, gorSize);
  ctx.fill();
  ctx.closePath();
  //if(timeCount%61==0){
  //  dumGorInx = Math.floor(Math.random()*4)+2;
  //gorCoordIndex++;
  //if(gorCoordIndex>5){gorCoordIndex=2;}
   // }
  drawKong(ctx, gorX, gorY, gorBCol, gorBMove);
  //drawArm(ctx, gorX, gorY, gorBCol, "L", armDirB);
  //drawArm(ctx, gorX, gorY, gorBCol, "R", "D");

  //draw Sun
  var sunX = midValX;
  var sunY = ymin + gorSize;
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.fillStyle = "Yellow";
  ctx.arc(sunX, sunY, gorSize / 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.fillStyle = "Black";
  ctx.arc(sunX - gorSize / 4 + gorSize / 8, sunY - gorSize / 16, 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.arc(sunX - gorSize / 4 + gorSize / 8 * 3, sunY - gorSize / 16, 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.lineWidth = "2";
  ctx.strokeStyle = "Black";
  ctx.arc(sunX, sunY + gorSize / 16, gorSize / 8, 0, Math.PI, false);
  ctx.stroke();
  /*
  ctx.closePath();
  ctx.beginPath();
  //ctx.lineWidth = "2";
  ctx.fillStyle = "Yellow";
  ctx.fillText("" + gorCoordIndex, sunX, sunY - 15);//gameNumb
  ctx.fill();*/

  ctx.beginPath();
  ctx.font = "20px Arial";
  ctx.fillStyle = "#ffff00";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText("" + player1Name, xmin + 15, sunY - 35);
  ctx.fillText("Shots: " + player1Shots, xmin + 15, sunY -15);
  ctx.fillText("Score: " + player1Score, xmin + 15, sunY + 5);
  ctx.fillText("Points: " + playAPts, xmin + 15, sunY + 25);
  if (turnNumb == "A") {
    if (turnAng) {
      ctx.fillText("Angle: " + catchText, xmin + 15, sunY + 45);
    }
    else if (turnSpd) {
      ctx.fillText("Angle: " + angleNow, xmin + 15, sunY + 45);
      ctx.fillText("Speed: " + catchText, xmin + 15, sunY + 65);
    }
    else if (bangFlag) {
      ctx.fillText("Angle: " + angleNow, xmin + 15, sunY + 45);
      ctx.fillText("Speed: " + speedNow, xmin + 15, sunY + 65);
    }
  }
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  ctx.fillText("" + player2Name, xmax - 15, sunY - 35);
  ctx.fillText("Shots: " + player2Shots, xmax - 15, sunY -15);
  ctx.fillText("Score: " + player2Score, xmax - 15, sunY + 5);
  ctx.fillText("Points: " + playBPts, xmax - 15, sunY + 25);
  if (turnNumb == "B") {
    if (turnAng) {
      ctx.fillText("Angle: " + catchText, xmax - 15, sunY + 45);
    }
    else if (turnSpd) {
      ctx.fillText("Angle: " + angleNow, xmax - 15, sunY + 45);
      ctx.fillText("Speed: " + catchText, xmax - 15, sunY + 65);
    }
    else if (bangFlag) {
      ctx.fillText("Angle: " + angleNow, xmax - 15, sunY + 45);
      ctx.fillText("Speed: " + speedNow, xmax - 15, sunY + 65);
    }
  }

  if (setEnd) {
    ctx.beginPath();
    ctx.font = "40px Arial";
    ctx.fillStyle = "#ff0000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("HIT!", midValX, midValY / 2 - 30);
    ctx.fillStyle = "#ffffff";
    ctx.fillText("PRESS 'y' or 'Y' to start next game!", midValX, midValY / 2);
    ctx.fill();
  }

  for (b = 0; b < boomTrailLen + 1; b = b + 2) {
    var blueX = boomTrailA[b];
    var blueY = boomTrailA[b + 1];
    ctx.beginPath();
    ctx.lineWidth = "3";
    ctx.fillStyle = "#000077";
    ctx.arc(blueX, blueY, 12, 0, Math.PI * 2);
    ctx.fill();
  }

  //draw banana
  if (bangFlag) {
    banX = banX + speedH / 40;//banX++;
    banY = banY - speedV / 40;//banY--;
    speedV = speedV - delSV;
    banAng = banAng + Math.PI / 8;///Math.PI/4 to spin faster
    if (banAng > Math.PI * 2) { banAng = 0; }
    var banAng2 = banAng + Math.PI / 2;
    if (turnNumb == "A") {
      if (gorBCol == "Red") {
        bangClock++;
        if (bangClock > LAST_BANG) {
          //player1Score++;
          //playAPts=playAPts+shotSinceA;
          //shotSinceA=0;
          //alert("HIT!")
          clearTimeout(bangGo);
          endBang();
        }
      }
      //check if hits other gorilla
      if (banY < gorPosA[3] + gorSize && banX > gorPosA[2] && banY > gorPosA[3] && banX < gorPosA[2] + gorSize) {
        gorBCol = "Red";
        gorAMove=5;
        setEnd = true;
      }
    }
    else {//if turnNumb=="B"
      if (gorACol == "Red") {
        bangClock++;
        if (bangClock > LAST_BANG) {
          //player2Score++;
          //playBPts=playBPts+shotSinceB;
          //shotSinceB=0;
          //alert("HIT!")
          clearTimeout(bangGo);
          endBang();
        }
      }
      //check if hits other gorilla
      if (banY < gorPosA[1] + gorSize && banX > gorPosA[0] && banY > gorPosA[1] && banX < gorPosA[0] + gorSize) {
        gorACol = "Red";
        gorBMove=5;
        setEnd = true;
      }
    }
    //check if out of range
    if (banY < -400 || banX > xmax + 5 || banY > ymax + 5 || banX < -5) {
      //clearTimeout(bangGo);
      //endBang();
      //bangClock++;
      //if (bangClock > LAST_BANG) {
        clearTimeout(bangGo);
        endBang();
      //}
    }
    if (bangClock <= LAST_BANG) {
      ctx.beginPath();
      ctx.lineWidth = "3";
      ctx.strokeStyle = "Yellow";
      ctx.arc(banX, banY, 6, banAng, banAng2);
      ctx.stroke();
    if(banY > -400 && banX < xmax + 5 && banY < ymax + 5 && banX > -5){
      ctx.beginPath();
      ctx.lineWidth = "2";
      ctx.strokeStyle = "Silver";
      if(speedV<0){
        ctx.strokeStyle = "Red";
        if(turnNumb=="A"){
            gorAMove=3;}
          else{
            gorBMove=3;}}
      ctx.rect(banX, 0, 1, 4);
      ctx.stroke();
      ctx.beginPath();
      //ctx.lineWidth = "2";
      //ctx.strokeStyle = "Silver";
      ctx.rect(0, banY, 4, 1);
      ctx.stroke();}
    }
  }
  let dumGorCol2="";
  if (turnNumb == "A") {
    var gorFireX = gorPosA[0];
    var gorFireY = gorPosA[1];
    armDirA="U";
  }
  else if (turnNumb == "B") {
    var gorFireX = gorPosA[2];
    var gorFireY = gorPosA[3];
    armDirB="U";
  }
  //if banana on screen
  let banCeiling=canvH-houseH2-5;
  if (banX < xmax - 5 && banX > xmin + 5 && banY < ymax - 10 && banY > ymin + banCeiling) {
    //if banana has left gorilla
    if (banX < gorFireX - 10 || banX > gorFireX + gorSize + 10 || banY < gorFireY - 10 || banY > gorFireY + gorSize + 10) {
        if (turnNumb == "A") {armDirA="D";}
        else if (turnNumb == "B") {armDirB="D";}
    //check if hits building
      const pixel = ctx.getImageData(banX, banY, 1, 1);
      const data = pixel.data;
      const rgbColor = `rgb(${data[0]} ${data[1]} ${data[2]} / ${data[3] / 255})`;
      if (true) {
        var whatHit = "" + data[0] + " " + data[1] + " " + data[2];
        if (whatHit != "0 0 119") {
          //alert(" "+data[0]+" "+data[1]+" "+data[2]);
          boomTrailA[boomTrailLen] = banX;
          boomTrailA[boomTrailLen + 1] = banY;
          boomTrailLen++; boomTrailLen++;
          ctx.beginPath();
          ctx.lineWidth = "3";
          ctx.fillStyle = "#000077";
          ctx.arc(banX, banY, 12, 0, Math.PI * 2);
          ctx.fill();
          bangClock++;
          if (bangClock > LAST_BANG) {
            clearTimeout(bangGo);
            endBang();
          }
          //blueflag=false;
        }
      }
    }
  }

  document.getElementById("dummy2").innerText=""+textShots;

}


function getCanvasImg(canvas) {
  var img = new Image();
  img.src = canvas.toDataURL();
  return img;
}

function resetSc() {
  //alert("reset00")
  document.getElementById("resetB").blur();
  gorACol = colorStoreA[0];
  gorBCol = colorStoreA[1];
  gameNumb++;
  turnAng = true;
  boomTrailLen = 0;
  for (b1 = 0; b1 < 100; b1++) {
    boomTrailA[b1] = -20;
  }
  plotStartAgain();
}

function drawKong(ctx, gorX, gorY, gorCol, idX){
    //if(gorCol==gorBCol&&Math.random()<0.02){//timeCount%50==0
    //gorCoordIndex++;
    //if(gorCoordIndex>5){gorCoordIndex=2;}
    //idX = Math.floor(Math.random()*4)+2;
    //               }
    gorCoordIndex=idX;
    ctx.fillStyle=gorCol;//"Black";
    ctx.beginPath();
    let gorScale=2.4;
    let gorX0=gorX+gorCoords[gorCoordIndex][0]*gorScale;
    let gorY0=gorY+gorCoords[gorCoordIndex][1]*gorScale;
    ctx.moveTo(gorX0,gorY0);
    for(g=2;g<coordsLen[gorCoordIndex];g=g+2){
      gorX0=gorX+gorCoords[gorCoordIndex][g]*gorScale;
      gorY0=gorY+gorCoords[gorCoordIndex][g+1]*gorScale;
      ctx.lineTo(gorX0,gorY0);
    }
    gorX0=gorX+gorCoords[gorCoordIndex][0]*gorScale;
    gorY0=gorY+gorCoords[gorCoordIndex][1]*gorScale;
    ctx.lineTo(gorX0,gorY0);
    ctx.fill();
    ctx.closePath();
  
    ctx.strokeStyle="Black";
    ctx.lineWidth = "1";
    ctx.beginPath();
    gorScale=2.4;
    gorX0=gorX+gorCoords[gorCoordIndex][0]*gorScale;
    gorY0=gorY+gorCoords[gorCoordIndex][1]*gorScale;
    ctx.moveTo(gorX0,gorY0);
    for(g=2;g<coordsLen[gorCoordIndex];g=g+2){
      gorX0=gorX+gorCoords[gorCoordIndex][g]*gorScale;
      gorY0=gorY+gorCoords[gorCoordIndex][g+1]*gorScale;
      ctx.lineTo(gorX0,gorY0);
    }
    gorX0=gorX+gorCoords[gorCoordIndex][0]*gorScale;
    gorY0=gorY+gorCoords[gorCoordIndex][1]*gorScale;
    ctx.lineTo(gorX0,gorY0);
    ctx.stroke();
    ctx.closePath();
    
    //brow
    ctx.beginPath();
    gorScale=2.4;
    gorX0=gorX+7*gorScale;
    gorY0=gorY+2*gorScale;
    ctx.moveTo(gorX0,gorY0);
      gorX0=gorX+12*gorScale;
      gorY0=gorY+2*gorScale;
      ctx.lineTo(gorX0,gorY0);
    ctx.stroke();
    ctx.closePath();
    //chest
    ctx.beginPath();
    gorScale=2.4;
    gorX0=gorX+9.5*gorScale;
    gorY0=gorY+6*gorScale;
    ctx.moveTo(gorX0,gorY0);
      gorX0=gorX+9.5*gorScale;
      gorY0=gorY+9*gorScale;
      ctx.lineTo(gorX0,gorY0);
      gorX0=gorX+6*gorScale;
      gorY0=gorY+9*gorScale;
      ctx.lineTo(gorX0,gorY0);
      gorX0=gorX+13*gorScale;
      gorY0=gorY+9*gorScale;
      ctx.lineTo(gorX0,gorY0);
    ctx.stroke();
    ctx.closePath();
    //nose
    ctx.beginPath();
    gorX0=gorX+8.5*gorScale;
    gorY0=gorY+4*gorScale;
      ctx.arc(gorX0,gorY0, 1, 0, Math.PI*2);
      ctx.stroke();
      gorX0=gorX+10.5*gorScale;
      gorY0=gorY+4*gorScale;
      ctx.arc(gorX0,gorY0, 1, 0, Math.PI*2);
      ctx.stroke();
      ctx.closePath();
      //tummy button
    ctx.beginPath();
      gorX0=gorX+9.5*gorScale;
      gorY0=gorY+12*gorScale;
      ctx.arc(gorX0,gorY0, 1, 0, Math.PI*2);
      ctx.stroke();
      ctx.closePath();
}

function drawArm(ctx, gorX, gorY, gorCol, lorr, dirc){
//ctx, x and y of gorilla, color, ("L" or "R"), up or down ("U" or "D")
    ctx.fillStyle=gorCol;//"Black";
    ctx.beginPath();
    let gorScale=2.4;
    let gorX0=gorX+1*gorScale;
    let gorY0=gorY+6.5*gorScale;
    if(lorr=="R"){
        gorX0=gorX+15*gorScale;
        gorY0=gorY+6.5*gorScale;}
    let armW=3*gorScale;
    let armH=6.5*gorScale;
    if(dirc=="U"){armH=-6.5*gorScale;}
    ctx.rect(gorX0,gorY0, armW, armH);
    ctx.fill();
    ctx.closePath();}
