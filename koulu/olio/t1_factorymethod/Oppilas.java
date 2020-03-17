package t1_factorymethod;

public class Oppilas extends AterioivaOtus {

    public Juoma createJuoma(){
        return new Maito();
    };

}