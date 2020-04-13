import java.util.Random;

public class Asiakas extends Thread {

	private Object meme;
	private String nimi;
	private Random r = new Random();
	private Arvuuttaja a;

	public Asiakas(String nimi, Arvuuttaja a) {
		this.a = a;
		this.nimi = nimi;
	}

	public void setMeme(Object meme) {
		this.meme = meme;
	}

	public Object getMeme() {
		return meme;
	}

	@Override
	public void run() {
		boolean running = true;
		int arvaus=0;
		do {
			try {
				arvaus = r.nextInt(10);
				running = a.check(this.meme, arvaus);
				if(running!=false) {
					System.out.println(nimi + " arvasi: "+arvaus+" mikä on väärin.");
				}
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		} while (running);
		System.out.println(nimi + " arvasi oikein: "+arvaus);

	}

}
