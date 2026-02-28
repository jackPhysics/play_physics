import java.awt.*;
import java.applet.*;
import java.awt.event.*;

public class popUp extends Frame implements WindowListener//MouseMotionListener,  WindowListener
{
	Pb2Au mother;
	int xPos, yPos;
	int xnew=0, ynew=0, xDrag, yDrag,offsetx, offsety;//int xnew=-284, ynew=-150,for lead int xnew=0, ynew=0 for H
	int popWidth, popHeight;
	//Image offscreenImage, pTable;
	//Graphics offscreenGraphics;
	int imgWidth, imgHeight;
	int lineNumb;
	String nextLine;
	
	public popUp()
	{
		this.setSize(120,120);
		this.addWindowListener(this);
				pack();
		show();
	}
	
	public popUp(Pb2Au m)//, Image a
	{
		//this.setTitle("Periodic Table"); //sets title and mode
		this.setSize(120,120);
		//registerListeners();
		//this.addMouseMotionListener(this);
		mother=m;
		//pTable=a;
		this.addWindowListener(this);
		
		pack();
		show();
		
	}
	
	public void init()
	{
		this.setSize(120,120);
		popWidth=120;
		popHeight=120;
		//offscreenImage=createImage(this.getSize().width,this.getSize().height);
		//offscreenGraphics=offscreenImage.getGraphics();
		Dimension d=Toolkit.getDefaultToolkit().getScreenSize();
		this.setLocation(d.width/2,d.height/2);
		imgWidth=526;//pTable.getWidth(mother);
		imgHeight=336;//pTable.getHeight(mother);
		lineNumb=0;
	}
	
	/*public boolean handleEvent(Event e)
	{
		if(e.id == Event.WINDOW_DESTROY)
		{
			hide();
			dispose();
			mother.dWopen=false;
		}
		return super.handleEvent(e);
	}*/
	
	/*protected void processWindowEvent(WindowEvent e)
	{
		if(e.getID() == WindowEvent.WINDOW_CLOSING)
		{
			hide();
			dispose();
			mother.dWopen=false;
		}
	}*/
	
	public void printLine(String s)
	{
		nextLine=s;
		repaint();
	}

	public void update(Graphics g){
		paint(g);
	} 
	
	public void paint (Graphics g)
	{
		//offscreenImage=createImage(this.getSize().width,this.getSize().height);
		//offscreenGraphics=offscreenImage.getGraphics();
		//offscreenGraphics.setColor(Color.yellow);
		//offscreenGraphics.fillRect(0,0,this.getSize().width,this.getSize().height);
		
		popWidth=this.getSize().width;
		popHeight=this.getSize().height;
		lineNumb++;
		g.drawString(nextLine,lineNumb*10,0);
		//offscreenGraphics.drawImage(pTable,xnew,ynew,this);
		//g.drawImage(offscreenImage,0,0,this);
	}
	
	public void destroy()
	{
		//offscreenGraphics.dispose();
	}
	
	/*public void mouseMoved(MouseEvent e)
	{
		this.setCursor(Frame.DEFAULT_CURSOR);
		xPos=e.getX();
		yPos=e.getY();
		offsetx=xnew-xPos;
		offsety=ynew-yPos;
		repaint();
	}
	
	public void mouseDragged(MouseEvent e)
	{
		this.setCursor(Frame.MOVE_CURSOR);
		xDrag=e.getX();
		yDrag=e.getY();
		
		xnew=xDrag+offsetx;
		if(xnew<-imgWidth)xnew=-imgWidth;
		if(xnew>popWidth)xnew=popWidth;
		ynew=yDrag+offsety;
		if(ynew<-imgHeight)ynew=-imgHeight;
		if(ynew>popHeight)ynew=popHeight;
		repaint();
		
	}*/
	
	public void windowActivated(WindowEvent we){}
	public void windowClosed(WindowEvent we){}
	public void windowClosing(WindowEvent we){
		System.exit(0);
		mother.dWopen=false;}
	public void windowDeactivated(WindowEvent we){}
	public void windowDeiconified(WindowEvent we){}
	public void windowIconified(WindowEvent we){}
	public void windowOpened(WindowEvent we){}
	
	
}

