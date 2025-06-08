
var canvW0 = 1750;
var canvH0 = 1750;
var canvW = 660;
var canvH = 1316;
var unitColor = "Wheat";
var baseColor = "Wheat";
var tableColor = "DarkOliveGreen";
var lineColor = "Black";
var terrain0Col = "Ivory";
var terrain1Col = "Green";
var terrain1Prob = 20;//% coverage
var terrainA = ["Brown", "LimeGreen", "#832727",  "Blue", "Blue", "Turquoise", "Grey", "Yellow"];
//mount n woods: DarkOliveGreen
//brown: #A52A2A so dark brown:#531515
//0=clear 0=hills 1=woods 2=mountain 3=lake 4=small lakes 5=swamp 6=city           6=hill/woods
var terrainANum0 = [0, 0, 0, 0, 0, 0, 0, 0];//[4, 4, 2, 2, 3, 0, 6, 0];
var terrainANMin0 = [0, 0, 0, 0, 0, 0, 0, 0];//min number of each
var terrainASize0 = [6, 10, 6, 8, 0, 8, 0, 1];//[6, 10, 6, 8, 0, 8, 0, 1];[2, 3, 2, 6, 4, 0, 0, 0]
var terrainASpread = [2, 2, 1, 1, 0, 1, 0, 0];//[2, 2, 1, 1, 0, 1, 0, 0]
var terrainALen = terrainA.length;
var terrainANum = new Array();
var terrainASize = new Array();

//random number of each terrain
for(t=0;t<terrainALen;t++){
  var dumRange = terrainANum0[t];
  var dumMin = terrainANMin0[t];
  dumRange = dumRange-dumMin;
  var dumT1 = Math.round(Math.random()*dumRange)+dumMin;
  var dumT2 = Math.round(Math.random()*terrainASize0[t]);
terrainANum[t] = dumT1;//5
terrainASize[t] = dumT2;//5
}

/*
//all of each terrain
for(t=0;t<terrainALen;t++){
terrainANum[t] = terrainANum0[t];//5
terrainASize[t] = terrainASize0[t];//5
}
*/
var cityX = new Array();
var cityY = new Array();
var roadX = new Array();
var roadY = new Array();
var riverX = new Array();
var riverY = new Array();
var lakeX = new Array();
var lakeY = new Array();
var lake2X = [3, 2, 0, 5];//new Array();//kreigspiel rivers
var lake2Y = [0,36, 26, 10];//new Array();
var city2X = [2, 2, 0, 5, 5, 0];//new Array();
var city2Y = [1, 35, 24, 12, 24, 12];//new Array();
var mountX = new Array();
var mountY = new Array();
var terrainALen = terrainA.length;
var boardA = new Array();
var delY = 40;
var delX = 40;
var noXlines = canvW/delX;//17.5
var noYlines = canvH/delY;//32.5
const sin60 = 0.8660254038;
const hexD = 40;
const hexLong = sin60*hexD;//34.64
noXlines = canvW/(3*hexD);//(hexD+2*hexLong);//5.8333
noYlines = canvH/(hexLong);//canvH/(hexLong*2);//18.76
noXXlines = noXlines*2;//11.67
noYYlines = noYlines*2;//71.06
var hexMoveX = [0, hexD, hexD+hexD/2, hexD, 0, -hexD/2, 0];
var hexMoveY = [0, 0, hexLong, 2*hexLong, 2*hexLong, hexLong, 0];
var allTerrainA = new Array();//stores if river in hex
var allTerrainA2 = new Array();//stores other terrain
var riverEndProb = 0;//0.2;
var roadEndProb = 0;//0.05;
var dumCountList=0;
var changeColor = "#111111";
var changeColorR = "#110000";
var changeColorG = "#001100";
var changeColorB = "#000011";
var colorNow = "Black";
var colorNow0 = "Black";
var colFlag = 0;
var brdShiftX = 220;//5.5*40
var brdShiftY = 208;//4*69.28(hexLong*2)
var brdShiftX0 = 220;//5.5*40
var brdShiftY0 = 208;//4*69.28(hexLong*2)
var brdSftCoX = brdShiftX/hexD/3;
var brdSftCoY = brdShiftY/hexLong;

//terrain code

var swampCOX = [100];
var swampCOY = [100];
var hillCOX = [100];
var hillCOY = [100];
var smLakeCOX = [100];
var smLakeCOY = [100];
var cityCOX = [100];
var cityCOY = [100];
var woodCOX = [100];
var woodCOY = [100];
var mountCOX = [100];
var mountCOY = [100];
var beachCOX = [100];
var beachCOY = [100];
var lakeCOX = [100];
var lakeCOY = [100];
var riverCOX = [100];
var riverCOY = [100];
var roadCOX = [100];
var roadCOY = [100];

var noOfTurns0 = 20;
var blackBrdNo = 0;
var redBrdNo = 1;

var longBoardFlag = true;


//loadTerrain(0);
//edge rivers and roads - BLACK
/*
var riverCOX = [3, 3, 100,    -1, 0, 100,    5, 4, 100,    2, 2, 100];
var riverCOY = [0, 2,100,    11, 9, 100,    25, 27, 100,   36, 34, 100,];
var roadCOX = [2.5, 2, 100, -1, 0, 100, -1, 0, 100, 5, 4, 100, 5, 4, 100, 2, 2, 100];
var roadCOY = [-1, 3, 100, 11, 13, 100, 23, 25, 100, 23, 25,100, 11, 13, 100, 37, 33, 100];
*/

//var terrainA = ["Brown", "LimeGreen", "#832727",  "Blue", "Blue", "Turquoise", "Grey", "Yellow"];
//var allCOORDSX = [hillCOX, woodCOX, mountCOX, lakeCOX, smLakeCOX, swampCOX, cityCOX, beachCOX];
//var allCOORDSY = [hillCOY, woodCOY, mountCOY, lakeCOY, smLakeCOY, swampCOY, cityCOY, beachCOY];


//window.onload= function(){
function initBoard(){
  loadTerrain(blackBno,flipBrdNoB,mirrBrdNoB);
   allCOORDSX = [hillCOX, woodCOX, mountCOX, lakeCOX, smLakeCOX, swampCOX, cityCOX, beachCOX];
   allCOORDSY = [hillCOY, woodCOY, mountCOY, lakeCOY, smLakeCOY, swampCOY, cityCOY, beachCOY];
   printBoards(0);
  loadTerrain(redBno,flipBrdNoR,mirrBrdNoR);
   allCOORDSX = [hillCOX, woodCOX, mountCOX, lakeCOX, smLakeCOX, swampCOX, cityCOX, beachCOX];
   allCOORDSY = [hillCOY, woodCOY, mountCOY, lakeCOY, smLakeCOY, swampCOY, cityCOY, beachCOY];
   printBoards(1);
   completeBoard();
   //alert(""+cityCOX);
}

function completeBoard(){

  /*
  var edgeX0 = [18, canvW-39, canvW-39, 18, 18];
  var edgeY0 = [68, 68, canvH-69, canvH-69, 68];
  var edgeX = new Array();
  var edgeY = new Array();
  for(c=0;c<edgeX0.length;c++){
    edgeX[c]=edgeX0[c]+brdSftCoX*hexD*3;
    edgeY[c]=edgeY0[c]+brdSftCoY*hexLong;
  }*/

  var corner1X = 238;
  var corner2X = canvW0-308;
  var corner3X = canvW0-308;
  var corner4X = 238;
  var corner1Y = 276;
  var corner2Y = 276;
  var corner3Y = canvH0-294;
  var corner4Y = canvH0-294;

  var canvas = document.getElementById("board");
  var ctx = canvas.getContext("2d");
  ctx.globalAlpha = 0.9;
  //down the top side
  ctx.beginPath();
  ctx.fillStyle = tableColor;
  ctx.fillRect(0,0,canvW0,corner1Y);

  //down the left side
  ctx.beginPath();
  ctx.fillStyle = tableColor;
  ctx.fillRect(0,0,corner1X,canvH0);

  //across the bottom side
  ctx.beginPath();
  ctx.fillStyle =tableColor;
  ctx.fillRect(0,corner3Y,canvW0,canvH0-corner4Y);

  //across the right side
  ctx.beginPath();
  ctx.fillStyle = tableColor;
  ctx.fillRect(corner2X,0,canvW0-corner2X,canvH0);

    //label the boards
      ctx.font = "72px Arial";
      ctx.fillStyle = "Black";//textColorThis;
      ctx.strokeStyle = "Red";
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      ctx.lineWidth = "4";
      ctx.fillText("Black",canvW0*0.3, brdShiftY/1.5);
      ctx.lineWidth = "1";
      ctx.strokeText("Black",canvW0*0.3, brdShiftY/1.5);
      ctx.fillStyle = "Red";
      ctx.strokeStyle = "Black";
      ctx.lineWidth = "4";
      ctx.fillText("Red",canvW0*0.65, brdShiftY/1.5);
      ctx.lineWidth = "1";
      ctx.strokeText("Red",canvW0*0.65, brdShiftY/1.5);
      ctx.closePath();
      ctx.globalAlpha = 1;


  //reinforcement n replacement areas
    //black replacements
      ctx.beginPath();
      ctx.fillStyle = "Silver";
      ctx.fillRect(corner1X*1.3,corner4Y+corner1X*0.2,corner1X*1.8,corner1Y*0.7);
        ctx.font = "48px Arial";
        ctx.textAlign = "left";
        ctx.textBaseline = "bottom";
      ctx.lineWidth = "1";
    ctx.fillStyle = "Black";
      ctx.fillText("Replacements:",corner1X*1.3-15,corner4Y+corner1X*0.2+23);
    ctx.fillStyle = "White";
    ctx.fillText("Replacements:",corner1X*1.3-20,corner4Y+corner1X*0.2+20);
      ctx.closePath();

      //red replacements
        ctx.beginPath();
        ctx.fillStyle = "Silver";
        ctx.fillRect(canvH0/2+corner1X*0.28,corner4Y+corner1X*0.2,corner1X*1.8,corner1Y*0.7);
          ctx.font = "48px Arial";
          ctx.textAlign = "left";
          ctx.textBaseline = "bottom";
        ctx.lineWidth = "1";
      ctx.fillStyle = "Red";
        ctx.fillText("Replacements:",canvH0/2+corner1X*0.28-15,corner4Y+corner1X*0.2+23);
      ctx.fillStyle = "White";
      ctx.fillText("Replacements:",canvH0/2+corner1X*0.28-20,corner4Y+corner1X*0.2+20);
          ctx.closePath();

    //black reinforcements
      ctx.beginPath();
      ctx.fillStyle = "Silver";
      ctx.fillRect(corner1X*0.1,canvH0*0.5,corner1Y*0.7,corner1X*1.8);
      ctx.save();
      ctx.rotate(Math.PI/2);
        ctx.font = "48px Arial";
        ctx.textAlign = "left";
        ctx.textBaseline = "bottom";
      ctx.lineWidth = "1";
    ctx.fillStyle = "Black";
      ctx.fillText("Reinforcements:",canvH0*0.5-20,corner1X*0.1-30);//canvH0/2+corner1X*0.28-15,23);
    ctx.fillStyle = "White";
    ctx.fillText("Reinforcements:",canvH0*0.5-25,corner1X*0.1-25);//canvH0/2+corner1X*0.28-20,20);
    ctx.restore();
      ctx.closePath();


    //red reinforcements
      ctx.beginPath();
      ctx.fillStyle = "Silver";
      ctx.fillRect(canvH0-corner1X*0.9,canvH0*0.5,corner1Y*0.7,corner1X*1.8);
      ctx.save();
      ctx.rotate(Math.PI/2);
        ctx.font = "48px Arial";
        ctx.textAlign = "left";
        ctx.textBaseline = "bottom";
      ctx.lineWidth = "1";
    ctx.fillStyle = "Red";
      ctx.fillText("Reinforcements:",canvH0*0.5-22,-canvH0+corner1X*0.9+20);//canvH0/2+corner1X*0.28-15,23);
    ctx.fillStyle = "White";
    ctx.fillText("Reinforcements:",canvH0*0.5-25,-canvH0+corner1X*0.9+25);//canvH0*0.5-25,canvH0-corner1X*0.1+25);//canvH0/2+corner1X*0.28-20,20);
    ctx.restore();
      ctx.closePath();
/*
var sizeOfBox = canvW0/(noOfTurns0+4);
  ctx.font = "56px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "bottom";
  ctx.lineWidth = "2";
  ctx.strokeStyle = "Blue";
    for(i=1;i<noOfTurns0+1;i++){
      ctx.beginPath();
      ctx.fillStyle = "#b0e0e6";
      if(i%2==1){ctx.fillStyle = "#ffc0cb";}
      ctx.fillRect(sizeOfBox*1.1*i,corner1Y*0.55,sizeOfBox,100);
      ctx.strokeText(""+i,sizeOfBox*0.5+sizeOfBox*1.1*i,corner1Y*0.9);
      ctx.closePath();
    }
      ctx.font = "48px Arial";
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
    ctx.lineWidth = "1";
  ctx.fillStyle = "Blue";
    ctx.fillText("Game Turn Chart:",sizeOfBox*1.1-45,corner1Y*0.55);//canvH0/2+corner1X*0.28-15,23);
  ctx.fillStyle = "White";
  ctx.fillText("Game Turn Chart:",sizeOfBox*1.1-50,corner1Y*0.55);
*/

  var sizeOfBox = canvW0/(noOfTurns0+4);
    ctx.font = "40px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.lineWidth = "2";
    ctx.strokeStyle = "Blue";
      for(i=1;i<noOfTurns0+1;i++){
        ctx.beginPath();
        ctx.fillStyle = "#b0e0e6";
        if(i%2==1){ctx.fillStyle = "#ffc0cb";}
        ctx.fillRect(sizeOfBox*1.1*i,corner1Y*0.55,sizeOfBox,100);
        ctx.strokeStyle = "Black";
        ctx.strokeText(""+i,sizeOfBox*0.35+sizeOfBox*1.1*i,corner1Y*0.73);
        ctx.strokeStyle = "Red";
        ctx.strokeText(""+i,sizeOfBox*0.65+sizeOfBox*1.1*i,corner1Y*0.9);
        ctx.closePath();
      }
        ctx.font = "48px Arial";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
      ctx.lineWidth = "1";
    ctx.fillStyle = "Blue";
      ctx.fillText("Game Turn Chart:",sizeOfBox*1.1-45,corner1Y*0.50+5);//canvH0/2+corner1X*0.28-15,23);
    ctx.fillStyle = "White";
    ctx.fillText("Game Turn Chart:",sizeOfBox*1.1-50,corner1Y*0.50);

//replacement points chart
      ctx.font = "40px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      ctx.lineWidth = "2";
      ctx.fillStyle = "Black";
        for(i=0;i<10;i++){
          ctx.beginPath();
          //corner1X*0.1,canvH0*0.5,corner1Y*0.7,corner1X*1.8
          ctx.fillStyle = "Black";
          ctx.fillRect(corner1X*0.3,corner1Y+10+55*i,100,50);
          ctx.fillStyle = "Red";
          ctx.fillText(""+i,corner1X*0.4,corner1Y+55+55*i);
          ctx.closePath();
        }

        ctx.save();
        ctx.rotate(Math.PI/2);
          ctx.font = "36[po32], px Arial";
          ctx.textAlign = "left";
          ctx.textBaseline = "bottom";
        ctx.lineWidth = "1";
      ctx.fillStyle = "Black";
        ctx.fillText("Replacement points:",canvH0*0.20-20,corner1X*0.1-40);//canvH0/2+corner1X*0.28-15,23);
      //ctx.fillStyle = "White";
      //ctx.fillText("Reinforcements:",canvH0*0.5-25,-canvH0+corner1X*0.9+25);//canvH0*0.5-25,canvH0-corner1X*0.1+25);//canvH0/2+corner1X*0.28-20,20);
      ctx.restore();
        ctx.closePath();
}



function printBoards(bn){

  changeColor = "#111111";
  changeColorR = "#110000";
  changeColorG = "#001100";
  changeColorB = "#000011";

if(bn%2==0){//even number - black - on left
 brdShiftX = 220;//5.5*40
 brdShiftY = 208;//4*69.28(hexLong*2)
 brdSftCoX = brdShiftX/hexD/3;
 brdSftCoY = brdShiftY/hexLong;}
else if(bn%2==1){//red number - red - on right
 brdShiftX = 820;//5.5*40
 brdShiftY = 208;//4*69.28(hexLong*2)
 brdSftCoX = brdShiftX/hexD/3;
 brdSftCoY = brdShiftY/hexLong;}

for(a=0;a<noYlines;a++){
  for(b=0;b<noXlines;b++){
    allTerrainA[a*noXXlines+b]=0;
  }
}
for(a=0;a<noYlines;a++){
  for(b=0;b<noXlines;b++){
    allTerrainA2[a*noXXlines+b]=0;
  }
}

var loopRFlag = true;
while(loopRFlag){
  if(Math.random()<0.6){
    riverEndProb=riverEndProb+0.1;
  }
  else{
    loopRFlag=false;
  }
}
loopRFlag = true;
while(loopRFlag){
  if(Math.random()<0.6){
    roadEndProb=roadEndProb+0.1;
  }
  else{
    loopRFlag=false;
  }
}

    var events = new Events("board");
    var canvas = events.getCanvas();
    var context = events.getContext();
    var isMouseDown = false;
    var canvasImg = getCanvasImg(canvas);
		//const image = document.getElementById("source");

  var canvas = document.getElementById("board");
  var ctx = canvas.getContext("2d");
  if(bn%2==0){
    ctx.canvas.width = canvW0;
    ctx.canvas.height = canvH0;
    ctx.beginPath();
  ctx.fillStyle = baseColor;//"Orange";//tableColor;
  ctx.fillRect(0, 0, canvW0, canvH0);
  ctx.closePath();}
  ctx.beginPath();
ctx.fillStyle = baseColor;
ctx.fillRect(brdShiftX+hexD/2, brdShiftY, canvW, canvH);
ctx.closePath();

  //draw filled hex terrain
  //alert(""+terrainALen);
  for(l=0;l<terrainALen;l++){
  //for(g=0;g<terrainANum[l];g++){
  for(g=0;g<allCOORDSX[l].length;g++){
  /*  if(l==2){
    var dumX = mountX[g];
    var dumY = mountY[g];}
    else if(l==5){
    var dumX = lake2X[g+4];
    var dumY = lake2Y[g+4];}
    else if(l==7){
    var dumX = lake2X[g+4]+Math.floor(Math.random()*3)-1;
    var dumY = lake2Y[g+4]+Math.floor(Math.random()*3)-1;}
    else{*/
    var dumX = allCOORDSX[l][g]+brdSftCoX;//Math.floor(Math.random()*(noXlines-3))+2;
    var dumY = Math.round(allCOORDSY[l][g]+brdSftCoY);//Math.floor(Math.random()*(noYlines-6))+3;
    //if(l==6){alert(""+dumX)}
    //if(l==2){alert("allCOORDSX="+allCOORDSX+" allCOORDSX[l]="+allCOORDSX[l]+" allCOORDSX[l]["+g+"]="+allCOORDSX[l][g]+" allCOORDSX[l].length="+allCOORDSX[l].length);}
  //}
  var boardPos = dumY*noXlines+dumX;
  if(l==3){//record lake start hexes - now 3 with high mount added
    lake2X[g+4]=dumX;
    lake2Y[g+4]=dumY;
  }
  if(l==4){//record small lake start hexes
    lake2X[g+terrainANum[2]+4]=dumX;
    lake2Y[g+terrainANum[2]+4]=dumY;
  }
  if(l==6){//record city hexes - now 4 with high mount added
    cityX[g]=dumX;
    cityY[g]=dumY;
  }
  if(l==0){//record mountain start hexes
    mountX[g]=dumX;
    mountY[g]=dumY;
  }
  var xPos = dumX*(hexD*3);//+hexD/2;
  if(dumY%2==1){xPos=xPos+(hexD/2+hexD);}
  var yPos = dumY*(hexLong);//+hexLong;
  if(dumY%2==1){yPos=yPos;}
  ctx.beginPath();
  if (allTerrainA2[boardPos]==0){
    allTerrainA2[boardPos]=+l+1;
    ctx.fillStyle = terrainA[l];//terrain1Col;
    colorNow0 = terrainA[l];
  }
  else if(allTerrainA2[boardPos]==1&&l==1){//woods on hills
    allTerrainA2[boardPos]=6;
    ctx.fillStyle = "DarkGreen";//terrain1Col;
    colorNow0 = "DarkGreen";
  }
  else{//lakes and cities overlay other types
  allTerrainA2[boardPos]=+l+1;
  ctx.fillStyle = terrainA[l];//terrain1Col;
  colorNow0 = terrainA[l];
  }
    var posOrgX = 1;
    var posOrgY = 1;
    var posNowX = 0;
    var posNowY = 0;
  ctx.moveTo(xPos,yPos);
    for(e=0;e<7;e++){
    posNowX = xPos+hexMoveX[e];
    posNowY = yPos+hexMoveY[e];
    ctx.lineTo(posNowX,posNowY);
    }
    ctx.fill();
    //ADD TEXTURE TO 1ST HEXES
    ctx.fill();
    if(l==1){//woods n wooded hills
          colorNow=colorNow0;
        for(tx=0;tx<10;tx++){//extra colours
          var dirColor = "add";
          if(Math.random()<0.4){dirColor="sub"}
          var colorNowH = col2Hex(colorNow);
          colorNow = shiftColor(colorNowH, changeColor, dirColor);
          colorNow = "#"+colorNow;
            var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
            var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
          ctx.fillStyle = colorNow;
        ctx.beginPath();
        ctx.arc(texWd_x, texWd_y, 10, 0, Math.PI*2);
        ctx.fill();
        }
        for(tx=0;tx<30;tx++){//curly curves
          if(tx>15){ctx.lineWidth = "2";}
          var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
          var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
          var texWd_r = Math.round(Math.random()*8)+0;
          var texWd_sA = Math.round(Math.random()*Math.PI*2);
          var texWd_eA = texWd_sA+Math.PI+Math.round(Math.random()*Math.PI/2);
          ctx.strokeStyle = "Black";
          ctx.beginPath();
          ctx.arc(texWd_x, texWd_y, texWd_r, texWd_sA, texWd_eA);
          ctx.stroke();
        }
        for(tx=0;tx<20;tx++){//extra dots
          var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
          var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
          var texWd_r = 1;
          var texWd_sA = 0;
          var texWd_eA = Math.PI*2;
        ctx.beginPath();
        ctx.arc(texWd_x, texWd_y, 1, 0, Math.PI*2);
        ctx.stroke();
        }
        }
        else if(l==5){//swamp
        colorNow="Turquoise";
        for(tx=0;tx<10;tx++){//extra colours
          var dirColor = "add";
          if(Math.random()<0.5){dirColor="sub"}
          var colorNowH = col2Hex(colorNow);
          if(Math.random()<0.5){
          colorNow = shiftColor(colorNowH, changeColorG, dirColor);}
          else{
          colorNow = shiftColor(colorNowH, changeColorB, dirColor);}
          colorNow = "#"+colorNow;
            var texWd_x = xPos - hexD/2 +10 +Math.round(Math.random()*(hexD*2-20));
            var texWd_y = yPos +10 +Math.round(Math.random()*(hexLong*2-20));
            var texWd_w = Math.round(Math.random()*20)+5;
            var texWd_h = Math.round(Math.random()*20)+5;
          ctx.fillStyle = colorNow;
        ctx.beginPath();
        ctx.arc(texWd_x, texWd_y, 6, 0, Math.PI*2);
        ctx.fill();
      }
      for(tx=0;tx<20;tx++){//three dots
        var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-20));
        var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-20));
        var texWd_r = 1;
        var texWd_sA = 0;
        var texWd_eA = Math.PI*2;
      ctx.fillStyle = "Black";
      ctx.beginPath();
      ctx.arc(texWd_x, texWd_y, 1, 0, Math.PI*2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(texWd_x+3, texWd_y, 1, 0, Math.PI*2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(texWd_x+6, texWd_y, 1, 0, Math.PI*2);
      ctx.fill();
      }
      }
      else if(l==3){//big lake{
      for(tx=0;tx<5;tx++){//white dots
        var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
        var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
        var texWd_r = 1;
        var texWd_sA = 0;
        var texWd_eA = Math.PI*2;
      ctx.fillStyle = "White";
      ctx.strokeStyle = "White";
      ctx.beginPath();
      //ctx.rect(texWd_x, texWd_y, 3, 1);
      ctx.stroke();
      ctx.arc(texWd_x, texWd_y, 1, 0, Math.PI*2);
      ctx.fill();
    ctx.strokeStyle = "Black";
    ctx.fillStyle = "Blue";
      }}
    else if(l==0){//hills
          colorNow=colorNow0;
    for(tx=0;tx<4;tx++){//extra colours
      var dirColor = "add";
      if(Math.random()<0.7){dirColor="sub"}
      var colorNowH = col2Hex(colorNow);
      colorNow = shiftColor(colorNowH, changeColor, dirColor);
      colorNow = "#"+colorNow;
        var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(20));
        var yShift = Math.round(Math.random()*(hexLong))
        var texWd_y = yPos +hexLong -10 +yShift;
        texWd_x = texWd_x + yShift/3;
      ctx.fillStyle = colorNow;
    ctx.beginPath();
    ctx.rect(texWd_x, texWd_y, hexD, 10);
    ctx.fill();
    }
    for(tx=0;tx<2;tx++){//line of dots
      var texWd_x = xPos +Math.round(Math.random()*(15));
      var texWd_y = yPos +hexLong +Math.round(Math.random()*(3*hexLong/4));
      var texWd_r = 1;
      var texWd_sA = 0;
      var texWd_eA = Math.PI*2;
    ctx.fillStyle = "Black";
    for(tx2=0;tx2<30;tx2=tx2+3){
    ctx.beginPath();
    ctx.arc(texWd_x+tx2, texWd_y, 1, 0, Math.PI*2);
    ctx.fill();}
    }
    for(tx=0;tx<4;tx++){//hill peaks
        var texWd_x = xPos +Math.round(Math.random()*(hexD));
        var texWd_y = yPos+15+Math.round(Math.random()*(hexLong));
        //var texWd_w = Math.round(Math.random()*20)+5;
        //var texWd_h = Math.round(Math.random()*20)+5;
      ctx.stokeStyle = "Black";
    ctx.beginPath();
    ctx.arc(texWd_x, texWd_y, 15, -Math.PI/6, -5*Math.PI/6,-1);//Math.PI/4
    ctx.stroke();
    }
    }
    else if(l==7){//desert
          colorNow=colorNow0;
        //console.log("start "+dumX+": "+colorNow);
    for(tx=0;tx<4;tx++){//extra colours
    var dirColor = "add";
    if(Math.random()<0.7){dirColor="sub"}
    var colorNowH = col2Hex(colorNow);
    colorNow = shiftColor(colorNowH, changeColor, dirColor);
    colorNow = "#"+colorNow;
    //console.log(""+dumX+": "+"changeColor="+changeColor+" --> "+colorNow);
    var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(20));
    var yShift = Math.round(Math.random()*(hexLong*1.5))
    var texWd_y = yPos +yShift;
    //texWd_x = texWd_x + yShift/3;
    ctx.fillStyle = colorNow;
    ctx.beginPath();
    ctx.rect(texWd_x, texWd_y, hexD, 10);
    ctx.fill();
    }
    for(tx=0;tx<4;tx++){//line of dots
    var texWd_x = xPos +Math.round(Math.random()*(15));
    var texWd_y = yPos +hexLong +Math.round(Math.random()*(3*hexLong/4));
    var texWd_r = 1;
    var texWd_sA = 0;
    var texWd_eA = Math.PI*2;
    ctx.fillStyle = "Brown";
    if(tx>1){ctx.fillStyle = "White";}
    for(tx2=0;tx2<30;tx2=tx2+3){
    ctx.beginPath();
    ctx.arc(texWd_x+tx2, texWd_y, 1, 0, Math.PI*2);
    ctx.fill();}
    }
    }
    else if(l==2){//mountains
          colorNow=colorNow0;
    for(tx=0;tx<4;tx++){//hill peaks
      var texWd_x = xPos +Math.round(Math.random()*(hexD)-5);
      var texWd_y = yPos+20+Math.round(Math.random()*10)+(tx*hexLong/4);
      //var texWd_x = xPos +Math.round(Math.random()*(hexD)-5);
      //var texWd_y = yPos+20+Math.round(Math.random()*(hexLong));
      var snowLine = Math.round(Math.random()*3)+3;
      //var texWd_w = Math.round(Math.random()*20)+5;
      //var texWd_h = Math.round(Math.random()*20)+5;
    ctx.stokeStyle = "Black";
      ctx.fillStyle = "#531515";
      ctx.beginPath();
      ctx.moveTo(texWd_x-5, texWd_y+10);
      ctx.lineTo(texWd_x+10, texWd_y-20);
      ctx.lineTo(texWd_x+25, texWd_y+10);
      ctx.fill();
      ctx.fillStyle = "Black";
      ctx.beginPath();
      ctx.moveTo(texWd_x-5, texWd_y+10);
      ctx.lineTo(texWd_x+10, texWd_y-20);
      ctx.lineTo(texWd_x+14, texWd_y+10);
      //ctx.moveTo(texWd_x, texWd_y);
      //ctx.lineTo(texWd_x+10, texWd_y-20);
      //ctx.lineTo(texWd_x+9, texWd_y);
      ctx.fill();
    if(Math.random()<0.35){//Math.random()<0.4
      ctx.fillStyle = "Ivory";
      ctx.beginPath();
      ctx.moveTo(texWd_x+snowLine/2, texWd_y-snowLine);
      ctx.lineTo(texWd_x+10, texWd_y-20);
      ctx.lineTo(texWd_x+20-snowLine/2, texWd_y-snowLine);
      ctx.fill();
        ctx.fillStyle = "Cyan";
        ctx.beginPath();
        ctx.moveTo(texWd_x+snowLine/2, texWd_y-snowLine);
        ctx.lineTo(texWd_x+10, texWd_y-20);
        ctx.lineTo(texWd_x+12-snowLine/2, texWd_y-snowLine);
        ctx.fill();
    }
    else{
      ctx.fillStyle = "#531515";
      ctx.beginPath();
      ctx.moveTo(texWd_x, texWd_y);
      ctx.lineTo(texWd_x+10, texWd_y-20);
      ctx.lineTo(texWd_x+20, texWd_y);
      ctx.fill();
        ctx.fillStyle = "Black";
        ctx.beginPath();
        ctx.moveTo(texWd_x, texWd_y);
        ctx.lineTo(texWd_x+10, texWd_y-20);
        ctx.lineTo(texWd_x+9, texWd_y);
        ctx.fill();
    }
    ctx.beginPath();
    ctx.moveTo(texWd_x, texWd_y);
    ctx.lineTo(texWd_x+10, texWd_y-20);
    ctx.lineTo(texWd_x+20, texWd_y);
    ctx.stroke();
    }
    for(tx=0;tx<30;tx++){//extra dots
      var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
      var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
      var texWd_r = 1;
      var texWd_sA = 0;
      var texWd_eA = Math.PI*2;
    ctx.fillStyle = "Black";
    ctx.beginPath();
    ctx.arc(texWd_x, texWd_y, 1, 0, Math.PI*2);
    ctx.fill();
    }
    }
        else if(l==6){//city
          colorNow=colorNow0;
        for(tx=0;tx<10;tx++){//extra colours
          colorNow="Grey";
          var dirColor = "add";
          if(Math.random()<0.7){dirColor="sub"}
          var colorNowH = col2Hex(colorNow);
          colorNow = shiftColor(colorNowH, changeColor, dirColor);
          colorNow = "#"+colorNow;
            var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-25));
            var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-25));
            var texWd_w = Math.round(Math.random()*20)+5;
            var texWd_h = Math.round(Math.random()*20)+5;
          ctx.fillStyle = colorNow;
        ctx.beginPath();
        ctx.rect(texWd_x, texWd_y, texWd_w, texWd_h);
        ctx.fill();
        }
        for(tx=0;tx<20;tx++){//black houses
          var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-20));
          var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-20));
          var texWd_w = Math.round(Math.random()*10)+2;
          var texWd_h = Math.round(Math.random()*10)+2;
          //var texWd_r = 1;
          ctx.fillStyle = "Black";
        ctx.beginPath();
        ctx.rect(texWd_x, texWd_y, 8, 6);
        ctx.fill();
        }
        for(tx=0;tx<3;tx++){//city roads
            var texWd_x = xPos +Math.round(Math.random()*(hexD));
            var texWd_y = yPos+5;//yPos +5 +Math.round(Math.random()*(hexLong*2-25));
            //var texWd_w = Math.round(Math.random()*20)+5;
            //var texWd_h = Math.round(Math.random()*20)+5;
          ctx.stokeStyle = "Black";
        ctx.beginPath();
        ctx.moveTo(texWd_x, texWd_y);
        ctx.lineTo(texWd_x, texWd_y+hexLong*1.5);
        ctx.stroke();
        }
        for(tx=0;tx<3;tx++){//city roads
            var texWd_x = xPos +5;
            var texWd_y = yPos+5 +Math.round(Math.random()*(hexLong));
            //var texWd_w = Math.round(Math.random()*20)+5;
            //var texWd_h = Math.round(Math.random()*20)+5;
          ctx.stokeStyle = "Black";
        ctx.beginPath();
        ctx.moveTo(texWd_x, texWd_y);
        ctx.lineTo(texWd_x+hexD, texWd_y);
        ctx.stroke();
        }
      ctx.stokeStyle = "Black";
      ctx.fillStyle = "Black";
        }
}//end of g loop
}
//draw clear hexes around edge
//down the left side
//x=0 y=0 to noYlines
if(bn%2==0){
var dumX = 0+brdSftCoX;
for(g=0;g<noYlines;g=g+2){
var dumY =  Math.round(g+brdSftCoY);
var boardPos = dumY*noXlines+dumX;
var xPos = dumX*(hexD*3);//+hexD/2;
if(dumY%2==1){xPos=xPos+(hexD/2+hexD);}
var yPos = dumY*(hexLong);//+hexLong;
if(dumY%2==1){yPos=yPos;}
ctx.beginPath();
ctx.fillStyle = "Wheat";
  var posOrgX = 1;
  var posOrgY = 1;
  var posNowX = 0;
  var posNowY = 0;
ctx.moveTo(xPos,yPos);
  for(e=0;e<7;e++){
  posNowX = xPos+hexMoveX[e];
  posNowY = yPos+hexMoveY[e];
  ctx.lineTo(posNowX,posNowY);
  }
  ctx.fill();
}}
//down the right side
//x=0 y=0 to noYlines
var dumX = noXlines-0.5+brdSftCoX;
for(g=0;g<noYlines;g=g+2){
var dumY =  Math.round(g+brdSftCoY);
var boardPos = dumY*noXlines+dumX;
var xPos = dumX*(hexD*3);//+hexD/2;
if(dumY%2==1){xPos=xPos+(hexD/2+hexD);}
var yPos = dumY*(hexLong);//+hexLong;
if(dumY%2==1){yPos=yPos;}
ctx.beginPath();
ctx.fillStyle = "Wheat";
  var posOrgX = 1;
  var posOrgY = 1;
  var posNowX = 0;
  var posNowY = 0;
ctx.moveTo(xPos,yPos);
  for(e=0;e<7;e++){
  posNowX = xPos+hexMoveX[e];
  posNowY = yPos+hexMoveY[e];
  ctx.lineTo(posNowX,posNowY);
  }
  ctx.fill();
}

//across the top side
//x=0 y=0 to noYlines
var dumY =  Math.round(1+brdSftCoY);
for(g=0;g<5;g++){
var dumX = g+brdSftCoX;
var boardPos = dumY*noXlines+dumX;
var xPos = dumX*(hexD*3);//+hexD/2;
if(dumY%2==1){xPos=xPos+(hexD/2+hexD);}
var yPos = dumY*(hexLong);//+hexLong;
if(dumY%2==1){yPos=yPos;}
ctx.beginPath();
ctx.fillStyle = "Wheat";
  var posOrgX = 1;
  var posOrgY = 1;
  var posNowX = 0;
  var posNowY = 0;
ctx.moveTo(xPos,yPos);
  for(e=0;e<7;e++){
  posNowX = xPos+hexMoveX[e];
  posNowY = yPos+hexMoveY[e];
  ctx.lineTo(posNowX,posNowY);
  }
  ctx.fill();
}
//across the bottom side
//x=0 y=0 to noYlines
var dumY =  Math.floor(noYlines-2+brdSftCoY);//-3
for(g=0;g<5;g++){
var dumX = g+brdSftCoX;//+0.5
var boardPos = dumY*noXlines+dumX;
var xPos = dumX*(hexD*3);//+hexD/2;
if(dumY%2==1){xPos=xPos+(hexD/2+hexD);}
var yPos = dumY*(hexLong);//+hexLong;
if(dumY%2==1){yPos=yPos;}
ctx.beginPath();
ctx.fillStyle = "Wheat";
  var posOrgX = 1;
  var posOrgY = 1;
  var posNowX = 0;
  var posNowY = 0;
ctx.moveTo(xPos,yPos);
  for(e=0;e<7;e++){
  posNowX = xPos+hexMoveX[e];
  posNowY = yPos+hexMoveY[e];
  ctx.lineTo(posNowX,posNowY);
  }
  ctx.fill();
}

//add the 2 half-wood hexes

var dumY =  Math.round(1+brdSftCoY);
var dumX = 1+brdSftCoX;
if(bn%2==1){dumX = 3+brdSftCoX;}
var boardPos = dumY*noXlines+dumX;
var xPos = dumX*(hexD*3);//+hexD/2;
if(dumY%2==1){xPos=xPos+(hexD/2+hexD);}
var yPos = dumY*(hexLong);//+hexLong;
if(dumY%2==1){yPos=yPos;}
ctx.beginPath();
ctx.fillStyle = "LimeGreen";
colorNow = "LimeGreen";
  var posOrgX = 1;
  var posOrgY = 1;
  var posNowX = 0;
  var posNowY = 0;
ctx.moveTo(xPos,yPos);
  for(e=0;e<7;e++){
  posNowX = xPos+hexMoveX[e];
  posNowY = yPos+hexMoveY[e];
  ctx.lineTo(posNowX,posNowY);
  }
  ctx.fill();

  //woods n wooded hills
   for(tx=0;tx<10;tx++){//extra colours
     var dirColor = "add";
     if(Math.random()<0.4){dirColor="sub"}
     var colorNowH = col2Hex(colorNow);
     colorNow = shiftColor(colorNowH, changeColor, dirColor);
     colorNow = "#"+colorNow;
       var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
       var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
     ctx.fillStyle = colorNow;
   ctx.beginPath();
   ctx.arc(texWd_x, texWd_y, 10, 0, Math.PI*2);
   ctx.fill();
   }
   for(tx=0;tx<30;tx++){//curly curves
     if(tx>15){ctx.lineWidth = "2";}
     var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
     var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
     var texWd_r = Math.round(Math.random()*8)+0;
     var texWd_sA = Math.round(Math.random()*Math.PI*2);
     var texWd_eA = texWd_sA+Math.PI+Math.round(Math.random()*Math.PI/2);
     ctx.strokeStyle = "Black";
     ctx.beginPath();
     ctx.arc(texWd_x, texWd_y, texWd_r, texWd_sA, texWd_eA);
     ctx.stroke();
   }
   for(tx=0;tx<20;tx++){//extra dots
     var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
     var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
     var texWd_r = 1;
     var texWd_sA = 0;
     var texWd_eA = Math.PI*2;
   ctx.beginPath();
   ctx.arc(texWd_x, texWd_y, 1, 0, Math.PI*2);
   ctx.stroke();
   }
  var dumY =  Math.round(35+brdSftCoY);
  var dumX = 3+brdSftCoX;
  if(bn%2==1){dumX =  1+brdSftCoX;}
  var boardPos = dumY*noXlines+dumX;
  var xPos = dumX*(hexD*3);//+hexD/2;
  if(dumY%2==1){xPos=xPos+(hexD/2+hexD);}
  var yPos = dumY*(hexLong);//+hexLong;
  if(dumY%2==1){yPos=yPos;}
  ctx.beginPath();
  ctx.fillStyle = "LimeGreen";
  colorNow = "LimeGreen";
    var posOrgX = 1;
    var posOrgY = 1;
    var posNowX = 0;
    var posNowY = 0;
  ctx.moveTo(xPos,yPos);
    for(e=0;e<7;e++){
    posNowX = xPos+hexMoveX[e];
    posNowY = yPos+hexMoveY[e];
    ctx.lineTo(posNowX,posNowY);
    }
    ctx.fill();
    //woods n wooded hills
     for(tx=0;tx<10;tx++){//extra colours
       var dirColor = "add";
       if(Math.random()<0.4){dirColor="sub"}
       var colorNowH = col2Hex(colorNow);
       colorNow = shiftColor(colorNowH, changeColor, dirColor);
       colorNow = "#"+colorNow;
         var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
         var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
       ctx.fillStyle = colorNow;
     ctx.beginPath();
     ctx.arc(texWd_x, texWd_y, 10, 0, Math.PI*2);
     ctx.fill();
     }
     for(tx=0;tx<30;tx++){//curly curves
       if(tx>15){ctx.lineWidth = "2";}
       var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
       var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
       var texWd_r = Math.round(Math.random()*8)+0;
       var texWd_sA = Math.round(Math.random()*Math.PI*2);
       var texWd_eA = texWd_sA+Math.PI+Math.round(Math.random()*Math.PI/2);
       ctx.strokeStyle = "Black";
       ctx.beginPath();
       ctx.arc(texWd_x, texWd_y, texWd_r, texWd_sA, texWd_eA);
       ctx.stroke();
     }
     for(tx=0;tx<20;tx++){//extra dots
       var texWd_x = xPos - hexD/2 +5 +Math.round(Math.random()*(hexD*2-10));
       var texWd_y = yPos +5 +Math.round(Math.random()*(hexLong*2-10));
       var texWd_r = 1;
       var texWd_sA = 0;
       var texWd_eA = Math.PI*2;
     ctx.beginPath();
     ctx.arc(texWd_x, texWd_y, 1, 0, Math.PI*2);
     ctx.stroke();
     }

//****************************************************************
//RIVERS ON HEXSIDES
//****************************************************************

//draw rivers from lakes
//var riverFlag = true;
/*
var direction = 0;
var turnD = 1;
if(Math.random()<0.5){turnD = -1;}
for(h=0;h<2;h++){
for(g=0;g<(terrainANum[3]+terrainANum[5]);g++){
var riverFlag = true;
var dum6 = Math.ceil(Math.random()*6);
dum6=6;
var turnLR = 0;//0 = left 1 = right
if(Math.random()<0.5){turnLR = 1;}
var turnProb = 0.4;
var corner=1;
direction = 6;//dum6;
if(g==0){
  ctx.lineWidth = "12";}
else{
    ctx.lineWidth = "6";}
  ctx.strokeStyle="Blue";
  var xPos = lakeX[g]*(hexD*3);//+hexD/2;
  if(lakeY[g]%2==1){xPos = xPos+(hexD/2+hexD);}
  var yPos = lakeY[g]*(hexLong);//+hexLong;
  ctx.beginPath();
  ctx.moveTo(xPos, yPos);
  dumX=Math.round(xPos/(hexD*3));
  dumY=Math.round(yPos/(hexLong));
  allTerrainA[dumY*noXlines+dumX]=1*allTerrainA[dumY*noXlines+dumX]+10;
  while(riverFlag){
    switch (direction) {
case 1:
if(turnLR==0||Math.random()<turnProb){//corner==1
  xPos=xPos+0.5*hexD;
  yPos=yPos+hexLong;
  dum6=2;
  turnLR=1;}
else{
  xPos=xPos+0.5*hexD;
  yPos=yPos-hexLong;
  dum6=6;
  turnLR=0;}
  break;
case 2:
if(turnLR==1||Math.random()<turnProb){//corner==1
  xPos=xPos+hexD;
  //yPos=yPos+hexLong;
  dum6=1;
  turnLR=0;}
else{
  xPos=xPos-0.5*hexD;
  yPos=yPos+hexLong;
  dum6=3;
  turnLR=1;}
  break;
case 3:
if(turnLR==1||Math.random()<turnProb){//corner==1
  xPos=xPos+0.5*hexD;
  yPos=yPos+hexLong;
  dum6=2;
  turnLR=0;}
else{
  xPos=xPos-hexD;
  //yPos=yPos-hexLong;
  dum6=4;
  turnLR=1;}
  break;
case 4:
if(turnLR==1||Math.random()<turnProb){//corner==1
  xPos=xPos-0.5*hexD;
  yPos=yPos+hexLong;
  dum6=3;
  turnLR=0;}
else{
  xPos=xPos-0.5*hexD;
  yPos=yPos-hexLong;
  dum6=5;
  turnLR=1;}
  break;
case 5:
if(turnLR==1||Math.random()<turnProb){//corner==1
  xPos=xPos-hexD;
  //yPos=yPos+hexLong;
  dum6=4;
  turnLR=0;}
else{
  xPos=xPos+0.5*hexD;
  yPos=yPos-hexLong;
  dum6=6;
  turnLR=1;}
  break;
case 6:
if(turnLR==0||Math.random()<turnProb){//corner==1
  xPos=xPos+hexD;
  //yPos=yPos+hexLong;
  dum6=1;
  turnLR=1;}
else{
  xPos=xPos-0.5*hexD;
  yPos=yPos-hexLong;
  dum6=5;
  turnLR=0;}
}
  direction=dum6;
    ctx.lineTo(xPos, yPos);
  //if(xPos<0||yPos<0||xPos>canvW||yPos>canvH||Math.random()<0.02){
  if(xPos<0||yPos<0||xPos>canvW||yPos>canvH||Math.random()<0.05||allTerrainA[dumY*noXlines+dumX]>39){
    riverFlag=false;
    //alert(""+allTerrainA[dumY*noXlines+dumX]);
  }
  else{  }
  }
  ctx.stroke();
  }
}

//draw rivers from mountains
//var riverFlag = true;
var direction = 0;
var turnD = 1;
if(Math.random()<0.5){turnD = -1;}
for(g=0;g<terrainANum[0];g++){
var riverFlag = true;
var dum6 = Math.ceil(Math.random()*6);
dum6=6;
var turnLR = 0;//0 = left 1 = right
if(Math.random()<0.5){turnLR = 1;}
var turnProb = 0.5;
var corner=1;
direction = 6;//dum6;
  ctx.lineWidth = "6";
  ctx.strokeStyle="Blue";
  var xPos = mountX[g]*(hexD*3);//+hexD/2;
  if(mountY[g]%2==1){xPos = xPos+(hexD/2+hexD);}
  var yPos = mountY[g]*(hexLong);//+hexLong;
  var xPos0 = xPos+hexD/2;
  var yPos0 = yPos+hexLong;
  ctx.beginPath();
  ctx.moveTo(xPos0, yPos0);
  dumX=Math.round(xPos/(hexD*3));
  dumY=Math.round(yPos/(hexLong));
  allTerrainA[dumY*noXlines+dumX]=1*allTerrainA[dumY*noXlines+dumX]+10;
  while(riverFlag){
    switch (direction) {
case 1:
if(turnLR==0||Math.random()<turnProb){//corner==1
  xPos=xPos+0.5*hexD;
  yPos=yPos+hexLong;
  dum6=2;
  turnLR=1;}
else{
  xPos=xPos+0.5*hexD;
  yPos=yPos-hexLong;
  dum6=6;
  turnLR=0;}
  break;
case 2:
if(turnLR==1||Math.random()<turnProb){//corner==1
  xPos=xPos+hexD;
  //yPos=yPos+hexLong;
  dum6=1;
  turnLR=0;}
else{
  xPos=xPos-0.5*hexD;
  yPos=yPos+hexLong;
  dum6=3;
  turnLR=1;}
  break;
case 3:
if(turnLR==1||Math.random()<turnProb){//corner==1
  xPos=xPos+0.5*hexD;
  yPos=yPos+hexLong;
  dum6=2;
  turnLR=0;}
else{
  xPos=xPos-hexD;
  //yPos=yPos-hexLong;
  dum6=4;
  turnLR=1;}
  break;
case 4:
if(turnLR==1||Math.random()<turnProb){//corner==1
  xPos=xPos-0.5*hexD;
  yPos=yPos+hexLong;
  dum6=3;
  turnLR=0;}
else{
  xPos=xPos-0.5*hexD;
  yPos=yPos-hexLong;
  dum6=5;
  turnLR=1;}
  break;
case 5:
if(turnLR==1||Math.random()<turnProb){//corner==1
  xPos=xPos-hexD;
  //yPos=yPos+hexLong;
  dum6=4;
  turnLR=0;}
else{
  xPos=xPos+0.5*hexD;
  yPos=yPos-hexLong;
  dum6=6;
  turnLR=1;}
  break;
case 6:
if(turnLR==0||Math.random()<turnProb){//corner==1
  xPos=xPos+hexD;
  //yPos=yPos+hexLong;
  dum6=1;
  turnLR=1;}
else{
  xPos=xPos-0.5*hexD;
  yPos=yPos-hexLong;
  dum6=5;
  turnLR=0;}
}
    direction=dum6;
    ctx.lineTo(xPos, yPos);
    dumX=Math.round(xPos/(hexD*3));
    dumY=Math.round(yPos/(hexLong));
    allTerrainA[dumY*noXlines+dumX]=1*allTerrainA[dumY*noXlines+dumX]+10;
  //if(xPos<0||yPos<0||xPos>canvW||yPos>canvH||Math.random()<0.02){
  if(xPos<0||yPos<0||xPos>canvW||yPos>canvH||Math.random()<0.05||allTerrainA[dumY*noXlines+dumX]>39){
    riverFlag=false;
  }
  else{  }
  }
  ctx.stroke();
  }
*/

  //*********************************************
  //END RIVERS THRU HEXSIDES
  //*******************************************

//*****************************************************
//RIVERS THRU HEXs
//*****************************************************

//draw rivers from code list

var riverCOX1 = new Array();
var riverCOY1 = new Array();
for(c=0;c<riverCOX.length;c++){
  riverCOX1[c]=riverCOX[c]+brdSftCoX;
  riverCOY1[c]=Math.round(riverCOY[c]+brdSftCoY);
}
var riverEndFlag = false;
var riverALen = riverCOX.length;
  ctx.lineWidth = "15";
  ctx.strokeStyle="Blue";
  ctx.lineCap = "round";
  var yRshift = 8;
  var xRshift = -3;
  var xPos = riverCOX1[0]*(hexD*3)+hexD/2+xRshift;
  if(riverCOY[0]%2==1){xPos = xPos+(hexD/2+hexD);}
  var yPos = riverCOY1[0]*(hexLong)+hexLong+yRshift;
  ctx.beginPath();
  ctx.moveTo(xPos, yPos);
  for(r=1;r<riverALen;r++){
  if(riverEndFlag){//start new river
  ctx.beginPath();
  var xPos = riverCOX1[r]*(hexD*3)+hexD/2+xRshift;
  if(riverCOY[r]%2==1){xPos = xPos+(hexD/2+hexD);}
  var yPos = riverCOY1[r]*(hexLong)+hexLong+yRshift;
  ctx.moveTo(xPos, yPos);
  riverEndFlag = false;
  }
  else{
    if(riverCOX[r]==100){riverEndFlag = true;
    ctx.stroke();
    ctx.closePath();
    }
    else{
    var xPos = riverCOX1[r]*(hexD*3)+hexD/2+xRshift;
    if(riverCOY[r]%2==1){xPos = xPos+(hexD/2+hexD);}
    var yPos = riverCOY1[r]*(hexLong)+hexLong+yRshift;
    ctx.lineTo(xPos, yPos);
      }}
}
//ctx.stroke();
//ctx.closePath();


//draw roads from code dumCountList

var roadCOX1 = new Array();
var roadCOY1 = new Array();
for(c=0;c<roadCOX.length;c++){
  roadCOX1[c]=roadCOX[c]+brdSftCoX;
  roadCOY1[c]=Math.round(roadCOY[c]+brdSftCoY);
}
var roadEndFlag = false;
var roadALen = roadCOX.length;
  ctx.lineWidth = "9";
  ctx.strokeStyle="Grey";
  var xPos = roadCOX1[0]*(hexD*3)+hexD/2+0;
  if(roadCOY1[0]%2==1){xPos = xPos+(hexD/2+hexD);}
  var yPos = roadCOY1[0]*(hexLong)+hexLong+0;
  ctx.beginPath();
  ctx.moveTo(xPos, yPos);
  for(r=1;r<roadALen;r++){
  if(roadEndFlag){//start new road
  ctx.beginPath();
  var xPos = roadCOX1[r]*(hexD*3)+hexD/2+0;
  if(roadCOY[r]%2==1){xPos = xPos+(hexD/2+hexD);}
  var yPos = roadCOY1[r]*(hexLong)+hexLong+0;
  ctx.moveTo(xPos, yPos);
  roadEndFlag = false;
  }
  else{
    if(roadCOX[r]==100){roadEndFlag = true;
    ctx.stroke();
    ctx.closePath();
    }
    else{
    var xPos = roadCOX1[r]*(hexD*3)+hexD/2+0;
    if(roadCOY[r]%2==1){xPos = xPos+(hexD/2+hexD);}
    var yPos = roadCOY1[r]*(hexLong)+hexLong+0;
  ctx.lineTo(xPos, yPos);
  }}
}

var roadCOX1 = new Array();
var roadCOY1 = new Array();
for(c=0;c<roadCOX.length;c++){
  roadCOX1[c]=roadCOX[c]+brdSftCoX;
  roadCOY1[c]=Math.round(roadCOY[c]+brdSftCoY);
}
var roadEndFlag = false;
var roadALen = roadCOX.length;
  ctx.lineWidth = "2";
  ctx.strokeStyle="White";//"Black";
  ctx.setLineDash([10, 10]);
  var xPos = roadCOX1[0]*(hexD*3)+hexD/2+0;
  if(roadCOY1[0]%2==1){xPos = xPos+(hexD/2+hexD);}
  var yPos = roadCOY1[0]*(hexLong)+hexLong+0;
  ctx.beginPath();
  ctx.moveTo(xPos, yPos);
  for(r=1;r<roadALen;r++){
  if(roadEndFlag){//start new road
  ctx.beginPath();
  var xPos = roadCOX1[r]*(hexD*3)+hexD/2+0;
  if(roadCOY[r]%2==1){xPos = xPos+(hexD/2+hexD);}
  var yPos = roadCOY1[r]*(hexLong)+hexLong+0;
  ctx.moveTo(xPos, yPos);
  roadEndFlag = false;
  }
  else{
    if(roadCOX[r]==100){roadEndFlag = true;
    ctx.stroke();
    ctx.closePath();
    }
    else{
    var xPos = roadCOX1[r]*(hexD*3)+hexD/2+0;
    if(roadCOY[r]%2==1){xPos = xPos+(hexD/2+hexD);}
    var yPos = roadCOY1[r]*(hexLong)+hexLong+0;
  ctx.lineTo(xPos, yPos);
  }}
}
ctx.setLineDash([0]);

  //draw edge
  //var riverFlag = true;#
  var edgeX0 = [18, canvW-39, canvW-39, 18, 18];
  var edgeY0 = [68, 68, canvH-69, canvH-69, 68];
  var edgeX = new Array();
  var edgeY = new Array();
  for(c=0;c<edgeX0.length;c++){
    edgeX[c]=edgeX0[c]+brdSftCoX*hexD*3;
    edgeY[c]=edgeY0[c]+brdSftCoY*hexLong;
  }
    ctx.lineWidth = "2";
    ctx.setLineDash([24, 12]);
    ctx.strokeStyle="Black";
    ctx.beginPath();
      ctx.moveTo(edgeX[0], edgeY[0]);
  for(g=1;g<5;g++){
    ctx.lineTo(edgeX[g], edgeY[g]);}
    ctx.stroke();

  ctx.lineWidth = "1";
  ctx.setLineDash([0]);
  ctx.strokeStyle = lineColor;
  ctx.fillStyle = "green";

  var posOrgX = 1;
  var posOrgY = 1;
  var posNowX = 0;
  var posNowY = 0;

//DRAW HEXES EVERYWHERE
for(f=0;f<noYlines; f++){
  posOrgY = f*hexLong+brdSftCoY*hexLong;
  if(f%2==0){
    posOrgX=0+brdSftCoX*hexD*3;
  }
  else{
    posOrgX=1.5*hexD+brdSftCoX*hexD*3;
  }
  for(d=0;d<noXlines; d++){
  ctx.beginPath();
  ctx.moveTo(posOrgX,posOrgY);
    for(e=0;e<7;e++){
    posNowX = posOrgX+hexMoveX[e];
    posNowY = posOrgY+hexMoveY[e];
    ctx.lineTo(posNowX,posNowY);
    }
    if(false){
      ctx.fill();
    }
    else{
    ctx.stroke();}
    posOrgX = posOrgX+3*hexD;
  }
}


//mark centre of each hex
/*
  for(k=0;k<noXXlines;k++){
    for(l=0;l<noYlines;l++){
      var dumX = k;
      var dumY = l;
    var xPos = dumX*(hexD*3)+hexD/2;
    if(dumY%2==1){xPos=xPos+(hexD/2+hexD);}
    var yPos = dumY*(hexLong)+hexLong;
    if(dumY%2==1){yPos=yPos;}
    ctx.beginPath();
    ctx.fillStyle = "Black";//terrain1Col;
    ctx.fillRect(xPos-2, yPos-2, 4, 4);
    }
  }
*/
//alert(""+allTerrainA2);

document.getElementById("saveButton").addEventListener("click", function(evt){
        // open new window with saved image so user
        // can right click and save to their computer
        window.open(canvas.toDataURL());
    }, false);

}
//}

function getCanvasImg(canvas){
    var img = new Image();
    img.src = canvas.toDataURL();
    return img;
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

function col2Hex(col){
  var col2 = col;
  if(col2.slice(0,1)=="#"){
 var colHex = col;}
  else{
 var colHex = "#000000";
  if(col=="Black"){
    colHex = "#000000";
  }
  else if(col=="White"){
    colHex = "#ffffff";
  }
  else if(col=="Wheat"){
    colHex = "#f5deb3";
  }
  else if(col=="Ivory"){
    colHex = "#fffff0";
  }
  else if(col=="Green"){
    colHex = "#008000";
  }
  else if(col=="Brown"){
    colHex = "#a52a2a";
  }
  else if(col=="LimeGreen"){
    colHex = "#32cd32";
  }
  else if(col=="Blue"){
    colHex = "#0000ff";
  }
  else if(col=="Turquoise"){
    colHex = "#40e0D0";
  }
  else if(col=="Silver"){
    colHex = "#c0c0c0";
  }
  else if(col=="DarkGreen"){
    colHex = "#006400";
  }
  else if(col=="DarkOliveGreen"){
    colHex = "#556b2f";
  }
  else if(col=="Red"){
    colHex = "#ff0000";
  }
  else if(col=="Grey"){
    colHex = "#808080";
  }
  else if(col=="Yellow"){
    colHex = "#ffff00";
  }
  else{
    colHex = "#000000";
  }}
  //if(colFlag<2){
  //alert(""+col+" "+colHex);
  //colFlag++;}
  return colHex;
}
