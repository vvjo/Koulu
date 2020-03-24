package t3;

import java.util.ArrayList;
import java.util.List;

public class Ruoka implements RuokaAine {

    List<RuokaAine> ruokaKomponentit = new ArrayList<RuokaAine>();

    public double getHinta() {
        double summa = 0;
        for (RuokaAine a : ruokaKomponentit) {
            summa += a.getHinta();
        }
        return summa;
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