package t1_factorymethod;

public class Opettaja extends AterioivaOtus {

    public Juoma createJuoma(){
        return new Vesi();
    };

}
