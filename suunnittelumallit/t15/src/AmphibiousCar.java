
public class AmphibiousCar implements Car {
	private final Boat b;
	
	public AmphibiousCar(Boat b) {
		this.b = b;
	}

	@Override
	public void drive() {
		System.out.println("Amphibious car");
		b.sail();
	}

	@Override
	public void getSound() {
		b.getSound();
	}
	
	
}
