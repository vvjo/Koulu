
public class Main {

	public static void main(String[] args) {
		Arvuuttaja a = new Arvuuttaja();

		Asiakas[] list = new Asiakas[3];
		list[0] = new Asiakas("Q",a);
		list[1] = new Asiakas("W",a);
		list[2] = new Asiakas("E",a);
		
		
		for(Asiakas x : list) {
			x.setMeme(a.liityPeliin());
			x.start();
		}
	}
}
