import java.io.FileInputStream;
import java.io.FileOutputStream;

public class Tiedosto implements IDecorator {

	@Override
	public void kirjoita(String a) {
		try {
			FileOutputStream fout = new FileOutputStream("C:\\Users\\hp\\Desktop\\testout.txt");
			byte b[] = a.getBytes();
			fout.write(b);
			fout.close();
		} catch (Exception e) {
			System.out.println(e);
		}

	}

	@Override
	public String hae() {
		String a = new String();
		try {
			FileInputStream fin = new FileInputStream("C:\\Users\\hp\\Desktop\\testout.txt");
			int i = 0;
			while ((i = fin.read()) != -1) {
				a+=(char) i;
			}
			fin.close();
		} catch (Exception e) {
			System.out.println(e);
		}
		return a;
	}

}
