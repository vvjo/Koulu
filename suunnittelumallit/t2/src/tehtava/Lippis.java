package tehtava;

public class Lippis implements Cloth {
	
	Brand brand;

	public Lippis(Brand brand) {
		this.brand = brand;
	}

	@Override
	public String getName() {
		return brand.getName()+" lippis";
	}
	
}