package t3;

public class Riisi implements RuokaAine {
    double hinta = 0.90;

    public double getHinta() {
        return hinta;
    }

    public void addAine(RuokaAine ruokaAine){
        throw new RuntimeException("Cant add to foodstuff");
    }

    public void printAine(){
        System.out.println("Riisi");
    }

}