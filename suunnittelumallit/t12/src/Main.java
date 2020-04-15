import java.util.ArrayList;
import java.util.List;

public class Main {

	public static void main(String[] args) {

		char z;

		List<Image> albumi = new ArrayList<Image>();

		Image a = new ProxyImage("A");
		Image b = new ProxyImage("B");
		Image c = new ProxyImage("C");

		albumi.add(a);
		albumi.add(b);
		albumi.add(c);

		do {
			System.out.println("Tulosta albumin sisältö: 1");
			System.out.println("Näytä kuva albumista: 2");
			System.out.println("Lopeta: 3");
			System.out.println();

			z = Lue.merkki();

			switch (z) {
			case '1':
				for (Image i : albumi) {
					i.showData();
				}
				System.out.println();
				break;
			case '2':
				System.out.println("Kuva a, b vai c?");
				char x = Lue.merkki();
				switch (x) {
				case 'a':
					a.displayImage();
					break;
				case 'b':
					b.displayImage();
					break;
				case 'c':
					c.displayImage();
					break;
				}
				System.out.println();
				break;
			}
		} while (z != 3);
	}

}
