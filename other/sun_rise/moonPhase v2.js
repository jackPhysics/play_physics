
var canvW=890;//840+50  770;//720+50
var multiplier = (canvW-50)/24;
var canvH=420;//330+60
//var objScale = 0.2;
var edge = 30;
var xmin = 25;
var xmax = canvW-xmin;
var ymin = 30;
var ymax = canvH-ymin/2;
var midValX = (xmin+xmax)/2;
var midValY = (ymin+ymax)/2;
var minX = 25;
var minY = 30;
var maxX = canvW-25;
var maxY = canvH-30;
var timeNow = 12;
var dateNow = 150;
var latNow = 52;
var sunHigh = canvH/2;
var sunHigh2 = canvH/2;
var effectivelatitude = 52;
var sunPosition = 23.4;
var ns_flip = false;
var dateYear = 2023;
var leapYear = false;
var yearDown = 1;//1- can change both ways 2-won't go down again unless go past middle 3 - won't go up again
var yearUp = 1;
var moonDay = 3.05;//as on june21 2023
var percMoon = 0;
var indexMoon = 0;
var distOffMoon = 0;
// Arc
//ctx.arc(canvW/2, canvH/2, 100, 0, 2 * Math.PI)
//ctx.arc(x1, y1, r1, 0, 2 * Math.PI)
var x1 = canvW/2;
var y1 = canvH/2;
var r1 = 100;
var th1 = Math.PI/2;
var th2 = 3*Math.PI/2;
var a1 = 0;
var b1 = 0;
var sign = 1;
var d1 = sign*r1*15/8;
var r2 = Math.pow(r1, 2)+Math.pow(d1, 2);
  r2 = Math.pow(r2, 0.5);
var moonCol = "silver";
var moonNot = "black";
if(sign<0){moonNot = "silver"}
//alert(""+r2);
var i1 = 0;
var j1 = 0;
var p1 = 0;
var q1 = 0;
var i2 = 0;
var j2 = 0;
var p2 = 0;
var q2 = 0;
var alp1 = 0;
var bet1 = 0;
var th3 = 0;
var th4 = 0;
var arcCW = false;

window.onload = function(){
    var events = new Events("myCanvas");
    var canvas = events.getCanvas();
    var context = events.getContext();
    var isMouseDown = false;
    var canvasImg = getCanvasImg(canvas);
    var points = [];

            plotNewFrame();

    document.getElementById("myRangeT").value=144;
    document.getElementById("myRangeD").value=172;
    document.getElementById("myRangeL").value=52;

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

        moveF=true;
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
        }
    });
    //shakeDriver();
};

function plotNewFrame(){

  sunPosition = sunPos(dateNow);
  moonPosition = moonPos(dateNow);
  effectivelatitude = effectLat(latNow,timeNow, sunPosition);
  sunHigh = sunHeight(effectivelatitude, sunPosition);
  var moonOffset = 24*moonDay/29.53058770576;//24.83 = 24h 50m 24.83*moonDay/29.53;
  if(moonOffset>=12){moonOffset=moonOffset-24;}
  var timeNowMoon = timeNow-moonOffset;
  if(timeNowMoon<0){timeNowMoon=timeNowMoon+24;}
  else if(timeNowMoon>24){timeNowMoon=timeNowMoon-24;}
  effectivelatitudeM = effectLatM(latNow,timeNowMoon, sunPosition);
  moonHigh = moonHeight(effectivelatitudeM, sunPosition);
  if(latNow<sunPosition){ns_flip=true;}
  else{ns_flip=false;}var sunHighMod = sunHigh;
  var timeNowMod = timeNow;
  var moonHighMod = moonHigh;
  sunHigh2 = minY+290-sunHighMod*3;
  sunWE = minX+multiplier*timeNowMod;
  moonHigh2 = minY+290-moonHighMod*3;
  moonWE = minX+multiplier*(timeNowMoon);

    /*sunPosition = sunPos(dateNow);
    effectivelatitude = effectLat(latNow,timeNow, sunPosition);
    sunHigh = sunHeight(effectivelatitude, sunPosition);
    var sunHighMod = sunHigh;
    var timeNowMod = timeNow;*/

    sunHigh2 = minY+290-sunHighMod*3;
    sunWE = minX+multiplier*timeNowMod;
    document.getElementById("text2").innerHTML=""+moonDay;

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.canvas.width = canvW;
    ctx.canvas.height = canvH;
    var whatSky = skyColor(sunHigh);
    // blue rectangle
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.lineWidth = "1";
    //ctx.fillStyle = "black";
    ctx.fillStyle = whatSky;
    ctx.fillRect(xmin, ymin, maxX-25, ymax-70);
    //MOON DAY
    ctx.beginPath();
    //ctx.lineWidth = "4";
    //var whatCol = "black";//sunColor(sunHigh);
    ctx.fillStyle = "yellow";//"yellow";"#FF0000";//
    //ctx.ellipse(moonWE, moonHigh2, objRadaB-2, objRadbB-2, 0, 0, 2 * Math.PI);
    ctx.font = "24px Arial";
    var moonText = moonDayText(moonDay);
    ctx.fillText("moon day "+moonText, 2*canvW/3, canvH/6);
    document.getElementById("text2").innerHTML=""+moonDay;
    var illum = illumination(moonDay);
    var fullFlag = false;
    if(illum==100){fullFlag=true;}
    else{fullFlag=false;}
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.font = "24px Arial";
    ctx.fillText("illumination: "+illum+"%", canvW/6, canvH/6);
    var namePhase = nameOfPhase(moonDay);
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.font = "24px Arial";
    ctx.fillText(""+namePhase, 2*canvW/3, 5*canvH/6);
    if(moonHigh>-1){
    ctx.beginPath();
    ctx.fillStyle = "silver";
    ctx.font = "24px Arial";
    ctx.fillText("moon above horizon", canvW/6, 5*canvH/6);}
    else{
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.font = "24px Arial";
    ctx.fillText("moon below horizon", canvW/6, 5*canvH/6);}


      percMoon = illum/100;
      indexMoon = 1/(1-2*percMoon);
      distOffMoon = r1/2*(indexMoon-1/indexMoon);
      if(indexMoon<0){
        sign = -1;
        distOffMoon = -1*distOffMoon;
      }
      else{
        sign = 1;
      }
      var sign2 = 1;
      if(moonDay<=15.765294){
        sign2=-1;
        arcCW=true;
      }
      else{
        sign2=1;
        arcCW=false;
      }
      //if(arcCW){sign=-1*sign;}
      d1 = sign2*sign*distOffMoon;
      //d1 = sign*r1*15/8;
      r2 = Math.pow(r1, 2)+Math.pow(d1, 2);
      r2 = Math.pow(r2, 0.5);
      a1 = x1+d1;
      b1 = y1;
      i1 = a1;
      j1 = y1 + r2;
      p1 = x1;
      q1 = y1+r1;
      alp1 = Math.atan(r1/d1);//Math.atan(2);//Math.atan(r1/r2);
      bet1 = Math.PI/2 - alp1;
      th3 = th1 + bet1*sign*sign2;
      th4 = th3 + 2*alp1*sign*sign2;
      //MOON
      ctx.beginPath();
      ctx.lineWidth = "4";
      var whatCol = "silver";//sunColor(sunHigh);
      ctx.fillStyle = whatCol;//"yellow";"#FF0000";//
      if(fullFlag){
      ctx.arc(x1, y1, r1, 0, 2*Math.PI, arcCW) //ctx.arc(objPosB, canvH/2, objRadB, 0, 2 * Math.PI);
      ctx.fill();
      }
      else{
      ctx.arc(x1, y1, r1, th1, th2, arcCW) //ctx.arc(objPosB, canvH/2, objRadB, 0, 2 * Math.PI);
      ctx.fill();
      //alert("alpha="+alp1+" beta="+bet1+" th1="+th1+" th2="+th2);
      ctx.beginPath();
      moonNot = whatSky;
      if(sign<0){moonNot = moonCol}
      //else{moonNot = whatSky;}
      /*if(sign2>0){
        if(moonNot==moonCol){
          moonNot=whatSky;
        }
        else{moonNot=moonCol}
      }
      else{
        if(moonNot==whatSky){
        moonNot=moonCol;
      }
      else{moonNot=whatSky}
    }*/
      ctx.fillStyle = moonNot;
      ctx.lineWidth = 1;
      ctx.arc(a1, b1, r2, th3, th4);}
      //ctx.stroke();
      ctx.fill();
      // Centre points
      /*ctx.beginPath();
      ctx.fillStyle = "red";
      ctx.arc(x1, y1, 2, 0, 2 * Math.PI); // Control point one
      ctx.arc(a1, b1, 2, 0, 2 * Math.PI); // Control point two
      ctx.fill();*/
}

function illumination(d){
  //=50-50*COS(2*PI()*A11/29.53)
  var day = d;
  var illum = 50-50*Math.cos(2*Math.PI*day/29.53058770576);
  var illum = Math.round(illum);

  return illum;
}


function getCanvasImg(canvas){
    var img = new Image();
    img.src = canvas.toDataURL();
    return img;
}


    function changeT(){
    var dateText = "January 1, "+dateYear+" 00:00:00 GMT+00:00";//'January 1, 2023 00:00:00 GMT+00:00'
    var moonZero = new Date('January 21, 2023 20:53:00 GMT+00:00');
    //var moonZero = new Date('January 6, 2000 18:13:00 GMT+00:00');
    moonZero = moonZero.getTime();
    var moonT_ms = 1000*60*60*24*29.53058770576;//moon's period in ms
    //var moonNow_ms = 1000*60*60*24.83*9.76;
    //var moonOff_ms = 1000*60*60*24*7.09;
    var dozHour_ms = 12*60*60*1000;//12 hours in msec
    var date0 = new Date(dateText);
    date0 = date0.getTime();
    var msInDay = 1000*60*60*24;
      timeNow = parseInt(document.getElementById("myRangeT").value);//valueAsNumber(slider2.value);
      timeNow = timeNow/12;
      dateNow = parseInt(document.getElementById("myRangeD").value)-5;
      if(dateNow<1){dateNow=1;}
      if(leapYear){
        if(dateNow>366){dateNow=366;}
      }
      else{
        if(dateNow>365){dateNow=365;}
      }
      var timeNow_ms = timeNow*60*60*1000;
      var nowByCalc = (dateNow-1)*msInDay+date0+timeNow_ms;//-dozHour_ms;//date now in ms
      //alert("dateNow="+dateNow+"\nmsInDay="+msInDay+"\ndate0="+date0+"\ntimeNow_ms="+timeNow_ms+"\ndozHour_ms="+dozHour_ms)
      var moonCalc = nowByCalc-moonZero;//+moonNow_ms;
      //if(moonCalc<0){moonCalc = moonZero-nowByCalc}
      var moonDay_ms = moonCalc%moonT_ms;
      //var moonDummy = Math.floor(nowByCalc/moonT_ms);
      //var moonDay_ms =  moonCalc - moonDummy*moonT_ms-moonOff_ms;
      if(moonDay_ms<0){moonDay_ms=moonDay_ms+moonT_ms}
      //alert("timeNow_ms="+timeNow_ms+"\nnowByCalc="+nowByCalc+"\nmoonDummy="+moonDummy+"\nmoonDay_ms="+moonDay_ms)
      moonDay = moonDay_ms/24/60/60/1000;
      //alert("moon day1 ="+moonDay);
      moonDay = Math.round(moonDay*100)/100;
      //alert("moon day2 ="+moonDay);
      document.getElementById("slideT").innerHTML="time = "+printNumberT(timeNow)+"";
      plotNewFrame();
      //goFlag=false;
      //plotDriver();
    }


        function changeD(){
        var dateText = "January 1, "+dateYear+" 00:00:00 GMT+00:00";//'January 1, 2023 00:00:00 GMT+00:00'
        //on Jan 1 2023 moon day is 9.76
        //Jan 1 2023 seems to be giving 15.85
        //so need offset of 6.09 (=15.85-9.76)
        //now giving 10.76 so need an extra offset of 1 so 7.09
        //moon day zero occurred on 6/1/2000 at 12.24pm
        //javascript date starts from 1/1/1970 at 00:00
        //between the 2 days is 947116800 seconds or 10962 days
        //00:00 to 12:24 is 44640 seconds
        var moonZero = new Date('January 21, 2023 20:53:00 GMT+00:00');
        //var moonZero = new Date('January 6, 2000 18:13:00 GMT+00:00');
        moonZero = moonZero.getTime();//date/time in ms since 1st Jan 1970
        //alert(""+moonZero);
        var moonT_ms = 1000*60*60*24*29.53058770576;//moon's period in ms
        //var moonNow_ms = 1000*60*60*24.83*9.76;
        //var moonOff_ms = 1000*60*60*24*7.09;//6.09
        var dozHour_ms = 12*60*60*1000;//12 hours in msec
        var date0 = new Date(dateText);
        date0 = date0.getTime();//date/time in ms since 1st Jan 1970
        //alert(""+date0);
        var msInDay = 1000*60*60*24;
        dateNow = parseInt(document.getElementById("myRangeD").value)-5;
        if(dateNow>170&&dateNow<176){yearDown=1;yearUp=1;}
        if(dateNow==-4&&yearDown!=2){
          yearDown=2;
          dateYear--;
          if(dateYear%4==0){leapYear=true;}
          else{leapYear=false;}
          dateNow=367;
          document.getElementById("myRangeD").value=371;
        }
        if(dateNow==370&&yearUp!=2){
          yearUp=2;
          dateYear++;
          if(dateYear%4==0){leapYear=true;}
          else{leapYear=false;}
          dateNow=-1;
          document.getElementById("myRangeD").value=1;
        }
        if(dateNow<1){dateNow=1;}
        if(leapYear){
          if(dateNow>366){dateNow=366;}
        }
        else{
          if(dateNow>365){dateNow=365;}
        }
        var timeNow_ms = timeNow*60*60*1000;
        var nowByCalc = (dateNow-1)*msInDay+date0+timeNow_ms;//-dozHour_ms;//date now in ms
        var moonCalc = nowByCalc-moonZero;//+moonNow_ms;
        //var moonDummy = Math.floor(nowByCalc/moonT_ms);
        //var moonDay_ms =  moonCalc - moonDummy*moonT_ms-moonOff_ms;
        //if(moonCalc<0){moonCalc = moonZero-nowByCalc}
        var moonDay_ms = moonCalc%moonT_ms;
        if(moonDay_ms<0){moonDay_ms=moonDay_ms+moonT_ms}
        moonDay = moonDay_ms/24/60/60/1000;//moonDay_ms/24/60/60/1000;
        moonDay = Math.round(moonDay*100)/100;
        //alert("dateNow="+dateNow+"\ndate0="+date0+"\nmoonZero="+moonZero
        //+"\ntimeNow_ms="+timeNow_ms+"\nmoonCalc="+moonCalc+"\nmoonDay_ms="+moonDay_ms
        //+"\nnowByCalc="+nowByCalc)
        //alert("moon day ="+moonDay);
        var nowByCalc2 = new Date(nowByCalc);
        var nowIs = nowByCalc2.toDateString()
          document.getElementById("slideD").innerHTML=""+nowIs+"";
          plotNewFrame();
          //goFlag=false;
          //
        }
            function changeD_old(){
          dateNow = parseInt(document.getElementById("myRangeD").value);//valueAsNumber(slider2.value);
          //timeNow = timeNow/4;
          document.getElementById("slideD").innerHTML="date = "+dateNow+"";
          plotNewFrame();
          //goFlag=false;
          //plotDriver();
        }

        function changeL(){
          latNow = parseInt(document.getElementById("myRangeL").value);//valueAsNumber(slider2.value);
          //latNow = latNow-90;
          document.getElementById("slideL").innerHTML="latitude = "+latNow+"<sup>o</sup>";
          plotNewFrame();
          //goFlag=false;
          //plotDriver();
        }


        function skyColor(h){//h=sun sunHeight
          var yelNum = h;
          var yelNum = Math.floor(yelNum);
          if(h>73){
          yelNum = (h-74)/2;
          yelNum = Math.floor(yelNum);
          if(yelNum<0){yelNum=0}
          if(yelNum>8){yelNum=8}
          var yelText = yelNum.toString(16);
          var skyCol = "#"+yelText+yelText+"FFFF";}
          else if(h>43){
          yelNum = (h-44)/2;
          yelNum = Math.floor(yelNum);
          if(yelNum<0){yelNum=0}
          if(yelNum>15){yelNum=15}
          var yelText = yelNum.toString(16);
          var skyCol = "#00"+yelText+yelText+"FF";}
          else if(h>4){
          yelNum = (h-4);
          var yelNum2 = yelNum/2;
          yelNum = Math.floor(yelNum);
          yelNum2 = Math.floor(yelNum2);
          if(yelNum<0){yelNum=0}
          if(yelNum>15){yelNum=15}
          if(yelNum2<8){yelNum2=8}
          if(yelNum2>15){yelNum2=15}
          var yelNumX = 15-yelNum;
          var yelNumX2 = 15-yelNum2;
          var yelText = yelNum.toString(16);
          var yelText2 = yelNum2.toString(16);
          var yelTextX = yelNumX.toString(16);
          var yelTextX2 = yelNumX2.toString(16);
          var skyCol = "#"+yelTextX+yelTextX+yelTextX2+yelTextX2+yelText2+yelText2;}
          else if(h>-4){
          yelNum = (h+4);
          var yelNum2 = 2*yelNum;
          yelNum = Math.floor(yelNum);
          yelNum2 = Math.floor(yelNum2);
          if(yelNum<0){yelNum=0}
          if(yelNum>15){yelNum=15}
          var yelText = yelNum.toString(16);
          if(yelNum2<0){yelNum2=0}
          if(yelNum2>15){yelNum2=15}
          var yelText2 = yelNum2.toString(16);
          var skyCol = "#"+yelText2+yelText2+yelText+yelText+"88";}
          else if(h>-12){
          yelNum = (h+12);
          yelNum = Math.floor(yelNum);
          if(yelNum<0){yelNum=0}
          if(yelNum>15){yelNum=15}
          var yelText = yelNum.toString(16);
          var skyCol = "#0000"+yelText+yelText;}
          else{
          var skyCol = "#000000";
          }
          //document.getElementById("text2").innerHTML="skyt = "+skyCol+"<br>"+yelNum+"<br>"+h;
          return skyCol;
        }


function printNumber(n){
  var answerNumb = n;
  if(n!=0){
  var ansLog = Math.floor(Math.log10(Math.abs(answerNumb)));}
  else{
    ansLog=0;
  }
  if(ansLog<2&&ansLog>-2){
  answerNumb = answerNumb.toFixed(2);///100;
  var answerText = ""+answerNumb;
  }
  else{
  var ansPow = Math.pow(10,ansLog);
  answerNumb = answerNumb/ansPow;
  answerNumb = Math.round(answerNumb *100)/100;
  answerNumb = answerNumb.toFixed(2);///100;
  var answerText = answerNumb+" x 10<sup>"+ansLog+"</sup> ";
  if(ansLog<-3){answerText=0;}
  }
  return answerText;
}

function printNumberT(n){
  var answerNumb = n;
  var hours = Math.floor(answerNumb);
  var mins = answerNumb - hours;
  //alert(""+answerNumb);
  mins = Math.round(60*mins);
  if(mins<10){
  var minsText = "0"+mins;}
  else{
  var minsText = ""+mins;}
  var answerText = hours+":"+minsText;
  return answerText;
}

function printNumber2(n){
  var answerNumb = n;
  if(n!=0){
  var ansLog = Math.floor(Math.log10(Math.abs(answerNumb)));}
  else{
    ansLog=0;
  }
  if(ansLog<4&&ansLog>-1){
  answerNumb = answerNumb.toFixed(2);///100;
  var answerText = ""+answerNumb;
  }
  else{
  var ansPow = Math.pow(10,ansLog);
  answerNumb = answerNumb/ansPow;
  answerNumb = Math.round(answerNumb *100)/100;
  answerNumb = answerNumb.toFixed(2);///100;
  var answerText = answerNumb+" x 10<sup>"+ansLog+"</sup> ";
  if(ansLog<-3){answerText=0;}
  }
  return answerText;
}


function sunPos(d){
  var dt = d;

  var sunP = 23.4*(Math.cos((dt-172)/365.25*2*Math.PI));

  return sunP;
}

function effectLat(l,t, s){
  var lat = l;//latNow
  var tm = t;
  var sp = s;

  if(lat<sp){
    lat = sp+(sp-lat);
  }

  var efLat = (90-lat)*(-Math.cos((tm-12)/24*2*Math.PI))+90;

  return efLat;
}

function sunHeight(l, s){
  var lat = l;//effectivelatitude
  var sp = s;

  var sunH = 90-(lat-sp);

  return sunH;
}


function moonPos(d){
  var dt = d;

  var moonP = 23.4*(Math.cos((dt-172)/365.25*2*Math.PI));//23.4*(Math.cos((dt-0)/27.3217*2*Math.PI));

  return moonP;
}


function effectLatM(l,t, s){
  var lat = l;//latNow
  var tm = t;
  var sp = s;

  if(lat<sp){
    lat = sp+(sp-lat);
  }

  var efLat = (90-lat)*(-Math.cos((tm-12)/24*2*Math.PI))+90;

  return efLat;
}


function moonHeight(l, s){
  var lat = l;//effectivelatitude
  var sp = s;

  var moonH = 90-(lat-sp);

  return moonH;
}

function nameOfPhase(d){
  var day = d;
  var phaseName = "";
  if(day<=1){
    phaseName = "New Moon";
  }
  else if(day<=6.382647){
    phaseName = "Waxing Crescent";
  }
  else if(day<=8.382647){
    phaseName = "Waxing Crescent";
  }
  else if(day<=13.765294){
    phaseName = "Waxing Gibbous";
  }
  else if(day<=15.765294){
    phaseName = "Full Moon";
  }
  else if(day<=21.147941){
    phaseName = "Waning Gibbous";
  }
  else if(day<=23.147941){
    phaseName = "Last Quarter";
  }
  else if(day<=28.530588){
    phaseName = "Waning Crescent";
  }
  else{
    phaseName = "New Moon";
  }
  return phaseName;
}

function moonDayText(d){
  var day = ""+d;
  var sf = day.length;
  //alert(""+sf);
  if(day<10){
      if(sf==1){
        day = day+".00";
      }
      else if(sf==3){
        day = day+"0";
      }
      else{}
  }
  else{
      if(sf==2){
        day = day+".00";
      }
      else if(sf==4){
        day = day+"0";
      }
      else{}
  }
  return day;
}
