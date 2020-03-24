package t3;

public class KasvisAnnos extends AteriaFactory {

	@Override
	public Ruoka createAnnos() {
		Ruoka salaatti = new Ruoka();
		RuokaAine salaattia = new Salaatti();
		RuokaAine tomaatti = new Tomaatti();
        RuokaAine kurkku = new Kurkku();
        RuokaAine paprika = new Paprika();
        salaattia.addAine(tomaatti);
        salaattia.addAine(kurkku);
        salaattia.addAine(paprika);
        salaatti.addAine(salaattia);
        
        return salaatti;
	}

}
