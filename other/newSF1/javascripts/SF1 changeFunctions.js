// JavaScript Document

/*
function rollDieTable() //roll d6
function changeMark(p, i, f){//mark unit
function changeDead(p, i, f){//unit destroyed
*/


function rollDieTable()
{
if(dieInHand==1){
	var noPips=0;
	noPips=Math.round(Math.random()*6+0.5);
	document.getElementById("diceResult").textContent = "" + noPips;//"You rolled " + noPips;
	//document.getElementById("rollBtn").setAttribute("value", "pick up d6");
	dieInHand=0;
	}
else{
	document.getElementById("diceResult").textContent = "d6";
	//document.getElementById("rollBtn").setAttribute("value", "Roll d6");
	dieInHand=1;}
}

function changeMark(p, i, f){
  //i = piece to be changed, f = flag change (1=change, 0=keep the same (for reloading))

  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;

  if(flagChange==1){
    if(movedA[pieceIndex]!=1){
			activePiece.style.borderStyle="dotted";//"dashed";
			movedA[pieceIndex]=1;}
		else{
			activePiece.style.borderStyle="solid";
			movedA[pieceIndex]=0;}
  }
  else{//no change, mark pieces as their flags indicate
    if(movedA[pieceIndex]==1){
			activePiece.style.borderStyle="dotted";//"dashed";
			//movedA[activeIndex]=1;
      }
		else{
			activePiece.style.borderStyle="solid";
			//movedA[activeIndex]=0;
      }


  }

  if(flagChange==1){
  //save the page
  saveWindow2();}
}

//  if(keyText=="t"||keyText=="T"){ //unit transported
function changeTransport(p, i, f){//pick up, drop off passengers
  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;
  activeImage = activePiece;
  activeIndex = pieceIndex;
  if(flagChange==0){
    if(transA[activeIndex]==1){transA[activeIndex]=0;}
    else{transA[activeIndex]=1;}
  }

	if(deadA[activeIndex]==0){
	if(disruptedA[activeIndex]!=1){
	if(hideA[activeIndex]!=1){

	if(armourA[activeIndex]=="t"||armourA[activeIndex]=="w"||armourA[activeIndex]=="h"){
		if(transA[activeIndex]==0){
		//activePiece.style.borderColor="blue";
		transA[activeIndex]=1;
		findPas(activeImage, activeIndex);
		 }
		else{
		titles = activePiece.getAttribute("title");
		titles2=titles.slice(11);
		titles2=titles2.slice(0,-passengerA[activeIndex]);
		activePiece.setAttribute("title", titles2);
		//activePiece.style.borderColor="black";
		leftPos = +activeImage.style.left.slice(0,-2);
		topPos = +activeImage.style.top.slice(0,-2);
		var ps=imageArray[transporterA[activeIndex]];
		//alert("activeIndex="+activeIndex+"\n"+"transporterA[activeIndex]="+transporterA[activeIndex]+"\n"+"imageArray[transporterA[activeIndex]]="+imageArray[transporterA[activeIndex]]+"\n");
		ps.style.zIndex=nextZ+1;
		ps.style.left=leftPos+(pieceSize*boardSize)/4+"px";//pieceSize
		ps.style.top=topPos+(pieceSize*boardSize)/4+"px";
		transA[activeIndex]=0;
		transporterA[activeIndex]=0;
		}
	}
	if(armourA[activeIndex]=="a"){
		if(transA[activeIndex]==0){
		findPas(activeImage, activeIndex);
		//if(findPasFlag==1){
		//titles = document.all[activeIndex].getAttribute("title");
		//document.all[activeIndex].setAttribute("title", "LOADED UP: " + titles);
		//activePiece.style.borderColor="white";
		transA[activeIndex]=2;
		//}
		}
		else{
		titles = activeImage.getAttribute("title");
		titles2=titles.slice(11);
		titles2=titles2.slice(0,-passengerA[activeIndex]);
		activePiece.setAttribute("title", titles2);
		//activePiece.style.borderColor="black";
		leftPos = +activeImage.style.left.slice(0,-2);
		topPos = +activeImage.style.top.slice(0,-2);
		var ps=imageArray[transporterA[activeIndex]];
		ps.style.zIndex=nextZ+1;
		ps.style.left=leftPos+(pieceSize*boardSize)/4+"px";
		ps.style.top=topPos+(pieceSize*boardSize)/4+"px";
		transA[activeIndex]=0;
		transporterA[activeIndex]=0;
		}

	}
	}
	}
	}
	mouseActive=0;
	doEdgeColor();
	/*document.all[activeIndex].style.borderColor="black";
	if(transA[activeIndex]==1){
	document.all[activeIndex].style.borderColor="blue";}
	else if(transA[activeIndex]==2){
	document.all[activeIndex].style.borderColor="white";}
	if(disruptedA[activeIndex]==1){
	document.all[activeIndex].style.borderColor="red";}*/

}


function findPas(i, k){
	alert("The next piece you choose will become the passenger");
	findPasFlag=1;
	transActive=i;
	transIndex=k;
}

function checkPas(i){
	if(armourA[i]!="n"){
		alert("This unit cannot be transported!");
		findPasFlag=0;
		transActive.style.borderColor="black";
		mouseActive=0;
		transA[transActive]=0;
		}
	else{
		if(deadA[i]>0){alert("This unit cannot be transported!");
		findPasFlag=0;
		transActive.style.borderColor="black";
		mouseActive=0;
		transA[transActive]=0;
		}
		else if(disruptedA[i]>0){alert("This unit cannot be transported!");
		findPasFlag=0;
		transActive.style.borderColor="black";
		mouseActive=0;
		transA[transActive]=0;
		}
		else{
		transporterA[transIndex]=i;
		//alert("transIndex="+transIndex+"\n"+"passenger"+i);
		//if(findPasFlag==1){
		titles = transActive.getAttribute("title");
		transActive.setAttribute("title", "LOADED UP: " + titles);
		//document.all[transActive].style.borderColor="blue";
		//transA[transActive]=1;
		imageArray[i].style.zIndex=nextZ-1;
		imageArray[i].style.left=leftPos+"px";
		imageArray[i].style.top=topPos+"px";
		title1 = transActive.getAttribute("title");
		title2 = imageArray[i].getAttribute("title");
		transActive.setAttribute("title", title1+" carrying: "+ title2);
		passengerA[transIndex]=title2.length + 11; //hold the length of added title (11=_carrying:_)
		findPasFlag=0;
		}
	}

}


function changeElim(p, i, f){//unit REMOVED from board
  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;
  activeImage = activePiece;
  activeIndex = pieceIndex;
  if(flagChange==0){
    if(deadA[activeIndex]==1){deadA[activeIndex]=0;}
    else{deadA[activeIndex]=1;}
  }
//if(keyText=="x"||keyText=="X"){ //unit destroyed
		if(hideA[activeIndex]!=1){
		if(deadA[activeIndex]==0){
			//firerA[activeIndex]=0;
			if(disruptedA[activeIndex]==1){ //undisrupt before destroy
				titles = activeImage.getAttribute("title");
				titles2=titles.slice(0,-14); //titles2=titles.slice(11);
				activeImage.setAttribute("title", titles2);
				disruptedA[activeIndex]=0;}
			//if(panicA[activeIndex]==1){ //unpanic before destroy
			//	titles = document.all[activeIndex].getAttribute("title");
			//	titles2=titles.slice(9);
			//	document.all[activeIndex].setAttribute("title", titles2);
			//	panicA[activeIndex]=0;}

		if(deadA[activeIndex]!=1){
		if(flagChange != 0){

			var deadPosLeft =Math.round((Math.random()*760+10)*boardSize/8);
				var deadPosTop=Math.round((Math.random()*230+10)*boardSize/8);
				activeImage.style.left=deadPosLeft+"px";
				activeImage.style.top=deadPosTop+"px";
        piecesLeft[activeIndex]= deadPosLeft/boardSize;
        piecesTop[activeIndex]= deadPosTop/boardSize;

			}
			}
			//if(armourA[activeIndex]=="s"){navyMissions(9);}
			//if(armourA[activeIndex]=="a"){airMissions(9);}
			titles = activeImage.getAttribute("title");
			activeImage.setAttribute("title", "DESTROYED: " + titles);
			deadA[activeIndex]=1;
			if(activeIndex<gerNumber){
				gerVP=Number(gerVP)+Number(unitsA[thisIsA[activeIndex]*itemsPerUnit+4]);}
			else{alliedVP=Number(alliedVP)+Number(unitsA[thisIsA[activeIndex]*itemsPerUnit+4]);}
			}
		else{						//return from the dead!
			titles = activeImage.getAttribute("title");
			titles2=titles.slice(11);
			activeImage.setAttribute("title", titles2);
			deadA[activeIndex]=0;
			if(activeIndex<gerNumber){
				gerVP=Number(gerVP)-Number(unitsA[thisIsA[activeIndex]*itemsPerUnit+4]);}
			else{alliedVP=Number(alliedVP)-Number(unitsA[thisIsA[activeIndex]*itemsPerUnit+4]);}
			} //flag unit as alive

		mouseActive=0;
		doEdgeColor();
		}
else{alert("Cannot destroy hidden units!");}
}//end of 'x' keyPress function
//} //end of "if(activeIndex<neutNumber){" loop
//else{alert("not to a blank you don't!");}

function changeWreck(p, i, f){//panzerblitz destroyed function
  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;
  activeImage = activePiece;
  activeIndex = pieceIndex;
  if(flagChange==0){
    if(deadA[activeIndex]==1){deadA[activeIndex]=0;}
    else{deadA[activeIndex]=1;}
  }
//if(keyText=="x"||keyText=="X"){ //unit destroyed
	if(hideA[activeIndex]!=1){
		if(deadA[activeIndex]==0){
			if(disruptedA[activeIndex]==1){ //undisrupt before destroy
				titles = activeImage.getAttribute("title");
				titles2=titles.slice(11);
				activeImage.setAttribute("title", titles2);
				disruptedA[activeIndex]=0;}

			if(activeIndex<gerNumber){
				if(armourA[activeIndex]=="a"||armourA[activeIndex]=="h"){
					deadA[activeIndex]=2; //2=dead armour //flag unit as dead
					activeImage.setAttribute("src", "units/rus/wreck.jpg");//"units/rus/wreck.jpg");
					if(transA[activeIndex]>=1){
						ps=transporterA[activeIndex];
						imageArray[ps].style.width=(pieceSize*boardSize)/2+"px";
						imageArray[ps].style.height=(pieceSize*boardSize)/2+"px";
				imageArray[ps].style.left=(piecesLeft[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
				imageArray[ps].style.top=(piecesTop[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
						numb=Math.round(Math.random()*1+0.5); //numb=Math.round(Math.random()*4+0.5);
						imageArray[ps].setAttribute("src", "units/rus/dead"+numb+".jpg");
						deadA[ps]=deadA[ps]+1;
						titles = imageArray[ps].getAttribute("title");
		 				imageArray[ps].setAttribute("title", "DESTROYED: " + titles);
						titles = activeImage.getAttribute("title");
						titles2=titles.slice(11);
						titles2=titles2.slice(0,-passengerA[activeIndex]);
						activeImage.setAttribute("title", titles2);
						transA[activeIndex]=0;
						deadA[ps]=1;
						rusDeadPts=Number(rusDeadPts)+Number(unitsA[thisIsA[ps]*noOfItems+5]);
						transporterA[activeIndex]=0;
						rusDead++;}
				}
				else if(armourA[activeIndex]=="t"||armourA[activeIndex]=="w"){
					deadA[activeIndex]=1; //1=dead non-armour
					activeImage.style.width=(pieceSize*boardSize)/2+"px";
					activeImage.style.height=(pieceSize*boardSize)/2+"px";
				activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
				activeImage.style.top=(piecesTop[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
					activeImage.setAttribute("src", "units/rus/trwreck.jpg");
					if(transA[activeIndex]>=1){
						ps=transporterA[activeIndex];
						imageArray[ps].style.width=(pieceSize*boardSize)/2+"px";
						imageArray[ps].style.height=(pieceSize*boardSize)/2+"px";
				imageArray[ps].left=(piecesLeft[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
				imageArray[ps].style.top=(piecesTop[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
						numb=Math.round(Math.random()*1+0.5); //numb=Math.round(Math.random()*4+0.5);
						imageArray[ps].setAttribute("src", "units/rus/dead"+numb+".jpg");
						deadA[ps]=deadA[ps]+1;
						titles = imageArray[ps].getAttribute("title");
		 				imageArray[ps].setAttribute("title", "DESTROYED: " + titles);
						titles = activeImage.getAttribute("title");
						titles2=titles.slice(11);
						titles2=titles2.slice(0,-passengerA[activeIndex]);
						activeImage.setAttribute("title", titles2);
						transA[activeIndex]=0;
						deadA[ps]=1;
						rusDeadPts=Number(rusDeadPts)+Number(unitsA[thisIsA[ps]*noOfItems+5]);
						transporterA[activeIndex]=0;
						rusDead++;}
				}
				else {
					deadA[activeIndex]=1; //1=dead non-armour
					activeImage.style.width=(pieceSize*boardSize)/2+"px";
					activeImage.style.height=(pieceSize*boardSize)/2+"px";
				activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
				activeImage.style.top=(piecesTop[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
					numb=Math.round(Math.random()*1+0.5); //numb=Math.round(Math.random()*4+0.5);
					activeImage.setAttribute("src", "units/rus/dead"+numb+".jpg");}
			rusDeadPts=Number(rusDeadPts)+Number(unitsA[thisIsA[activeIndex]*noOfItems+5]);
			rusDead++;
			}
			else {
				if(armourA[activeIndex]=="a"||armourA[activeIndex]=="h"){
					deadA[activeIndex]=2; //2=dead armour
					activeImage.setAttribute("src", "units/ger/wreck.jpg");
					if(transA[activeIndex]>=1){
					ps=transporterA[activeIndex];
					imageArray[ps].style.width=(pieceSize*boardSize)/2+"px";
					imageArray[ps].style.height=(pieceSize*boardSize)/2+"px";
				imageArray[ps].left=(piecesLeft[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
				imageArray[ps].top=(piecesTop[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
					numb=Math.round(Math.random()*1+0.5); //numb=Math.round(Math.random()*4+0.5);
					imageArray[ps].setAttribute("src", "units/ger/dead"+numb+".jpg");
					deadA[transporterA[activeIndex]]=1;
					titles = imageArray[ps].getAttribute("title");
		 			imageArray[ps].setAttribute("title", "DESTROYED: " + titles);
					titles = activeImage.getAttribute("title");
					titles2=titles.slice(11);
					titles2=titles2.slice(0,-passengerA[activeIndex]);
					activeImage.setAttribute("title", titles2);
					transA[activeIndex]=0;
					gerDeadPts=Number(gerDeadPts)+Number(unitsA[thisIsA[ps]*noOfItems+5]);
					transporterA[activeIndex]=0;
					gerDead++;}}
				else if(armourA[activeIndex]=="t"||armourA[activeIndex]=="w"){
					deadA[activeIndex]=1; //1=dead non-armour
					activeImage.style.width=(pieceSize*boardSize)/2+"px";
					activeImage.style.height=(pieceSize*boardSize)/2+"px";
				activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
				activeImage.style.top=(piecesTop[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
					activeImage.setAttribute("src", "units/ger/trwreck.jpg");
					if(transA[activeIndex]>=1){
					ps=transporterA[activeIndex];
					imageArray[ps].style.width=(pieceSize*boardSize)/2+"px";
					imageArray[ps].style.height=(pieceSize*boardSize)/2+"px";
				activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
				activeImage.style.top=(piecesTop[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
					numb=Math.round(Math.random()*1+0.5); //numb=Math.round(Math.random()*4+0.5);
					imageArray[ps].setAttribute("src", "units/ger/dead"+numb+".jpg");
					deadA[transporterA[activeIndex]]=1;
					titles = imageArray[ps].getAttribute("title");
		 			imageArray[ps].setAttribute("title", "DESTROYED: " + titles);
					titles = activeImage.getAttribute("title");
					titles2=titles.slice(11);
					titles2=titles2.slice(0,-passengerA[activeIndex]);
					activeImage.setAttribute("title", titles2);
					transA[activeIndex]=0;
					gerDeadPts=Number(gerDeadPts)+Number(unitsA[thisIsA[ps]*noOfItems+5]);
					transporterA[activeIndex]=0;
					gerDead++;
				}}

				else {
					deadA[activeIndex]=1; //1=dead non-armour
					activeImage.style.width=(pieceSize*boardSize)/2+"px";
					activeImage.style.height=(pieceSize*boardSize)/2+"px";
				activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
				activeImage.style.top=(piecesTop[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
					numb=Math.round(Math.random()*1+0.5); //numb=Math.round(Math.random()*4+0.5);
					activeImage.setAttribute("src", "units/ger/dead"+numb+".jpg");}
			gerDeadPts=Number(gerDeadPts)+Number(unitsA[thisIsA[activeIndex]*noOfItems+5]);
			gerDead++;
			}
			titles = activeImage.getAttribute("title");
			activeImage.setAttribute("title", "DESTROYED: " + titles);
			}
		else{						//return from the dead!
			titles = activeImage.getAttribute("title");
			titles2=titles.slice(11);
			activeImage.setAttribute("title", titles2);
				if(activeIndex<gerNumber){
				if(armourA[activeIndex]=="a"){
					activeImage.setAttribute("src", "units/"+unitsA[thisIsA[activeIndex]*noOfItems]);}
				else if(armourA[activeIndex]=="t"){
					activeImage.style.width=(pieceSize*boardSize)+"px";
					activeImage.style.height=(pieceSize*boardSize)+"px";
				activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+"px";
				activeImage.style.top=(piecesTop[activeIndex]*boardSize)+"px";
					activeImage.setAttribute("src", "units/"+unitsA[thisIsA[activeIndex]*noOfItems]);}
				else {
					activeImage.style.width=(pieceSize*boardSize)+"px";
					activeImage.style.height=(pieceSize*boardSize)+"px";
				activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+"px";
				activeImage.style.top=(piecesTop[activeIndex]*boardSize)+"px";
					activeImage.setAttribute("src", "units/"+unitsA[thisIsA[activeIndex]*noOfItems]);}
			rusDeadPts=Number(rusDeadPts)-Number(unitsA[thisIsA[activeIndex]*noOfItems+5]);
			rusDead--;
			//window.status="XXXXXX";
			deadA[activeIndex]=0;}
			else {
				if(armourA[activeIndex]=="a"){
					activeImage.setAttribute("src", "units/"+unitsA[thisIsA[activeIndex]*noOfItems]);}
				else if(armourA[activeIndex]=="t"){
					activeImage.style.width=(pieceSize*boardSize)+"px";
					activeImage.style.height=(pieceSize*boardSize)+"px";
				activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+"px";
				activeImage.style.top=(piecesTop[activeIndex]*boardSize)+"px";
					activeImage.setAttribute("src", "units/"+unitsA[thisIsA[activeIndex]*noOfItems]);}
				else {
					activeImage.style.width=(pieceSize*boardSize)+"px";
					activeImage.style.height=(pieceSize*boardSize)+"px";
				activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+"px";
				activeImage.style.top=(piecesTop[activeIndex]*boardSize)+"px";
					activeImage.setAttribute("src", "units/"+unitsA[thisIsA[activeIndex]*noOfItems]);}
			gerDeadPts=Number(gerDeadPts)-Number(unitsA[thisIsA[activeIndex]*noOfItems+5]);
			gerDead--;
			deadA[activeIndex]=0;}
			}

		mouseActive=0;
		doEdgeColor();
		//activeImage.style.borderColor="black";
		}
else{alert("Cannot destroy hidden units!");}
//}
}//end of 'x' keyPress function

function changeDead(p, i, f){//unit destroyed
  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;

  activeImage = activePiece;
  activeIndex = pieceIndex;

  if(flagChange==0){
    if(deadA[activeIndex]==1){deadA[activeIndex]=0;}
    else{deadA[activeIndex]=1;}
  }
  	if(hideA[activeIndex]!=1){
		if(deadA[activeIndex]==0){
			firerA[activeIndex]=0;
			if(disruptedA[activeIndex]==1){ //undisrupt before destroy
				titles = activeImage.getAttribute("title");
				titles2=titles.slice(0,-14); //titles2=titles.slice(11);
				activeImage.setAttribute("title", titles2);
				disruptedA[activeIndex]=0;}
			if(panicA[activeIndex]==1){ //unpanic before destroy
				titles = activeImage.getAttribute("title");
				titles2=titles.slice(9);
				activeImage.setAttribute("title", titles2);
				panicA[activeIndex]=0;}
	//NEXT SECTION***********************
	//is code to use if want different dead units than live units
	//using this units die in place and change size

			if(activeIndex<gerNumber){
				deadA[activeIndex]=1; //1=dead non-armour
			//	activeImage.style.width=(pieceSize*boardSize)/2+"px";
			//	activeImage.style.height=(pieceSize*boardSize)/2+"px";
			//	activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
			//	activeImage.style.top=(piecesTop[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
			//	activeImage.setAttribute("src", "units/"+Abase+"dead.jpg");
				var vp=unitsA[thisIsA[activeIndex]*itemsPerUnit+3];
				for(v=0;v<vp;v++){
						rebelVP++;}
			}
			else {
				deadA[activeIndex]=1; //1=dead non-armour
			//	activeImage.style.width=(pieceSize*boardSize)/2+"px";
			//	activeImage.style.height=(pieceSize*boardSize)/2+"px";
			//	activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
			//	activeImage.style.top=(piecesTop[activeIndex]*boardSize)+(pieceSize*boardSize)/4+"px";
				//numb=Math.round(Math.random()*1+0.5); //numb=Math.round(Math.random()*4+0.5);
			//	activeImage.setAttribute("src", "units/"+Bbase+"dead.jpg");
				var vp=unitsA[thisIsA[activeIndex]*itemsPerUnit+3];
				for(v=0;v<vp;v++){
						unionVP++};
			}

			titles = activeImage.getAttribute("title");
			activeImage.setAttribute("title", "DESTROYED: " + titles);
			}
		else{						//return from the dead!
			if(armourA[activeIndex]=="f"){firerA[activeIndex]=1;}
			if(armourA[activeIndex]=="a"){firerA[activeIndex]=1;}
			titles = activeImage.getAttribute("title");
			titles2=titles.slice(11);
			activeImage.setAttribute("title", titles2);
				if(activeIndex<gerNumber){
					activeImage.style.width=(pieceSize*boardSize)+"px";
					activeImage.style.height=(pieceSize*boardSize)+"px";
				activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+"px";
				activeImage.style.top=(piecesTop[activeIndex]*boardSize)+"px";
					activeImage.setAttribute("src", "units/"+unitsA[activeIndex*itemsPerUnit]);
					var vp=unitsA[activeIndex*itemsPerUnit+3];
					for(v=0;v<vp;v++){
							rebelVP--;}}
				else {
					activeImage.style.width=(pieceSize*boardSize)+"px";
					activeImage.style.height=(pieceSize*boardSize)+"px";
				activeImage.style.left=(piecesLeft[activeIndex]*boardSize)+"px";
				activeImage.style.top=(piecesTop[activeIndex]*boardSize)+"px";
					activeImage.setAttribute("src", "units/"+unitsA[activeIndex*itemsPerUnit]);
					var vp=unitsA[activeIndex*itemsPerUnit+3];
					for(v=0;v<vp;v++){
							unionVP--;}}
					deadA[activeIndex]=0;} //flag unit as alive


		activeImage.setAttribute("class", "piece");
		activeImage.style.borderColor="black";
    activeImage.style.zIndex = nextZ++;
    oldImage = activeImage;
		mouseActive=0;
		//activeImage.style.borderColor="black";
		if(firerA[activeIndex]==1){
		//activeImage.style.borderColor="blue";
      }
		}
else{alert("Cannot destroy hidden units!");}
			doEdgeColor();

  if(flagChange==1){
  //save the page
  saveWindow2();}
}//end of 'destroyed' keyPress function

function changeIneffective(p, i, f){ //unit ineffective
  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;

  activeImage = activePiece;
  activeIndex = pieceIndex;

  if(flagChange==0){
    if(disruptedA[activeIndex]==1){disruptedA[activeIndex]=0;}
    else{disruptedA[activeIndex]=1;}
  }
		if(deadA[activeIndex]==0){
		if(panicA[activeIndex]!=1){
			if(disruptedA[activeIndex]!=1){
				titles = activeImage.getAttribute("title");
				activeImage.setAttribute("title", titles+": ineffective!");//"DISRUPTED: " + titles);
				disruptedA[activeIndex]=1;
			}
			else{
				titles = activeImage.getAttribute("title");
				titles2=titles.slice(0,-14);//titles2=titles.slice(11);
				activeImage.setAttribute("title", titles2);
				disruptedA[activeIndex]=0;
			}
			mouseActive=0;
			doEdgeColor();
		}
		}
  if(flagChange==1){
  //save the page
  saveWindow2();}
}

function changeDisrupt(p, i, f){ //unit disrupted
  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;

  activeImage = activePiece;
  activeIndex = pieceIndex;

  if(flagChange==0){
    if(disruptedA[activeIndex]==1){disruptedA[activeIndex]=0;}
    else{disruptedA[activeIndex]=1;}
  }
		if(deadA[activeIndex]==0){
		if(panicA[activeIndex]!=1){
			if(disruptedA[activeIndex]!=1){
				titles = activeImage.getAttribute("title");
				activeImage.setAttribute("title", "DISRUPTED: " + titles);
				disruptedA[activeIndex]=1;
			}
			else{
				titles = activeImage.getAttribute("title");
				titles2=titles.slice(11);
				activeImage.setAttribute("title", titles2);
				disruptedA[activeIndex]=0;
			}
			mouseActive=0;
			doEdgeColor();
		}
		}
  if(flagChange==1){
  //save the page
  saveWindow2();}
}

function changeSupply(p, i, f){ //unit OUT OF SUPPLY
  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;

  activeImage = activePiece;
  activeIndex = pieceIndex;

  if(flagChange==0){
    if(disruptedA[activeIndex]==1){disruptedA[activeIndex]=0;}
    else{disruptedA[activeIndex]=1;}
  }
		if(deadA[activeIndex]==0){
		if(panicA[activeIndex]!=1){
			if(disruptedA[activeIndex]!=1){
				titles = activeImage.getAttribute("title");
				activeImage.setAttribute("title", "OUT OF SUPPLY: " + titles);
				disruptedA[activeIndex]=1;
			}
			else{
				titles = activeImage.getAttribute("title");
				titles2=titles.slice(15);
				activeImage.setAttribute("title", titles2);
				disruptedA[activeIndex]=0;
			}
			mouseActive=0;
			doEdgeColor();
		}
		}
  if(flagChange==1){
  //save the page
  saveWindow2();}
}

function showBoard(){ //show board
  var board = document.getElementById("board");
	if(boardNumb==1){board.style.position="absolute";
	board.style.zIndex=nextZ+1;
	//document.all.board.style.position="static";
	nextZ++;
	boardNumb=0;}
	else{board.style.position="static";
	board.style.zIndex=20;
	boardNumb=1;}
	}

//if(keyText=="d"){ //unit dismounted
function dismount(p, i, f){
  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;
  activeImage = activePiece;
  activeIndex = pieceIndex;
  if(flagChange==0){
    if(dismountA[activeIndex]==1){dismountA[activeIndex]=0;}
    else{dismountA[activeIndex]=1;}
  }
 		if(isCavA[activeIndex]==1){
			if(dismountA[activeIndex]!=1){
				titles = activeImage.getAttribute("title");
				activeImage.setAttribute("title", "dismounted: " + titles);
				dismountA[activeIndex]=1;}
			else{
				titles = activeImage.getAttribute("title");
				titles2=titles.slice(12)
				activeImage.setAttribute("title", titles2);
				dismountA[activeIndex]=0;}
		}
		mouseActive=0;
		doEdgeColor();
	}

//if(keyText=="e"||keyText=="E"){ //unit exited
function unitExited(p, i, f){
  var activePiece = p;
  var pieceIndex = i;
  var flagChange = f;
  activeImage = activePiece;
  activeIndex = pieceIndex;
  if(flagChange==0){
    if(exitA[activeIndex]==1){exitA[activeIndex]=0;}
    else{exitA[activeIndex]=1;}
  }
		if(deadA[activeIndex]==0){
		if(panicA[activeIndex]!=1){
			if(exitA[activeIndex]!=1){
				titles = activeImage.getAttribute("title");
				activeImage.setAttribute("title", "EXITED: " + titles);
				exitA[activeIndex]=1;
			/*if(activeIndex<gerNumber){//assign points for exiting
				var vp=unitsA[thisIsA[activeIndex]*itemsPerUnit+3];
				for(v=0;v<vp;v++){unionVP++;}}
				else{var vp=unitsA[thisIsA[activeIndex]*itemsPerUnit+3]*10;
				for(v=0;v<vp;v++){rebelVP++};	}*/
			}
			else{
				titles = activeImage.getAttribute("title");
				titles2=titles.slice(8);
				activeImage.setAttribute("title", titles2);
				exitA[activeIndex]=0;
			/*if(activeIndex<gerNumber){//assign points for exiting
				var vp=unitsA[thisIsA[activeIndex]*itemsPerUnit+3];
				for(v=0;v<vp;v++){unionVP--;}}
				else{var vp=unitsA[thisIsA[activeIndex]*itemsPerUnit+3]*10;
				for(v=0;v<vp;v++){rebelVP--};	}*/
			}
			mouseActive=0;
			doEdgeColor();
		}
		}
}

function doEdgeColor(){
	/*activeImage.style.borderColor="black";
	if(hideA[activeIndex]!=1){
		if(firerA[activeIndex]==1){
			activeImage.style.borderColor="blue";}
		if(disruptedA[activeIndex]==1){
			activeImage.style.borderColor="red";}
		if(exitA[activeIndex]==1){
			activeImage.style.borderColor="green";}
		if(deadA[activeIndex]==1){
			activeImage.style.borderColor="grey";}
}*/

	activeImage.style.borderColor="black";
	//alert("this");
	if(hideA[activeIndex]!=1){//if not hidden
		/*if(disruptedA[activeIndex]==3){
		activeImage.style.borderColor="cyan";}//manoeuvre
		if(disruptedA[activeIndex]==4){
		activeImage.style.borderColor="green";}//defend*/
		if(disruptedA[activeIndex]==1){
		activeImage.style.borderColor="silver";}//out of supply
		if(firerA[activeIndex]==1){
		activeImage.style.borderColor="blue";}//transport color overides manoeuvre
		else if(firerA[activeIndex]==2){
		activeImage.style.borderColor="cyan";}
		else if(isCavA[activeIndex]==1){
		activeImage.style.borderColor="white";}
		if(deadA[activeIndex]>=1){
		activeImage.style.borderColor="red";}
	}
	else{//if hidden
		if(disruptedA[activeIndex]==3){
		activeImage.style.borderColor="cyan";}//manoeuvre can be seen when hidden
	}
	if(disruptedA[activeIndex]==2){
		activeImage.style.borderColor="magenta";}//attack orders are always visible

}

//if(keyText=="r"||keyText=="R"){
function LOSruler(){
	if(ruler){ruler=false;
	for(i=0;i<33;i++){
		line[i].style.color="cyan";
		}
	}
	else {ruler=true;
	for(i=0;i<33;i++){
		line[i].style.color="red";
		}
}
}

//eraser ruler
//if(keyText=="e"||keyText=="E"){
function eraseLOSruler(){
	oldXpos=0;
	oldYpos=0;
	xpos2=0;
	ypos2=0;
	for(i=0;i<33;i++){
		line[i].style.left=xpos2-((xpos2-oldXpos)/32)*i +"px";
		line[i].style.top=ypos2-((ypos2-oldYpos)/32)*i +"px";
	}

}

//if(keyText=="z"||keyText=="Z"){ //zombies! bury dead or raise dead
function zombies(){
	if(buried==0){
		for(k=0;k<noOfImages;k++){
			if(deadA[k]==1){
				imageArray[k].style.zIndex=-2;
			}
		}
		buried=1;
	}
	else if(buried==2){
		for(k=0;k<noOfImages;k++){
			if(deadA[k]==1){
				imageArray[k].style.zIndex=nextZ+1;
			}
		}
		buried=0;
	}
	else{for(k=0;k<noOfImages;k++){
			if(deadA[k]==1){
				imageArray[k].style.zIndex=0;
			}
		}
		buried=2;
	}
}

function unmarkAll(){
for(k=0;k<noOfImages;k++){
			imageArray[k].style.borderStyle="solid";
			movedA[k]=0;
			}
		saveWindow2();
}

function victoryPoints(){
  alert(nameA+" VP: "+alliedVP+" "+nameB+" VP: "+gerVP);

}

function hopHop(x, y){ //jump Hopper to new position
  var thisX = x;
  var thisY = y;
  hopJump++;
  if(hopJump>4){hopJump=1;}
  if(hopJump==1){
    hopSignL = 0.5;
    hopSignT = 0.5;}
  else if(hopJump==2){
    hopSignL = -1.5;
    hopSignT = 0.5;}
  else if(hopJump==3){
    hopSignL = -1.5;
    hopSignT = -1.5;}
  else {
    hopSignL = 0.5;
    hopSignT = -1.5;}
    //alert("hopJump="+hopJump);
    keyBoard.style.zIndex = nextZ++;
    keyBoard.style.left= thisX + hopSignL*pieceSize*Math.pow(boardSize,0.5)*6 + "px";//xpos - relX/2 + "px";
    //alert(""+hopSignL*pieceSize*Math.pow(boardSize,0.5)*6);
    keyBoard.style.top= thisY + hopSignT*pieceSize*Math.pow(boardSize,0.5)*6 + "px";//ypos - relY/2 + "px";
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

	allText=allText+swTrans+","+swTrans1+","+swTrans2+","+swDead+","+swMark+","+swDis+","+swLeft+","+swTop+","+swCav+",";
	}

	for(var c=0; c<noOfCities; c++){
		allText=allText + newCityControlA[c]+",";}


	allText=allText+unionVP+","+rebelVP+","+turnNumb+","+ size +","+ turnLetter +","+ turnNumber +","+situationAddress;
	//var win = open("", null, "toolbar=0,location=0,directories=0,status=0,menubar=1,scrollbars=1,resizable=1,width=400,height=200,left=200,top=200");
	//win.document.write(allText);
	//alert(allText);
	//clearCookie();
	if(allText.length<3000){
	noOfCookiesFlag=1;
	setCookie(allText);
  //alert(""+allText);
  }
	else{
	noOfCookiesFlag=2;
	setCookie(allText.slice(0,2999));
	setCookie2(allText.slice(2999));
  //alert(""+allText.slice(2999));
  }
  allText="";
	//win.document.close();
  }
