package t2_1;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class Tehdas {
	
	public Jasper getTehdas() {

		Class c = null;
		Jasper tehdas = null;

		Properties properties = new Properties();
	
		try{
			properties.load(new FileInputStream("tehdas.properties"));
		}catch(IOException e){
			e.printStackTrace();
		}
		try{
			// luetaan toteuttava tehdas properties-tiedostosta
			c = Class.forName(properties.getProperty("tehdas"));
			tehdas = (Jasper) c.newInstance();
		}catch(Exception ex){
			ex.printStackTrace();
		}
		
		return tehdas;
	}
}
