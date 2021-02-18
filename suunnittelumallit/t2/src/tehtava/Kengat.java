package tehtava;

/**
 * Kenkä class.
 * @author hp
 */
public class Kengat  implements Cloth {

  /**
   * Brand of the shoes.
   */
  private final Brand brand;

  /**
   * COnstructs kengat with a brand.
   * @param brand Brändi
   */
  public Kengat(final Brand brand) {
    this.brand = brand;
  }

  /**
   * Returns branded shoes as a string.
   * @return String brand + shoes
   */
  @Override
  public String getName() {
    return brand.getName() + " kengät";

  }
}