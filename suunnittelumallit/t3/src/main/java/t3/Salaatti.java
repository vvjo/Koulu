package t3;

import java.util.ArrayList;
import java.util.List;

public class Salaatti implements RuokaAine {

    List<RuokaAine> ruokaKomponentit = new ArrayList<RuokaAine>();
    double salaattihinta = 2.2;

    public double getHinta() {
        double summa = 0;
        for (RuokaAine a : ruokaKomponentit) {
            summa += a.getHinta();
        }
        return summa+salaattihinta;
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