
public class ProxyImage implements Image {
	
	private final String filename;
	private RealImage image;
	
	public ProxyImage(String filename) {
		this.filename=filename;
	}

	@Override
	public void displayImage() {
		if(image==null) {
			image = new RealImage(filename);
		}
		image.displayImage();	
	}

	@Override
	public void showData() {
		System.out.println(filename);
	}
}
