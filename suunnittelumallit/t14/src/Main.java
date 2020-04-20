import java.util.List;

public class Main {

	public static void main(String[] args) {
		Builder a = new BK();
		Builder b = new Mäkkäri();
		a.addIngredients();
		b.addIngredients();
		
		List<String> l = a.getBurger();
		for(String s : l) {
			System.out.println(s);
		}
		
		List<Ingredient> lb = b.getBurger();
		for(Ingredient i : lb) {
			System.out.println(i.getIngredient());
		}
	}

}
