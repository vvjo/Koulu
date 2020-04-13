import java.util.Random;

public class Arvuuttaja {

	private Random r = new Random();

	public boolean check(Object meme, int a) {
		Memento memento = (Memento) meme;
		if (memento.nro == a) {
			return false;
		}
		return true;
	}

	public Memento liityPeliin() {
		return new Memento(r.nextInt(10));
	}

	private class Memento {

		private final int nro;

		private Memento(int nro) {
			this.nro = nro;
		}
	}

}
