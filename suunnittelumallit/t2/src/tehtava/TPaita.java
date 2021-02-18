package tehtava;
/**
 *
 * @author v
 */
public class TPaita implements Cloth {
	
	/**
	 * Brand of the shirt
	 */
	private final Brand brand;

	/**
	 * Constructor for the shirt
	 * @param brand
	 */
	public TPaita(final Brand brand) {
		//Brand constructor @param 
		this.brand = brand;
	}

	/**
	 * Return string with the name of the brand
	 * @return String
	 */
	@Override
	public String getName() {
		return brand.getName()+" t-paita";
	}
	
}
