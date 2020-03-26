package t2_1;

public abstract class Jasper {

	private Cloth[] clothes = null;

	public abstract Cloth[] createCloth();

	public void luettele() {

		if (clothes == null) {
			clothes = createCloth();
			for (Cloth c : clothes) {
				System.out.println(c.getName());
			}
		}
	}
}
