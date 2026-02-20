
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
        if(cmbtFactorsMaxA[noOfImgPrnt]>0){
        ctx.fillText("",i2*unitSize+edgeSize*1*unitScale,j2*unitSize+(unitSize-edgeSize*0.9)*unitScale);}//25   35
        else if(unitsA[whatType*noOfItems+5]=="air"){
        ctx.fillText("",i2*unitSize+edgeSize*1*unitScale,j2*unitSize+(unitSize-edgeSize*0.9)*unitScale);}
        else{
        ctx.fillText("",i2*unitSize+edgeSize*1*unitScale,j2*unitSize+(unitSize-edgeSize*0.9)*unitScale);}

  //if(countOutUnits>loopNoXtra){break;}

    //**text in box
    countOutUnits=0;
    dumFont=144*unitScale;
    ctx.font = ""+dumFont+"px Arial";
    //ctx.font = "40px Arial";
    ctx.fillStyle = textColorThis;//"#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
  //ctx.fillStyle = "Black";//boxColor;
  //ctx.translate(50,50);
  //ctx.rotate(Math.PI/20);
  //ctx.translate(-50,-50);
  ctx.fillText(""+cmbtFactorsMaxA[noOfImgPrnt],i2*unitSize+96*unitScale, j2*unitSize+(boxTop+70)*unitScale);//25   35
  //ctx.stroke();//countOutUnits++;
    //if(countOutUnits>loopNoXtra){break;}
        //ctx.stroke();


//combat factors
//countOutUnits=0;dumFont=24*unitScale;
    dumFont=56*unitScale;
    ctx.font = "bold "+dumFont+"px Arial";
    ctx.fillStyle = textColorThis;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        if(unitsA[whatType*noOfItems+5]!="air"&&unitsA[whatType*noOfItems+5]!="depot"){
        ctx.fillText("",i2*unitSize+100*unitScale,j2*unitSize+155*unitScale);}
        else{
        ctx.fillText("",i2*unitSize+100*unitScale,j2*unitSize+155*unitScale);
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
        	  ctx.fillText("",i2*unitSize+20*unitScale,j2*unitSize+unitSize/4.5*unitScale, 110);//, 30
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
            ctx.fillText("",i2*unitSize+225*unitScale,j2*unitSize+unitSize/5*4.0*unitScale, 110);
            ctx.translate(150, 150);
            ctx.rotate(Math.PI/2);
            ctx.translate(-150, -150);
}//end of not neutral
else{//if neutral
  //**top text
  dumFont=48*unitScale;
  ctx.font = "bold "+dumFont+"px Arial";
  //ctx.font = "30px Arial";
  ctx.fillStyle = textColorThis;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.lineWidth = "2";
  ctx.fillText(""+unitsA[whatType*noOfItems+5],i2*unitSize+100*unitScale,j2*unitSize+85*unitScale);

  //bottom text
      dumFont=48*unitScale;
      ctx.font = "bold "+dumFont+"px Arial";
      ctx.fillStyle = textColorThis;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(""+unitsA[whatType*noOfItems+6],i2*unitSize+100*unitScale,j2*unitSize+155*unitScale);

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
