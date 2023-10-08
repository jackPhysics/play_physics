
var canvW2=350;
var canvH2=420;
var dialX = new Array();//canvW/3;
var dialY = new Array();//canvH/2;
var dialX2 = canvW2/3*2;
var dialY2 = canvH2/2;
var delX = new Array();//0;
var delY = new Array();//0;
var delX2 = 0;
var delY2 = 0;
var needRad = new Array();//80;
var needAng = new Array();//0;
var needX = new Array();//dialX;
var needY = new Array();//dialY-needRad;
var needRad2 = 80;
var needAng2 = 0;
var needX2 = dialX2;
var needY2 = dialY2-needRad2;
var needHour = new Array();//12;
var needMin = new Array();//0;
var oldNeedHour = new Array();//12;
var oldNeedMin = new Array();//0;
var noOfDials = 4;
var divMaj = [12,12,24, 12];//[12, 31, 12];//numbered divisions
var divMin = [12,31,24, 60];//[12, 31, 60];//actual divisions
var dialMaxs = [12,31,24, 60];//[12, 31, 60];
var dialName = ["month", "day", "hour", "min"];
var isZero = [1, 1, 0, 0];//0 means starts at 0, 1 means starts at 1
var isText = [true, false, false, false];//1 means there is text, 0 use numbers
var numbLetters = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];//find the name/letter using...
//    ...number+divMin[0]+divMin[1] etc.
var daysPerMon = [12, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];//index 0 is dummy
var yearNow = 2023;
var needMeridFlagUp = [false, false, false, false];//when a dial goes past the meridian move the next dial
var needMeridFlagDown = [false, false, false, false];
var meridFlag = false;
var mouseUpFlag = false;
var dialCol = ["yellow", "silver", "cyan"];//
var dialColNo = [64, 1, 32];
var allCol = ["AliceBlue" , "Azure", "Beige" , "Aquamarine" , "Bisque",
 "Chartreuse" , "Cornsilk" , "DeepSkyBlue" , "ForestGreen" , "DarkSalmon" ,
  "DarkSeaGreen" , "Gainsboro" , "Fuchsia" , "Gold" , "HoneyDew" ,
   "HotPink" , "IndianRed" , "GreenYellow" , "Lavender" , "Khaki" ,
    "LightBlue" , "LightGray" , "LightGoldenRodYellow" , "Ivory" , "LightCoral" ,
     "LightCyan" , "LightGrey" , "LightSalmon" ,"LightYellow" , "Lime" ,
      "LimeGreen" , "LightSkyBlue", "LightPink" , "Magenta" , "MediumSlateBlue" ,
       "MediumTurquoise" , "MediumOrchid" , "MediumSpringGreen" , "MintCream" , "MistyRose",
        "OliveDrab" , "Orchid" , "OliveDrab" , "Orange" , "OldLace" ,
         "Moccasin" , "Peru" , "PowderBlue" , "Pink" , "Plum" ,
          "PapayaWhip" , "PaleTurquoise" , "PaleGreen" , "PeachPuff" , "YellowGreen" ,
           "RoyalBlue" , "Salmon" , "SeaShell" , "SkyBlue" , "Sienna" ,
            "SandyBrown" , "Silver", "SeaGreen", "Cyan","Yellow",
             "Tan" , "Tomato" , "Turquoise" , "Teal" , "SpringGreen" ,
              "Thistle" , "Violet", "Wheat" , "Red"];
var allColLen = allCol.length;
var edge = 30;
var xmin = 30;
var xmax = canvW2-xmin;
var ymin = 60;
var ymax = canvH2-ymin/2;
var Qx = 0;
var Qy = 0;
var Qarray = new Array();
var noOfQ = -1;
var QxA = new Array();
var QyA = new Array();
var QcolA = new Array();
var newQflag = false;


function doTimeNow(){
  mouseUpFlag=false;
  Qx=0;
  Qy=0;
  var today = new Date();
  var timeY = today.getFullYear();
  var timeM = today.getMonth()+1;
  var timeD = today.getDate();
  var timeH = today.getHours()-1;//-1 if DST
  var timeX = today.getMinutes();
  yearNow = timeY;
  needMin[0] = timeM;
  needMin[1] = timeD;
  needMin[2] = timeH;
  needMin[3] = timeX;
for(f=0;f<4;f++){
oldNeedMin[f] = needMin[f];
  var dummyAng = needMin[f]/divMin[f]-0.25;
  if(dummyAng<0){dummyAng=1+dummyAng;}
  var dialAng = 2*Math.PI*dummyAng;
var needOffX = needRad[f]*Math.cos(dialAng);
var needOffY = needRad[f]*Math.sin(dialAng);
needX[f] = dialX[f]+needOffX;
needY[f] = dialY[f]+needOffY;}
      changeD();
      changeT();
plotNewMoveQ();
}

function doTimeNow0(){
  mouseUpFlag=false;
  Qx=0;
  Qy=0;
  var today = new Date();
  var timeY = today.getFullYear();
  var timeM = today.getMonth()+1;
  var timeD = today.getDate();
  var timeH = today.getHours();
  var timeMin = today.getMinutes();
  yearNow = timeY;
  needMin[0] = timeM;
  needMin[1] = timeD;
  needMin[2] = timeH;
  needMin[3] = timeMin;
for(f=0;f<4;f++){
oldNeedMin[f] = needMin[f];
  var dummyAng = needMin[f]/divMin[f]-0.25;
  if(dummyAng<0){dummyAng=1+dummyAng;}
  var dialAng = 2*Math.PI*dummyAng;
var needOffX = needRad[f]*Math.cos(dialAng);
var needOffY = needRad[f]*Math.sin(dialAng);
needX[f] = dialX[f]+needOffX;
needY[f] = dialY[f]+needOffY;}
      changeD();
      changeT();
}

function getCanvasImg(canvas){
    var img = new Image();
    img.src = canvas.toDataURL();
    return img;
}

function moveQ(events, points){
                          var context = events.getContext();
                          var drawingPos = events.getMousePos();
                          if (drawingPos !== null) {
                              Qx = drawingPos.x;
                              Qy = drawingPos.y;
                      }
                    }

function needleAngle(d){
//check if any needles are at the meridian
if(needMin[d]==divMin[d]&&needMeridFlagUp[d]){
  needMin[d]=1;
  needMeridFlagUp[d]=false;
  needMeridFlagUp[d-1]=true;
  meridFlag=true;
  if(d==0){yearNow++;}
}
else if(needMin[d]==Number(divMin[d]-1)&&isZero[d]==0&&needMeridFlagUp[d]){
  needMin[d]=0;
  needMeridFlagUp[d]=false;
  needMeridFlagUp[d-1]=true;
  meridFlag=true;
}
else if(needMeridFlagUp[d]){
  needMin[d]++;
  needMeridFlagUp[d]=false;
  meridFlag=true;
}
else if(needMin[d]==1&&needMeridFlagDown[d]&&isZero[d]!=0){
  needMin[d]=divMin[d];
  needMeridFlagDown[d]=false;
  needMeridFlagDown[d-1]=true;
  meridFlag=true;
  if(d==0){yearNow--;}
}
else if(needMin[d]==0&&needMeridFlagDown[d]){
  needMin[d]=Number(divMin[d]-1);
  needMeridFlagDown[d]=false;
  needMeridFlagDown[d-1]=true;
  meridFlag=true;
}
else if(needMeridFlagDown[d]){
  needMin[d]--;
  needMeridFlagDown[d]=false;
  meridFlag=true;
}
//check that mouse is on the dial
  delX[d] = dialX[d] - Qx;
  delY[d] = dialY[d] - Qy;
  var needDist = delX[d]*delX[d]+delY[d]*delY[d];
  needDist = Math.pow(needDist,0.5);
  if(needDist<=needRad[d]&&needDist>=needRad[d]/2){
//find the angle of the mouse position
  var dialAng = Math.atan2(delY[d], delX[d])+Math.PI;//syntax for atan2: Math.atan2(y, x) - for atan: Math.atan(y/x)
  //atan2 goes -pi to pi, atan goes -pi/2 to pi/2 error if x=0
  //to nearest unit:
  if(mouseUpFlag){
  if(divMin[d]==7){
  var bigNo = divMin[d];
  var bigNo2 = bigNo/2;
      var bigNo3 = Math.PI/2 - 2*Math.PI/bigNo;
      var smNo = divMin[d];
      var delAng = Math.PI/bigNo2;
      var dialAng2 = (dialAng+delAng)/(2*Math.PI);
      var roundNeed = Math.round(dialAng2*divMin[d]);
      var needOffX = needRad[d]*Math.cos(delAng*roundNeed-bigNo3);
      var needOffY = needRad[d]*Math.sin(delAng*roundNeed-bigNo3);}
  else{
  var bigNo3 = 2*Math.PI/divMin[d];
  var dialAngReminder = (dialAng)%(bigNo3);
    dialAng = dialAng-dialAngReminder;
      var needOffX = needRad[d]*Math.cos(dialAng);
      var needOffY = needRad[d]*Math.sin(dialAng);
  }
          }
  else{
  var dialAng0 = dialAng;//say angle=265o
  var bigNo = divMin[d];
  var bigNo2 = bigNo/2;
  var bigNo3 = 2*Math.PI/divMin[d];//bigNo3=51.428571
  var dialAngReminder = (dialAng)%(bigNo3);//5.1527 -->0.1527 -->40.4861
//convert angle to rounded angle
//use rounded angle to find position of needle tip
  var needOffX = needRad[d]*Math.cos(dialAng);
  var needOffY = needRad[d]*Math.sin(dialAng);}
  needX[d] = dialX[d]+needOffX;
  needY[d] = dialY[d]+needOffY;
//find actual value of each needle - in degrees and then number
  var dialAng0D = Math.round(dialAng0*180/Math.PI*10)/10;//original angle
  var dialAngReminderD = Math.round(dialAngReminder*180/Math.PI*10)/10;//remainder12
  var dialAngD = Math.round(dialAng*180/Math.PI*10)/10;//final angle
//horizontal to right (east) is zero in javascript - we want zero to be north
//so in js east = 0; we want east = 90
  needMin[d] = dialAngD + 90;//eg lets say it dialAngD=265o, then +90 = 355o
  if(needMin[d]>360){needMin[d] = needMin[d]-360;}//3555
  var divSize = 360/divMin[d];//360/7= 51.428571
  var divSizeH = 360/divMaj[d];
//convert angle to number
  needMin[d] = Math.round(needMin[d]/divSize);//Math.round  //355/51.428571=6.902777835 -->6
  var smNo = divMin[d];
  if(isZero[d]==0){
    if(needMin[d]==smNo){needMin[d]=0;}
    }
  needHour[d] = dialAngD + 90;
  if(needHour[d]>360){needHour[d] = needHour[d]-360;}
  needHour[d] = Math.round(needHour[d]/divSizeH);
  //add time to next dial along
  if(d>-1){//except for left-hand dial (d=0) - no, include LH dial
  var plusMinusRange = 1;
  if(divMin[d]>=12){plusMinusRange = Math.round(divMin[d]/12);}
  var smDiv = plusMinusRange;
  var smDivH = divMin[d]-smDiv;
  var smDivL = smDiv;
  if(oldNeedMin[d]<=divMin[d] && oldNeedMin[d]>=smDivH && needMin[d]>=0 && needMin[d]<=smDivL){
    needMin[d-1]++;
    if(d==0){yearNow++;}
    newHour(d-1);
    }
  else if(oldNeedMin[d]>=0 && oldNeedMin[d]<=smDivL && needMin[d]<=divMin[d] && needMin[d]>=smDivH){
      //alert("go back d="+(d-1));
      needMin[d-1]--;
      if(d==0){yearNow--;}
      lastHour(d-1);
    }
  }
  oldNeedMin[d] = needMin[d];
  }
  //end of mouse on dial routine
  if(meridFlag){
  if(needMin[d]==0||needMin[d]==divMin[d]){
  var dialAng = 2*Math.PI-Math.PI/2;
  }
  else if(needMin[d]==1){
  var dialAng = 2*Math.PI+2*Math.PI/divMin[d]-Math.PI/2;
  }
  else if(needMin[d]==divMin[d]-1){
  var dialAng = 2*Math.PI-2*Math.PI/divMin[d]-Math.PI/2;
  }
  else{
    var hourDiv = divMin[d];//divMaj[e]
    var hourNew = needMin[d]-hourDiv/4;//needHour[e]-hourDiv/4;
    if(hourNew<0){hourNew = hourDiv+hourNew;}
    var dialAng = hourNew*2*Math.PI/hourDiv;
  }
  var needOffX = needRad[d]*Math.cos(dialAng);
  var needOffY = needRad[d]*Math.sin(dialAng);
  needX[d] = dialX[d]+needOffX;
  needY[d] = dialY[d]+needOffY;
  meridFlag = false;
  }
}

function newHour(e){
  var hourDiv = divMin[e];//divMaj[e]
  var hourNew = needMin[e]-hourDiv/4;//needHour[e]-hourDiv/4;
  if(hourNew<0){hourNew = hourDiv+hourNew;}
  var angNew = hourNew*2*Math.PI/hourDiv;
  var needOffX = needRad[e]*Math.cos(angNew);
  var needOffY = needRad[e]*Math.sin(angNew);
  needX[e] = dialX[e]+needOffX;
  needY[e] = dialY[e]+needOffY;
  dialColNo[e] = dialColNo[e]+1;
  if(dialColNo[e]>=allColLen){dialColNo[e]=0;}
  dialCol[e] = allCol[dialColNo[e]];
  var smNo = Number(divMin[e]);
  if(isZero[e]==0){
    if(needMin[e]>=smNo){needMin[e]=0;
    needMeridFlagUp[e-1]=true;//tell next dial along that merid has been passed
}
    }
  else if(needMin[e]>smNo){needMin[e]=1;
  needMeridFlagUp[e-1]=true;
  if(e==0){yearNow++;}
}
}

function lastHour(e){
  var hourDiv = divMin[e];//divMaj[e];
  var hourNew = needMin[e]-hourDiv/4;//needHour[e]-hourDiv/4;
  if(hourNew<0){hourNew = hourDiv+hourNew;}
  var angNew = hourNew*2*Math.PI/hourDiv;
  var needOffX = needRad[e]*Math.cos(angNew);
  var needOffY = needRad[e]*Math.sin(angNew);
  needX[e] = dialX[e]+needOffX;
  needY[e] = dialY[e]+needOffY;
  dialColNo[e] = dialColNo[e]-1;
  if(dialColNo[e]<=-1){dialColNo[e]=allColLen-1;}
  dialCol[e] = allCol[dialColNo[e]];
  var smNo = divMin[e];
  if(isZero[e]==0){
    if(needMin[e]==-1){needMin[e]=Number(smNo-1);
    needMeridFlagDown[e-1]=true;
  }
    }
  else if(needMin[e]==0){needMin[e]=smNo;
  needMeridFlagDown[e-1]=true;
  if(e==0){yearNow--;}
  }
}

function plotNewMoveQ(){

  divMin[1]=daysPerMon[needMin[0]];
    dialMaxs[1]=daysPerMon[needMin[0]];
    var leapYear = yearNow%4;
    if(needMin[0]==2&&leapYear==0){
      divMin[1]=29;
        dialMaxs[1]=29;
        leapYear = true;
    }
      var c = document.getElementById("myCanvas2");
      var ctx = c.getContext("2d");

      ctx.clearRect(0, 0, canvW2, canvH2);

      // Green rectangle
      ctx.beginPath();
      ctx.lineWidth = "4";
      ctx.strokeStyle = "green";
      ctx.rect(30, 20, canvW2-60, canvH2-40);
      ctx.stroke();

          //centre dial 1
              ctx.beginPath();
              ctx.setLineDash([5, 15]);
              ctx.fillStyle = "black";
              ctx.lineWidth = "1";
              ctx.arc(dialX, dialY, 3, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
              ctx.stroke();
              ctx.fill();

              ctx.setLineDash([]);
      for(d=noOfDials-1; d>-1;d--){//draw from right to left
          //centre dial d
        needleAngle(d);
              ctx.beginPath();
              ctx.fillStyle = dialCol[d];
              ctx.arc(dialX[d], dialY[d], needRad[d]+5, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
              ctx.fill();

              ctx.beginPath();
              ctx.setLineDash([5, 15]);
              ctx.fillStyle = "black";
              ctx.lineWidth = "1";
              ctx.arc(dialX[d], dialY[d], 3, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
              ctx.stroke();
              ctx.fill();

              ctx.setLineDash([]);
        //needle 1
        ctx.beginPath();
        ctx.setLineDash([]);
        ctx.strokeStyle = "black";
      ctx.moveTo(dialX[d], dialY[d]);
      ctx.lineTo(needX[d], needY[d]);
      ctx.stroke();
      var maxMulti = dialMaxs[d]/divMaj[d];
      var bigNo = divMaj[d];
      var bigNo2 = bigNo/2;
      var bigNo3 = Math.PI/2 - 2*Math.PI/bigNo;
      var smNo = divMin[d];
      for(n=0;n<bigNo;n++){
      var delAng = Math.PI/bigNo2;
      var textX = needRad[d]*Math.cos(delAng*n-bigNo3);// /bigNo3 /2.4/6/3  24/6/12
      textX = dialX[d]+textX;
      var textY = needRad[d]*Math.sin(delAng*n-bigNo3);
      textY = dialY[d]+textY;
      var textText = Math.round(n*maxMulti+maxMulti);
      if(isZero[d]==0){
      if(textText==smNo){textText=0;}
      }
    if(d==0&&isText[0]){textText=numbLetters[n];}
      ctx.textAlign = "left";
      ctx.font = "9px serif";
      ctx.fillText(""+textText, textX-5, textY+3);
      }
      ctx.textAlign = "center";
      ctx.font = "12px serif";
      ctx.fillText(""+dialName[d]+": "+needMin[d], dialX[d]-15, dialY[d]+needRad[d]+25);
      }
      var needMinT = new Array();
      for(d=1;d<noOfDials;d++){
        if(needMin[d]<10){needMinT[d]="0"+needMin[d];}
        else{needMinT[d]=""+needMin[d];}
      }
      if(isText[0]){
      needMinT[0]=numbLetters[Number(needMin[0]-1)];
      if(needMin[0]==0){needMinT[0]=numbLetters[Number(divMin[0]-1)];}}
      document.getElementById("dummy1").innerHTML="day: "+yearNow+" "+needMinT[0]+" "+needMinT[1]+"<br>&nbsp;&nbsp;&nbsp;&nbsp;time: "+needMinT[2]+":"+needMinT[3];

      //date textTextctx.beginPath();
      var dateTimeText = ""+needMinT[2]+":"+needMinT[3]+" "+needMinT[1]+" "+needMinT[0]+" "+yearNow;
      ctx.fillStyle = "black";
      ctx.font = "12px serif";
      ctx.textAlign = "center";
      ctx.fillText(""+dateTimeText, canvH/3, canvH2-40,);

      //year text
        ctx.beginPath();
        ctx.fillStyle = "lime";
        ctx.fillRect(140, 40, 20, 20);
          ctx.beginPath();
          ctx.fillStyle = "yellow";
          ctx.fillRect(170, 40, 60, 20);
            ctx.beginPath();
            ctx.fillStyle = "lime";
            ctx.fillRect(240, 40, 20, 20);

                ctx.beginPath();
                ctx.fillStyle = "black";
                ctx.strokeStyle = "black";
                ctx.font = "24px serif";
                ctx.textAlign = "left";
                ctx.fillText(""+yearNow, 170, 60, 60);
                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.font = "24px serif";
                ctx.textAlign = "center";
                ctx.strokeText("<", 150, 60, 50);
                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.font = "24px serif";
                ctx.textAlign = "center";
                ctx.strokeText(">", 250, 60, 50);

      ctx.beginPath();
      ctx.lineWidth = "1";
      ctx.arc(Qx, Qy, 2, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
      ctx.stroke();
      ctx.fillStyle = "green";
      ctx.fill();

      ctx.closePath;

      changeD();
      changeT();
}
