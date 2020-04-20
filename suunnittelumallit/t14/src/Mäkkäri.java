import java.util.ArrayList;
import java.util.List;

public class Mäkkäri implements Builder {
	List<Ingredient> burgeri = new ArrayList<Ingredient>();
	@Override
	public void addIngredients() {
		Ingredient pihvi = new Pihvi();
		Ingredient juusto = new Juusto();
		Ingredient salaatti = new Salaatti();
		burgeri.add(pihvi);
		burgeri.add(juusto);
		burgeri.add(salaatti);
	}

	@Override
	public List getBurger() {
		return burgeri;
	}

}
