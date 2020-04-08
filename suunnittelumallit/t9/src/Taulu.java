import java.util.Random;

public class Taulu {
	
	private Sorter s;
	private int[] arra;
	
	public Taulu(int size, Sorter s) {
		this.s = s;
		this.arra = new int[size];
		
		Random r = new Random();
		for (int i = 0; i < arra.length; i++) {
			arra[i] = r.nextInt(1000);
		}
	}
	
	public long getTime() {
		this.s.sort(arra);
		return this.s.getTime();
	}
	
	public void setSorter(Sorter s) {
		this.s = s;
	}
	
}
