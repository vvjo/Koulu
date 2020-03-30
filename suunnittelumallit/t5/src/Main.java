
public class Main {

	public static void main(String[] args) {
		
		//Tehdas luokka hakee konkreettisen tehtaan nimen tehdas.properties		
		Jasper j = new Tehdas().getInstance();
		j.luettele();

	}

}
