
var canvW=900;
var canvH=550;
var houseW=Math.round(canvW/10);//90;
var houseH1=Math.round(2*canvH/11);//100;
var houseH2=Math.round(7*canvH/11);//350;
var windSize=Math.round(houseW/4);//350;
var windRows=Math.round(houseH2/(windSize*1.5));
var gorSize=Math.round(houseW/2);//350;
var player1Name="Player 1";
var player2Name="Player 2";
var player1Score=0;
var player2Score=0;
var player1Shots=0;
var player2Shots=0;
var player1Speed=50;
var player2Speed=50;
var player1Angle=45;
var player2Angle=45;
var gorAPos = 2;
var gorBPos = 9;
var gorACol = "DarkMagenta";
var gorBCol = "SaddleBrown";
var gorAllColA = ["DarkMagenta", "SaddleBrown",
"RosyBrown", "Tan", "Wheat", "WhiteSmoke",
"Thistle","Teal","Chocolate","DarkGoldenRod",
"DarkBlue","DarkGray","DarlSlateGray","DeepPink",
"FireBrick","GoldenRod","Indigo", "RoyalBlue"]
var gorAllColALen = gorAllColA.length;
var skyCol="LightSkyBlue";//"SkyBlue"
var noOfHs=Math.ceil(canvW/houseW);
var edge = 0;
var xmin = 0;
var xmax = canvW-xmin;
var ymin = 0;
var ymax = canvH-ymin/2;
var midValX = (xmin+xmax)/2;
var midValY = (ymin+ymax)/2;
var Qx = 0;
var Qy = 0;
var touchRadius = 20;
var touchFlag = "no";
var houseHighA = new Array();
var houseColorA = new Array();
var gorPosA = new Array();
var windowsA = new Array();
var banX=0;
var banY=0;
var banAng=Math.PI/4;
var angleNow=55;
var speedNow=70;
var speedV=speedNow*Math.sin(angleNow/180*Math.PI);
var speedH=speedNow*Math.cos(angleNow/180*Math.PI);
var delSV=0.2;
var bangFlag=false;
var bangClock=0;
var delT=10;//10 for faster, 40 for slow mo
var gor2gor=0;
var turnNumb="A";
var catchText="?";
var countText=0;
var turnAng=true;
var turnSpd=false;
var hitFlag=false;
var colorStoreA=new Array();
var gameNumb=0;


window.onload = function(){
bangClock=0;
var dumGorCol=Math.round(Math.random()*gorAllColALen);
gorACol=gorAllColA[dumGorCol];
colorStoreA[0]=gorACol;
gorAllColA[dumGorCol]=gorAllColA[gorAllColALen-1];
gorAllColALen--;
dumGorCol=Math.round(Math.random()*gorAllColALen);
gorBCol=gorAllColA[dumGorCol];
colorStoreA[1]=gorBCol;

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
  for(i=0;i<noOfHs;i++){
    var newColorNum = Math.floor(Math.random()*8)+3;
    var newColorNumR = Math.floor(Math.random()*11)+3;
    if(newColorNumR<newColorNum){newColorNumR=newColorNum;}
    if(newColorNum==10){newColorNum="A";}
    else if(newColorNum==11){newColorNum="B";}
    else if(newColorNum==12){newColorNum="C";}
    else if(newColorNum==13){newColorNum="D";}
    if(newColorNumR==10){newColorNumR="A";}
    else if(newColorNumR==11){newColorNumR="B";}
    else if(newColorNumR==12){newColorNumR="C";}
    else if(newColorNumR==13){newColorNumR="D";}
    newColorNum=""+newColorNum;
    var newColor = "#"+newColorNumR+newColorNumR+newColorNum+newColorNum+newColorNum+newColorNum;
    houseColorA[i] = newColor;
    var houseX=houseW*i;
    var houseY=Math.round(Math.random()*(houseH2-houseH1))+houseH1;
    var houseY2 = ymax-houseY;
    houseHighA[i] = houseY;
    houseY = houseY-xmin;
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.fillStyle = newColor;//"Brown";
    ctx.rect(houseX, houseY2, houseW, houseY);//ctx.rect(30, 30, canvW-60, canvH-60);
    //ctx.stroke();
    ctx.fill();

    //windows
    for(k=0;k<windRows;k++){
    for(j=0;j<2;j++){
      var windowX=houseW*i+2*windSize/3+windSize*j*1.5;
      var windowY=ymax-houseHighA[i]+windSize/2+windSize*1.5*k;
      var windColor="Yellow";
      if(Math.random()<0.1){windColor="Orange";}
      else if(Math.random()<0.1){windColor="Black";}
      else if(Math.random()<0.05){windColor="Cyan";}
      else{windColor="Yellow";}
      windowsA[i*100+j*10+k]=windColor;
      ctx.beginPath();
      ctx.lineWidth = "1";
      ctx.fillStyle = windColor;//"Yellow";
      ctx.rect(windowX, windowY, windSize, windSize);//ctx.rect(30, 30, canvW-60, canvH-60);
    //ctx.stroke();
      ctx.fill();
    }
  }

    ctx.beginPath();
    ctx.font = "10px Arial";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(""+newColor,houseX+15, ymax-15);//houseY2*1.2

  }
  //draw gorillas
  var dummyGor = Math.floor(Math.random()*4);
  var gorX=houseW*dummyGor+houseW*0.25;
  var gorY=ymax-houseHighA[dummyGor]-gorSize;
  gorPosA[0]=gorX;
  gorPosA[1]=gorY;
  //banX=gorX;
  //banY=gorY;
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.fillStyle = gorACol;//"White";
  ctx.rect(gorX, gorY, gorSize, gorSize);
  ctx.fill();
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

  dummyGor = Math.floor(Math.random()*4)+6;
  gorX=houseW*dummyGor+houseW*0.25;
  gorY=ymax-houseHighA[dummyGor]-gorSize;
  gorPosA[2]=gorX;
  gorPosA[3]=gorY;
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.fillStyle = gorBCol;
  ctx.rect(gorX, gorY, gorSize, gorSize);
  ctx.fill();


  //draw Sun
  var sunX=midValX;
  var sunY=ymin+gorSize;
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.fillStyle = "Yellow";
  ctx.arc(sunX, sunY, gorSize/4, 0, Math.PI*2);
  ctx.fill();
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.fillStyle = "Black";
  ctx.arc(sunX-gorSize/4+gorSize/8, sunY-gorSize/16, 2, 0, Math.PI*2);
  ctx.fill();
  ctx.arc(sunX-gorSize/4+gorSize/8*3, sunY-gorSize/16, 2, 0, Math.PI*2);
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.lineWidth = "2";
  ctx.strokeStyle = "Black";
  ctx.arc(sunX, sunY+gorSize/16, gorSize/8, 0, Math.PI, false);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.lineWidth = "2";
  ctx.strokeStyle = "Yellow";
  ctx.fillText(""+gameNumb, sunX, sunY-15);
  ctx.fill();


      ctx.beginPath();
      ctx.font = "20px Arial";
      ctx.fillStyle = "#ffff00";
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillText(""+player1Name,xmin+15, sunY-15);
      ctx.fillText("Shots: "+player1Shots,xmin+15, sunY+5);
      ctx.fillText("Score: "+player1Score,xmin+15, sunY+25);
      ctx.fillText("Angle = ?",xmin+15, sunY+45);
      //ctx.fillText("Speed: "+speedNow,xmin+15, sunY+60);

      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      ctx.fillText(""+player2Name,xmax-15, sunY-15);
      ctx.fillText("Shots: "+player2Shots,xmax-15, sunY+5);
      ctx.fillText("Score: "+player2Score,xmax-15, sunY+25);

    document.getElementById("saveButton").addEventListener("click", function(evt){
        // open new window with saved image so user
        // can right click and save to their computer
        window.open(canvas.toDataURL());
    }, false);

    canvas.addEventListener("mousedown", function(){
        var drawingPos = events.getMousePos();
        //newQflag = false;

        isMouseDown = true;
    }, false);

   canvas.addEventListener("mouseup", function(){
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

    canvas.addEventListener("mouseout", function(){
        if (document.createEvent) {
            var evt = document.createEvent('MouseEvents');
            evt.initEvent("mouseup", true, false);
            this.dispatchEvent(evt);
        }
        else {
            this.fireEvent("onmouseup");
        }
    }, false);

    events.setStage(function(){
        if (isMouseDown) {
            if(true){
              //moveQ(events, points);
            }
        }
    });

document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;
    //alert(""+keyName);
  if(keyName=="Enter"||keyName=="0"||keyName=="1"||keyName=="2"||keyName=="3"||keyName=="4"||keyName=="5"||keyName=="6"||keyName=="7"||keyName=="8"||keyName=="9"){
    if(turnAng){
      if(catchText=="?"){catchText="";}
      if(keyName!="Enter"){
      catchText=catchText+keyName;
      countText++;}
      if(countText==2||(countText>0&&keyName=="Enter")){
        turnAng=false;
        turnSpd=true;
        angleNow=1*catchText;
        catchText="?";
        countText="";
      if(angleNow<0){angleNow=0;}
      else if(angleNow>90){angleNow=90;}
      }
      plotActualPict();
    }
    else if(turnSpd){
      if(catchText=="?"){catchText="";}
      if(keyName!="Enter"){
      catchText=catchText+keyName;
      countText++;}
      if(countText==3||(countText>0&&keyName=="Enter")){
        turnAng=false;
        turnSpd=false;
        speedNow=1*catchText;
        catchText="";
        countText="";
      if(speedNow<10){speedNow=10;}
      else if(speedNow>250){speedNow=250;}
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

function makeBang(){//throw banana
if(!bangFlag){
  if(turnNumb=="A"){
    //gor2gor=(gorPosA[2]-gorPosA[0])*houseW;
    //var dumAng=Math.random()*40+25;
    //angleNow=Math.round(dumAng);
    //var dumTrig=Math.sin(2*angleNow/180*Math.PI);
    //speedNow=Math.round(Math.pow(gor2gor*0.2/2.37/dumTrig,0.5));
    speedV=speedNow*Math.sin(angleNow/180*Math.PI);
    speedH=speedNow*Math.cos(angleNow/180*Math.PI);
    banX=gorPosA[0]+gorSize/2;
    banY=gorPosA[1]+gorSize/2;
    player1Shots++;
  }
    else{
      //gor2gor=(gorPosA[2]-gorPosA[0])*houseW;
      //var dumAng=Math.random()*40+25;
      //angleNow=Math.round(dumAng);
      //var dumTrig=Math.sin(2*angleNow/180*Math.PI);
      //speedNow=Math.round(Math.pow(gor2gor*0.2/2.37/dumTrig,0.5));
      speedV=speedNow*Math.sin(angleNow/180*Math.PI);
      speedH=-1*speedNow*Math.cos(angleNow/180*Math.PI);
      banX=gorPosA[2]+gorSize/2;
      banY=gorPosA[3]+gorSize/2;
      player2Shots++;
    }
  bangFlag = true;
  bangClock=0;
  bangRing = 0;
  bangGo = setInterval(plotActualPict, delT);//100
}
}

function endBang(){
  bangRing = 0;
  bangFlag = false;
  startScalar=false;
  oneFlag=true;
  testCount = 0;
  if(turnNumb=="A"){turnNumb="B";}
  else{turnNumb="A";}
  catchText="?";
  turnAng=true;
  plotActualPict();
  //winGo = setInterval(winRoute, delT);//100
}

function plotStartAgain(){
bangClock=0;

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
  for(i=0;i<noOfHs;i++){
    var newColorNum = Math.floor(Math.random()*8)+3;
    var newColorNumR = Math.floor(Math.random()*11)+3;
    if(newColorNumR<newColorNum){newColorNumR=newColorNum;}
    if(newColorNum==10){newColorNum="A";}
    else if(newColorNum==11){newColorNum="B";}
    else if(newColorNum==12){newColorNum="C";}
    else if(newColorNum==13){newColorNum="D";}
    if(newColorNumR==10){newColorNumR="A";}
    else if(newColorNumR==11){newColorNumR="B";}
    else if(newColorNumR==12){newColorNumR="C";}
    else if(newColorNumR==13){newColorNumR="D";}
    newColorNum=""+newColorNum;
    var newColor = "#"+newColorNumR+newColorNumR+newColorNum+newColorNum+newColorNum+newColorNum;
    houseColorA[i] = newColor;
    var houseX=houseW*i;
    var houseY=Math.round(Math.random()*(houseH2-houseH1))+houseH1;
    var houseY2 = ymax-houseY;
    houseHighA[i] = houseY;
    houseY = houseY-xmin;
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.fillStyle = newColor;//"Brown";
    ctx.rect(houseX, houseY2, houseW, houseY);//ctx.rect(30, 30, canvW-60, canvH-60);
    //ctx.stroke();
    ctx.fill();

    //windows
    for(k=0;k<windRows;k++){
    for(j=0;j<2;j++){
      var windowX=houseW*i+2*windSize/3+windSize*j*1.5;
      var windowY=ymax-houseHighA[i]+windSize/2+windSize*1.5*k;
      var windColor="Yellow";
      if(Math.random()<0.1){windColor="Orange";}
      else if(Math.random()<0.1){windColor="Black";}
      else if(Math.random()<0.05){windColor="Cyan";}
      else{windColor="Yellow";}
      windowsA[i*100+j*10+k]=windColor;
      ctx.beginPath();
      ctx.lineWidth = "1";
      ctx.fillStyle = windColor;//"Yellow";
      ctx.rect(windowX, windowY, windSize, windSize);//ctx.rect(30, 30, canvW-60, canvH-60);
    //ctx.stroke();
      ctx.fill();
    }
  }

    ctx.beginPath();
    ctx.font = "10px Arial";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(""+newColor,houseX+15, ymax-15);//houseY2*1.2

  }
  //draw gorillas
  var dummyGor = Math.floor(Math.random()*4);
  var gorX=houseW*dummyGor+houseW*0.25;
  var gorY=ymax-houseHighA[dummyGor]-gorSize;
  gorPosA[0]=gorX;
  gorPosA[1]=gorY;
  //banX=gorX;
  //banY=gorY;
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.fillStyle = gorACol;//"White";
  ctx.rect(gorX, gorY, gorSize, gorSize);
  ctx.fill();
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

  dummyGor = Math.floor(Math.random()*4)+6;
  gorX=houseW*dummyGor+houseW*0.25;
  gorY=ymax-houseHighA[dummyGor]-gorSize;
  gorPosA[2]=gorX;
  gorPosA[3]=gorY;
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.fillStyle = gorBCol;
  ctx.rect(gorX, gorY, gorSize, gorSize);
  ctx.fill();


  //draw Sun
  var sunX=midValX;
  var sunY=ymin+gorSize;
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.fillStyle = "Yellow";
  ctx.arc(sunX, sunY, gorSize/4, 0, Math.PI*2);
  ctx.fill();
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.fillStyle = "Black";
  ctx.arc(sunX-gorSize/4+gorSize/8, sunY-gorSize/16, 2, 0, Math.PI*2);
  ctx.fill();
  ctx.arc(sunX-gorSize/4+gorSize/8*3, sunY-gorSize/16, 2, 0, Math.PI*2);
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.lineWidth = "2";
  ctx.strokeStyle = "Black";
  ctx.arc(sunX, sunY+gorSize/16, gorSize/8, 0, Math.PI, false);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.lineWidth = "2";
  ctx.strokeStyle = "Yellow";
  ctx.fillText(""+gameNumb, sunX, sunY-15);
  ctx.fill();


      ctx.beginPath();
      ctx.font = "20px Arial";
      ctx.fillStyle = "#ffff00";
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillText(""+player1Name,xmin+15, sunY-15);
      ctx.fillText("Shots: "+player1Shots,xmin+15, sunY+5);
      ctx.fillText("Score: "+player1Score,xmin+15, sunY+25);
  if(turnNumb=="A"){
      ctx.fillText("Angle = ?",xmin+15, sunY+45);}

      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      ctx.fillText(""+player2Name,xmax-15, sunY-15);
      ctx.fillText("Shots: "+player2Shots,xmax-15, sunY+5);
      ctx.fillText("Score: "+player2Score,xmax-15, sunY+25);
  if(turnNumb=="B"){
      ctx.fillText("Angle = ?",xmin+15, sunY+45);}
}

function plotActualPict(){


        //ctx.clearRect(0, 0, canvW/2, canvH/2);//ctx.clearRect(30, 30, canvW-60, canvH-60);//

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
          for(i=0;i<noOfHs;i++){
            var newColor = houseColorA[i];
            var houseX=houseW*i;
            var houseY=houseHighA[i];
            var houseY2 = ymax-houseY;
            houseY = houseY-xmin;
            ctx.beginPath();
            ctx.lineWidth = "1";
            ctx.fillStyle = newColor;//"Brown";
            ctx.rect(houseX, houseY2, houseW, houseY);//ctx.rect(30, 30, canvW-60, canvH-60);
            //ctx.stroke();
            ctx.fill();

            //windows
            for(k=0;k<windRows;k++){
            for(j=0;j<2;j++){
              var windowX=houseW*i+2*windSize/3+windSize*j*1.5;
              var windowY=ymax-houseHighA[i]+windSize/2+windSize*1.5*k;
              var windColor=windowsA[i*100+j*10+k];
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
          var gorX=gorPosA[0];
          var gorY=gorPosA[1];
          ctx.beginPath();
          ctx.lineWidth = "1";
          ctx.fillStyle = gorACol;
          ctx.rect(gorX, gorY, gorSize, gorSize);
          ctx.fill();

          gorX=gorPosA[2];
          gorY=gorPosA[3];
          ctx.beginPath();
          ctx.lineWidth = "1";
          ctx.fillStyle = gorBCol;
          ctx.rect(gorX, gorY, gorSize, gorSize);
          ctx.fill();

          //draw Sun
          var sunX=midValX;
          var sunY=ymin+gorSize;
          ctx.beginPath();
          ctx.lineWidth = "1";
          ctx.fillStyle = "Yellow";
          ctx.arc(sunX, sunY, gorSize/4, 0, Math.PI*2);
          ctx.fill();
          ctx.beginPath();
          ctx.lineWidth = "1";
          ctx.fillStyle = "Black";
          ctx.arc(sunX-gorSize/4+gorSize/8, sunY-gorSize/16, 2, 0, Math.PI*2);
          ctx.fill();
          ctx.arc(sunX-gorSize/4+gorSize/8*3, sunY-gorSize/16, 2, 0, Math.PI*2);
          ctx.fill();
          ctx.closePath();
          ctx.beginPath();
          ctx.lineWidth = "2";
          ctx.strokeStyle = "Black";
          ctx.arc(sunX, sunY+gorSize/16, gorSize/8, 0, Math.PI, false);
          ctx.stroke();
          ctx.closePath();
          ctx.beginPath();
          ctx.lineWidth = "2";
          ctx.strokeStyle = "Yellow";
          ctx.fillText(""+gameNumb, sunX, sunY-15);
          ctx.fill();

              ctx.beginPath();
              ctx.font = "20px Arial";
              ctx.fillStyle = "#ffff00";
              ctx.textAlign = "left";
              ctx.textBaseline = "middle";
              ctx.fillText(""+player1Name,xmin+15, sunY-15);
              ctx.fillText("Shots: "+player1Shots,xmin+15, sunY+5);
              ctx.fillText("Score: "+player1Score,xmin+15, sunY+25);
  if(turnNumb=="A"){
    if(turnAng){
              ctx.fillText("Angle: "+catchText,xmin+15, sunY+45);
            }
    else if(turnSpd){
              ctx.fillText("Angle: "+angleNow,xmin+15, sunY+45);
              ctx.fillText("Speed: "+catchText,xmin+15, sunY+65);
                      }
    else if(bangFlag){
              ctx.fillText("Angle: "+angleNow,xmin+15, sunY+45);
              ctx.fillText("Speed: "+speedNow,xmin+15, sunY+65);
              }
            }
              ctx.textAlign = "right";
              ctx.textBaseline = "middle";
              ctx.fillText(""+player2Name,xmax-15, sunY-15);
              ctx.fillText("Shots: "+player2Shots,xmax-15, sunY+5);
              ctx.fillText("Score: "+player2Score,xmax-15, sunY+25);
    if(turnNumb=="B"){
        if(turnAng){
                  ctx.fillText("Angle: "+catchText,xmax-15, sunY+45);
                  }
        else if(turnSpd){
                ctx.fillText("Angle: "+angleNow,xmax-15, sunY+45);
                ctx.fillText("Speed: "+catchText,xmax-15, sunY+65);
                  }
        else if(bangFlag){
                ctx.fillText("Angle: "+angleNow,xmax-15, sunY+45);
                ctx.fillText("Speed: "+speedNow,xmax-15, sunY+65);
                  }
                }

                        //draw banana
            if(bangFlag){
                        banX=banX+speedH/40;//banX++;
                        banY=banY-speedV/40;//banY--;
                        speedV=speedV-delSV;
                        banAng=banAng+Math.PI/8;///Math.PI/4 to spin faster
                        if(banAng>Math.PI*2){banAng=0;}
                        var banAng2=banAng+Math.PI/2;
                        //check if out of range
                        if(banY<-200||banX>xmax+5||banY>ymax+5||banX<-5){
                            //clearTimeout(bangGo);
                            //endBang();
                              bangClock++;
                              if(bangClock>4){
                                  clearTimeout(bangGo);
                                  endBang();
                              }
                        }
                  if(turnNumb=="A"){
                        if(gorBCol=="Red"){
                          bangClock++;
                          if(bangClock>4){
                          player1Score++;
                              clearTimeout(bangGo);
                              endBang();
                          }
                        }
                        //check if hits other gorilla
      if(banY<gorPosA[3]+gorSize&&banX>gorPosA[2]&&banY>gorPosA[3]&&banX<gorPosA[2]+gorSize){
                            gorBCol="Red";
                        }}
                  else{//if turnNumb=="B"
                              if(gorACol=="Red"){
                                bangClock++;
                                if(bangClock>4){
                                player2Score++;
                                    clearTimeout(bangGo);
                                    endBang();
                                }
                              }
                              //check if hits other gorilla
            if(banY<gorPosA[1]+gorSize&&banX>gorPosA[0]&&banY>gorPosA[1]&&banX<gorPosA[0]+gorSize){
                                  gorACol="Red";
                              }}
                    if(bangClock<3){
                        ctx.beginPath();
                        ctx.lineWidth = "3";
                        ctx.strokeStyle = "Yellow";
                        ctx.arc(banX, banY, 6, banAng, banAng2);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.lineWidth = "2";
                        ctx.strokeStyle = "Silver";
                        ctx.rect(banX, 0, 1, 4);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.lineWidth = "2";
                        ctx.strokeStyle = "Silver";
                        ctx.rect(0, banY, 4, 1);
                        ctx.stroke();}
                  }

      //document.getElementById("dummy3").innerHTML="position of<br>microphone 2<br>="+posMic2s;

}


function getCanvasImg(canvas){
    var img = new Image();
    img.src = canvas.toDataURL();
    return img;
}
