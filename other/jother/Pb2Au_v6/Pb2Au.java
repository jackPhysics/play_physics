import java.awt.*;
import java.applet.*;
import java.awt.event.*;

public class Pb2Au extends Applet implements ItemListener, ActionListener{
	
	Panel dadPanel, northPanel,northPanel2, northPanelBack, southPanel, centrePanel, spTop, spBottom, spMiddle;
	
	int osx, osy; //offset x and offset y
	
	Choice chsData;
	Label lblCost;
	Button btnStart, btnPause, btnFastF;
	Button btnImage;//, btnHistory;
	Label lblMessage, lblDecay;
	Button btnDecay;
	Button btnAlpha, btnProton, btnNeutron, btnElectron, btnAntiP;
	Button btnNewNuc;
	Label lblNewNuc1, lblNewNuc2, lblPnum, lblNnum;
	Color backColor;
	nucleusViewer paper;
	//viewCanvas dataWindow;
	popUp wordWindow;
	boolean dWopen=false;
	boolean moveStop=false;//is runner running?
	Label lblAlpha, lblProton, lblNeutron, lblElectron, lblAntiP;
	//Scrollbar hsbJiggle, hsbFall, hsbEM, hsbSI, hsbDecayRate;
	int lastProj=2;
	String text, paramName;
	int pN, nN;
	Image periodicT;
	TextField numP, numN;
	AudioClip beepSnd, closeSnd, wobbleSnd, crashSnd, wizzSnd, zigzagSnd;
	ScrollCanvas table;
	viewCanvas graph;
	TextArea history;
			
	public void init()
	{
		
		this.setLayout(new GridLayout(2,1));
		
		dadPanel= new Panel();
		dadPanel.setLayout(new BorderLayout());
		
		northPanelBack = new Panel();
		northPanelBack.setLayout(new GridLayout(2,1));
		
		northPanel2 = new Panel();
		northPanel2.setLayout(new FlowLayout(FlowLayout.LEFT));
		
		northPanel=new Panel();
		northPanel.setLayout(new FlowLayout(FlowLayout.LEFT));
		
		southPanel=new Panel();
		//southPanel.setLayout(new FlowLayout(FlowLayout.LEFT));
		southPanel.setLayout(new GridLayout(2,1));
		
		spTop = new Panel();
		spTop.setLayout(new GridLayout(1,5,5,0));
		
		spMiddle = new Panel();
		spMiddle.setLayout(new GridLayout(1,5,5,0));
		
		spBottom = new Panel();
		spBottom.setBackground(Color.white);
		spBottom.setLayout(new GridLayout(1,3));//(new GridLayout(1,2,5,0));
		//spBottom.setLayout(new FlowLayout(FlowLayout.CENTER));//(new GridLayout(1,2,5,0));
		
		centrePanel= new Panel();
		//centrePanel.setLayout(new BorderLayout());
		centrePanel.setLayout(new GridLayout(1,1));
		
		northPanelBack.add(northPanel2);
		northPanelBack.add(northPanel);
		southPanel.add(spTop);
		southPanel.add(spMiddle);
		//southPanel.add(spBottom);
		dadPanel.add(northPanelBack, BorderLayout.NORTH);
		dadPanel.add(centrePanel, BorderLayout.CENTER);
		dadPanel.add(southPanel, BorderLayout.SOUTH);
		this.add(dadPanel);
		this.add(spBottom);
		
		backColor=Color.pink;//Color(100,20,10);
		northPanel.setBackground(backColor);
		northPanel2.setBackground(backColor);
		southPanel.setBackground(backColor);
		northPanel.setForeground(Color.black);
		northPanel2.setForeground(Color.darkGray);
		southPanel.setForeground(Color.black);
		
		numP = new TextField("1", 2);
		numP.addActionListener(this);
		//numP.setAlignment(Label.CENTER);
		numN = new TextField("0", 2);
		numN.addActionListener(this);
		//numN.setAlignment(Label.CENTER);
		btnNewNuc = new Button("Build Nucleus");
		btnNewNuc.addActionListener(this);
		lblNewNuc1 = new Label("To create a new nucleus enter P and N numbers here -->");
		//lblNewNuc2 = new Label("<-- Then press here...");
		lblPnum = new Label("Protons:");
		lblPnum.setAlignment(Label.RIGHT);
		lblNnum = new Label(":Neutrons");
		lblNnum.setAlignment(Label.LEFT);
		northPanel2.add(lblNewNuc1);
		northPanel2.add(lblPnum);
		northPanel2.add(numP);
		northPanel2.add(numN);
		northPanel2.add(lblNnum);
		northPanel2.add(btnNewNuc);
		//northPanel2.add(lblNewNuc2);
		lblCost = new Label("$0 spent                            ");
		lblCost.setAlignment(Label.CENTER);
		//spBottom.add(lblCost);
		//btnHistory = new Button("Periodic table");
		//spBottom.add(btnHistory);
		//btnHistory.addActionListener(this);
		chsData = new Choice();
		chsData.addItem("press pause, and then review 'History' here...");
		//spBottom.add(chsData);
		chsData.addItemListener(this);
		//btnImage = new Button("Periodic table");
		//btnStart.setBackground(protonColor);
		//spBottom.add(btnImage);
		//btnImage.addActionListener(this);
		history = new TextArea("",5,5,TextArea.SCROLLBARS_BOTH);
		//btnStart.setBackground(protonColor);
		spBottom.add(history);
		//btnImage.addActionListener(this);
		periodicT=this.getImage(getCodeBase(), "periodic.gif");
		table = new ScrollCanvas(this,periodicT);
		spBottom.add(table);
		table.init();
		table.repaint();
		graph = new viewCanvas(this);
		spBottom.add(graph);
		graph.init();
		graph.repaint();
		//btnImage.addActionListener(this);
		
		btnFastF= new Button(">>+");
		//btnFastF.setBackground(protonColor);
		northPanel.add(btnFastF);
		btnFastF.addActionListener(this);
		btnStart = new Button(">");
		//btnStart.setBackground(protonColor);
		northPanel.add(btnStart);
		btnStart.addActionListener(this);
		btnPause = new Button("||");
		//btnStart.setBackground(protonColor);
		northPanel.add(btnPause);
		btnPause.addActionListener(this);
		lblMessage = new Label("Behold the nucleus of Uranium-238! Composed of 92 protons and 146 neutrons.");
		//lblMessage.setAlignment(Label.CENTER);
		northPanel.add(lblMessage);
		btnDecay = new Button("   Stable   ");
		btnDecay.setBackground(Color.pink);
		northPanel.add(btnDecay);
		btnDecay.addActionListener(this);
		lblDecay = new Label("                ");
		//lblDecay.setAlignment(Label.CENTER);
		northPanel.add(lblDecay);
		//btnAlpha, btnProton, btnNeutron, btnElectron;
		btnAlpha = new Button("Alpha");
		//btnAlpha.setBackground(Color.red);
		spTop.add(btnAlpha);
		btnAlpha.addActionListener(this);
		//btnProton
		btnProton = new Button("Proton");
		//btnProton.setBackground(Color.yellow);
		spTop.add(btnProton);
		btnProton.addActionListener(this);
		//btnNeutron
		btnNeutron = new Button("Neutron");
		//btnNeutron.setBackground(Color.orange);
		spTop.add(btnNeutron);
		btnNeutron.addActionListener(this);
		//btnElectron
		btnElectron = new Button("Electron");
		//btnElectron.setBackground(Color.cyan);
		spTop.add(btnElectron);
		btnElectron.addActionListener(this);
		//btnAntiP
		btnAntiP = new Button("AntiProton");
		//btnAntiP.setBackground(Color.cyan);
		spTop.add(btnAntiP);
		btnAntiP.addActionListener(this);
		//hsbJiggle, hsbFall, hsbEM, hsbSI, hsbDecayRate;
		lblAlpha = new Label("     ");//new Label("$100");
		lblAlpha.setAlignment(Label.CENTER);
		spMiddle.add(lblAlpha);
		//fall
		lblProton = new Label("     ");//new Label("$10,000");
		lblProton.setAlignment(Label.CENTER);
		spMiddle.add(lblProton);
		
		//EM
		lblNeutron = new Label("     ");//new Label("$10");
		lblNeutron.setAlignment(Label.CENTER);
		spMiddle.add(lblNeutron);
		
		//SI
		lblElectron = new Label("     ");//new Label("$1,000");
		lblElectron.setAlignment(Label.CENTER);
		spMiddle.add(lblElectron);
		
		//decayrate
		lblAntiP = new Label("     ");//new Label("$100,000");
		lblAntiP.setAlignment(Label.CENTER);
		spMiddle.add(lblAntiP);
		
		/*northPanelBack.add(northPanel2);
		northPanelBack.add(northPanel);
		southPanel.add(spTop);
		southPanel.add(spMiddle);
		//southPanel.add(spBottom);
		//centrePanel.setLayout(new BorderLayout());
		dadPanel.add(northPanelBack, BorderLayout.NORTH);
		dadPanel.add(centrePanel, BorderLayout.CENTER);
		dadPanel.add(southPanel, BorderLayout.SOUTH);
		this.add(dadPanel);
		this.add(spBottom);*/
		
		//sounds
		beepSnd = getAudioClip(getCodeBase(), "beep.au");
		closeSnd = getAudioClip(getCodeBase(), "close.au");
		wobbleSnd = getAudioClip(getCodeBase(), "wobble.au");
		crashSnd = getAudioClip(getCodeBase(), "crash.au");
		wizzSnd = getAudioClip(getCodeBase(), "wizz.au");
		zigzagSnd = getAudioClip(getCodeBase(), "zigzag.au");

		/*wordWindow = new popUp(this);
			wordWindow.show();
			wordWindow.init();*/

		//view area
		paramName = getParameter("protons");
		if (paramName != null)
			//text = paramName;
			pN = (int)(Integer.valueOf(paramName).intValue());
		paramName = getParameter("neutrons");
		if (paramName != null)
		//text = paramName;
		nN = (int)(Integer.valueOf(paramName).intValue());
		paper = new nucleusViewer(this);
		paper.newParent(pN, nN);
		centrePanel.add(paper);
		paper.init();
		paper.repaint();
	}

	
	
	

	public boolean keyDown(Event e, int kz)
		{
			char currentKey = (char)kz;
			switch(kz){
			case(Event.LEFT):case('n'):case('N'):
					
				break;
			case(Event.RIGHT):case('m'):case('M'):
					
				break;
			case(Event.UP):case('o'):case('O'):
					
				break;
			case(Event.DOWN):case('l'):case('L'):
					
				break;
			default:			
			
			if(currentKey=='f'||currentKey=='F'){
				}
			if(currentKey=='s'||currentKey=='S'){
				}
			if(currentKey=='j'||currentKey=='J'){
				}
			if(currentKey=='z'||currentKey=='Z'){
				}
			if(currentKey=='q'||currentKey=='Q'){
				}
			}
			paper.repaint();

			return true;
		}

	public void grayButtons(){
		btnAlpha.setBackground(Color.lightGray);
		btnProton.setBackground(Color.lightGray);
		btnNeutron.setBackground(Color.lightGray);
		btnElectron.setBackground(Color.lightGray);
		btnAntiP.setBackground(Color.lightGray);
		if(btnDecay.getLabel().equals("unstable!")){
			btnDecay.setBackground(Color.lightGray);}

	}	

	public void actionPerformed(ActionEvent e)
	{
		//beepSnd.play();
			
		if(e.getSource() == numP)
		{
			numP.setText(numP.getText());
		}
		if(e.getSource() == numN)
		{
			numN.setText(numN.getText());
		}
		if(e.getSource() == btnNewNuc)
		{
			paper.stop();
			paper.Daughter = new atom(0,0,0);
			paper.Dactive=false;
			chsData.addItem("NEW NUCLEUS:");
			pN=(int)(Integer.valueOf(numP.getText()).intValue());
			nN=(int)(Integer.valueOf(numN.getText()).intValue());
			//paper = new nucleusViewer(this);
			paper.newParent(pN, nN);
			//centrePanel.add(paper);
			//paper.init();
			paper.repaint();
		}
		/*if(e.getSource() == btnImage)
		{
			if(!dWopen){ScrollCanvas box = new ScrollCanvas(this, periodicT);
						//dataWindow=box;
			//zigzagSnd.play();
			dWopen=true;
			box.show();
			box.init();}
						
		}*/
		if(e.getSource() == btnFastF)
		{
			paper.start();
			beepSnd.play();
			paper.fastForward(lastProj);
			btnFastF.setBackground(Color.yellow);
			btnStart.setBackground(Color.lightGray);
			btnPause.setBackground(Color.lightGray);
		}
		if(e.getSource() == btnStart)
		{
			paper.start();
			beepSnd.play();
			paper.fastForward(0);
			btnFastF.setBackground(Color.lightGray);
			btnStart.setBackground(Color.yellow);
			btnPause.setBackground(Color.lightGray);
		}
		if(e.getSource() == btnPause)
		{
			paper.stop();
			closeSnd.play();
			paper.fastForward(0);
			btnFastF.setBackground(Color.lightGray);
			btnStart.setBackground(Color.lightGray);
			btnPause.setBackground(Color.yellow);
		}
		if(paper.isRunning)
		{
		if(e.getSource() == btnAlpha)
		{
			paper.nextProjectile(1);
			lastProj=1;
			paper.lastProj=1;
			//this.grayButtons();
			//btnAlpha.setBackground(Color.yellow);
		}
		
		if(e.getSource() == btnProton)
		{
			paper.nextProjectile(2);
			lastProj=2;
			paper.lastProj=2;
			//this.grayButtons();
			//btnProton.setBackground(Color.yellow);
		}
		
		if(e.getSource() == btnNeutron)
		{
			paper.nextProjectile(3);
			lastProj=3;
			paper.lastProj=3;
			//this.grayButtons();
			//btnNeutron.setBackground(Color.yellow);
		}
		
		if(e.getSource() == btnElectron)
		{
			paper.nextProjectile(4);
			lastProj=4;
			paper.lastProj=4;
			//this.grayButtons();
			//btnElectron.setBackground(Color.yellow);
		}
		
		if(e.getSource() == btnAntiP)
		{
			paper.nextProjectile(5);
			lastProj=5;
			paper.lastProj=5;
			//this.grayButtons();
			//btnAntiP.setBackground(Color.yellow);
		}
		
		if(e.getSource() == btnDecay)
		{
			if(btnDecay.getLabel().equals("unstable!"))
			{
				paper.decayParent();
				lastProj=-1;
				paper.lastProj=-1;
			//this.grayButtons();
			//btnDecay.setBackground(Color.yellow);
			}
		}
		}
	}
	
		public void itemStateChanged(ItemEvent e)
	{
		
			if(e.getSource() == chsData)
		{
			
		}
		
	}

	
}

class nucleusViewer extends Canvas implements Runnable
{
	Image offscreenImage;
	Graphics offscreenGraphics;
	Pb2Au mother;
	Thread runner;
	int sleepTime=200;
	atom Parent, Daughter;
	boolean Dactive=false;
	boolean decySnd=false;
	int xPos, yPos;
	int pos[]=new int[2];
	int newX=0;
	int newY=0;
	String PT = "n H HeLiBeB C N O F NeNaMgAlSiP S ClArK CaScTiV CrMnFeCoNiCuZnGaGeAsSeBrKrRbSrY ZrNbMoTcRuRhPdAgCdInSnSbTeI XeCsBaLaCePrNdPmSmEuGdTbDyHoErTmYbLuHfTaW ReOsIrPtAuHgTlPbBiPoAtRnFrRaAcThPaU NpPuAmCmBkCfEsFmMdNoLrRfDbSgBhHsMt";
	String symbolP="";
	String symbolD="";
	String decayNote="";
	int p0,p1,p2,n0,n1,n2,A,e0;
	int anti=1, elec=1;
	Font element=new Font("Helvetica",Font.BOLD,18);
	Font numbers=new Font("Helvetica",Font.PLAIN,10);
	FontMetrics fmE=getFontMetrics(element);
	FontMetrics fmN=getFontMetrics(numbers);
	int numbersOffset;
	Color protonColor;
	String name;
	boolean gamma=false;
	int cost=0;
	int totalCost=0;
	boolean isRunning=false;
	boolean projectile=false;
	boolean continuous=false;
	int lastProj=0;

	public void fastForward(int p)
	{
		if(p==0){continuous=false;}
		else{
			continuous=true;
			lastProj=p;}
	}
		
	public void decayParent()
	{
		mother.wobbleSnd.play();
		decySnd=true;
		p0=Parent.protons;
		n0=Parent.neutrons;
		int decayType=typeOfDecay();
		switch(decayType){
			case(0):
				
				break;
			case(1)://alpha
				this.nextNucleus(p0-2,n0-2,1);
				break;
			case(2)://beta minus
				this.nextNucleus(p0+1,n0-1,2);
				break;
			case(3)://beta plus
				this.nextNucleus(p0-1,n0+1,3);
				break;
			case(4)://electron capture
				this.nextNucleus(p0-1,n0+1,4);
				break;
			case(5)://proton decay
				this.nextNucleus(p0-1,n0,5);
				break;
			case(6)://neutron decay
				this.nextNucleus(p0,n0-1,6);
				break;
			default:			
				}
	}
	
	public int f(double d)
	{
		int n;
		n=(int)(p0*(1/d));
		if(n>=1)n=1;
		else{n=0;}
		return n;
	}
	
	public int typeOfDecay()
	{
		int decayType=0;
		int part1=f(9.0);
		int part2=f(21.0)+f(25.0)+f(31.0)+f(33.0)+f(36.0)+f(44.0)+f(46.0)+f(48.0)+f(50.0)+f(52.0)+f(54.0)+f(56.0)+f(62.0)+f(64.0)+f(66.0)+f(70.0)+f(72.0);
		int part2EC=f(21.0)+f(25.0)+f(31.0)+f(33.0)+f(36.0)+f(44.0)+f(46.0)+f(48.0)+f(50.0)+f(52.0)+f(62.0)+f(64.0)+f(66.0)+f(70.0)+f(72.0);
		int part3=f(77.0)+f(81.0)+f(83.0)+f(84.0)+f(92.0);
		int part3EC=f(77.0)+f(81.0)+f(83.0)+f(84.0);
		int nExcess=part1+2*part2+4*part3;
		int nExcessEC=part1+2*part2EC+4*part3EC;
		int neutrons=p0+nExcess;
		int neutronsEC=p0+nExcessEC;
		if(n0==4&p0==4)//Be-8
		{
			decayType=1;
		}
		else if((p0==3&n0==2)||(p0==5&n0==4))//Li-5, B-9 
		{
			decayType=5;//p decay
		}
		else if(p0==2&n0==3)//He-5
		{
			decayType=6;//n decay
		}
		else if(neutrons<=n0)//U-238 n0x=54, Th-234 n0x=54, Rn-86 n0x=50
		{
			decayType=2;//beta- decay
		}
		else if(neutronsEC==n0&Math.random()<0.6)
		{
			decayType=4;//e capture
		}
		else
		{
			if(p0<58)
			{
				decayType=3;//beta+ decay
			}
			else
			{
				decayType=1;//alpha decay
			}
		}
		
		return decayType;
	}

	public void nextNucleus(int p, int n, int i)
	{
		if(!decySnd){mother.crashSnd.play();}
		decySnd=false;
		projectile=false;
		gamma=false;
		switch(i){
			case(1)://alpha
				Daughter = new atom(2,2,0);
				Daughter.antiParticle=false;
				Dactive=true;
				if(Dactive)symbolD=PT.substring(Daughter.protons*2,Daughter.protons*2+2);
				decayNote="alpha emission";
				break;
			case(2)://electron
				Daughter = new atom(0,0,1);
				Daughter.antiParticle=false;
				Dactive=true;
				if(Dactive)symbolD="e-";
				decayNote="beta minus emission";
				break;
			case(3)://anti-electron
				Daughter = new atom(0,0,1);
				Daughter.antiParticle=true;
				Dactive=true;
				if(Dactive)symbolD="e+";
				decayNote="beta plus emission";
				break;
			case(4)://electron capture
				Daughter = new atom(0,0,0);
				Daughter.antiParticle=false;
				Dactive=true;
				if(Dactive)symbolD="~";
				decayNote="electron capture, gamma emission";
				gamma=true;
				break;
			case(5)://proton
				Daughter = new atom(1,0,0);
				Daughter.antiParticle=false;
				Dactive=true;
				if(Dactive)symbolD="p+";
				decayNote="proton emission";
				break;
			case(6)://neutron
				Daughter = new atom(0,1,0);
				Daughter.antiParticle=false;
				Dactive=true;
				if(Dactive)symbolD="n";
				decayNote="neutron emission";
				break;
			
			default:
		}
		int Adash=p+n;
		int pdash=p;
		int ndash=n;
		
		Parent = new atom(pdash,ndash,0);
		if(!Parent.stable)
		{
			mother.btnDecay.setBackground(Color.lightGray);
			mother.btnDecay.setLabel("unstable!");
			mother.lblDecay.setText("<--decay");
		}
		else
		{
			mother.btnDecay.setBackground(Color.pink);
			mother.btnDecay.setLabel("Stable");
			mother.lblDecay.setText("                    ");
		}
		
		newX=this.getSize().width/2+11;
		if(Parent.protons<110)symbolP=PT.substring(Parent.protons*2,Parent.protons*2+2);
		else{symbolP=""+Parent.protons;}
		//mother.lblMessage.setText("Behold the nucleus of "+symbolP+"-"+Adash+"! Composed of "+pdash+" protons and "+ndash+" neutrons.");
		//mother.lblMessage.setText("Behold the nucleus of "+Parent.name+"-"+Parent.nucleons+"! Composed of "+Parent.protons+" protons and "+Parent.neutrons+" neutrons. (stability="+Parent.stable+")");
		mother.lblMessage.setText("Behold the nucleus of "+Parent.name+"-"+Adash+"! Composed of "+pdash+" protons and "+ndash+" neutrons.");// (stability="+Parent.stable+")");
		//if(mother.dWopen)mother.dataWindow.lbl1.setText("Behold the nucleus of "+Parent.name+"-"+Adash+"! Composed of "+pdash+" protons and "+ndash+" neutrons.");
		mother.chsData.addItem(decayNote);
		mother.chsData.addItem(Parent.name+"-"+Adash);
		mother.history.append(decayNote+"\n");
		mother.history.append(Parent.name+"-"+Adash+"\n");
		mother.graph.addData(pdash, ndash);
	}
	
	public void nextNucleus()
	{
		mother.crashSnd.play();
		projectile=false;
		newX=0;
		decayNote="";
		int Adash,pdash,ndash;
		if(!Daughter.antiParticle){
			Adash=Parent.nucleons+Daughter.nucleons;
			pdash=Parent.protons+Daughter.protons-Daughter.electrons;
			ndash=Parent.neutrons+Daughter.neutrons+Daughter.electrons;
		}
		else{
			Adash=Parent.nucleons-1;
			pdash=Parent.protons-1;
			ndash=Parent.neutrons+Daughter.neutrons;
		}
		Parent = new atom(pdash,ndash,0);
		if(!Parent.stable)
		{
			mother.btnDecay.setBackground(Color.lightGray);
			mother.btnDecay.setLabel("unstable!");
			mother.lblDecay.setText("<--decay");
		}
		else
		{
			mother.btnDecay.setBackground(Color.pink);
			mother.btnDecay.setLabel("Stable");
			mother.lblDecay.setText("                    ");
		}
		Daughter = new atom(0,0,0);
		Dactive=false;
		if(Parent.protons<110)symbolP=PT.substring(Parent.protons*2,Parent.protons*2+2);
		else{symbolP=""+Parent.protons;}
		if(Dactive)symbolD=PT.substring(Daughter.protons*2,Daughter.protons*2+2);
		//mother.lblMessage.setText("Behold the nucleus of "+symbolP+"-"+Adash+"! Composed of "+pdash+" protons and "+ndash+" neutrons.");
		//mother.lblMessage.setText("Behold the nucleus of "+Parent.name+"-"+Parent.nucleons+"! Composed of "+Parent.protons+" protons and "+Parent.neutrons+" neutrons. (stability="+Parent.stable+")");
		if(pdash>99){
				mother.lblMessage.setText("Behold the nucleus of "+Parent.name+"-"+Adash+"! Composed of "+pdash+" p and "+ndash+" n.");// (stability="+Parent.stable+")");
				}
			else{
				mother.lblMessage.setText("Behold the nucleus of "+Parent.name+"-"+Adash+"! Composed of "+pdash+" protons and "+ndash+" neutrons.");// (stability="+Parent.stable+")");
				}
		//if(mother.dWopen)mother.dataWindow.lbl1.setText("Behold the nucleus of "+Parent.name+"-"+Adash+"! Composed of "+pdash+" protons and "+ndash+" neutrons.");
		mother.chsData.addItem(Parent.name+"-"+Adash);
		mother.history.append(Parent.name+"-"+Adash+"\n");
		mother.graph.addData(pdash, ndash);	
	}
	
	public void nextProjectile(int i)
	{
		if(!projectile)
		{
		if(Math.random()<0.5&!Parent.stable)this.decayParent();
		else{
		mother.wizzSnd.play();
		projectile=true;
		String projectile="";
		decayNote="";
		switch(i){
			case(1)://alpha
				Daughter = new atom(2,2,0);
				Daughter.antiParticle=false;
				Dactive=true;
				if(Dactive)symbolD=PT.substring(Daughter.protons*2,Daughter.protons*2+2);
				newX=0;
				projectile="alpha";
				cost=100;
				break;
			case(2)://proton
				Daughter = new atom(1,0,0);
				Daughter.antiParticle=false;
				Dactive=true;
				if(Dactive)symbolD="p+";
				newX=0;
				projectile="proton";
				cost=10000;
				break;
			case(3)://neutron
				Daughter = new atom(0,1,0);
				Daughter.antiParticle=false;
				Dactive=true;
				if(Dactive)symbolD="n";
				newX=0;
				projectile="neutron";
				cost=10;
				break;
			case(4)://electron
				Daughter = new atom(0,0,1);
				Daughter.antiParticle=false;
				Dactive=true;
				if(Dactive)symbolD="e-";
				newX=0;
				projectile="electron";
				cost=1000;
				break;
			case(5)://anti-proton
				Daughter = new atom(1,0,0);
				Daughter.antiParticle=true;
				Dactive=true;
				if(Dactive)symbolD="p-";
				newX=0;
				projectile="anti-proton";
				cost=100000;
				break;
			default:
		}
		totalCost=totalCost+cost;
		mother.lblCost.setText("$"+totalCost+" spent");
		mother.chsData.addItem(projectile+" bombardment");
		mother.history.append(projectile+" bombardment"+"\n");
		}
		
		}
	}

	public nucleusViewer(Pb2Au a)
	{
		mother=a;
		Parent = new atom(1,0,0);
		n0=Parent.neutrons;
		p0=Parent.protons;
		Daughter = new atom(0,0,0);
		this.nextNucleus();
		this.start();
		/*Daughter = new atom(0,0,0);
		Dactive=false;
		symbolP=PT.substring(Parent.protons*2-2,Parent.protons*2);
		if(Dactive)symbolD=PT.substring(Daughter.protons*2,Daughter.protons*2+2);
		mother.lblNeutron.setText(Parent.name+":"+symbolD);
		mother.lblMessage.setText("Behold the nucleus of "+Parent.name+"-"+Parent.nucleons+"! Composed of "+Parent.protons+" protons and "+Parent.neutrons+" neutrons.");*/// (stability="+Parent.stable+")");
	}
	
	public void newParent(int p, int n)
	{
		Parent = new atom(p,n,0);
		n0=Parent.neutrons;
		p0=Parent.protons;
		this.nextNucleus();
		this.start();
	}

	public void init()
	{
		setBackground(mother.backColor);//(Color.pink);
		offscreenImage=createImage(637,260);//mother.centrePanel.getSize().width,mother.centrePanel.getSize().height);
		offscreenGraphics=offscreenImage.getGraphics();
		pos[0]=0;
		pos[1]=0;
		protonColor=Color.red;
		//repaint();
	}
	
	public void update(Graphics g){
		paint(g);
	}

	public void paint (Graphics g)
	{
		offscreenGraphics.setColor(Color.white);//(Color.pink);
		//offscreenGraphics.fillRect(0,0,this.getSize().width,this.getSize().height);
		offscreenGraphics.fillRect(0,0,637,260);
		offscreenGraphics.setColor(Color.black);
		//offscreenGraphics.drawRect(0,0,mother.centrePanel.getSize().width,mother.centrePanel.getSize().height);
		offscreenGraphics.drawRect(0,0,635,258);
		//offscreenGraphics.fillOval(this.getSize().width/2-50,this.getSize().height/2-50,100,100);
		//offscreenGraphics.setColor(Color.white);
		Parent.setR();
		int rad=(int)Parent.radius;
		Daughter.setR();
		
		n0=Parent.neutrons;
		p0=Parent.protons;
		A=n0+p0;
		n1=n0/2;
		n2=n0-n1;
		p1=p0/2;
		p2=p0-p1;
		protonColor=Color.red;
		
		for(int n=0;n<n1;n++)
		{
			pos=this.choosePosition(rad);
			offscreenGraphics.setColor(Color.blue);
			offscreenGraphics.fillOval(this.getSize().width/2+pos[0],this.getSize().height/2+pos[1],10,10);
			offscreenGraphics.setColor(Color.black);
			offscreenGraphics.drawOval(this.getSize().width/2+pos[0],this.getSize().height/2+pos[1],10,10);
		}
		for(int p=0;p<p1;p++)
		{
			pos=this.choosePosition(rad);
			offscreenGraphics.setColor(protonColor);
			offscreenGraphics.fillOval(this.getSize().width/2+pos[0],this.getSize().height/2+pos[1],10,10);
			offscreenGraphics.setColor(Color.black);
			offscreenGraphics.drawOval(this.getSize().width/2+pos[0],this.getSize().height/2+pos[1],10,10);
		}
		
		for(int n=0;n<n2;n++)
		{
			pos=this.choosePosition(rad);
			offscreenGraphics.setColor(Color.blue);
			offscreenGraphics.fillOval(this.getSize().width/2+pos[0],this.getSize().height/2+pos[1],10,10);
			offscreenGraphics.setColor(Color.black);
			offscreenGraphics.drawOval(this.getSize().width/2+pos[0],this.getSize().height/2+pos[1],10,10);
		}
		for(int p=0;p<p2;p++)
		{
			pos=this.choosePosition(rad);
			offscreenGraphics.setColor(protonColor);
			offscreenGraphics.fillOval(this.getSize().width/2+pos[0],this.getSize().height/2+pos[1],10,10);
			offscreenGraphics.setColor(Color.black);
			offscreenGraphics.drawOval(this.getSize().width/2+pos[0],this.getSize().height/2+pos[1],10,10);
		}
		
		offscreenGraphics.setFont(element);
		offscreenGraphics.drawString(""+symbolP,this.getSize().width/2-rad,this.getSize().height/2-rad); 
		offscreenGraphics.setFont(numbers);
		numbersOffset=fmN.stringWidth(""+A);
		offscreenGraphics.drawString(""+A,this.getSize().width/2-rad-5-numbersOffset,this.getSize().height/2-rad-8);
		numbersOffset=fmN.stringWidth(""+p0);
		offscreenGraphics.drawString(""+p0,this.getSize().width/2-rad-5-numbersOffset,this.getSize().height/2-rad+5); 
		
		if(Dactive)
		{
		rad=(int)Daughter.radius;
		newX=newX+5;
		
		n0=Daughter.neutrons;
		p0=Daughter.protons;
		e0=Daughter.electrons;
		anti=1;
		if(Daughter.antiParticle){
			anti=-1;
			protonColor=Color.green;}
		elec=0;
		if(Daughter.isElectron){
			elec=-1;
			protonColor=Color.green;}
		A=n0+p0;
		n1=n0/2;
		n2=n0-n1;
		p1=p0/2;
		p2=p0-p1;
		
		/*for(int n=0;n<n0;n++)
		{
			pos=this.choosePosition2(n*2);
			offscreenGraphics.setColor(Color.blue);
			offscreenGraphics.fillOval(this.getSize().width/2+pos[0]+newX-300,this.getSize().height/2+pos[1]-newY,10,10);
			offscreenGraphics.setColor(Color.black);
			offscreenGraphics.drawOval(this.getSize().width/2+pos[0]+newX-300,this.getSize().height/2+pos[1]-newY,10,10);
		}
		for(int p=0;p<p0;p++)
		{
			pos=this.choosePosition2(1+p*2);
			offscreenGraphics.setColor(protonColor);
			offscreenGraphics.fillOval(this.getSize().width/2+pos[0]+newX-300,this.getSize().height/2+pos[1]-newY,10,10);
			offscreenGraphics.setColor(Color.black);
			offscreenGraphics.drawOval(this.getSize().width/2+pos[0]+newX-300,this.getSize().height/2+pos[1]-newY,10,10);
		}*/
		for(int n=0;n<n1;n++)
		{
			pos=this.choosePosition(rad/2);
			offscreenGraphics.setColor(Color.blue);
			offscreenGraphics.fillOval(this.getSize().width/2+pos[0]+newX-300,this.getSize().height/2+pos[1]-newY,10,10);
			offscreenGraphics.setColor(Color.black);
			offscreenGraphics.drawOval(this.getSize().width/2+pos[0]+newX-300,this.getSize().height/2+pos[1]-newY,10,10);
		}
		for(int p=0;p<p1;p++)
		{
			pos=this.choosePosition(rad/2);
			offscreenGraphics.setColor(protonColor);
			offscreenGraphics.fillOval(this.getSize().width/2+pos[0]+newX-300,this.getSize().height/2+pos[1]-newY,10,10);
			offscreenGraphics.setColor(Color.black);
			offscreenGraphics.drawOval(this.getSize().width/2+pos[0]+newX-300,this.getSize().height/2+pos[1]-newY,10,10);
		}
		for(int n=0;n<n2;n++)
		{
			pos=this.choosePosition(rad/2);
			offscreenGraphics.setColor(Color.blue);
			offscreenGraphics.fillOval(this.getSize().width/2+pos[0]+newX-300,this.getSize().height/2+pos[1]-newY,10,10);
			offscreenGraphics.setColor(Color.black);
			offscreenGraphics.drawOval(this.getSize().width/2+pos[0]+newX-300,this.getSize().height/2+pos[1]-newY,10,10);
		}
		for(int p=0;p<p2;p++)
		{
			pos=this.choosePosition(rad/2);
			offscreenGraphics.setColor(protonColor);
			offscreenGraphics.fillOval(this.getSize().width/2+pos[0]+newX-300,this.getSize().height/2+pos[1]-newY,10,10);
			offscreenGraphics.setColor(Color.black);
			offscreenGraphics.drawOval(this.getSize().width/2+pos[0]+newX-300,this.getSize().height/2+pos[1]-newY,10,10);
		}
		for(int p=0;p<e0;p++)
		{
			pos=this.choosePosition(rad);
			offscreenGraphics.setColor(protonColor);
			offscreenGraphics.fillOval(this.getSize().width/2+pos[0]+newX-300,this.getSize().height/2+pos[1]-newY,2,2);
			offscreenGraphics.setColor(Color.black);
			offscreenGraphics.drawOval(this.getSize().width/2+pos[0]+newX-300,this.getSize().height/2+pos[1]-newY,2,2);
		}
		offscreenGraphics.setFont(element);
		offscreenGraphics.drawString(""+symbolD,this.getSize().width/2-rad+newX-300,this.getSize().height/2-rad-newY); 
		offscreenGraphics.setFont(numbers);
		if(!gamma){
		numbersOffset=fmN.stringWidth(""+A);
		offscreenGraphics.drawString(""+A*anti,this.getSize().width/2-rad+newX-300-5-numbersOffset,this.getSize().height/2-rad-newY-8); 
		numbersOffset=fmN.stringWidth(""+p0);
		offscreenGraphics.drawString(""+(p0*anti-e0*anti),this.getSize().width/2-rad+newX-300-5-numbersOffset,this.getSize().height/2-rad-newY+5); 
		}
		}
		if(newX>this.getSize().width/2-10&newX<this.getSize().width/2+10)nextNucleus();
		if(newX>this.getSize().width){
			this.Dactive=false;
			decayNote="";
		}
		if(!Dactive&continuous){
			if(lastProj==-1){
				if(mother.btnDecay.getLabel().equals("unstable!"))
					{this.decayParent();}
				}
			else{this.nextProjectile(lastProj);}
		}
		numbersOffset=fmN.stringWidth(decayNote);
		offscreenGraphics.drawString(decayNote, this.getSize().width/2+200-numbersOffset, 10);
		
		g.drawImage(offscreenImage,2,0,this);
	}
	
	public int[] choosePosition(int r)
	{
		int position[]=new int[2];
		double theta = Math.random()*2*Math.PI;
		double radius = 1.0-(Math.random()*Math.random());
		int x=(int)(radius*Math.cos(theta)*(double)r);
		int y=(int)(radius*Math.sin(theta)*(double)r);
		position[0]=x;
		position[1]=y;
		return position;
		
	}
	
	public int[] choosePosition2(int r)
	{
		int position[]=new int[2];
		switch(r){
			case(0):
				position[0]=0;
				position[1]=0;
				break;
			case(1):
				position[0]=+10;
				position[1]=0;
				break;
			case(3):
				position[0]=0;
				position[1]=+10;	
				break;
			case(2):
				position[0]=+10;
				position[1]=+10;	
				break;
			default:			
			
		
		}
		return position;
		
	}
	
	/*public boolean mouseDown(Event e, int mx, int my)
	{
		
			
		repaint();
		return true;
	}
	
	public boolean mouseDrag(Event e, int mx, int my)
	{
		
		return true;
	}
	
	public boolean mouseUp(Event e, int mx, int my)
	{
		
		
		return true;
	}*/			

	public void destroy()
	{
		offscreenGraphics.dispose();
	}

	public void run()
	{
		while(true){
			
			
			repaint();
			try {Thread.sleep(sleepTime); }
			catch (InterruptedException e) { }
		}
		
	}
	
		public void stop(){ 
		if (runner != null) {
			runner.stop();
			runner = null;
			isRunning=false;
		}
	}
	
	public void start() {
		if (runner == null) {
			runner = new Thread(this);
			runner.start();
			isRunning=true;
		}
	}


	
}
