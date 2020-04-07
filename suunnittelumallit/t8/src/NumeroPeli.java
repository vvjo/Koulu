import java.util.Scanner;

public class NumeroPeli extends Game {
	
	private Scanner scanner = new Scanner(System. in);
	private int goal;
	private int arvaus;
	private int player;
	
	protected void initializeGame() {
		System.out.println("Arvaa numero 1-20");
		goal = (int)(Math.random() * 20) + 1;
		System.out.println("goal "+goal);
		
	}

	protected void makePlay(int player) {
		System.out.println("Pelaaja "+(player+1)+" arvaa");
		this.player = player;
		arvaus = Integer.parseInt(scanner.nextLine());
	}

	protected boolean endOfGame() {
		if(arvaus==0) return false;
		if(arvaus==goal) {
			return true;
		}else {
			System.out.println("Väärin. Seuraavan pelaajan vuoro");
			if(arvaus>goal) {
				System.out.println("Haettu luku on pienempi");
			}else {
				System.out.println("Haettu luku on suurempi");
			}
			return false;
		}
	}

	protected void printWinner() {
		System.out.println("Pelaaja "+(player+1)+" voitti");
	}

}
