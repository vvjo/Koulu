import java.util.Observable;
import java.util.Observer;

public class DigitalClock implements Observer {
	
	private ClockTimer timer;

	@Override
	public void update(Observable o, Object time) {
		this.timer = (ClockTimer) time;
		draw();
		
	}

	private void draw() {
		int hour = timer.getHour();
		int minute = timer.getMinute();
		int second = timer.getSecond();
		
		System.out.println(hour+":"+minute+":"+second);
	}
}
