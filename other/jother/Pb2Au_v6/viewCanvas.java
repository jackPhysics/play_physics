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
	Vector dataP;
	Vector dataN;
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
	}
	
	public void addData(int p, int n)
	{
		dataP.addElement(new Integer(p));
		dataN.addElement(new Integer(n));
		noOfElements++;
		repaint();
	}
	public void init()
	{
		popWidth=120;
		popHeight=120;
		//offscreenImage=createImage(this.getSize().width,this.getSize().height);
		//offscreenGraphics=offscreenImage.getGraphics();
		offscreenImage=createImage(550,350);
		offscreenGraphics=offscreenImage.getGraphics();
		imgWidth=526;
		imgHeight=336;
	}
	
	public void paint (Graphics g)
	{
		offscreenImage=createImage(550,350);
		offscreenGraphics=offscreenImage.getGraphics();
		offscreenGraphics.setColor(Color.white);
		offscreenGraphics.fillRect(0,0,550,350);
		
		popWidth=550;
		popHeight=350;
		
		offscreenGraphics.setColor(Color.black);
		for(int i=0;i<noOfElements;i++){
		offscreenGraphics.drawOval(Integer.parseInt(String.valueOf(dataP.elementAt(i))),200-Integer.parseInt(String.valueOf(dataN.elementAt(i))),1,1);
		}
		offscreenGraphics.setColor(Color.red);
		offscreenGraphics.drawOval(Integer.parseInt(String.valueOf(dataP.elementAt(noOfElements-1))),200-Integer.parseInt(String.valueOf(dataN.elementAt(noOfElements-1))),1,1);
		
		g.drawImage(offscreenImage,0,0,this);
	}
	
	
}
