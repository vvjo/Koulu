package t2_1;

public class Farmarit implements Cloth {
	
	Brand brand;

	public Farmarit(Brand brand) {
		this.brand = brand;
	}

	@Override
	public String getName() {
		return brand.getName()+" farmarit";
	}
	
}