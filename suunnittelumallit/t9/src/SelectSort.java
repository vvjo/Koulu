
public class SelectSort implements Sorter {
	long time;

	public void sort(int[] taul) {
		long start = System.currentTimeMillis();
		int i, j, k, apu, pienin;
		for (i = 0; i < taul.length; i++) {
			pienin = i;
			for (j = i + 1; j < taul.length; j++) {
				/* löytyykö taulukon loppupäästä pienempää alkiota? */
				if (taul[j] < taul[pienin]) {
					pienin = j;
				}
			}
			if (pienin != i) {
				/* jos löytyi suoritetaan alkioiden vaihto */
				apu = taul[pienin];
				taul[pienin] = taul[i];
				taul[i] = apu;
			}
		}
		long end = System.currentTimeMillis();
		time = (end - start);
		for (i = 0; i < taul.length; i++) {
			System.out.print(taul[i] + " ");
			if (i > 0 && i % 40 == 0) // rivinvaihto
				System.out.println();
		}
	}

	@Override
	public long getTime() {
		return time;
	}
}
