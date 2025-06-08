
//var canvW = 1000;
//var canvH = 1000;
var unitSize = 200;
var unitScale = 1;
var edgeSize = 16;
unitSize=unitSize*unitScale;
edgeSize=edgeSize*unitScale;
var textColor = "#ffffff";
var textColor2 = "#000000";
var noOfX = canvW/unitSize;
var noOfY = canvH/unitSize;
var totalBoxs = noOfX*noOfY;
var unitColor = "#bbbb00";
var unitColorA = [unitColor, textColor, textColor2];
var unitColorBig = "";
var textColorBig = "";
var textColor2Big = "";
var unitColorSm = "";
var textColorSm = "";
var textColor2Sm = "";
var boxColor = "";
var changeColor = "#333333";//redefined below in function
var unitColor1 = "#77eeee";
var unitColor2 = "#55cccc";
var unitColor3 = "#118888";
var unitColor4 = "#006666";
var textFactor = "INF";
var cbtFactors = "4-4-4";
//var numbOfUnits = 10;
var countOutUnits = 0;
var startMF = 9;
var aFactor = "";
var rFactor = " ";//"" no space to show slash on double number, " " space if want to range number
var a3Factor1 = "4*";
var a3Factor2 = "2+";
var r3Factor1 = "";
var r3Factor2 = "";
var unitImg = "weaponIcons/sword2.png";
var unitClass = "irreg";//or "irreg"
var classFactor = "";//regular:ABCDE irregular:abgde
var armourFactor = "F";//::=fully armoured; or:=medium armour; .=no armour )= shield
var nameFactor = "|||";
var isCav = 2;//1 is inf, 2 is cav
var slashFlag = false;
var slashFlagR = false;
var colorPrtFlag = true;
var colorPrtFlag2 = false;
var colorPrtFlag3 = false;
var shadeCol = 0;
var loopNoXtra = 0;
var boxTop = 40;//40 60
var boxHt = 80;//80 60
var seeThruAlpha = 1;
var blackTextFlag = false;

function printUnit(n, b, t, id, c0){//n=number of image b=battalion number, t=Total, id=number of unit,
  var whatType = id;//number to tell which type
  var batTot = t;//total number of that type
  var batNumb = b;//number within that type
  var noOfImgPrnt = n;//noOfImg - number of unit out of all units
  classFactor = c0;
  var colorThis = colorIndividual[noOfImgPrnt][0];//coloring[0];
  var textColorThis = colorIndividual[noOfImgPrnt][1];//coloring[1];
  var boxColor=colorIndividual[noOfImgPrnt][2];//coloring[2];
  var colorThisBT = colorIndividual[noOfImgPrnt][3];//coloring[3];

  if(redColor&&noOfImgPrnt<gerNumber){
   colorThis = "#ff0000";
   textColorThis = "#ffffff";
   boxColor="#ff0000";
   colorThisBT = "#ffffff";
  }
  else if(blackColor&&noOfImgPrnt<neutNumber&&noOfImgPrnt>=gerNumber){
   colorThis = "#000000";
   textColorThis = "#ffffff";
   boxColor="#000000";
   colorThisBT = "#ffffff";
  }

  //somewhere else 'changeColor' is changed to #111111 but I can't find where
  changeColor = "#333333";//"#222222";
	unitColor2 = "#"+shiftColor(colorThis, changeColor, 'add');
	unitColor1 = "#"+shiftColor(unitColor2, changeColor, 'add');
	unitColor3 = "#"+shiftColor(colorThis, changeColor, 'sub');
	unitColor4 = "#"+shiftColor(unitColor3, changeColor, 'sub');
  //if(n==1){alert(""+changeColor+": "+unitColor1+" "+unitColor2+" "+unitColor3+" "+unitColor4)}
  //boxColor = "#"+flipColor(colorThis);

  //countOutUnits=n;


  var canvas = document.getElementById("piece#"+noOfImgPrnt);
  var ctx = canvas.getContext("2d");
  var circleEdge = 20;
    ctx.canvas.width = unitSize+circleEdge*2;
    ctx.canvas.height = unitSize+circleEdge*2;
  ctx.fillStyle = colorThis;
  ctx.globalAlpha=seeThruAlpha;
  //console.log(seeThruAlpha);
  //ctx.globalAlpha = 0;
  //ctx.fillRect(0, 0, unitSize, unitSize);
  //ctx.closePath();


  // Create a radial gradient
  // The inner circle is at x=110, y=90, with radius=30
  // The outer circle is at x=100, y=100, with radius=70
  const gradient = ctx.createRadialGradient(unitSize/2+circleEdge, unitSize/2+circleEdge, unitSize/2+circleEdge,
     3*unitSize/4+circleEdge, 3*unitSize/4+circleEdge, unitSize/4+circleEdge);

  // Add three color stops
  //gradient.addColorStop(0, "White");
  //gradient.addColorStop(0.2, colorThis);
  //gradient.addColorStop(1, "Black");
  gradient.addColorStop(0, unitColor1);
  gradient.addColorStop(0.2, unitColor2);
  gradient.addColorStop(0.8, unitColor3);
  gradient.addColorStop(1, unitColor4);

  // Set the fill style and draw a rectangle
  ctx.fillStyle = gradient;
  ctx.beginPath();
    ctx.arc(unitSize/2+circleEdge, unitSize/2+circleEdge, unitSize/2+circleEdge, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();

  //ctx.globalAlpha = 1;
  ctx.beginPath();
ctx.fillStyle = colorThis;
  ctx.arc(unitSize/2+circleEdge, unitSize/2+circleEdge, unitSize/2, 0, Math.PI*2);
  ctx.fill();
  ctx.closePath();

  var i2=0;
  var j2=0;

  i2 = edgeSize/unitSize*1.4;
  j2 = edgeSize/unitSize*1.4;

/*
	//**top edge
	  ctx.lineWidth = "1";
	  ctx.fillStyle = unitColor1;
	  ctx.beginPath();
		ctx.moveTo(i2*unitSize, j2*unitSize);
		ctx.lineTo(i2*unitSize+edgeSize, j2*unitSize+edgeSize);
		ctx.lineTo(i2*unitSize+unitSize-edgeSize,  j2*unitSize+edgeSize);
		ctx.lineTo(i2*unitSize+unitSize,  j2*unitSize);
		ctx.lineTo(i2*unitSize, j2*unitSize);
		ctx.closePath();
		//ctx.stroke();
		ctx.fill();

		//**left edge
		  ctx.lineWidth = "1";
		  ctx.fillStyle = unitColor2;
		  ctx.beginPath();
			ctx.moveTo(i2*unitSize, j2*unitSize);
			ctx.lineTo(i2*unitSize+edgeSize, j2*unitSize+edgeSize);
			ctx.lineTo(i2*unitSize+edgeSize,  j2*unitSize+unitSize-edgeSize);
			ctx.lineTo(i2*unitSize,  j2*unitSize+unitSize);
			ctx.lineTo(i2*unitSize, j2*unitSize);
			ctx.closePath();
			//ctx.stroke();
			ctx.fill();

			//**bottom edge
			  ctx.lineWidth = "1";
			  ctx.fillStyle = unitColor4;
			  ctx.beginPath();
				ctx.moveTo(i2*unitSize, j2*unitSize+unitSize);
				ctx.lineTo(i2*unitSize+edgeSize, j2*unitSize+unitSize-edgeSize);
				ctx.lineTo(i2*unitSize+unitSize-edgeSize,  j2*unitSize+unitSize-edgeSize);
				ctx.lineTo(i2*unitSize+unitSize,  j2*unitSize+unitSize);
				ctx.lineTo(i2*unitSize, j2*unitSize+unitSize);
				ctx.closePath();
				//ctx.stroke();
				ctx.fill();

				//**right edge
				  ctx.lineWidth = "1";
				  ctx.fillStyle = unitColor3;
				  ctx.beginPath();
					ctx.moveTo(i2*unitSize+unitSize, j2*unitSize+unitSize);
					ctx.lineTo(i2*unitSize+unitSize-edgeSize, j2*unitSize+unitSize-edgeSize);
					ctx.lineTo(i2*unitSize+unitSize-edgeSize,  j2*unitSize+edgeSize);
					ctx.lineTo(i2*unitSize+unitSize,  j2*unitSize);
					ctx.lineTo(i2*unitSize+unitSize, j2*unitSize+unitSize);
					ctx.closePath();
					//ctx.stroke();
					ctx.fill();
*/
if(unitsA[whatType*noOfItems+4]!="x"){//not neutral


var classType = classFactor;//unit number - out of all
		//**unit number
    //TOP LEFT
    countOutUnits=0;
    let dumFont=24*unitScale;
    ctx.font = "italic "+dumFont+"px Arial";
	  //ctx.font = "30px Arial";
	  ctx.fillStyle = textColorThis;
	  ctx.textAlign = "left";
	  ctx.textBaseline = "top";
  	ctx.lineWidth = "2";
	  ctx.fillText(""+"",i2*unitSize+edgeSize*1.5*unitScale,j2*unitSize+edgeSize*1.5*unitScale);//25   35

    //TOP RIGHT
    countOutUnits=0;
    dumFont=48*unitScale;
    ctx.font = ""+dumFont+"px Arial";
    //ctx.font = "30px Arial";
    ctx.fillStyle = textColorThis;
    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    ctx.lineWidth = "2";
    ctx.fillText(""+"",i2*unitSize+(unitSize-edgeSize*1.5)*unitScale,j2*unitSize+edgeSize*1.5*unitScale);//25   35


        //BOTTOM RIGHT
        countOutUnits=0;
        dumFont=24*unitScale;
        ctx.font = "italic "+dumFont+"px Arial";
        //ctx.font = "30px Arial";
        ctx.fillStyle = textColorThis;
        ctx.textAlign = "right";
        ctx.textBaseline = "bottom";
        ctx.lineWidth = "2";
        ctx.fillText(""+"",i2*unitSize+(unitSize-edgeSize*1.5)*unitScale,j2*unitSize+(unitSize-edgeSize*1.5)*unitScale);//25   35


        //BOTTOM LEFT
        countOutUnits=0;
        dumFont=24*unitScale;
        ctx.font = "italic "+dumFont+"px Arial";
        //ctx.font = "30px Arial";
        ctx.fillStyle = textColorThis;
        ctx.textAlign = "left";
        ctx.textBaseline = "bottom";
        ctx.lineWidth = "2";
        //if(cmbtFactorsMaxA[noOfImgPrnt]>0){
        if(false){
        ctx.fillText(""+cmbtFactorsMaxA[noOfImgPrnt],i2*unitSize+edgeSize*1*unitScale,j2*unitSize+(unitSize-edgeSize*0.9)*unitScale);}//25   35
        else if(unitsA[whatType*noOfItems+5]=="air"){
        ctx.fillText("",i2*unitSize+edgeSize*1*unitScale,j2*unitSize+(unitSize-edgeSize*0.9)*unitScale);}
        else{
        ctx.fillText("",i2*unitSize+edgeSize*1*unitScale,j2*unitSize+(unitSize-edgeSize*0.9)*unitScale);}

  //if(countOutUnits>loopNoXtra){break;}

    //**text in box
    countOutUnits=0;
    dumFont=40*unitScale;
    ctx.font = ""+dumFont+"px Arial";
    //ctx.font = "40px Arial";
    ctx.fillStyle = textColorThis;//"#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
  ctx.fillStyle = boxColor;//boxColor;
  //ctx.translate(50,50);
  //ctx.rotate(Math.PI/20);
  //ctx.translate(-50,-50);
  ctx.fillRect(i2*unitSize+60*unitScale, j2*unitSize+boxTop*unitScale, 80*unitScale, boxHt*unitScale);
	ctx.beginPath();
    ctx.lineWidth = "4";
	ctx.strokeStyle =colorThisBT;
	ctx.rect(i2*unitSize+60*unitScale, j2*unitSize+boxTop*unitScale, 80*unitScale, boxHt*unitScale);
	ctx.stroke();//countOutUnits++;
    //if(countOutUnits>loopNoXtra){break;}
        //ctx.stroke();


            //**unit symbol
            //no inf symbol
            if(unitsA[whatType*noOfItems+5]!="arm"&&unitsA[whatType*noOfItems+5]!="art"
            &&unitsA[whatType*noOfItems+5]!="acav"&&unitsA[whatType*noOfItems+5]!="cav"
            &&unitsA[whatType*noOfItems+5]!="scout"&&unitsA[whatType*noOfItems+5]!="recon"
            &&unitsA[whatType*noOfItems+5]!="spa"&&unitsA[whatType*noOfItems+5]!=""
            &&unitsA[whatType*noOfItems+5]!="supply"&&unitsA[whatType*noOfItems+5]!="hart"
            &&unitsA[whatType*noOfItems+5]!="hq"&&unitsA[whatType*noOfItems+5]!="eng"
            &&unitsA[whatType*noOfItems+5]!="lvt"&&unitsA[whatType*noOfItems+5]!="pio"
            &&unitsA[whatType*noOfItems+5]!="sw"&&unitsA[whatType*noOfItems+5]!="spt"
            &&unitsA[whatType*noOfItems+5]!="blank"&&unitsA[whatType*noOfItems+5]!="dummy"
            &&unitsA[whatType*noOfItems+5]!="aa"&&unitsA[whatType*noOfItems+5]!="at"
            &&unitsA[whatType*noOfItems+5]!="medic"&&unitsA[whatType*noOfItems+5]!="air"
            &&unitsA[whatType*noOfItems+5]!="apc"&&unitsA[whatType*noOfItems+5]!="acar"
            &&unitsA[whatType*noOfItems+5]!="trans"&&unitsA[whatType*noOfItems+5]!="seab"
            &&unitsA[whatType*noOfItems+5]!="rock"&&unitsA[whatType*noOfItems+5]!="strans"
            &&unitsA[whatType*noOfItems+5]!="mort"&&unitsA[whatType*noOfItems+5]!="flak"
            &&unitsA[whatType*noOfItems+5]!="mg"&&unitsA[whatType*noOfItems+5]!="depot"){
                ctx.beginPath();
                ctx.lineWidth = "4";
                ctx.strokeStyle = colorThisBT;
                ctx.moveTo(i2*unitSize+60*unitScale, j2*unitSize+boxTop*unitScale);
                ctx.lineTo(i2*unitSize+(60+80)*unitScale, j2*unitSize+(boxTop+boxHt)*unitScale);
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();
                ctx.moveTo(i2*unitSize+(60+80)*unitScale, j2*unitSize+boxTop*unitScale);
                ctx.lineTo(i2*unitSize+60*unitScale, j2*unitSize+(boxTop+boxHt)*unitScale);
                ctx.stroke();
                ctx.closePath();}
            countOutUnits++;

            countOutUnits=0;
            //art
            if(unitsA[whatType*noOfItems+5]=="art"||unitsA[whatType*noOfItems+5]=="spa"
            ||unitsA[whatType*noOfItems+5]=="hart"||unitsA[whatType*noOfItems+5]=="cdart"
            ||unitsA[whatType*noOfItems+5]=="sw"||unitsA[whatType*noOfItems+5]=="at"
            ||unitsA[whatType*noOfItems+5]=="seab"||unitsA[whatType*noOfItems+5]=="xxx"){
              ctx.beginPath();
              ctx.lineWidth = "4";
              ctx.fillStyle = colorThisBT;
              ctx.arc(i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/2)*unitScale, 12*unitScale, 0, 2*Math.PI);
              ctx.fill();
              ctx.closePath();
            }
            //acav and cav
            if(unitsA[whatType*noOfItems+5]=="acav"||unitsA[whatType*noOfItems+5]=="cav"
            ||unitsA[whatType*noOfItems+5]=="hart"||unitsA[whatType*noOfItems+5]=="acar"
              ||unitsA[whatType*noOfItems+5]=="scout"||unitsA[whatType*noOfItems+5]=="recon"){
                ctx.beginPath();
                ctx.lineWidth = "4";
                ctx.fillStyle = colorThisBT;
                ctx.moveTo(i2*unitSize+(60+80)*unitScale, j2*unitSize+boxTop*unitScale);
                ctx.lineTo(i2*unitSize+60*unitScale, j2*unitSize+(boxTop+boxHt)*unitScale);
                ctx.stroke();
                ctx.closePath();}
                //cav
                if(unitsA[whatType*noOfItems+5]=="cav"){
                    ctx.beginPath();
                    ctx.lineWidth = "6";
                    ctx.fillStyle = colorThisBT;
                    ctx.moveTo(i2*unitSize+(60+80)*unitScale, j2*unitSize+boxTop*unitScale);
                    ctx.lineTo(i2*unitSize+(60+0)*unitScale, j2*unitSize+(boxTop+boxHt)*unitScale);
                    ctx.lineTo(i2*unitSize+(60+80)*unitScale, j2*unitSize+(boxTop+boxHt)*unitScale);
                    ctx.lineTo(i2*unitSize+(60+80)*unitScale, j2*unitSize+(boxTop)*unitScale);
                    ctx.fill();
                    ctx.closePath();}
            //arm, mech, arm cav, spa
            if(unitsA[whatType*noOfItems+5]=="arm"||unitsA[whatType*noOfItems+5]=="mech"
            ||unitsA[whatType*noOfItems+5]=="acav"||unitsA[whatType*noOfItems+5]=="spa"
            ||unitsA[whatType*noOfItems+5]=="apc"||unitsA[whatType*noOfItems+5]=="acar"){
                ctx.beginPath();
                ctx.lineWidth = "4";
                ctx.strokeStyle = colorThisBT;
                ctx.moveTo(i2*unitSize+(60+20)*unitScale, j2*unitSize+(boxTop+boxHt/4)*unitScale);
                ctx.lineTo(i2*unitSize+(60+60)*unitScale, j2*unitSize+(boxTop+boxHt/4)*unitScale);
                ctx.arcTo(i2*unitSize+(60+80)*unitScale, j2*unitSize+(boxTop+boxHt/2)*unitScale,i2*unitSize+(60+60)*unitScale, j2*unitSize+(boxTop+boxHt*3/4)*unitScale, boxHt/4*unitScale);
                ctx.lineTo(i2*unitSize+(60+60)*unitScale, j2*unitSize+(boxTop+boxHt*3/4)*unitScale);
                ctx.lineTo(i2*unitSize+(60+20)*unitScale, j2*unitSize+(boxTop+boxHt*3/4)*unitScale);
                ctx.arcTo(i2*unitSize+60*unitScale, j2*unitSize+(boxTop+boxHt/2)*unitScale,i2*unitSize+(60+20)*unitScale, j2*unitSize+(boxTop+boxHt/4)*unitScale, boxHt/4*unitScale);
                ctx.lineTo(i2*unitSize+(60+20)*unitScale, j2*unitSize+(boxTop+boxHt/4)*unitScale);
                //ctx.arc(i2*unitSize+60+25, j2*unitSize+40+40, Math.PI, Math.PI);
                ctx.stroke();
                ctx.closePath();
            }
            else if(unitsA[whatType*noOfItems+5]=="sf"){
                ctx.beginPath();
                ctx.lineWidth = "1";
                ctx.fillStyle = colorThisBT;
                ctx.moveTo(i2*unitSize+(60+10)*unitScale, j2*unitSize+(boxTop+boxHt/8)*unitScale);//+10
                ctx.lineTo(i2*unitSize+(60+35)*unitScale, j2*unitSize+(boxTop+boxHt/80*18)*unitScale);//+18
                ctx.lineTo(i2*unitSize+(60+30)*unitScale, j2*unitSize+(boxTop+boxHt/8*3)*unitScale);//+30
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.lineWidth = "1";
                ctx.fillStyle = colorThisBT;
                ctx.moveTo(i2*unitSize+(60+70)*unitScale, j2*unitSize+(boxTop+boxHt/8)*unitScale);
                ctx.lineTo(i2*unitSize+(60+45)*unitScale, j2*unitSize+(boxTop+boxHt/80*18)*unitScale);
                ctx.lineTo(i2*unitSize+(60+50)*unitScale, j2*unitSize+(boxTop+boxHt/8*3)*unitScale);
                ctx.fill();
                ctx.closePath();
            }
            else if(unitsA[whatType*noOfItems+5]=="para"){
                ctx.beginPath();
                ctx.lineWidth = "4";
                ctx.strokeStyle = colorThisBT;
                //ctx.moveTo(i2*unitSize+60+20, j2*unitSize+40+75);
                //ctx.arcTo(i2*unitSize+60+30, j2*unitSize+40+50,i2*unitSize+60+40, j2*unitSize+40+70, 10);
                //ctx.lineTo(i2*unitSize+60+40, j2*unitSize+40+70);
                //ctx.arcTo(i2*unitSize+60+50, j2*unitSize+40+50,i2*unitSize+60+60, j2*unitSize+40+75, 10);
                //ctx.lineTo(i2*unitSize+60+60, j2*unitSize+40+75);
                ctx.moveTo(i2*unitSize+(60+20)*unitScale, j2*unitSize+(boxTop+boxHt-5)*unitScale);//+75
                ctx.arcTo(i2*unitSize+(60+30)*unitScale, j2*unitSize+(boxTop+boxHt-30)*unitScale,i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt-10)*unitScale, boxHt/8*unitScale);
                ctx.lineTo(i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt-10)*unitScale);//70
                ctx.arcTo(i2*unitSize+(60+50)*unitScale, j2*unitSize+(boxTop+boxHt-30)*unitScale,i2*unitSize+(60+60)*unitScale, j2*unitSize+(boxTop+boxHt-5)*unitScale, boxHt/8*unitScale);
                ctx.lineTo(i2*unitSize+(60+60)*unitScale, j2*unitSize+(boxTop+boxHt-5)*unitScale);//+75
                ctx.stroke();
                ctx.closePath();
            }
            else if(unitsA[whatType*noOfItems+5]=="mar"||unitsA[whatType*noOfItems+5]=="seab"
            ||unitsA[whatType*noOfItems+5]=="strans"){
                ctx.beginPath();
                ctx.lineWidth = "4";
                ctx.strokeStyle = colorThisBT;
                ctx.moveTo(i2*unitSize+(60+30)*unitScale, j2*unitSize+(boxTop+boxHt/5)*unitScale);//+75
                ctx.lineTo(i2*unitSize+(60+50)*unitScale, j2*unitSize+(boxTop+boxHt/5)*unitScale);//70
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();
                ctx.moveTo(i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/5)*unitScale);//+75
                ctx.lineTo(i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/5*4)*unitScale);//70
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/5*2)*unitScale, boxHt/5*2*unitScale, 0, Math.PI);
                ctx.stroke();
                ctx.closePath();
            }
            if(unitsA[whatType*noOfItems+5]=="air"){
                ctx.beginPath();
                ctx.lineWidth = "4";
                ctx.strokeStyle = colorThisBT;
                ctx.moveTo(i2*unitSize+(60+25)*unitScale, j2*unitSize+(boxTop+boxHt/5*2)*unitScale);//+75
                ctx.lineTo(i2*unitSize+(60+55)*unitScale, j2*unitSize+(boxTop+boxHt/5*3)*unitScale);//70
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();
                ctx.moveTo(i2*unitSize+(60+25)*unitScale, j2*unitSize+(boxTop+boxHt/5*3)*unitScale);//+75
                ctx.lineTo(i2*unitSize+(60+55)*unitScale, j2*unitSize+(boxTop+boxHt/5*2)*unitScale);//70
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(i2*unitSize+(60+25)*unitScale, j2*unitSize+(boxTop+boxHt/2)*unitScale, boxHt/10*unitScale, -Math.PI, Math.PI);
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(i2*unitSize+(60+55)*unitScale, j2*unitSize+(boxTop+boxHt/2)*unitScale, boxHt/10*unitScale, -Math.PI, Math.PI);
                ctx.stroke();
                ctx.closePath();
              }
               if(unitsA[whatType*noOfItems+5]=="mount"){
                              ctx.beginPath();
                              ctx.lineWidth = "1";
                              ctx.fillStyle = colorThisBT;
                              ctx.moveTo(i2*unitSize+(60+25)*unitScale, j2*unitSize+(boxTop+boxHt)*unitScale);//+10
                              ctx.lineTo(i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/2)*unitScale);//+18
                              ctx.lineTo(i2*unitSize+(60+55)*unitScale, j2*unitSize+(boxTop+boxHt)*unitScale);//+30
                              ctx.fill();
                              ctx.closePath();
                            }
                  if(unitsA[whatType*noOfItems+5]=="mort"){
                              ctx.beginPath();
                              ctx.lineWidth = "6";
                              ctx.strokeStyle = colorThisBT;
                              ctx.moveTo(i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+10)*unitScale);//+10
                              ctx.lineTo(i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/2+10)*unitScale);//+18
                              //ctx.lineTo(i2*unitSize+(60+55)*unitScale, j2*unitSize+(boxTop+boxHt)*unitScale);//+30
                              ctx.stroke();
                              ctx.closePath();
                              ctx.beginPath();
                              ctx.lineWidth = "6";
                              ctx.fillStyle = colorThisBT;
                              ctx.arc(i2*unitSize+(60+39.5)*unitScale, j2*unitSize+(boxTop+boxHt/6*4)*unitScale, 8*unitScale, 0, 2*Math.PI);
                              ctx.fill();
                              ctx.closePath();
                        }
                        if(unitsA[whatType*noOfItems+5]=="mg"){
                              ctx.beginPath();
                              ctx.lineWidth = "6";
                              ctx.strokeStyle = colorThisBT;
                              ctx.moveTo(i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/4)*unitScale);//+10
                              ctx.lineTo(i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/4*3)*unitScale);//+18
                              //ctx.lineTo(i2*unitSize+(60+55)*unitScale, j2*unitSize+(boxTop+boxHt)*unitScale);//+30
                              ctx.stroke();
                              ctx.closePath();
                                  ctx.beginPath();
                                  ctx.moveTo(i2*unitSize+(60+25)*unitScale, j2*unitSize+(boxTop+boxHt/4*1.6)*unitScale);//+10
                                  ctx.lineTo(i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/4)*unitScale);//+18
                                  ctx.lineTo(i2*unitSize+(60+55)*unitScale, j2*unitSize+(boxTop+boxHt/4*1.6)*unitScale);//+30
                                  ctx.stroke();
                                  ctx.closePath();
                        }
                        if(unitsA[whatType*noOfItems+5]=="flak"){
                              ctx.beginPath();
                              ctx.lineWidth = "6";
                              ctx.strokeStyle = colorThisBT;
                              ctx.moveTo(i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/4)*unitScale);//+10
                              ctx.lineTo(i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/4*3)*unitScale);//+18
                              //ctx.lineTo(i2*unitSize+(60+55)*unitScale, j2*unitSize+(boxTop+boxHt)*unitScale);//+30
                              ctx.stroke();
                              ctx.closePath();
                                  ctx.beginPath();
                                  ctx.moveTo(i2*unitSize+(60+25)*unitScale, j2*unitSize+(boxTop+boxHt/4*1.6)*unitScale);//+10
                                  ctx.lineTo(i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/4)*unitScale);//+18
                                  ctx.lineTo(i2*unitSize+(60+55)*unitScale, j2*unitSize+(boxTop+boxHt/4*1.6)*unitScale);//+30
                                  ctx.stroke();
                                  ctx.closePath();
                                  ctx.beginPath();
                                  ctx.moveTo(i2*unitSize+(60+25)*unitScale, j2*unitSize+(boxTop+boxHt/4*3)*unitScale);//+10
                                  ctx.lineTo(i2*unitSize+(60+55)*unitScale, j2*unitSize+(boxTop+boxHt/4*3)*unitScale);//+18
                                  //ctx.lineTo(i2*unitSize+(60+55)*unitScale, j2*unitSize+(boxTop+boxHt)*unitScale);//+30
                                  ctx.stroke();
                                  ctx.closePath();
                            }
                          if(unitsA[whatType*noOfItems+5]=="aa"){
                              ctx.beginPath();
                              ctx.lineWidth = "6";
                              ctx.strokeStyle = colorThisBT;
                              ctx.moveTo(i2*unitSize+(60+0)*unitScale, j2*unitSize+(boxTop+boxHt)*unitScale);//+10
                              ctx.lineTo(i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop)*unitScale);//+18
                              ctx.lineTo(i2*unitSize+(60+80)*unitScale, j2*unitSize+(boxTop+boxHt)*unitScale);//+30
                              ctx.stroke();
                              ctx.closePath();
                                  ctx.beginPath();
                                  ctx.lineWidth = "6";
                                  ctx.strokeStyle = colorThisBT;
                                  ctx.moveTo(i2*unitSize+(60+20)*unitScale, j2*unitSize+(boxTop+boxHt/2)*unitScale);//+10
                                  ctx.lineTo(i2*unitSize+(60+60)*unitScale, j2*unitSize+(boxTop+boxHt/2)*unitScale);//+30
                                  ctx.stroke();
                                  ctx.closePath();
                          }
                          if(unitsA[whatType*noOfItems+5]=="glide"){
                                  ctx.beginPath();
                                  ctx.lineWidth = "6";
                                  ctx.strokeStyle = colorThisBT;
                                  ctx.moveTo(i2*unitSize+(60+15)*unitScale, j2*unitSize+(boxTop+boxHt/2)*unitScale);//+10
                                  ctx.lineTo(i2*unitSize+(60+65)*unitScale, j2*unitSize+(boxTop+boxHt/2)*unitScale);//+30
                                  ctx.stroke();
                                  ctx.closePath();
                          }
                          if(unitsA[whatType*noOfItems+5]=="rock"){
                                  ctx.beginPath();
                                  ctx.lineWidth = "6";
                                  ctx.strokeStyle = colorThisBT;
                                  ctx.moveTo(i2*unitSize+(60+20)*unitScale, j2*unitSize+(boxTop+boxHt/2)*unitScale);//+10
                                  ctx.lineTo(i2*unitSize+(60+60)*unitScale, j2*unitSize+(boxTop+boxHt/2)*unitScale);//+30
                                  ctx.stroke();
                                  ctx.closePath();
                                  ctx.beginPath();
                                  ctx.arc(i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/2)*unitScale, boxHt/3.5*unitScale, -Math.PI/1.8, Math.PI/1.8);
                                  ctx.stroke();
                                  ctx.closePath();
                          }
                          if(unitsA[whatType*noOfItems+5]=="medic"){
                                  ctx.beginPath();
                                  ctx.lineWidth = "6";
                                  ctx.strokeStyle = colorThisBT;
                                  ctx.moveTo(i2*unitSize+(60+0)*unitScale, j2*unitSize+(boxTop+boxHt/2)*unitScale);//+10
                                  ctx.lineTo(i2*unitSize+(60+80)*unitScale, j2*unitSize+(boxTop+boxHt/2)*unitScale);//+30
                                  ctx.stroke();
                                  ctx.closePath();
                                    ctx.beginPath();
                                    ctx.lineWidth = "6";
                                    ctx.strokeStyle = colorThisBT;
                                    ctx.moveTo(i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop)*unitScale);//+10
                                    ctx.lineTo(i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt)*unitScale);//+30
                                    ctx.stroke();
                                    ctx.closePath();
                          }
                          if(unitsA[whatType*noOfItems+5]=="at"){
                              ctx.beginPath();
                              ctx.lineWidth = "6";
                              ctx.strokeStyle = colorThisBT;
                              ctx.moveTo(i2*unitSize+(60+0)*unitScale, j2*unitSize+(boxTop)*unitScale);//+10
                              ctx.lineTo(i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt)*unitScale);//+18
                              ctx.lineTo(i2*unitSize+(60+80)*unitScale, j2*unitSize+(boxTop)*unitScale);//+30
                              ctx.stroke();
                              ctx.closePath();
                          }
                                 //guard
                                      if(unitsA[whatType*noOfItems+5]=="guard"){
                                          ctx.beginPath();
                                          ctx.lineWidth = "4";
                                          ctx.fillStyle = colorThisBT;
                                          ctx.moveTo(i2*unitSize+60+40, j2*unitSize+boxTop+10);
                                          ctx.arcTo(i2*unitSize+60+45, j2*unitSize+boxTop+15,i2*unitSize+60+55, j2*unitSize+boxTop+10, 10);
                                          ctx.lineTo(i2*unitSize+60+55, j2*unitSize+boxTop+10);
                                          ctx.arcTo(i2*unitSize+60+65, j2*unitSize+boxTop+30,i2*unitSize+60+40, j2*unitSize+boxTop+55, 20);
                                          ctx.lineTo(i2*unitSize+60+40, j2*unitSize+boxTop+55);
                                          ctx.lineTo(i2*unitSize+60+40, j2*unitSize+boxTop+10);
                                          ctx.fill();
                                          ctx.closePath();ctx.beginPath();
                                          ctx.moveTo(i2*unitSize+60+40, j2*unitSize+boxTop+10);
                                          ctx.arcTo(i2*unitSize+60+35, j2*unitSize+boxTop+15,i2*unitSize+60+25, j2*unitSize+boxTop+10, 10);
                                          ctx.lineTo(i2*unitSize+60+25, j2*unitSize+boxTop+10);
                                          ctx.arcTo(i2*unitSize+60+15, j2*unitSize+boxTop+30,i2*unitSize+60+40, j2*unitSize+boxTop+55, 20);
                                          ctx.lineTo(i2*unitSize+60+40, j2*unitSize+boxTop+55);
                                          ctx.lineTo(i2*unitSize+60+40, j2*unitSize+boxTop+10);
                                          ctx.fill();
                                          ctx.closePath();
                                            ctx.beginPath();
                                            ctx.lineWidth = "3";
                                            ctx.font = "bold 16px Arial";
                                            ctx.fillStyle = boxColor;
                                            ctx.textAlign = "center";
                                            ctx.textBaseline = "middle";
                                            ctx.fillText("GUARD",i2*unitSize+(60+40), j2*unitSize+(boxTop+30), 40);
                                            ctx.stroke();
                                            ctx.closePath();
                                      }

             //supply
            if(unitsA[whatType*noOfItems+5]=="supply"){
              ctx.beginPath();
              ctx.lineWidth = "3";
              ctx.strokeStyle = colorThisBT;
              ctx.arc(i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/2)*unitScale, 35*unitScale, 0, 2*Math.PI);
              ctx.stroke();
              ctx.closePath();
              ctx.beginPath();
              ctx.font = "bold 48px Arial";
              ctx.fillStyle = colorThisBT;
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillText("S",i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/1.9)*unitScale);
              ctx.stroke();
              ctx.closePath();
            }
            if(unitsA[whatType*noOfItems+5]=="depot"){
              ctx.beginPath();
              ctx.lineWidth = "3";
              ctx.strokeStyle = colorThisBT;
              ctx.arc(i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/2)*unitScale, 35*unitScale, 0, 2*Math.PI);
              ctx.stroke();
              ctx.closePath();
              ctx.beginPath();
              ctx.font = "bold 48px Arial";
              ctx.fillStyle = colorThisBT;
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillText("D",i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/1.9)*unitScale);
              ctx.stroke();
              ctx.closePath();
            }
             //HQ
            if(unitsA[whatType*noOfItems+5]=="hq"){
              ctx.beginPath();
              ctx.lineWidth = "3";
              ctx.strokeStyle = colorThisBT;
              ctx.arc(i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/2)*unitScale, 35*unitScale, 0, 2*Math.PI);
              ctx.stroke();
              ctx.closePath();
              ctx.beginPath();
              ctx.font = "bold 36px Arial";
              ctx.fillStyle = colorThis;
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillText("HQ",i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/1.875)*unitScale);
              ctx.stroke();
              ctx.closePath();
            }
             //engineers
            if(unitsA[whatType*noOfItems+5]=="eng"){
              ctx.beginPath();
              ctx.lineWidth = "3";
              ctx.font = "bold 36px Arial";
              ctx.fillStyle = colorThisBT;
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillText("E",i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/1.875)*unitScale);
              ctx.stroke();
              ctx.closePath();
            }
             //support weapons
            if(unitsA[whatType*noOfItems+5]=="sw"){
              ctx.beginPath();
              ctx.lineWidth = "3";
              ctx.font = "bold 24px Arial";
              ctx.fillStyle = colorThisBT;
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillText("S    W",i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/4*3)*unitScale);
              ctx.stroke();
              ctx.closePath();
            }
             //labor
            if(unitsA[whatType*noOfItems+5]=="lab"){
              ctx.beginPath();
              ctx.lineWidth = "3";
              ctx.font = "bold 18px Arial";
              ctx.fillStyle = colorThisBT;
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillText("LABOR",i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/1.875)*unitScale);
              ctx.stroke();
              ctx.closePath();
            }
             //pioneers
            if(unitsA[whatType*noOfItems+5]=="pio"){
              ctx.beginPath();
              ctx.lineWidth = "3";
              ctx.font = "bold 36px Arial";
              ctx.fillStyle = colorThisBT;
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillText("P",i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/1.875)*unitScale);
              ctx.stroke();
              ctx.closePath();
            }
             //Amphibian tractor
            if(unitsA[whatType*noOfItems+5]=="lvt"){
              ctx.beginPath();
              ctx.lineWidth = "3";
              ctx.font = "bold 36px Arial";
              ctx.fillStyle = colorThisBT;
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillText("LVT",i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/1.875)*unitScale);
              ctx.stroke();
              ctx.closePath();
            }
             //support troops
            if(unitsA[whatType*noOfItems+5]=="spt"||unitsA[whatType*noOfItems+5]=="trans"){
              ctx.beginPath();
              ctx.lineWidth = "3";
              ctx.strokeStyle = colorThisBT;
              ctx.arc(i2*unitSize+(60+20)*unitScale, j2*unitSize+(boxTop+boxHt/4*3)*unitScale, 10*unitScale, 0, 2*Math.PI);
              ctx.stroke();
              ctx.closePath();
              ctx.beginPath();
              ctx.arc(i2*unitSize+(60+60)*unitScale, j2*unitSize+(boxTop+boxHt/4*3)*unitScale, 10*unitScale, 0, 2*Math.PI);
              ctx.stroke();
              ctx.closePath();
              ctx.beginPath();
              ctx.rect(i2*unitSize+(60+10)*unitScale, j2*unitSize+(boxTop+boxHt/4)*unitScale, 60, boxHt/3);
              ctx.stroke();
              ctx.closePath();
            }
             //apc
                  if(unitsA[whatType*noOfItems+5]=="apc"){
                          ctx.beginPath();
                          ctx.lineWidth = "3";
                          ctx.strokeStyle = colorThisBT;
                          ctx.arc(i2*unitSize+(60+20)*unitScale, j2*unitSize+(boxTop+boxHt/4*3)*unitScale, 8*unitScale, 0, 2*Math.PI);
                          ctx.stroke();
                          ctx.closePath();
                          ctx.beginPath();
                          ctx.arc(i2*unitSize+(60+60)*unitScale, j2*unitSize+(boxTop+boxHt/4*3)*unitScale, 8*unitScale, 0, 2*Math.PI);
                          ctx.stroke();
                          ctx.closePath();
                        }
                         //motor
                        if(unitsA[whatType*noOfItems+5]=="motor"){
                          ctx.beginPath();
                          ctx.lineWidth = "3";
                          ctx.strokeStyle = colorThisBT;
                          ctx.arc(i2*unitSize+(60+25)*unitScale, j2*unitSize+(boxTop+boxHt/4*3)*unitScale, 10*unitScale, 0, 2*Math.PI);
                          ctx.stroke();
                          ctx.closePath();
                          ctx.beginPath();
                          ctx.arc(i2*unitSize+(60+55)*unitScale, j2*unitSize+(boxTop+boxHt/4*3)*unitScale, 10*unitScale, 0, 2*Math.PI);
                          ctx.stroke();
                          ctx.closePath();
                          armourFactor="o o";
                        }
                        //blank
                        if(unitsA[whatType*noOfItems+5]=="blank"){
                          ctx.beginPath();
                          ctx.font = "bold 36px Arial";
                          ctx.fillStyle = colorThis;
                          ctx.textAlign = "center";
                          ctx.textBaseline = "middle";
                          ctx.fillText("?",i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/1.875)*unitScale);
                          ctx.stroke();
                          ctx.closePath();
                        }
                        //dummy
                        if(unitsA[whatType*noOfItems+5]=="dummy"){
                          ctx.beginPath();
                          ctx.font = "bold 36px Arial";
                          ctx.fillStyle = colorThisBT;
                          ctx.textAlign = "center";
                          ctx.textBaseline = "middle";
                          ctx.fillText("...",i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/1.875)*unitScale);
                          ctx.stroke();
                          ctx.closePath();
                        }
                        //other
                        if(unitsA[whatType*noOfItems+5]==""){
                          ctx.beginPath();
                        ctx.font = "40px Arial";
                        ctx.fillStyle = colorThisBT;
                        ctx.textAlign = "center";
                        ctx.textBaseline = "middle";
                        ctx.lineWidth = "2";
                        ctx.fillText(unitsA[whatType*noOfItems+1], i2*unitSize+(60+40)*unitScale, j2*unitSize+(boxTop+boxHt/1.875)*unitScale, 80);
                          ctx.closePath();
                        }

//combat factors
//countOutUnits=0;dumFont=24*unitScale;
    dumFont=56*unitScale;
    ctx.font = "bold "+dumFont+"px Arial";
    ctx.fillStyle = textColorThis;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        if(unitsA[whatType*noOfItems+5]!="air"&&unitsA[whatType*noOfItems+5]!="depot"){
        ctx.fillText(""+cmbtFactorsA[noOfImgPrnt]+"-"+unitsA[whatType*noOfItems+7],i2*unitSize+100*unitScale,j2*unitSize+155*unitScale);}
        else{
        ctx.fillText(""+cmbtFactorsA[noOfImgPrnt],i2*unitSize+100*unitScale,j2*unitSize+155*unitScale);
        }
        //countOutUnits++;
        //if(countOutUnits>loopNoXtra){break;}

        		//**division number
            countOutUnits=0;
            dumFont=36*unitScale;
            ctx.font = ""+dumFont+"px Arial";
        	  //ctx.font = "30px Arial";
            ctx.translate(50, 50);
            ctx.rotate(-Math.PI/2);
            ctx.translate(-50, -50);
        	  ctx.fillStyle = textColorThis;
        	  ctx.textAlign = "center";
        	  ctx.textBaseline = "middle";
          	ctx.lineWidth = "2";
        	  ctx.fillText(""+designateLA[noOfImgPrnt],i2*unitSize*-0.9+20*unitScale,j2*unitSize+unitSize/4.5*unitScale, 110);//, 30
            ctx.translate(50, 50);
            ctx.rotate(Math.PI/2);
            ctx.translate(-50, -50);


          	//**battalion number
            dumFont=36*unitScale;
            ctx.font = ""+dumFont+"px Arial";//"20px Arial";
            ctx.translate(150, 150);
            ctx.rotate(-Math.PI/2);
            ctx.translate(-150, -150);
            ctx.fillStyle = textColorThis;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(""+designateRA[noOfImgPrnt],i2*unitSize*-0.9+220*unitScale,j2*unitSize+unitSize/5*4.0*unitScale, 110);
            ctx.translate(150, 150);
            ctx.rotate(Math.PI/2);
            ctx.translate(-150, -150);
}//end of not neutral
else{//if neutral
  //**top text
  dumFont=148*unitScale;
  ctx.globalAlpha=1;
  ctx.font = "bold "+dumFont+"px Arial";
  //ctx.font = "30px Arial";
  ctx.fillStyle = textColorThis;
  if(blackTextFlag){ctx.fillStyle = "Black";}
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.lineWidth = "2";
  ctx.fillText(""+unitsA[whatType*noOfItems+6],i2*unitSize+100*unitScale,j2*unitSize+100*unitScale);

}

var typeL = nameFactor;
//**size of unit label
//countOutUnits=0;
    dumFont=36*unitScale;
    ctx.font = "bold "+dumFont+"px Arial";
    //ctx.font = "36px Arial";
    //ctx.fontWeight = "bold";
    ctx.fillStyle = textColorThis;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        if(classType==0){//1
        ctx.fillText("xxxx",i2*unitSize+100*unitScale,j2*unitSize+45*unitScale);
        }
        else{
        ctx.fillText("",i2*unitSize+100*unitScale,j2*unitSize+boxTop*3/4*unitScale);//+unitsA[whatType*noOfItems+8]
        }
        //countOutUnits++;
        //if(countOutUnits>loopNoXtra){break;}


//document.getElementById("printHere").innerHTML = unitColor;

/*document.getElementById("prnt1Button").addEventListener("click", function(evt){
        // open new window with saved image so user
        // can right click and save to their computer
        window.open(canvas.toDataURL());
    }, false);*/

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


//export function shiftColor(base, change, direction) {//direction = 'add' or 'sub'
function flipColor(base) {//'base' = color to find complement
  const colorRegEx = /^\#?[A-Fa-f0-9]{6}$/;

  //var change = "#ffffff";
  //var direction = 'add';
  // Missing parameter(s)
  if (!base) {
    return '000000';
  }

  // Invalid parameter(s)
  if (!base.match(colorRegEx)) {
    return '000000';
  }

  // Remove any '#'s
  base = base.replace(/\#/g, '');

  // Build new color
  let newColor = '';
  for (let i = 0; i < 3; i++) {
    const basePiece = parseInt(base.substring(i * 2, i * 2 + 2), 16);
    //const changePiece = parseInt(change.substring(i * 2, i * 2 + 2), 16);
    let newPiece = '';

    newPiece = 255-basePiece;

    newPiece = newPiece.toString(16);
    newPiece = newPiece.length < 2 ? '0' + newPiece : newPiece;
    newColor += newPiece;
  }
  //alert(""+base+" "+newColor);
  return newColor;
}


function printUnitBlank(n, b, t, id, c0){//n=number of image b=battalion number, t=Total, id=number of unit,
  var whatType = id;//number to tell which type
  var batTot = t;//total number of that type
  var batNumb = b;//number within that type
  var noOfImgPrnt = n;//noOfImg - number of unit out of all units
  classFactor = c0;
  var colorThis = colorIndividual[noOfImgPrnt][0];//coloring[0];
  var textColorThis = colorIndividual[noOfImgPrnt][1];//coloring[1];
  boxColor=colorIndividual[noOfImgPrnt][2];//coloring[2];
  var colorThisBT = colorIndividual[noOfImgPrnt][3];//coloring[3];

	unitColor2 = "#"+shiftColor(colorThis, changeColor, 'add');
	unitColor1 = "#"+shiftColor(unitColor2, changeColor, 'add');
	unitColor3 = "#"+shiftColor(colorThis, changeColor, 'sub');
	unitColor4 = "#"+shiftColor(unitColor3, changeColor, 'sub');

  var canvas = document.getElementById("piece#"+noOfImgPrnt);
  var ctx = canvas.getContext("2d");
    ctx.canvas.width = unitSize;
    ctx.canvas.height = unitSize;
  ctx.fillStyle = colorThis;
  ctx.fillRect(0, 0, unitSize, unitSize);

  var i2=0;
  var j2=0;

	//**top edge
	  ctx.lineWidth = "1";
	  ctx.fillStyle = unitColor1;
	  ctx.beginPath();
		ctx.moveTo(i2*unitSize, j2*unitSize);
		ctx.lineTo(i2*unitSize+edgeSize, j2*unitSize+edgeSize);
		ctx.lineTo(i2*unitSize+unitSize-edgeSize,  j2*unitSize+edgeSize);
		ctx.lineTo(i2*unitSize+unitSize,  j2*unitSize);
		ctx.lineTo(i2*unitSize, j2*unitSize);
		ctx.closePath();
		//ctx.stroke();
		ctx.fill();

		//**left edge
		  ctx.lineWidth = "1";
		  ctx.fillStyle = unitColor2;
		  ctx.beginPath();
			ctx.moveTo(i2*unitSize, j2*unitSize);
			ctx.lineTo(i2*unitSize+edgeSize, j2*unitSize+edgeSize);
			ctx.lineTo(i2*unitSize+edgeSize,  j2*unitSize+unitSize-edgeSize);
			ctx.lineTo(i2*unitSize,  j2*unitSize+unitSize);
			ctx.lineTo(i2*unitSize, j2*unitSize);
			ctx.closePath();
			//ctx.stroke();
			ctx.fill();

			//**bottom edge
			  ctx.lineWidth = "1";
			  ctx.fillStyle = unitColor4;
			  ctx.beginPath();
				ctx.moveTo(i2*unitSize, j2*unitSize+unitSize);
				ctx.lineTo(i2*unitSize+edgeSize, j2*unitSize+unitSize-edgeSize);
				ctx.lineTo(i2*unitSize+unitSize-edgeSize,  j2*unitSize+unitSize-edgeSize);
				ctx.lineTo(i2*unitSize+unitSize,  j2*unitSize+unitSize);
				ctx.lineTo(i2*unitSize, j2*unitSize+unitSize);
				ctx.closePath();
				//ctx.stroke();
				ctx.fill();

				//**right edge
				  ctx.lineWidth = "1";
				  ctx.fillStyle = unitColor3;
				  ctx.beginPath();
					ctx.moveTo(i2*unitSize+unitSize, j2*unitSize+unitSize);
					ctx.lineTo(i2*unitSize+unitSize-edgeSize, j2*unitSize+unitSize-edgeSize);
					ctx.lineTo(i2*unitSize+unitSize-edgeSize,  j2*unitSize+edgeSize);
					ctx.lineTo(i2*unitSize+unitSize,  j2*unitSize);
					ctx.lineTo(i2*unitSize+unitSize, j2*unitSize+unitSize);
					ctx.closePath();
					//ctx.stroke();
					ctx.fill();

}

function makeColor(){
  var rndR = Math.floor(Math.random()*255);
  var rndG = Math.floor(Math.random()*255);
  var rndB = Math.floor(Math.random()*255);
  var rndRH = rndR.toString(16);
  var rndGH = rndG.toString(16);
  var rndBH = rndB.toString(16);
  if(Math.random()<0.5){}
  else{
  var dumCol = Math.ceil(Math.random()*18);
  switch (dumCol) {
  case 1://rndR
    rndGH="00";
    rndBH="00";
    break;
case 2://rndR
  rndGH="ff";
  rndBH="00";
  break;
case 3://rndR
rndGH="00";
rndBH="ff";
break;
case 4://rndR
rndGH="ff";
rndBH="ff";
break;
case 5://rndG
rndRH="00";
rndBH="00";
break;
case 6://rndG
rndRH="ff";
rndBH="00";
break;
case 7://rndG
rndRH="00";
rndBH="ff";
break;
case 8://rndG
rndRH="ff";
rndBH="ff";
break;
case 9://rndB
rndGH="00";
rndRH="00";
break;
case 10://rndB
rndGH="ff";
rndRH="00";
break;
case 11://rndB
rndGH="00";
rndRH="ff";
break;
case 12://rndB
rndGH="ff";
rndRH="ff";
break;
case 13://rndB
rndRH="ff";
break;
case 14://rndB
rndGH="ff";
break;
case 15://rndB
rndBH="ff";
break;
case 16://rndB
rndRH="00";
break;
case 17://rndB
rndGH="00";
break;
case 18://rndB
rndBH="00";
break;
  }}
  unitColor = "#"+rndRH+rndGH+rndBH;

  if(unitColor.length<6){
    var oldCol = unitColor;
    var colDigit1 = Math.floor(Math.random()*10);
    var colDigit2 = Math.floor(Math.random()*10);
    unitColor=""+unitColor+colDigit1+colDigit2;
    //alert("5: "+oldCol+" "+unitColor);
  }
  else if(unitColor.length<7){
    var oldCol = unitColor;
    var colDigit = Math.floor(Math.random()*10);
    unitColor=""+unitColor+colDigit;
    //alert("6: "+oldCol+" "+unitColor);
  }
  else{}
  //unitColor = unitColor.toUpperCase();
  rndR = parseInt(rndRH, 16);
  rndG = parseInt(rndGH, 16);
  rndB = parseInt(rndBH, 16);
  var shade = +rndR+rndG+rndB;
  //alert("RH:"+rndRH+" R:"+rndR+" GH:"+rndGH+" G:"+rndG+" BH:"+rndBH+" B:"+rndB);
  //alert("H:"+1*(rndRH+rndGH+rndBH)+" dec:"+(rndR+rndG+rndB));
  shadeCol=shade;
  //if(shade<380){
  if(rndR<128&&rndG<128&&rndB<128||shade<380){
    textColor="#ffffff";textColor2="#000000";}
  else{textColor="#000000";textColor2="#ffffff";}

  goColor=unitColor;
  goColorT=textColor;

  makeUnitColor();
  goColorB=unitColorSm;

	unitColor2 = "#"+shiftColor(unitColor, changeColor, 'add');
	unitColor1 = "#"+shiftColor(unitColor2, changeColor, 'add');
	unitColor3 = "#"+shiftColor(unitColor, changeColor, 'sub');
	unitColor4 = "#"+shiftColor(unitColor3, changeColor, 'sub');
  boxColor = "#"+flipColor(unitColor3);

  //printUnits();
  findUnits();
  //return unitColor0;
}

function makeUnitColor(){

  var rndR = Math.floor(Math.random()*256);
  var rndG = Math.floor(Math.random()*256);
  var rndB = Math.floor(Math.random()*256);
  var extra = Math.floor(Math.random()*16);
  var rndRH = rndR.toString(16);
  var rndGH = rndG.toString(16);
  var rndBH = rndB.toString(16);
  var extraH = extra.toString(16);
  unitColorSm = "#"+rndRH+rndGH+rndBH;
  if(unitColorSm.length==6){
    unitColorSm=unitColorSm+extraH;
  }
  var shade = +rndR+rndG+rndB;
  if(shade>383){textColorSm="#000000";}
  else{textColorSm="#ffffff";}

  var finalColours = unitColorSm+"/"+textColorSm;

  return finalColours;

  /*
	unitColor2 = "#"+shiftColor(unitColor, changeColor, 'add');
	unitColor1 = "#"+shiftColor(unitColor2, changeColor, 'add');
	unitColor3 = "#"+shiftColor(unitColor, changeColor, 'sub');
	unitColor4 = "#"+shiftColor(unitColor3, changeColor, 'sub');
  boxColor = "#"+flipColor(unitColor3);
  */
	//alert(""+unitColor+" "+unitColor1+" "+unitColor2+" "+unitColor3+" "+unitColor4);
  //printUnits();
}

function findColours(){
  for(var a=0;a<5;a++){//first 5 units
    unitsA[a*noOfItems] = "";//clear old colours
  }
  for(var a=0;a<5;a++){
    var thisTimeColors = makeUnitColor();
    unitsA[a*noOfItems] = thisTimeColors;//make main colour
  }
  for(var a=0;a<5;a++){
    var thisTimeColors = makeUnitColor();//make box colours
    unitsA[a*noOfItems] = unitsA[a*noOfItems]+"/"+thisTimeColors;
  }
  //console.log(unitsA);
}
