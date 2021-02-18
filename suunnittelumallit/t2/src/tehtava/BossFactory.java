package tehtava;

public class BossFactory extends Jasper{
	
	Brand boss = new Boss();

	@Override
	public Cloth[] createCloth() {
		
		Cloth[] setti = new Cloth[4];
		setti[0] = new Lippis(boss);
		setti[1] = new TPaita(boss);
		setti[2] = new Farmarit(boss);
		setti[3] = new Kengat(boss);
		
		return setti;
		
	}

}
