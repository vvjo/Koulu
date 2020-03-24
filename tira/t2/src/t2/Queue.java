package t2;

public class Queue {

	private ListItem head;
	private ListItem tail;
	private int size;

	// muodosta uusi lista-alkio ja vie se jonon perään
	public void push(String aData) {

		ListItem l = new ListItem();
		l.setData(aData);
		l.setNext(head);
		head = l;
		size += 1;
		if (tail == null) {
			tail = l;
		}

	}

	// poista ja palauta alkio jonon kärjestä
	// jos jono tyhjä palauta null
	public ListItem pop() {

		if (head == null) {
			return null;
		}

		if (head.getNext() == null) {
			ListItem p = head;
			head = null;
			tail = null;
			size -= 1;
			return p;
		}

		ListItem h = head;
		ListItem toDelete = null;
		while (h != null) {
			if (h.getNext() == tail) {
				tail = h;
				size -= 1;
				toDelete = h.getNext();
				h.setNext(null);
				break;
			}
			h = h.getNext();
		}
		return toDelete;

	}

	// tulosta jonon sisältö muuttamatta pinoa
	public void printItems() {

		if (head == null) {
			return;
		} else {
			ListItem l = head;
			while (l != null) {
				System.out.println(l.getData());

				l = l.getNext();
			}
		}
	}

	// palauta jonon koko
	public int getSize() {

		return size;
	}

}