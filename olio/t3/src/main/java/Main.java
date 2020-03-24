import t3.*;

public class Main {

    public static void main(String[] args){

        /*RuokaAine lautanen = new Ruoka();

        RuokaAine kana = new Kana();
        RuokaAine riisi = new Riisi();
        
        RuokaAine salaatti = new Salaatti();
        RuokaAine tomaatti = new Tomaatti();
        RuokaAine kurkku = new Kurkku();
        RuokaAine paprika = new Paprika();
        salaatti.addAine(tomaatti);
        salaatti.addAine(kurkku);
        salaatti.addAine(paprika);
        
        RuokaAine mausteet = new Mausteseos();
        RuokaAine suola = new Suola();
        RuokaAine pippuri = new Pippuri();
        mausteet.addAine(suola);
        mausteet.addAine(pippuri);

        lautanen.addAine(kana);
        lautanen.addAine(riisi);
        lautanen.addAine(salaatti);
        lautanen.addAine(mausteet);

        System.out.println(lautanen.getHinta());
        */
    	
    	AteriaFactory liha = new LihaAnnos();
    	AteriaFactory kasvis = new KasvisAnnos();
    	
    	liha.getAnnosHinta();
    	kasvis.getAnnosHinta();


    }
} 