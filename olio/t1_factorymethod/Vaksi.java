package t1_factorymethod;

public class Vaksi extends AterioivaOtus {

    public Juoma createJuoma(){
        return new Kalja();
    };

}
