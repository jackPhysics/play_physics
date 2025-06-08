var printArmiesFlag = false;//needs to be defined here, too late in newJS module
var hopperHTMLcode = '<table class="mover" id="keyPressTable">'+
'<tr>'+
'<td class="button"  width="20%" onclick="virtualKey(22)">rL</td>'+
'<td class="button"  width="20%" onclick="virtualKey(11)">^</td>'+
'<td class="button" width="20%" onclick="virtualKey(44)">rR</td>'+
'<td class="button6" rowspan=2 colspan=2 onclick="virtualKey(3)" id="diceResult">d12</td>'+
'</tr></tr><tr>'+
'<td class="button" onclick="virtualKey(13)">&lt;</td>'+
'<td class="button" onclick="virtualKey(88)">Jump</td>'+
'<td class="button" onclick="virtualKey(14)">&gt;</td>'+
'</tr><tr>'+
'<td class="button" onclick="virtualKey(7)">Z</td>'+
'<td class="button" onclick="virtualKey(12)">v</td>'+
'<td class="button" onclick="virtualKey(24)">H</td>'+
'<td class="button" onclick="virtualKey(9)">dn</td>'+
'<td class="button" onclick="virtualKey(8)">up</td>'+
'</tr><tr>'+
'<td class="button1" colspan=5 id="hopText" onclick="virtualKey(33)"></td>'+
'</tr>'+
'<tr><td class="button" onclick="virtualKey(49)">T-</td>'+
'<td class="button5" rowspan=2 colspan=3 id="timebox" onclick="virtualKey(99)">&lt;</td>'+
'<td class="button" onclick="virtualKey(1)">M</td>'+
'<tr><td class="button" onclick="virtualKey(99)">T+</td>'+
'<td class="button" onclick="virtualKey(2)">X</td>'+
'</tr></tr></table>';


var table1HTMLcode = '<table id="bigTable" cellpadding="2" cellspacing="0" bgcolor="gray"><tr id="pbrow">'
+'<td>&nbsp;&nbsp;<a class="aiw" a href=""  id="btnx1"  ></a></td>'
+'<td>&nbsp;&nbsp;<a href="javascript:pieceShrink=1;deltaSize=+1;changeSize()"  id="btn18"  >unit size++</a></td>'
+'<td>&nbsp;&nbsp;<a class="neut"  href="javascript:pieceShrink=1;deltaSize=-1;changeSize()"  id="btn19"  >unit size--</a></td>'
+'<td>&nbsp;&nbsp;<a href="javascript:rerandomNumbers()"  id="btn14"  >re-randomize!</a></td>'
+'<td>&nbsp;&nbsp;<a class="neut"  href="javascript:redrawNumbers()"  id="btn14"  >hide hidden numbers</a></td>'
+'<td>&nbsp;&nbsp;<a href="javascript:drawNumbersAll2()"  id="btn5"  >show ALL numbers</a></td>'
+'</tr><tr id="aiwrow">'
+'<td>&nbsp;&nbsp;<a class="aiw" a href=""  id="btnx2"  ></a></td>'
+'<td>&nbsp;&nbsp;<a class="neut" href="javascript:d9_window()"  id="btn6"  >D9</a></td>'
+'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:unmarkAll()"  id="btn11"  >show all tiles</a></td>'
+'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:unmarkAllTrans()"  id="btn11"  >see-thru tiles</a></td>'
+'<td>&nbsp;&nbsp;<a class="neut" href="javascript:makeSmaller()"  id="btn61"  >ZOOM OUT</a></td>'
+'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:makeBigger()"  id="btn13"  >ZOOM IN</a></td>'
+'</tr></table>';

var table1HTMLcodeX = '<table id="bigTable" cellpadding="2" cellspacing="0" bgcolor="gray"><tr id="pbrow">'
+'<td>&nbsp;&nbsp;<a href="javascript:crt3_window()"  id="btn5"  >D12 Kr CRT</a></td>'
+'<td>&nbsp;&nbsp;<a href="javascript:crt2_window()"  id="btn14"  >Combat Results Table</a></td>'
+'<td>&nbsp;&nbsp;<a href="javascript:tec_window()"  id="btn14"  >Terrain Effects Chart</a></td>'
+'<td>&nbsp;&nbsp;<a class="neut" href="javascript:d6_window()"  id="btn6"  >D6</a></td>'
+'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:unmarkAll()"  id="btn11"  >unmark all units</a></td>'
+'<td>&nbsp;&nbsp;<a class="neut" href="javascript:makeSmaller()"  id="btn61"  >ZOOM OUT</a></td>'
+'<td>&nbsp;&nbsp;<a href="javascript:stepOrPoints()"  id="btn21"  >now:lose FACTORS</a></td>'
+'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:changeDice()"  id="btn612"  >now:choose d12</a></td>'
+'</tr><tr id="aiwrow">'
+'<td>&nbsp;&nbsp;<a href="javascript:crt4_window()"  id="btn14"  >D6 Kr CRT</a></td>'
+'<td>&nbsp;&nbsp;<a  class="neut" href="javascript:rules_window()"  id="btn9"  >Red Cloud Rules</a></td>'
+'<td>&nbsp;&nbsp;<a  class="neut" href="javascript:crt_window()"  id="btn12"  >random D6 CRT</a></td>'
+'<td>&nbsp;&nbsp;<a href="javascript:d12_window()"  id="btn14"  >D12</a></td>'
+'<td>&nbsp;&nbsp;<a class="neut" href="javascript:help_window()"  id="btn1"  >Help (key-codes)</a></td>'
+'<td>&nbsp;&nbsp;<a href="javascript:makeBigger()"  id="btn13"  >ZOOM IN</a></td>'
+'<td>&nbsp;&nbsp;<a href="javascript:disruptionNumber()"  id="btn7"  >double D</a></td>'
+'<td>&nbsp;&nbsp;<a  class="" href="javascript:RotSideB()"  id="btn32"  >Rotate B.</a></td>'
+'</tr><tr id="mcarow">'
+'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:reloadSetup()"  id="btn4"  >SETUP GAME</a></td>'
+'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:getCookie()"  id="btn30"  >RELOAD GAME</a></td>'
+'<td>&nbsp;&nbsp;<a class="aiw" href="javascript:reloadReset()"  id="btn22"  >RESET GAME</a></td>'
+'<td>&nbsp;&nbsp;<a class="neut" href="javascript:d100_window()"  id="btn17"  >D100</a></td>'
+'<td>&nbsp;&nbsp;<a class="" href="javascript:victoryPoints()"  id="btn20"  >Victory Points</a></td>'
+'<td>&nbsp;&nbsp;<a href="javascript:pieceShrink=1;deltaSize=+1;changeSize()"  id="btn18"  >unit size++</a></td>'
+'<td>&nbsp;&nbsp;<a href="javascript:zombies()"  id="btn27"  >zombies</a></td>'
+'<td>&nbsp;&nbsp;<a  class="neut" href="javascript:RotSideA()"  id="btn31"  >Rotate R.</a></td>'
+'</tr><tr id="mcarow">'
+'<td>&nbsp;&nbsp;<a class="neut" href="javascript:colorRed()"  id="btn23"  >Color Red</a></td>'
+'<td>&nbsp;&nbsp;<a href="javascript:colorBlack()"  id="btn24"  >Color Black</a></td>'
+'<td>&nbsp;&nbsp;<a class="neut" href="javascript:hideToggle()"  id="btn25"  >Show B./Hide R.</a></td>'
+'<td>&nbsp;&nbsp;<a href="javascript:hideRusF()"  id="btn15"  >Hide B.</a></td>'
+'<td>&nbsp;&nbsp;<a class="neut" href="javascript:hideGerF()"  id="btn16"  >Hide R.</a></td>'
+'<td>&nbsp;&nbsp;<a href="javascript:pieceShrink=1;deltaSize=-1;changeSize()"  id="btn19"  >unit size--</a></td>'
+'<td>&nbsp;&nbsp;<a href="javascript:showBoard()"  id="btn26"  >show board</a></td>'
+'<td>&nbsp;&nbsp;<a class="neut" href="javascript:mouseOverFlip()"  id="btn28"  >unit Zoom</a></td>'
+'</tr></table>';

//'<td>&nbsp;&nbsp;<a class="mca" href="javascript:RotSideA()"  id="btn15"  >Rotate A</a></td>'
//'<td>&nbsp;&nbsp;<a class="mca" href="javascript:RotSideB()"  id="btn16"  >Rotate B</a></td>'

var table2HTMLcode = '<table BORDER="2" id="saveTable" bgcolor="silver">'+
'<tr align="center"><td><h1 style="width:600">SAVING AND LOADING GAMES</H1></td><td> </td>'+
'<td><input type="button" id="saveButton" value="Save image"></td></tr>'+
'<tr><td><table style="margin-left:0" cellspacing="20">'+
'<tr align="center"><td id="nameOfA"></td><td id="nameOfB"></td></tr>'+
'<tr align="right"><td>'+
'<table><tr align="center"><td>Turn Now is...</td></tr>'+
'<tr align="center"><td id="turnBox" style="font-size:0.7cm; color:black; background-color:yellow">A00</td></tr>'+
'<tr align="center"><td><input type="button" id="turnNow" value="press for next turn..." onClick="nextTurn()"></td></tr>'+
'<tr align="center"><td><input type="button" id="turnNow" value="press for last turn..." onClick="lastTurn()"></td></tr>'+
'</table></td><td>'+
'<table><tr align="right">'+
'<td>A turn<input type=radio id="rT" onClick="whoseTurn(1)" checked></td></tr>'+
'<tr align="right"><td><p style="width:60px">end of A turn<input id="erT" type=radio onClick="whoseTurn(2)"></p></td></tr>'+
'<tr align="right"><td>B turn<input id="gT" type=radio onClick="whoseTurn(3)"></td></tr>'+
'<tr align="right"><td>end of B turn<input id="egT" type=radio onClick="whoseTurn(4)"></td>'+
'</tr></table>'+
'</td><td align="left" style="width:200">&LT;--REMEMBER TO PICK <br>APPROPRIATE TURN BUTTON <br>BEFORE CREATING <br>SAVE DATA</tr>'+
'<tr><td colspan="2" align="center">&nbsp;&nbsp;<a class="save" style="color:black" href="javascript:saveWindow()"  id="btn10">create save-data</a></td></tr>'+
'<tr><td rowspan="3"><textarea rows=15 columns=120 name="box" id="textbox1"></textarea></td>'+
'<td colspan="2" align="left"><b>1) Paste \'saved data\' into the box...</b> <br>&nbsp;&nbsp;2) Choose type of movement...<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;visible<input id="vis" type=radio onClick="fogOfWar(1)" checked> hidden<input id="hid" type=radio onClick="fogOfWar(2)">'+
'</td></tr>'+
'<tr><td colspan="2" align="left">3) <input type=button style="color:red" value="PRESS TO LOAD" onClick="reload()"></td></tr>'+
'<tr> <td colspan="2"><input type=button value="press to clear box" onClick="clearBox()"></td></tr>'+
'<tr> <td colspan="2" align="center">&nbsp;&nbsp;<a class="save" href="javascript:help2_window()"  id="btn2"  >Saving and loading help</a></td>'+
'</table>'+
'</td><td valign=top></td>'+
'<td align="center">'+
'</td></tr></table>';
