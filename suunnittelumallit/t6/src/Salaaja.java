import java.util.Base64;

public class Salaaja extends Decorator {

	public Salaaja(Tiedosto t) {
		super(t);
	}

	@Override
	public void kirjoita(String a) {
		String encodedString = Base64.getEncoder().withoutPadding().encodeToString(a.getBytes());
		super.kirjoita(encodedString);
	}
	
	@Override
	public String hae() {
		byte[] decodedBytes = Base64.getDecoder().decode(super.hae());
		String decodedString = new String(decodedBytes);
		return decodedString;
	}

}