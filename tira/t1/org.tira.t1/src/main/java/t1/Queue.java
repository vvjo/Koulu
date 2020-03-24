package t1;

public class Queue {

    private ListItem tail;
    private ListItem head;
    private int size;

    // muodosta uusi lista-alkio ja vie se jonon perään
    public void push(String aData) {

        ListItem l = new ListItem();
        l.setData(aData);
        if (head == null) {
            tail = l;
        }
        l.setNext(tail);
        tail = l;
        size += 1;

    }

    // poista ja palauta alkio jonon kärjestä
    // jos jono tyhjä palauta null
    public ListItem pop() {

        /*
         * if (head == null) { return null; } ListItem l = head; while(head!=null){ head
         * = head.getNext(); }
         * 
         * size -= 1; return l;
         */
        ListItem l = tail;
        for (int i = 0; i < size; i++) {
            l = tail.getNext();
            if (i == size - 1) {
                l.setNext(null);
            }
        }
        return null;

    }

    // tulosta pinon sisältö muuttamatta pinoa
    public void printItems() {

        if (tail == null) {
            return;
        } else {
            ListItem l = tail;
            while (l != null) {
                System.out.println(l.getData());

                l = l.getNext();
            }
        }
    }

    // palauta pinon koko
    public int getSize() {

        return size;
    }

}