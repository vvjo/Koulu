
public class Päällikkö extends Korotus {
	private final double ALLOWABLE = 0.05 * BASE;
	
	public void processReq(KorotusReq req) {
		if(req.getAmount() < ALLOWABLE) {
			System.out.println("Päällikkö hyväksyy: "+req.getAmount()+"e palkankorotuksen.");
		} else {
			super.processReq(req);
		}
	}
}
