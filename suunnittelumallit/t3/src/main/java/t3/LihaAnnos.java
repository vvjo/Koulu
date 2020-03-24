package t3;

public class LihaAnnos extends AteriaFactory {

	@Override
	public Ruoka createAnnos() {
		Ruoka kanariisilla = new Ruoka();
		RuokaAine kana = new Kana();
        RuokaAine riisi = new Riisi();
        kanariisilla.addAine(kana);
        kanariisilla.addAine(riisi);
        
        return kanariisilla;
	}

}
