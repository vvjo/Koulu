package t1;

public class Stack {

    private ListItem top;
    private int size;

    // muodosta uusi lista-alkio ja vie se pinon huipulle
    public void push(String aData) {

        ListItem l = new ListItem();
        l.setData(aData);
        l.setNext(top);
        top = l;
        size += 1;

    }

    // poista ja palauta alkio pinon huipulta
    // jos pino tyhjä palauta null
    public ListItem pop() {

        if (top == null) {
            return null;
        }
        ListItem l = top;
        top = top.getNext();
        size -= 1;
        return l;

    }

    // tulosta pinon sisältö muuttamatta pinoa
    public void printItems() {

        if (top == null) {
            return;
        } else {
            ListItem l = top;
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