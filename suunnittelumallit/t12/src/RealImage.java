
public class RealImage implements Image {
	
	private final String filename;
	
	public RealImage(String filename) {
		this.filename = filename;
	}

	@Override
	public void displayImage() {
		System.out.println("Loading "+filename);
	}
	
	@Override
	public void showData() {
		System.out.println(filename);	
	}

}
