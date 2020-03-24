package t3;

import java.util.ArrayList;
import java.util.List;

public class Mausteseos implements RuokaAine {

    List<RuokaAine> ruokaKomponentit = new ArrayList<RuokaAine>();
    double seoshinta = 0.4;

    public double getHinta() {
        double summa = 0;
        for (RuokaAine a : ruokaKomponentit) {
            summa += a.getHinta();
        }
        return summa+seoshinta;
    }

    public void addAine(RuokaAine aine) {
        ruokaKomponentit.add(aine);
    }

    public void printAine() {
        for (RuokaAine a : ruokaKomponentit) {
            System.out.println(a);
        }
    }
}