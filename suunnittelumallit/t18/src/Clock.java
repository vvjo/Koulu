
public class Clock implements Cloneable {
	private String name;
	private Hand s;
	private Hand m;
	private Hand h;
	
	public Clock(String name, int s, int m, int h) {
		this.name=name;
		this.s=new Hand(s);
		this.m=new Hand(m);
		this.h=new Hand(h);
	}
	
	public void getName() {
		System.out.println(name);
	}
	
	public void setName(String n) {
		this.name=n;
	}
	
	public void setTime(int hh, int mm, int ss) {
		s.setTime(ss);
		m.setTime(mm);
		h.setTime(hh);
	}
	
	public void time() {
		System.out.println(h.getTime()+":"+m.getTime()+":"+s.getTime());
	}
	
	public Clock clone() {
		Clock c = null;
		try {
			c =(Clock) super.clone();
			c.s = (Hand) s.clone();
			c.m = (Hand) m.clone();
			c.h = (Hand) h.clone();
			return c;
		} catch (CloneNotSupportedException e) {
			return c;
		}
	}
}
