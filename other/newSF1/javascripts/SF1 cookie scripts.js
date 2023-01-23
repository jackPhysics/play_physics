// JavaScript Document
//var loadBox = "";
var noOfCookiesFlag=2;
var setUpFlag = false;
var citiesInLoad = false;

function setCookie(d){

  var cookName = "SF1Cookie";
  //d=d.slice(0,100);
  var cookVal = ""+d;
  //alert("this is d.length:" +d.length);
  //var cookVal = "here it is!"
  var date = new Date();
  var timeKept = 604800000*5;//604800000 is week in milliseconds
  date.setTime(date.getTime()+timeKept);
  var expireDate = date.toGMTString();
  //expireDate = Never;
  var path = ";path=/";
 
  var myCookie = cookName + "=" + cookVal + ";expires=" + expireDate;// + path;
  document.cookie = myCookie;
  
  //getCookie();
}

function setCookie2(d){

  var cookName = "SF1Cookie2";
  //d=d.slice(0,100);
  var cookVal = ""+d;
  //alert("this is d.length:" +d.length);
  //var cookVal = "here it is!"
  var date = new Date();
  var timeKept = 604800000*5;//604800000 is week in milliseconds
  date.setTime(date.getTime()+timeKept);
  //date.setTime(date.getTime()+604800000);
  var expireDate = date.toGMTString();
  //expireDate = Never;
  var path = ";path=/";
 
  var myCookie = cookName + "=" + cookVal + ";expires=" + expireDate;// + path;
  document.cookie = myCookie;
}


function getCookie(){

if(noOfCookiesFlag==1){
  var incCookies = document.cookie.split(";");
  var cookLength = incCookies.length;
  var cookieName = "";
  var cookieValue = ""; 
  var cookieValue2 = ""; 
  for (var c=0; c<cookLength; c++){
      var pairs = incCookies[c].split("=");
      cookieName = pairs[0];
      //cookieValue2 = pairs[1];
      if(cookieName=="SF1Cookie"){
      cookieValue = pairs[1];} 
      //alert("Name: "+cookieName+" "+"Value: "+cookieValue2);
  }
}
else{

  var incCookies = document.cookie.split(";");
  var cookLength = incCookies.length;
  var cookieName = "";
  var cookieValue = "";
  var cookieValue1 = ""; 
  var cookieValue2 = ""; 
    var countCookies=0;
  for (var c=0; c<cookLength; c++){
      var pairs = incCookies[c].split("=");
      cookieName = pairs[0];
      //alert("pairs[0]="+pairs[0]+" pairs[1]="+pairs[1]);
      //cookieValue2 = pairs[1];
      if(countCookies==0){
      //if(cookieName=="SF1Cookie"){
      cookieValue1 = pairs[1];
      //alert("1:*"+pairs[1]);
      //alert("2:*"+cookieValue1);
      } 
      else if(countCookies==1){
      //else if(cookieName=="SF1Cookie2"){
      cookieValue2 = pairs[1];
      //alert("3:*"+pairs[1]);
      //alert("4:*"+cookieValue2);
      }
      countCookies++;
      //alert("Name: "+cookieName+" "+"Value: "+cookieValue2);
  }
      cookieValue = cookieValue1+cookieValue2;
}
      //loadBox = cookieValue; 
      //alert(cookieValue);
      citiesInLoad = true;
      reload2(cookieValue);
      //alert("Name: "+cookieName+" "+"Value: "+cookieValue);
}


function clearCookie(){

  var cookName = "SF1Cookie";
  var cookVal = "";
  var date = new Date();
  date.setTime(date.getTime()-60);
  var expireDate = date.toGMTString();
  //var path = ";path=/";
   
  var myCookie = cookName + "=" + cookVal + ";expires=" + expireDate; // + path;
  document.cookie = myCookie;

}

function resetCookie(){

  //var cookName = "SF1Cookie";
  var cookVal = "0,0,0,0,0,0,109,16,0,0,0,0,0,0,0,122,7,0,0,0,0,0,0,0,124,23,0,0,0,0,0,0,0,111,95,0,0,0,0,0,0,0,124,101,0,0,0,0,0,0,0,125,118,0,0,0,0,0,0,0,40,24,0,0,0,0,0,0,0,53,47,0,0,0,0,0,0,0,54,78,0,0,0,0,0,0,0,26,110,0,0,0,0,0,0,0,137,17,0,A,A,A,0,0,1,8,A,0,charts/SF1.htm";
  //var date = new Date();
  //date.setTime(date.getTime()+604800000);
  //var expireDate = date.toGMTString();
  //var path = ";path=/";
 
  //var myCookie = cookName + "=" + cookVal + ";expires=" + expireDate; // + path;
  //document.cookie = myCookie;
      citiesInLoad = false;
      reload2(cookVal);
}

function defaultSetup(){

  //var cookName = "SF1Cookie";
  var cookVal = "0,0,0,0,0,0,109,16,0,0,0,0,0,0,0,122,7,0,0,0,0,0,0,0,124,23,0,0,0,0,0,0,0,111,95,0,0,0,0,0,0,0,124,101,0,0,0,0,0,0,0,125,118,0,0,0,0,0,0,0,40,24,0,0,0,0,0,0,0,53,47,0,0,0,0,0,0,0,54,78,0,0,0,0,0,0,0,26,110,0,0,0,0,0,0,0,137,17,0,A,A,A,0,0,1,8,A,0,charts/SF1.htm";
  //var date = new Date();
  //date.setTime(date.getTime()+604800000);
  //var expireDate = date.toGMTString();
  //var path = ";path=/";
   
  //var myCookie = cookName + "=" + cookVal + ";expires=" + expireDate; // + path;
  //document.cookie = myCookie;
      citiesInLoad = false;
      reload2(cookVal);
}

function p8Setup(){

   var cookVal = "0,0,0,0,0,0,109,16,0,0,0,0,0,0,0,122,7,0,0,0,0,0,0,0,124,23,0,0,0,0,0,0,0,111,95,0,0,0,0,0,0,0,124,101,0,0,0,0,0,0,0,125,118,0,0,0,0,0,0,0,40,24,0,0,0,0,0,0,0,53,47,0,0,0,0,0,0,0,54,78,0,0,0,0,0,0,0,26,110,0,0,0,0,0,0,0,137,17,0,A,A,A,0,0,1,8,A,0,charts/SF1.htm";
   
      citiesInLoad = false;
      reload2(cookVal);
}

function p10Setup(){

   var cookVal = "0,0,0,0,0,0,109,16,0,0,0,0,0,0,0,122,7,0,0,0,0,0,0,0,124,23,0,0,0,0,0,0,0,111,95,0,0,0,0,0,0,0,124,101,0,0,0,0,0,0,0,125,118,0,0,0,0,0,0,0,40,24,0,0,0,0,0,0,0,53,47,0,0,0,0,0,0,0,54,78,0,0,0,0,0,0,0,26,110,0,0,0,0,0,0,0,137,17,0,A,A,A,0,0,1,8,A,0,charts/SF1.htm"; 
     
      citiesInLoad = false;
      reload2(cookVal);
  
}

function advancedGameSetup(){

  var cookName = "SF1Cookie";
  var cookVal = "0,0,0,0,0,0,109,16,0,0,0,0,0,0,0,122,7,0,0,0,0,0,0,0,124,23,0,0,0,0,0,0,0,111,95,0,0,0,0,0,0,0,124,101,0,0,0,0,0,0,0,125,118,0,0,0,0,0,0,0,40,24,0,0,0,0,0,0,0,53,47,0,0,0,0,0,0,0,54,78,0,0,0,0,0,0,0,26,110,0,0,0,0,0,0,0,137,17,0,A,A,A,0,0,1,8,A,0,charts/SF1.htm";
  var date = new Date();
  date.setTime(date.getTime()+604800000);
  var expireDate = date.toGMTString();
  //var path = ";path=/";
  
  var myCookie = cookName + "=" + cookVal + ";expires=" + expireDate; // + path;
  document.cookie = myCookie;
}

function saveWindow2(){
	
var swLeft=0;
var swTop=0;
//var swText=0;
var swMark=0;
var swDead=0;
var swCav=0; //dismounted
var swDis=0; //ineffective
var swTrans=0; //use for routed
var swTrans1=0; //passenger id -spare 1 - use for exited
var swTrans2=0; //passenger title - spare 2
var imgIndex=0;
var activeIndex=0;
var allText="";
var thisShift=0;

//if(halfSize==1){thisShift=shift;}
	for(k=0;k<noOfImages;k++){
	//for(k=imgStart;k<lastIndex+1;k++){
	activeIndex=k;
	//imgIndex=activeIndex+1;
	swLeft = piecesLeft[k];
	swTop = piecesTop[k];
	if(movedA[activeIndex]==1){
		swMark = 1;
		}
	else{
		swMark = 0;
		}
	if(disruptedA[k]==1){
		swDis = 1;
		}
	else{
		swDis = 0;
		}
	if(armourA[k]=="l"){
		if(neutN[activeIndex]>0){
			swDis = neutN[activeIndex];}
		else{swDis=0;}
	}
	if(deadA[activeIndex]>0){
		swDead = deadA[activeIndex];
		}
	else{
		swDead = 0;
		}
	if(dismountA[k]==1){
		swCav = 1;
		}
	else{
		swCav = 0;
		}
	if(panicA[activeIndex]>0){
		swTrans = panicA[activeIndex];
		}
	else{
		swTrans = 0;
		}
	if(exitA[activeIndex]>0){
		swTrans1 = exitA[activeIndex];
		}
	else{
		swTrans1 = 0;
		}
	if(passengerA[activeIndex]>0){
		swTrans2 = passengerA[activeIndex];
		}
	else{
		swTrans2 = 0;
		}

	allText=allText+swTrans+", "+swTrans1+", "+swTrans2+", "+swDead+", "+swMark+", "+swDis+", "+swLeft+", "+swTop+", "+swCav+",";
	}

	for(var c=0; c<noOfCities; c++){
		allText=allText + newCityControlA[c]+",";}


	allText=allText+unionVP+", "+rebelVP+", "+turnNumb+", "+ size +","+ turnLetter +","+ turnNumber +","+situationAddress;
	//var win = open("", null, "toolbar=0,location=0,directories=0,status=0,menubar=1,scrollbars=1,resizable=1,width=400,height=200,left=200,top=200");
	//win.document.write(allText);
	//alert(allText);
	//clearCookie();
	if(allText.length<3000){
	noOfCookiesFlag=1;
	setCookie(allText);}
	else{
	noOfCookiesFlag=2;
	setCookie(allText.slice(0,2999));
	setCookie2(allText.slice(2999));
  }
  allText="";
	//win.document.close();
  }
  

function reload2(d){
	//var catchText="";
	//var loadBox = document.getElementById("textbox1");
	//var loadBox = d;
	//var catchText=loadBox.value;
	var catchText= ""+d;
	//alert(""+catchText);//ALLOW THIS to show the data in the cookie *****
	var loadA=catchText.split(",");
	var loopTill = loadA.length;
	var loadSize=1*loadA[loopTill-4];
	reScale=size/loadSize;
	var flipIndex=0;
	//var noPieces=lastIndex-imgStart;
	var noPieces=noOfImages;
	//for(m=0;m<((noPieces+1)*9);m=m+9){ //9=number of saved items for each unit
		for(n=0; n<noPieces; n++){
		activeIndex=n;
		m=n*9;
    //activeIndex=Math.floor(m/9);
		panicA[activeIndex]=loadA[m];
		//transA[activeIndex]=loadA[m];
		//dummy1=loadA[m+1];
		//if(dummy1>0){dummy1++;dummy1++;}
		//transporterA[activeIndex]=dummy1;//loadA[m+1];
		exitA[activeIndex]=1*loadA[m+1];//spare 1 - exited
		passengerA[activeIndex]=1*loadA[m+2];//spare 2
		deadA[activeIndex]=1*loadA[m+3];
		movedA[activeIndex]=1*loadA[m+4];
		disruptedA[activeIndex]=1*loadA[m+5];
		dismountA[activeIndex]=1*loadA[m+8];
		if(setUpFlag){//need this because pieces are slightly out of place for historical setup
		piecesLeft[activeIndex]=(1*loadA[m+6]-5)*reScale;
		piecesTop[activeIndex]=(1*loadA[m+7]-5)*reScale;
		}
		else{//use for all up setups
    piecesLeft[activeIndex]=1*loadA[m+6]*reScale;
		piecesTop[activeIndex]=1*loadA[m+7]*reScale;
    }
	
	//mark if should be marked...
    changeMark(imageArray[activeIndex], activeIndex, 0);
		/*if(movedA[activeIndex]==1){
			imageArray[activeIndex].style.borderStyle="dotted";
			}
		else{imageArray[activeIndex].style.borderStyle="solid";}*/
			
	//routed units
				
		if(panicA[activeIndex]==1){
			var pieceName = unitsA[thisIsA[activeIndex]*itemsPerUnit+1]; //imageArray[activeIndex].getAttribute("title");
			var pieceName = pieceName.slice(0,2);
			var base=Abase;
			if(activeIndex>=gerNumber){base=Bbase;}
			imageArray[activeIndex].setAttribute("src", "units/"+base+pieceName+"p.jpg");
			titles = imageArray[activeIndex].getAttribute("title");
			imageArray[activeIndex].setAttribute("title", "ROUTING: " + titles);
		}
		
	//dismounted?...
		if(dismountA[activeIndex]==1){
			titles = imageArray[activeIndex].getAttribute("title");
			imageArray[activeIndex].setAttribute("title", "dismounted: " + titles);
			}
		else{}
			
	
	//out of supply
	if(disruptedA[activeIndex]>=1){
    changeSupply(imageArray[activeIndex], activeIndex, 0);}
	//disrupted if should be disrupted...
	/*if(armourA[activeIndex]!="l"){// in prestags leaders cannot be D so use this to store leader level	
		if(disruptedA[activeIndex]==1){
			titles = imageArray[activeIndex].getAttribute("title");
			imageArray[activeIndex].setAttribute("title", titles+": ineffective!");//"DISRUPTED: " + titles);
			imageArray[activeIndex].style.borderColor="red";
		}
	}
	else{
		if(disruptedA[activeIndex]>0){
		neutN[activeIndex]=disruptedA[activeIndex]-1;
		disruptedA[activeIndex]=0;
		if(neutN[activeIndex]==0){neutN[activeIndex]=4;}
		var pieceName=neutN[activeIndex]+"L";
		//var pieceName = imageArray[activeIndex].getAttribute("title");
		//var pieceName = pieceName.slice(0,4);
		changeNeutralPic(pieceName);
		}
	}*/
	
	//exited units
	if(exitA[activeIndex]==1){
				titles = imageArray[activeIndex].getAttribute("title");
				imageArray[activeIndex].setAttribute("title", "EXITED: " + titles);
				imageArray[activeIndex].style.borderColor="green";
				
			}
	
	//dead units
	if(deadA[activeIndex]>=1){
    changeElim(imageArray[activeIndex], activeIndex, 0);
			/*firedA[activeIndex]=0;
			titles = imageArray[activeIndex].getAttribute("title");
			imageArray[activeIndex].setAttribute("title", "DESTROYED: " + titles);
	if(activeIndex<gerNumber){
					imageArray[activeIndex].style.width=sunit2/2;
					imageArray[activeIndex].style.height=sunit2/2;
					imageArray[activeIndex].setAttribute("src", "units/"+Abase+"dead.jpg");
			}
			else {
					imageArray[activeIndex].style.width=sunit2/2;
					imageArray[activeIndex].style.height=sunit2/2;
					imageArray[activeIndex].setAttribute("src", "units/"+Bbase+"dead.jpg");
			}*/
		}
		
	}
	
	flipIndex=loopTill-7-noOfCities;
	for(var c=0; c<noOfCities; c++){
		newCityControlA[c]=loadA[flipIndex];
		flipIndex++;}
		restoreCities();

	rebelVP=1*loadA[loopTill-6];
	unionVP=1*loadA[loopTill-7];
	turnNumb=1*loadA[loopTill-5];
	turnLetter=""+loadA[loopTill-3];
	//var loopy=loadA[loopTill-2];
	//turnNumber=0;
	turnNumber=1*loadA[loopTill-2];
	//for(t=0;t<loopy;t++){//I think we do it this way because its
	//	turnNumber++;} //loading a string not a number (but VPs work...)
	//lastTurn();
	turnNumber=turnNumber*1;
	//nextTurn();
	//lastTurn();
	loadA.length=0;
		if(hiddenMovement){
		if(turnNumb==1||turnNumb==4){
			hideRus=0;//=1;
			hideGer=0;}
		if(turnNumb==2||turnNumb==3){
			hideRus=0;
			hideGer=0;}//=1;}
		hideToggle();
		}
	//loadBox.value = "Data re-loaded successfully!"
	alert("Data re-loaded successfully!");
	//setUpFlag = false;
	changeSize();
	//statusNow;
	}
	
function reloadReset(){
  
  saveWindow();
  resetCookie();
  //getCookie();
}

	
function reloadSetup(){
  
  //saveWindow();
  //setUpFlag = true;
  defaultSetup();
  //getCookie();
}

function reloadAdvancedGame(){
  
  //saveWindow();
  advancedGameSetup();
  getCookie();
}
