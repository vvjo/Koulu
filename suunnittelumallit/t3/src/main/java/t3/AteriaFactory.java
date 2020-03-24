package t3;

public abstract class AteriaFactory {

    Ruoka ruoka = null;

    public abstract Ruoka createAnnos();


    public void getAnnosHinta(){
        System.out.println(hinta());
    }

    public double hinta(){
        if (ruoka == null)
            ruoka = createAnnos();
        return ruoka.getHinta();
    }
}
