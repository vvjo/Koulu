import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {

	public static void main(String[] args) {
		Esimies a = new Esimies();
		Päällikkö s = new Päällikkö();
		Johtaja d = new Johtaja();
		a.setSuccessor(s);
		s.setSuccessor(d);
		
		try {
			while(true) {
				System.out.println("Current salary is 1000e");
				System.out.println("Enter the rise amount to check who approves it");
				System.out.println(">");
				double f = Double.parseDouble(new BufferedReader(new InputStreamReader(System.in)).readLine());
				a.processReq(new KorotusReq(f));
				System.out.println("");
			}
		}catch(Exception e) {
			System.exit(1);
		}

	}

}
