
//var canvW = 1000;
//var canvH = 1000;
var unitSize = 300;
var unitScale = 1;
var edgeSize = 15;
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
var colorTiles = "#444444";
var colorDots = "#ffffff";
var colorChange = "#222222";

function printUnit(n, b, t, id, c0){//n=number of image b=battalion number, t=Total, id=number of unit,
  var whatType = id;//number to tell which type
  var batTot = t;//total number of that type
  var batNumb = b;//number within that type
  var noOfImgPrnt = n;//noOfImg - number of unit out of all units
  classFactor = c0;
  var colorThis = colorTiles;//colorIndividual[noOfImgPrnt][0];//coloring[0];
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
  changeColor = colorChange;//"#111111";//"#222222";
	unitColor2 = "#"+shiftColor(colorThis, changeColor, 'add');
	unitColor1 = "#"+shiftColor(unitColor2, changeColor, 'add');
	unitColor3 = "#"+shiftColor(colorThis, changeColor, 'sub');
	unitColor4 = "#"+shiftColor(unitColor3, changeColor, 'sub');
//console.log(""+colorThis+": "+changeColor+": "+unitColor1+" "+unitColor2+" "+unitColor3+" "+unitColor4)
  //boxColor = "#"+flipColor(colorThis);

  //countOutUnits=n;


  var canvas = document.getElementById("piece#"+noOfImgPrnt);
  var ctx = canvas.getContext("2d");
  //console.log("seeThruAlpha="+seeThruAlpha)
  //console.log("globalAlpha="+ctx.globalAlpha)
    ctx.canvas.width = unitSize;
    ctx.canvas.height = unitSize*2;
    //console.log(ctx.canvas.width+" "+ctx.canvas.height);
    ctx.globalAlpha = seeThruAlpha;
  ctx.fillStyle = colorTiles;//"#444444";//"Black";//colorThis;
  ctx.fillRect(0, 0, unitSize, unitSize*2);
  ctx.closePath();

  var i2=0;
  var j2=0;

  ctx.beginPath();
	ctx.lineWidth = "3";
  ctx.strokeStyle = colorDots;//"White";
  ctx.rect(0+edgeSize*1.8, 0+edgeSize*1.8, unitSize-edgeSize*2*1.8, unitSize-edgeSize*2*1.8);//-edgeSize*2*1.8);
  ctx.stroke();
  ctx.closePath();

    ctx.beginPath();
  	ctx.lineWidth = "3";
    ctx.strokeStyle = colorDots;//"White";
    ctx.rect(0+edgeSize*1.8, unitSize+edgeSize*1.8, unitSize-edgeSize*2*1.8, unitSize-edgeSize*2*1.8);//-edgeSize*2*1.8);
    ctx.stroke();
    ctx.closePath();

	//**top edge
  //console.log(exitA[noOfImgPrnt])
	  ctx.lineWidth = "1";
    if(exitA[noOfImgPrnt]==0){
	  ctx.fillStyle = unitColor1;}
    else if(exitA[noOfImgPrnt]==90){
	  ctx.fillStyle = unitColor2;}
    else if(exitA[noOfImgPrnt]==180){
	  ctx.fillStyle = unitColor4;}
    else{ctx.fillStyle = unitColor3;}
	  ctx.beginPath();
		ctx.moveTo(i2*unitSize, j2*unitSize);
		ctx.lineTo(i2*unitSize+edgeSize, j2*unitSize+edgeSize);
		ctx.lineTo(i2*unitSize+unitSize-edgeSize,  j2*unitSize+edgeSize);
		ctx.lineTo(i2*unitSize+unitSize,  j2*unitSize);
		ctx.lineTo(i2*unitSize, j2*unitSize);
		ctx.fill();
		ctx.closePath();
		//ctx.stroke();

		//**left edge
		  ctx.lineWidth = "1";
      if(exitA[noOfImgPrnt]==0){
  	  ctx.fillStyle = unitColor2;}
      else if(exitA[noOfImgPrnt]==90){
  	  ctx.fillStyle = unitColor1;}
      else if(exitA[noOfImgPrnt]==180){
  	  ctx.fillStyle = unitColor3;}
      else{ctx.fillStyle = unitColor4;}
		  //ctx.fillStyle = unitColor2;
		  ctx.beginPath();
			ctx.moveTo(i2*unitSize, j2*unitSize);
			ctx.lineTo(i2*unitSize+edgeSize, j2*unitSize+edgeSize*2);
			ctx.lineTo(i2*unitSize+edgeSize,  j2*unitSize+unitSize*2-edgeSize);
			ctx.lineTo(i2*unitSize,  j2*unitSize+unitSize*2);
			ctx.lineTo(i2*unitSize, j2*unitSize*2);
			ctx.fill();
			ctx.closePath();
			//ctx.stroke();

			//**bottom edge
			  ctx.lineWidth = "1";
        if(exitA[noOfImgPrnt]==0){
    	  ctx.fillStyle = unitColor4;}
        else if(exitA[noOfImgPrnt]==90){
    	  ctx.fillStyle = unitColor3;}
        else if(exitA[noOfImgPrnt]==180){
    	  ctx.fillStyle = unitColor1;}
        else{ctx.fillStyle = unitColor2;}
			  //ctx.fillStyle = unitColor4;
			  ctx.beginPath();
				ctx.moveTo(i2*unitSize, j2*unitSize+unitSize*2);
				ctx.lineTo(i2*unitSize+edgeSize, j2*unitSize+unitSize*2-edgeSize);
				ctx.lineTo(i2*unitSize+unitSize-edgeSize,  j2*unitSize+unitSize*2-edgeSize);
				ctx.lineTo(i2*unitSize+unitSize,  j2*unitSize+unitSize*2);
				ctx.lineTo(i2*unitSize, j2*unitSize+unitSize*2);
				ctx.fill();
				ctx.closePath();
				//ctx.stroke();

				//**right edge
				  ctx.lineWidth = "1";
            if(exitA[noOfImgPrnt]==0){
        	  ctx.fillStyle = unitColor3;}
            else if(exitA[noOfImgPrnt]==90){
        	  ctx.fillStyle = unitColor4;}
            else if(exitA[noOfImgPrnt]==180){
        	  ctx.fillStyle = unitColor2;}
            else{ctx.fillStyle = unitColor1;}
				  //ctx.fillStyle = unitColor3;
				  ctx.beginPath();
					ctx.moveTo(i2*unitSize+unitSize, j2*unitSize+unitSize*2);
					ctx.lineTo(i2*unitSize+unitSize-edgeSize, j2*unitSize+unitSize*2-edgeSize);
					ctx.lineTo(i2*unitSize+unitSize-edgeSize,  j2*unitSize+edgeSize*2);
					ctx.lineTo(i2*unitSize+unitSize,  j2*unitSize);
					ctx.lineTo(i2*unitSize+unitSize, j2*unitSize+unitSize*2);
					//ctx.stroke();
					ctx.fill();
					ctx.closePath();

//else{//if neutral
  //**top text
  dumFont=108*unitScale;
  ctx.font = "bold "+dumFont+"px Arial";
  //ctx.font = "30px Arial";
  ctx.fillStyle = colorDots;//"White";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.lineWidth = "2";
  //ctx.fillText(""+dominoL[noOfImgPrnt],i2*unitSize+unitSize/2*unitScale,j2*unitSize+unitSize/2*unitScale);
  //ctx.fillText(""+dominoR[noOfImgPrnt],i2*unitSize+unitSize/2*unitScale,j2*unitSize+unitSize*1.5*unitScale);
  if(dominoL[noOfImgPrnt]==0){
	}
  else if(dominoL[noOfImgPrnt]==1){
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale,j2*unitSize+unitSize/2*unitScale, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
	}
  else if(dominoL[noOfImgPrnt]==2){
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale-unitSize/4,j2*unitSize+unitSize/2*unitScale-unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale+unitSize/4,j2*unitSize+unitSize/2*unitScale+unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
	}
  else if(dominoL[noOfImgPrnt]==3){
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale,j2*unitSize+unitSize/2*unitScale, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale-unitSize/4,j2*unitSize+unitSize/2*unitScale-unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale+unitSize/4,j2*unitSize+unitSize/2*unitScale+unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
	}
  else if(dominoL[noOfImgPrnt]==4){
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale-unitSize/4,j2*unitSize+unitSize/2*unitScale-unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale+unitSize/4,j2*unitSize+unitSize/2*unitScale+unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale-unitSize/4,j2*unitSize+unitSize/2*unitScale+unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale+unitSize/4,j2*unitSize+unitSize/2*unitScale-unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
	}
  else if(dominoL[noOfImgPrnt]==5){
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale,j2*unitSize+unitSize/2*unitScale, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale-unitSize/4,j2*unitSize+unitSize/2*unitScale-unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale+unitSize/4,j2*unitSize+unitSize/2*unitScale+unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale-unitSize/4,j2*unitSize+unitSize/2*unitScale+unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale+unitSize/4,j2*unitSize+unitSize/2*unitScale-unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
	}
  else if(dominoL[noOfImgPrnt]==6){
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale-unitSize/4,j2*unitSize+unitSize/2*unitScale, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale+unitSize/4,j2*unitSize+unitSize/2*unitScale, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale-unitSize/4,j2*unitSize+unitSize/2*unitScale-unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale+unitSize/4,j2*unitSize+unitSize/2*unitScale+unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale-unitSize/4,j2*unitSize+unitSize/2*unitScale+unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale+unitSize/4,j2*unitSize+unitSize/2*unitScale-unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
	}
  	else{}
  if(dominoR[noOfImgPrnt]==0){
	}
  else if(dominoR[noOfImgPrnt]==1){
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale,j2*unitSize+unitSize*1.5*unitScale, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
	}
  else if(dominoR[noOfImgPrnt]==2){
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale-unitSize/4,j2*unitSize+unitSize*1.5*unitScale-unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale+unitSize/4,j2*unitSize+unitSize*1.5*unitScale+unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
	}
  else if(dominoR[noOfImgPrnt]==3){
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale,j2*unitSize+unitSize*1.5*unitScale, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale-unitSize/4,j2*unitSize+unitSize*1.5*unitScale-unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale+unitSize/4,j2*unitSize+unitSize*1.5*unitScale+unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
	}
  else if(dominoR[noOfImgPrnt]==4){
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale-unitSize/4,j2*unitSize+unitSize*1.5*unitScale-unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale+unitSize/4,j2*unitSize+unitSize*1.5*unitScale+unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale-unitSize/4,j2*unitSize+unitSize*1.5*unitScale+unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale+unitSize/4,j2*unitSize+unitSize*1.5*unitScale-unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
	}
  else if(dominoR[noOfImgPrnt]==5){
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale,j2*unitSize+unitSize*1.5*unitScale, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale-unitSize/4,j2*unitSize+unitSize*1.5*unitScale-unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale+unitSize/4,j2*unitSize+unitSize*1.5*unitScale+unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale-unitSize/4,j2*unitSize+unitSize*1.5*unitScale+unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale+unitSize/4,j2*unitSize+unitSize*1.5*unitScale-unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
	}
  else if(dominoR[noOfImgPrnt]==6){
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale-unitSize/4,j2*unitSize+unitSize*1.5*unitScale, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale+unitSize/4,j2*unitSize+unitSize*1.5*unitScale, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale-unitSize/4,j2*unitSize+unitSize*1.5*unitScale-unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale+unitSize/4,j2*unitSize+unitSize*1.5*unitScale+unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale-unitSize/4,j2*unitSize+unitSize*1.5*unitScale+unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(i2*unitSize+unitSize/2*unitScale+unitSize/4,j2*unitSize+unitSize*1.5*unitScale-unitSize/4, 20*unitScale, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
	}
  else{}
//}



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
