
public class Stater extends Game {

	private Pokemon state;
	private int xp, xpmultip;
	private boolean running = true;

	public Stater() {
		state = state.CHARMANDER;
		xpmultip = 1;
	}

	protected void fight() {

		while (state != null) {
			System.out.println(state.nimi() + " started a battle.");
			int enemyhp = 70 + (int) (Math.random() * ((120 - 70) + 1));
			int xphp = enemyhp;
			while (enemyhp > 0) {
				System.out.println("Enemy hp: " + enemyhp);
				int dmg = (int) Math.round(50 * state.statsMultiplier());
				System.out.println(state.nimi() + " used: " + state.move() + " and did: " + dmg + " damage.");
				enemyhp -= dmg;
			}
			int xpgain = (int) Math.round(xphp / 10);
			System.out.println("Enemy defeated. Experience gained: " + xpgain);

			xp += xpgain;

			if (xp > (100 * xpmultip) && state.name() != "CHARIZARD") {
				System.out.println(state.nimi() + " evolved to " + state.nextState().nimi());
				state = state.nextState();
				xp = 0;
				xpmultip++;
			}else if(xp > (100 * xpmultip) && state.name() == "CHARIZARD") {
				state = state.nextState();
			}
		}
	}

}
