
public class Esimies extends Korotus {
	private final double ALLOWABLE = 0.02 * BASE;
	
	public void processReq(KorotusReq req) {
		if(req.getAmount() < ALLOWABLE) {
			System.out.println("Esimies hyväksyy: "+req.getAmount()+"e palkankorotuksen.");
		} else {
			super.processReq(req);
		}
	}
}
