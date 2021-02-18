#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define HELSINKIHINTA (float)2.5
#define SEUTUHINTA (float)3.80

enum Matkatyyppi { HELSINKI, SEUTU };

struct Matkakortti {
	char omistaja[41];
	float saldo;
};

void tulostaValikko();
void alustaKortti(struct Matkakortti* kortti);
void lataaSaldo(struct Matkakortti* kortti);
int matkusta(struct Matkakortti* kortti, enum Matkatyyppi tyyppi);

void main() {
	tulostaValikko();
}

void tulostaValikko() {
	char v;
	struct Matkakortti kortti;  // kortti on struct Matkakortti -tyyppinen muuttuja
	alustaKortti(&kortti); // huolehditaan ettei kortti näytä kamalalta, jos sitä ei alusteta

	do {
		system("cls");
		printf("---------------------------------Valikko------------------------------");
		printf("\n\n\n\n");
		printf("\n\t\t\tLataa saldoa\t\t\t1");
		printf("\n\t\t\tMatkusta Helsingissä\t\t2");
		printf("\n\t\t\tMatkusta seutuliikenteessä\t3");
		printf("\n\t\t\tTulosta kortin tiedot\t\t4");
		printf("\n\t\t\tLopetus\t\t\t\t5");
		printf("\n\t\t\tValitse:");


		v = _getch();
		switch (v) {
		case '1':   lataaSaldo(&kortti);

			printf("\n\n\t\t\tKortti ladattu.");
			printf("\n\t\t\tSaldo: %.2f ", kortti.saldo);
			_getch();
			break;
		case '2':
			if (matkusta(&kortti, HELSINKI)) {
				printf("\n\t\t\tHyvää matkaa!");
				printf("\n\t\t\tSaldo: %.2f ", kortti.saldo);
			}
			else {
				printf("\n\n\t\t\tRahasi eivät riitä.");
				printf("\n\t\t\tSaldo: %.2f ", kortti.saldo);
			}
			_getch();
			break;
		case '3':
			if (matkusta(&kortti, SEUTU)) {
				printf("\n\n\t\t\tHyvää matkaa!");
				printf("\n\t\t\tSaldo: %.2f ", kortti.saldo);
			}
			else {
				printf("\n\n\t\t\tRahasi eivät riitä.");
				printf("\n\t\t\tSaldo: %.2f ", kortti.saldo);
			}
			_getch();
			break;
		case '4':
			printf("\n\n\t\t\tKortin tiedot:");
			printf("\n\t\t\tNimi: %s ", kortti.omistaja);
			printf("\n\t\t\tSaldo: %.2f ", kortti.saldo);
			_getch();
			break;

		case '5':
			break;
		}
	} while (v != '5');

}

void alustaKortti(struct Matkakortti* kortti) {
	strcpy_s(kortti->omistaja, 41, "Matti Näsä");
	kortti->saldo = 0;
}

void lataaSaldo(struct Matkakortti* kortti) {
	kortti->saldo += 10;
}

int matkusta(struct Matkakortti* kortti, enum Matkatyyppi tyyppi) {
	if (tyyppi == HELSINKI) {
		if (kortti->saldo >= HELSINKIHINTA) {
			kortti->saldo -= HELSINKIHINTA;
			return 1;
		}
		else {
			return 0;
		}
	}
	else {
		if (kortti->saldo >= SEUTUHINTA) {
			kortti->saldo -= SEUTUHINTA;
			return 1;
		}
		else {
			return 0;
		}
	}

}