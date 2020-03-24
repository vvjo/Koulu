
public class Kengät  implements Cloth {
	
	Brand brand;

	public Kengät(Brand brand) {
		this.brand = brand;
	}

	@Override
	public String getName() {
		return brand.getName()+" kengät";
	}
	
}