
interface PelihahmoVisitor {
	void visit(ContextState a);
	void visit(ContextStateKaksi b);
	void visit(ContextStateKolme c);
}

interface State {
	int getPoints();
	void addPoints(int a);
}

class ContextState {
	private State s;
	
	public ContextState() {
		s = new Charmander();
	}
	
	public State getState() {
		return s;
	}
	
	public void addPoints(int a) {
		s.addPoints(a);
	}
	
	public void getPoints() {
		s.getPoints();
	}
    
    void accept(PelihahmoVisitor visitor) {
    	visitor.visit(this);
    }
}

class ContextStateKaksi {
	private State s;
	
	public ContextStateKaksi() {
		s = new Charmeleon();
	}
	
	public State getState() {
		return s;
	}
	
	public void addPoints(int a) {
		s.addPoints(a);
	}
	
	public void getPoints() {
		s.getPoints();
	}
    
    void accept(PelihahmoVisitor visitor) {
    	visitor.visit(this);
    }
}

class ContextStateKolme {
	private State s;
	
	public ContextStateKolme() {
		s = new Charizard();
	}
	
	public State getState() {
		return s;
	}
	
	public void addPoints(int a) {
		s.addPoints(a);
	}
	
	public void getPoints() {
		s.getPoints();
	}
    
    void accept(PelihahmoVisitor visitor) {
    	visitor.visit(this);
    }
}

class Charmander implements State {
	private int points;
	
	public Charmander() {
	}
	
	@Override
	public void addPoints(int points) {
		this.points += points;
	}

	@Override
	public int getPoints() {
		System.out.println("Charmander "+points+" points");
		return points;
	}
}


class Charmeleon implements State {
	private int points;
	
	public Charmeleon() {
	}

	@Override
	public void addPoints(int points) {
		this.points += points*2;
	}

	@Override
	public int getPoints() {
		System.out.println("Charmeleon "+points+" points");
		return points;
	}
}

class Charizard implements State {
	private int points;
	
	public Charizard() {
	}

	@Override
	public void addPoints(int points) {
		this.points += points*3;
	}

	@Override
	public int getPoints() {
		System.out.println("Charizard "+points+" points");
		return points;
	}
}


class PelihahmoStateVisitor implements PelihahmoVisitor {

	@Override
	public void visit(ContextState c) {
		c.addPoints(1);
		c.getPoints();	
	}

	@Override
	public void visit(ContextStateKaksi b) {
		b.addPoints(2);
		b.getPoints();
	}

	@Override
	public void visit(ContextStateKolme c) {
		c.addPoints(3);
		c.getPoints();
	}	
}

public class Main {
	public static void main(final String[] args) {
		ContextState a = new ContextState();
		ContextStateKaksi b = new ContextStateKaksi();
		ContextStateKolme c = new ContextStateKolme();
		a.accept(new PelihahmoStateVisitor());
		b.accept(new PelihahmoStateVisitor());
		c.accept(new PelihahmoStateVisitor());
		
		
	}
}