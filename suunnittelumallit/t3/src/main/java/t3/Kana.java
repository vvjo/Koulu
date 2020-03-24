package t3;

public class Kana implements RuokaAine {
    int hinta = 1;

    public double getHinta() {
        return hinta;
    }

    public void addAine(RuokaAine ruokaAine){
        throw new RuntimeException("Cant add protein to foodstuff");
    }

    public void printAine(){
        System.out.println("Kana");
    }

}