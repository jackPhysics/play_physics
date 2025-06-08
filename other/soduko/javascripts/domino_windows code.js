// JavaScript Document

function pbm_window(){
	politic=open(pbmAddress, "politic", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=500,height=400,left=10,top=10");
}


function guide_window(){
	events=open(manualAddress, "events", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=800,height=650,left=110,top=110");
}

function supply_window(){
	rpc=open(supplyAddress, "supply", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=620,height=750,left=130,top=130");
}

function weather_window(){
	rpc=open(weatherAddress, "supply", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=600,height=300,left=130,top=130");
}

function setup_window(){
	rpc=open(reinfAddress, "setup", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=300,height=400,left=100,top=100");
}

function crt2_window(){
	crt=open(crt2Address, "CRT", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=470,height=350,left=30,top=30");
}
function crt3_window(){
	crt=open(crt3Address, "CRT", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=470,height=350,left=30,top=30");
}
function crt4_window(){
	crt=open(crt4Address, "CRT", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=470,height=350,left=30,top=30");
}
function crt5_window(){
	crt=open(crt5Address, "CRT", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=470,height=350,left=30,top=30");
}
function crt6_window(){
	crt=open(crt6Address, "CRT", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=470,height=350,left=30,top=30");
}
function crt7_window(){
	crt=open(crt6Address, "CRT", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=470,height=350,left=30,top=30");
}
function crtD6_window(){
	crt=open(crtD6Address, "CRT", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=470,height=350,left=30,top=30");
}

function crt_window(){
	var crtNumb = Math.floor(Math.random()*18)+1;
	if(crtNumb<10){crtNumb="0"+crtNumb;}
	var crtAddress2 = crtAddress+crtNumb+".html";
	crt=open(crtAddress2, "CRT", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=470,height=350,left=30,top=30");

}

function crtKey_window(){
	scenario=open(seqOfPlayAddress, "Scenario", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=210,height=300,left=50,top=352");
}

function art_window(){
	crt=open("charts/unitSymbols.html", "CRT", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=470,height=350,left=30,top=30");

}

function air_window(){
	crt=open("charts/airSupTable.html", "CRT", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=470,height=350,left=30,top=30");

}
function para_window(){
	crt=open("charts/paraTable.html", "CRT", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=470,height=350,left=30,top=30");

}

function d12_window(){
	d12=open("charts/d12.html", "D12", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=250,height=200,left=370,top=170");

}

function d100_window(){
	d100=open("charts/d100.html", "D100", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=250,height=200,left=370,top=170");

}


function d9_window(){
	d9=open("javascripts/d9.html", "D6", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=250,height=200,left=400,top=200");
}


function d7_window(){
	d7=open("javascripts/d7.html", "D6+", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=250,height=200,left=400,top=200");
}

function bull_window(){
	scenario=open("charts/scenario.html", "Scenario", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=400,height=150,left=50,top=352");

}

function retreat_window(){
	retreat=open("charts/retreats.html", "Retreats", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=500,height=200,left=100,top=340");

}

function move_window(){
	move=open("charts/movefactor.html", "move", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=300,height=300,left=400,top=200");

}

function move2_window(){
	move2=open("charts/movefactor2.html", "move2", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=300,height=300,left=420,top=220");

}

function tec_window(){
	tec=open(tecAddress, "TEC", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=630,height=270,left=100,top=100");

}

function tec2_window(){
	tec2=open("charts/tec2.html", "TEC", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=630,height=270,left=110,top=110");

}

function map_window(){
	map=open("charts/map.html", "Map", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=1,width=605,height=555,left=300,top=20");

}

function wec_window(){
	wec=open("charts/wec_aiw.html", "wec", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=552,height=270,left=30,top=20");

}


function vp_window(){
	move2=open(situationAddress, "situation", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=400,height=300,left=420,top=220");
}

function errata_window(){
	errata=open(errataAddress, "errata", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=800,height=400,left=370,top=170");
}

function tet_window(){
	wec=open("charts/tet_aiw.html", "tet", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=552,height=620,left=300,top=10");

}

function rpc_window(){
	rpc=open("charts/rpc_mca.html", "rpc", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=700,height=385,left=30,top=30");

}

function rules_window(){
	rules=open(rulesAddress, "Rules", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=600,height=400,left=50,top=150");

}

function idiots_window(){
	rules=open("rules/france40HistRules.html", "Rules", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=600,height=400,left=50,top=150");

}

function pdfRules_window(){
	rules=open("rules/Kr game I rules.pdf", "Rules", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=600,height=400,left=50,top=150");

}

function rulesQuick_window(){
	rules=open("rules/F40_rulesSummary.doc", "Rules", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=600,height=400,left=50,top=150");

}

function cbtcalc_window(){
	cbtcalc=open("charts/calculator.html", "cbtcalc", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=1,width=590,height=410,left=150,top=150");

}

function bigcbtcalc_window(){
	cbtcalc=open("charts/calculatorBig.html", "cbtcalc", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=1,width=590,height=410,left=150,top=150");

}


function help_window(){
	help=open("charts/help_prestags.html", "Help", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=600,height=250,left=40,top=360");

}
function politic_window(){
	politic=open("political.html", "politic", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=242,height=199,left=10,top=10");

}
function untried_window(){
	untried=open("untried.html", "untried", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=245,height=533,left=50,top=50");

}
function events_window(){
	events=open("events.html", "events", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=394,height=242,left=110,top=110");

}


function help2_window(){
	help2=open("charts/help3.html", "Help2", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=600,height=250,left=60,top=340");

}

function situation_window(){
	situation=open(situationAddress, "situation", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=770,height=550,left=100,top=340");

}

function impetus_window(){
	impetus=open("impetus.html", "Impetus", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=300,height=140,left=450,top=100");

}

function boxSmall_window(){
	untried=open("charts/boxFront_small.html", "untried", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=1,width=425,height=570,left=200,top=100");
}
