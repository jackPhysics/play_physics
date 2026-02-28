import java.awt.*;
import java.applet.*;
import java.awt.event.*;
import java.util.*;				

public class viewCanvas extends Canvas
	
{
	Pb2Au mother;
	Image pTable;
	Image offscreenImage;
	Graphics offscreenGraphics;
	int xPos, yPos;
	int xnew=0, ynew=0, xDrag, yDrag,offsetx, offsety;//int xnew=-284, ynew=-150,for lead int xnew=0, ynew=0 for H
	int popWidth, popHeight;
	int imgWidth, imgHeight;
	Vector dataP; //data's P number
	Vector dataN; //data's N number
	Vector dataS; //whether data is stable or not
	int noOfElements=0;
	
	public viewCanvas(Pb2Au m)
	{
		//this.setTitle("Periodic Table"); //sets title and mode
		//this.setSize(120,120);
		//registerListeners();
		//this.addMouseMotionListener(this);
		mother=m;
		dataP = new Vector();
		dataN = new Vector();
		dataS = new Vector();
	}
	
	public void addData(int p, int n, int s)
	{
		dataP.addElement(new Integer(p));
		dataN.addElement(new Integer(n));
		dataS.addElement(new Integer(s));
		noOfElements++;
		repaint();
	}
	public void init()
	{
		popWidth=120;
		popHeight=120;
		//offscreenImage=createImage(this.getSize().width,this.getSize().height);
		//offscreenGraphics=offscreenImage.getGraphics();
		offscreenImage=createImage(550,400);
		offscreenGraphics=offscreenImage.getGraphics();
		imgWidth=526;
		imgHeight=336;
	}
	
	public void paint (Graphics g)
	{
		offscreenImage=createImage(550,400);
		offscreenGraphics=offscreenImage.getGraphics();
		//this.setBackground(new Color(40,100,40));
		//offscreenGraphics.setColor(Color.black);
		//offscreenGraphics.setColor(new Color(40,100,40));
		//offscreenGraphics.fillRect(0,0,550,350);
		
		//clear old display
		this.setBackground(new Color(40,100,40));
		offscreenGraphics.setColor(this.getBackground());
		offscreenGraphics.fillRect(0,0,this.getSize().width,this.getSize().height);
		
		//draw grid
		offscreenGraphics.setColor(Color.black);
		for(int i=0;i<this.getSize().width;i=i+10)
		{	offscreenGraphics.drawLine(i,0,i,this.getSize().height);}
		for(int i=0;i<this.getSize().height;i=i+10){
			offscreenGraphics.drawLine(0,i+2,this.getSize().width,i+2);}
		
		//DRAW AXES
		offscreenGraphics.setColor(Color.green);
		int j=this.getSize().width;
		int k=this.getSize().height;
		//y-axis
		offscreenGraphics.drawLine(20,10,20,k-55);
		//x-axis
		offscreenGraphics.drawLine(20,k-55,j-10,k-55);
		
		offscreenGraphics.setColor(Color.orange);
		offscreenGraphics.drawLine(20,k-55,j-10,k-j-25);
		offscreenGraphics.drawString("N=Z", j-40,k-j-25);		
				
		//labels
		//int graphWidthThis=this.getSize().width-60;//width of x-axis = topVolts
		//int graphHeightThis=this.getSize().height-40;//height of y-axis = topVolts
		//graphWidth=637-60;
		//graphHeight=260-40;
		//**int noOfTicks=mother.topVolts/50;
		//want a tick every 100keV

		//DRAW TICKS
		offscreenGraphics.setColor(Color.green);
		int noOfTicks=8;
		for(int i=0;i<noOfTicks+1;i++){
			int tickPosition=(20*i)+20;
			offscreenGraphics.drawLine(tickPosition,k-54,tickPosition,k-50);
			offscreenGraphics.drawString(""+i*10, tickPosition-2, k-33);
		}
			
		//offscreenGraphics.setColor(Color.yellow);
		offscreenGraphics.drawString("Z", (20*9)+20-2, k-33);		
		//offscreenGraphics.setColor(Color.green);
		
		noOfTicks=14;
		for(int i=0;i<noOfTicks+1;i++){
			int tickPosition=k-(20*i)-55;
			offscreenGraphics.drawLine(20, tickPosition, 16,tickPosition);
			offscreenGraphics.drawString(""+i*10, 1, tickPosition-0);
		}
			
		//offscreenGraphics.setColor(Color.yellow);
		offscreenGraphics.drawString("N", 2,k-(20*15)-52);		
		
		offscreenGraphics.setColor(Color.orange);
		offscreenGraphics.drawString("Proton number, Z, vs. Neutron number, N", 15,355);		
		
		popWidth=550;
		popHeight=350;
		
		//offscreenGraphics.setColor(Color.black);
		for(int i=0;i<noOfElements;i++){
			if(Integer.parseInt(String.valueOf(dataS.elementAt(i)))==1){ //1 means unstable
				offscreenGraphics.setColor(Color.lightGray);
				offscreenGraphics.drawOval(20+2*Integer.parseInt(String.valueOf(dataP.elementAt(i))),312-2*Integer.parseInt(String.valueOf(dataN.elementAt(i))),1,1);
			}
			else{
				offscreenGraphics.setColor(Color.white);
				offscreenGraphics.drawOval(20+2*Integer.parseInt(String.valueOf(dataP.elementAt(i))),312-2*Integer.parseInt(String.valueOf(dataN.elementAt(i))),1,1);
			}
		}
			
		offscreenGraphics.setColor(Color.red);
		offscreenGraphics.drawOval(20+2*Integer.parseInt(String.valueOf(dataP.elementAt(noOfElements-1))),312-2*Integer.parseInt(String.valueOf(dataN.elementAt(noOfElements-1))),1,1);
		
		g.drawImage(offscreenImage,0,0,this);
	}
	
	
}
