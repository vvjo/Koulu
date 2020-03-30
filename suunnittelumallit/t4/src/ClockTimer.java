import java.util.Observable;

public class ClockTimer extends Observable implements Runnable {

	private int hour = 0, minute = 0, second = 0;
	private boolean running = true;

	void tick() {

		if (second == 59) {
			second = 0;
			minute++;
		} else {
			second++;
		}
		if (minute == 59) {
			minute = 0;
			hour++;
		}
		if (hour == 24) {
			hour = 0;
		}
	}

	public int getHour() {
		return hour;
	}

	public void setHour(int hour) {
		this.hour = hour;
	}

	public int getMinute() {
		return minute;
	}

	public void setMinute(int minute) {
		this.minute = minute;
	}

	public int getSecond() {
		return second;
	}

	public void setSecond(int second) {
		this.second = second;
	}

	@Override
	public void run() {
		try {
			while (running) {
				Thread.sleep(1000);
				tick();
				setChanged();
				notifyObservers(this);
			}
		} catch (InterruptedException e) {
			System.out.println("Thread is interrupted");
		}

	}

	public void stop() {
		running = false;
	}

}
