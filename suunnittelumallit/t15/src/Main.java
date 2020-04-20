
public class Main {

	public static void main(String[] args) {
		Car a = new Mercedes();
		Boat b = new Buster();
		
		a.drive();
		b.sail();
		
		Car c = new AmphibiousCar(b);
		c.drive();
	}

}
