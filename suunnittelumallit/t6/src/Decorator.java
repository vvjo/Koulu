
public class Decorator implements IDecorator {
	protected IDecorator dec;
	
	public Decorator(IDecorator dec) {
		this.dec = dec;
	}

	@Override
	public void kirjoita(String a) {
		dec.kirjoita(a);
		
	}

	@Override
	public String hae() {
		return dec.hae();
	}

}
