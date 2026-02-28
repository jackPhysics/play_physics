import java.awt.*;
import java.applet.*;
import java.awt.event.*;

public class ScrollCanvas extends Canvas implements MouseMotionListener
{
	Pb2Au mother;
	Image pTable;
	Image offscreenImage;
	Graphics offscreenGraphics;
	int popWidth, popHeight;
	int imgWidth, imgHeight;
	int xPos, yPos;
	int xnew=0, ynew=0, xDrag, yDrag,offsetx, offsety;//int xnew=-284, ynew=-150,for lead int xnew=0, ynew=0 for H
		
	public ScrollCanvas(Pb2Au m, Image a)
	{
		//this.setTitle("Periodic Table"); //sets title and mode
		//this.setSize(120,120);
		//registerListeners();
		this.addMouseMotionListener(this);
		mother=m;
		pTable=a;
		//this.addWindowListener(this);
		
		//pack();
		//show();
		
	}
	
	public void init()
	{
		//this.setSize(120,120);
		popWidth=120;
		popHeight=120;
		//pTable=this.getImage(getCodeBase(), "periodic.gif");
		offscreenImage=createImage(550,350);
		offscreenGraphics=offscreenImage.getGraphics();
		//Dimension d=Toolkit.getDefaultToolkit().getScreenSize();
		//this.setLocation(d.width/2,d.height/2);
		imgWidth=526;//pTable.getWidth(mother);
		imgHeight=336;//pTable.getHeight(mother);
		
	}
	
	public void paint (Graphics g)
	{
		offscreenImage=createImage(this.getSize().width,this.getSize().height);
		offscreenGraphics=offscreenImage.getGraphics();
		offscreenGraphics.setColor(Color.yellow);
		offscreenGraphics.fillRect(0,0,this.getSize().width,this.getSize().height);
		
		popWidth=550;
		popHeight=350;
		
		offscreenGraphics.drawImage(pTable,xnew,ynew,this);
		g.drawImage(offscreenImage,0,0,this);
	}
	
	
	public void mouseMoved(MouseEvent e)
	{
		this.setCursor(Cursor.getPredefinedCursor(Cursor.DEFAULT_CURSOR));
		xPos=e.getX();
		yPos=e.getY();
		offsetx=xnew-xPos;
		offsety=ynew-yPos;
		//repaint();
	}
	
	public void mouseDragged(MouseEvent e)
	{
		this.setCursor(Cursor.getPredefinedCursor(Cursor.MOVE_CURSOR));
		xDrag=e.getX();
		yDrag=e.getY();
		
		xnew=xDrag+offsetx;
		if(xnew<-imgWidth)xnew=-imgWidth;
		if(xnew>popWidth)xnew=popWidth;
		ynew=yDrag+offsety;
		if(ynew<-imgHeight)ynew=-imgHeight;
		if(ynew>popHeight)ynew=popHeight;
		repaint();
		
	}
}
