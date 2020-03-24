
public class Main {

    public static void main(String[] args) {
        AterioivaOtus oppilas = new Oppilas();
        AterioivaOtus vaksi = new Vaksi();
        AterioivaOtus opettaja = new Opettaja();
        opettaja.aterioi();
        oppilas.aterioi();
        vaksi.aterioi();
    }
}
