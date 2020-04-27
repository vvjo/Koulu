
public class Main {

	public static void main(String[] args) {

		Clock c = new Clock("a",0,0,0);
		Clock d = c.clone();

		c.getName();
		c.time();
		d.getName();
		d.time();

		c.setTime(10, 20, 2);
		c.setName("b");
		
		System.out.println();
		c.getName();
		c.time();
		d.getName();
		d.time();	
	}
}
