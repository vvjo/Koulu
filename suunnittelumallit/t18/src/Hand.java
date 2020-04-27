
public class Hand implements Cloneable {
	
	private int time;
	
	public Hand(int t) {
		this.time=t;
	}
	
	public int getTime() {
		return time;
	}
	
	public void setTime(int t) {
		this.time=t;
	}

	public Object clone() {
		try {
			return super.clone();
		} catch (CloneNotSupportedException e) {
			return null;
		}
	}
}
