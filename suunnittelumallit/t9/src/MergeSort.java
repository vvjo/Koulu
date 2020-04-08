

public class MergeSort implements Sorter {
	long time;

	public void sort(int[] taul) {
		long start = System.currentTimeMillis();
		
		mergeSort(taul, 0, taul.length-1);
		
		long end = System.currentTimeMillis();
		time = (end - start);
		for (int i = 0; i < 10000; i++) {
			System.out.print(taul[i] + " ");
			if (i > 0 && i % 40 == 0) // rivinvaihto
				System.out.println();
		}
	}

	@Override
	public long getTime() {
		return time;
	}


	private static int[] tau = new int[10000]; // aputaulukko (ei varata tätä pinosta!)

// oletus: osataulukot t[p..q] ja t[q+1...r] ovat järjestyksess„
	public static void merge(int t[], int p, int q, int r) {
		// i osoittaa 1. osataulukkoa, j osoittaa 2. osataulukkoa
		// k osoittaa aputaulukkoa, johon yhdiste kirjoitetaan.
		int i = p, j = q + 1, k = 0;
		while (i < q + 1 && j < r + 1) {
			if (t[i] < t[j]) {
				tau[k++] = t[i++];
			} else {
				tau[k++] = t[j++];
			}
		}
		// toinen osataulukko käsitelty, siirretään toisen käsittelemättömät
		while (i < q + 1) {
			tau[k++] = t[i++];
		}
		while (j < r + 1) {
			tau[k++] = t[j++];
		}
		// siirretään yhdiste alkuperäiseen taulukkoon

		for (i = 0; i < k; i++) {
			t[p + i] = tau[i];
		}
	}

	public static void mergeSort(int t[], int alku, int loppu) {
		int ositus;
		long la, ll, lt;
		if (alku < loppu) { // onko väh. 2 alkiota, että voidaan suorittaa ositus

			la = alku;
			ll = loppu;
			lt = (la + ll) / 2;
			ositus = (int) lt;
			mergeSort(t, alku, ositus);// lajitellaan taulukon alkupää
			mergeSort(t, ositus + 1, loppu);// lajitellaan taulukon loppupää
			merge(t, alku, ositus, loppu);// yhdistetään lajitellut osataulukot
		}

	}
}
