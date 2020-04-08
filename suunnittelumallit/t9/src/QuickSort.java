
public class QuickSort implements Sorter {
	long time;

	public void sort(int[] taulukko) {
		long start = System.currentTimeMillis();
		qs(taulukko, taulukko.length);
		long end = System.currentTimeMillis();
		time = (end - start);
	}

	public static void quickSort(int table[], int lo0, int hi0) {
		int lo = lo0;
		int hi = hi0;
		int mid, swap;

		mid = table[(lo0 + hi0) / 2];
		while (lo <= hi) {
			while (table[lo] < mid) {
				++lo;
			}
			while (table[hi] > mid) {
				--hi;
			}
			if (lo <= hi) {
				swap = table[lo];
				table[lo] = table[hi];
				++lo;
				table[hi] = swap;
				--hi;
			}
		}
		if (lo0 < hi) {
			quickSort(table, lo0, hi);
		}
		if (lo < hi0) {
			quickSort(table, lo, hi0);
		}
	}

	public static void qs(int table[], int values) {
		quickSort(table, 0, values - 1);

		System.out.println("\nJärjestetty aineisto:\n");
		for (int i = 0; i < values; i++) {
			System.out.print(table[i] + " ");
			if (i > 0 && i % 40 == 0) { // rivinvaihto
				System.out.println();
			}
		}
	}

	@Override
	public long getTime() {
		return time;
	}
}
