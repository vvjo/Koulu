
public class TPaita implements Cloth {
	
	Brand brand;

	public TPaita(Brand brand) {
		this.brand = brand;
	}

	@Override
	public String getName() {
		return brand.getName()+" t-paita";
	}
	
}
