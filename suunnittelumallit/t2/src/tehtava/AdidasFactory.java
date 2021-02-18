package tehtava;

public class AdidasFactory extends Jasper{
	
	@Override
	public Cloth[] createCloth() {
		
		Brand adidas = new Adidas();
		
		Cloth[] setti = new Cloth[4];
		setti[0] = new Lippis(adidas);
		setti[1] = new TPaita(adidas);
		setti[2] = new Farmarit(adidas);
		setti[3] = new Kengat(adidas);
		
		return setti;
		
	}

}
