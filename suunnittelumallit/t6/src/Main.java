

public class Main {

	public static void main(String[] args) {

		IDecorator a = new Tiedosto();
		//a.kirjoita("abcd");
		
		IDecorator b = new Salaaja(new Tiedosto());
		b.kirjoita("abcd");
		
		System.out.println(a.hae());
		System.out.println(b.hae());
	}

}
