

public class Main extends Thread {

	public static void main(String[] args) {

		
		ClockTimer observable = new ClockTimer();
		DigitalClock observer = new DigitalClock();
		
		observable.addObserver(observer);
		
		Thread a = new Thread(observable);
		a.start();
		
	}

}
