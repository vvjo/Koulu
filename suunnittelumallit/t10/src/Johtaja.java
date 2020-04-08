
public class Johtaja extends Korotus {
	private final double ALLOWABLE = 1 * BASE;
	
	public void processReq(KorotusReq req) {
		if(req.getAmount() < ALLOWABLE) {
			System.out.println("Johtaja hyväksyy: "+req.getAmount()+"e palkankorotuksen.");
		} else {
			System.out.println(req.getAmount()+"e korotus tarvitsee johdon kokouksen");
		}
	}
}
