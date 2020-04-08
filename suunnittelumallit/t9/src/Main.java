import java.util.Random;

public class Main {

	public static void main(String[] args) {
		
		Taulu t = new Taulu(10000, new SelectSort());
		System.out.println(t.getTime()+"ms select");
		t.setSorter(new MergeSort());
		System.out.println(t.getTime()+"ms merge");
		t.setSorter(new QuickSort());
		System.out.println(t.getTime()+"ms quick");
		
		
	}

}
