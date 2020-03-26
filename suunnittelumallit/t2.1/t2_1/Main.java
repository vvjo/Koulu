package t2_1;

public class Main {

	public static void main(String[] args) {
		
		//Tehdas luokka hakee konkreettisen tehtaan nimen tehdas.properties		
		Jasper j = new Tehdas().getTehdas();
		j.luettele();

	}

}
