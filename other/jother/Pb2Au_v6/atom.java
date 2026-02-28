public class atom
{
	int protons=0;
	int neutrons=0;
	int electrons=0;
	int nucleons=0;
	int xPos=0, yPos=0;
	int xDestination=0, yDestination=0;
	int charge=0;
	double doubR;
	double radius;
	boolean stable=true;
	boolean antiParticle=false;
	boolean isElectron=false;
	String name="(your name here)";
	StableTable data=new StableTable();
	
	atom(int p, int n, int e)
	{
		protons=p;
		neutrons=n;
		electrons=e;
		if(electrons>0)isElectron=true;
		nucleons=(p+n);
		this.setR();
		checkStable(p,n);
	}
	
	public void checkStable(int p, int n)
	{
		stable=false;
		if(p<data.number)
		{
			name=data.table[p][0];
			String dummy=data.table[p][1];
			int length=dummy.length()/3;
			if(length!=0)
			{
				for(int i=0;i<length;i++)
				{
					String bitToSee=data.table[p][1].substring(i*3,i*3+3);
					int bitToSee2=Integer.parseInt(bitToSee);
					if(bitToSee2==n)stable=true;
				}
			}
		}
		else
		{
			name="Element("+p+")";
		}
		
			
	}

	public void setR()
	{
		double number=(double)(nucleons+electrons);
		double third = 1.0/3.0;
		doubR=Math.pow(number,third);
		radius=(doubR*10);
	}
	
	public void setX(int x)
	{
		xPos=x;
	}
	
	public int getX()
	{
		return xPos;
	}
	
	public void setY(int y)
	{
		yPos=y;
	}
	
	public int getY()
	{
		return yPos;
	}
}
