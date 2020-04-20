import java.util.ArrayList;
import java.util.List;

public class BK implements Builder {
	List<String> burgeri = new ArrayList<String>();
	@Override
	public void addIngredients() {
		String p = "Pihvi", s = "Salaatti", j = "Juusto";
		
		burgeri.add(p);
		burgeri.add(s);
		burgeri.add(j);
		
	}

	@Override
	public List getBurger() {
		return burgeri;	
	}

}
