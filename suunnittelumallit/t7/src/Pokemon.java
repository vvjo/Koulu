
public enum Pokemon {
	
	CHARMANDER{
		public String nimi() {
			return "Charmander";
		}
		public double statsMultiplier() {
			return 1.0;
		}
		public String move() {
			return "Ember";
		}
		
		public Pokemon nextState() {
			return CHARMELEON;
		}
	},
	
	CHARMELEON{
		public String nimi() {
			return "Charmeleon";
		}
		public double statsMultiplier() {
			return 1.4;
		}
		public String move() {
			return "Flamethrower";
		}
		
		public Pokemon nextState() {
			return CHARIZARD;
		}
	},
	
	CHARIZARD{
		public String nimi() {
			return "Charizard";
		}
		public double statsMultiplier() {
			return 2.0;
		}
		public String move() {
			return "Fireblast";
		}
		
		public Pokemon nextState() {
			return null;
		}
	};
	
	public abstract String nimi();
	public abstract double statsMultiplier();
	public abstract Pokemon nextState();
	public abstract String move();
}
