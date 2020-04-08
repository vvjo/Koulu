import java.util.LinkedList;

public class Stack {

	private LinkedList<String> list;

	public Stack() {
		list = new LinkedList<String>();
	}

	public void push(String aData) {
		list.addFirst(aData);		
	}

	public ListItem pop() {
		
		String b = list.removeFirst();
		ListItem l = new ListItem();
		l.setData(b);
		return l;

	}

	public void printItems() {
		for(String a : list) {
			System.out.println(a);
		}
		
	}

	public int getSize() {
		return list.size();
		
	}

}