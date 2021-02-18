// Matkajarjestelma.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"


using namespace std;

int _tmain(int argc, _TCHAR* argv[])
{
	int v;
	string rivi;
	float raha;
	Matkakortti kortti;
	Leimaaja leimaaja;
	do
	{
		system("cls");
		cout << "-------------------Matkakortin testausvalikko--------------------";
		cout << "\n\n\n\n";
		cout << "\t\t\t\tAlusta matkakortti 1.\n";
		cout << "\t\t\t\tLataa matkakortti 2.\n";
		cout << "\t\t\t\tMatkusta 3.\n";
		cout << "\t\t\t\tTulosta kortin tiedot 4.\n";
		cout << "\t\t\t\tTulosta leimaajan tiedot 5.\n";
		cout << "\t\t\t\tLeimaus operaattorilla 6.\n";
		cout << "\t\t\t\tTulosta operaattorilla 7.\n";
		cout << "\t\t\t\tLeimausluettelon koko 8.\n";
		cout << "\t\t\t\tLopeta 9.\n";
		gotoxy(43, 12);
		v = getIntFromStream();
		switch (v)
		{
		case 1:
			gotoxy(25, 14);
			cout << "Anna kortin omistajan nimi: ";
			getline(cin, rivi);
			kortti.alusta(rivi);
			break;
		case 2:
			gotoxy(30, 14);
			cout << "Anna lisättävä saldo: ";
			raha = getFloatFromStream();
			kortti.lataa(raha);
			break;
		case 3:
			gotoxy(25, 14);
			cout << "HKI (1) vai SEUTU (2)?\n";
			v = getIntFromStream();
			if (v == 1) {
				cout << "Helsingin sisäinen: " << HELSINKIHINTA << " euroa\n";
				if (leimaaja.leimaa(kortti, HELSINKI)) {
					cout << "Saldo nyt: " << kortti.palautaSaldo() << " euroa";
				}
				else {
					cout << "Saldo ei riitä";
				}
				
			}
			else if(v == 2) {
				cout << "Seutu: " << SEUTUHINTA << " euroa\n";
				if (leimaaja.leimaa(kortti, SEUTU)) {
					cout << "Saldo nyt: " << kortti.palautaSaldo() << " euroa";
				}
				else {
					cout << "Saldo ei riitä";
				}
			}
			cin.get();
			break;
		case 4:
			//cout << "Nimi: " << kortti.palautaNimi() << "\n" << "Saldo: " << kortti.palautaSaldo();
			cout << kortti;
			cin.get();
			break;
		case 5:
			leimaaja.tulostaTiedot();
			cin.get();
			break;
		case 6:
			cout << "Helsingin sisäinen: " << HELSINKIHINTA << " euroa\n";
			if (leimaaja << kortti) {
				cout << "Saldo nyt: " << kortti.palautaSaldo() << " euroa";
			}
			else {
				cout << "Saldo ei riitä";
			}
			break;
		case 7:
			//leimaaja.tulostaOperaattorilla();
			cout << "Nimi, Matkatyyppi, Aika" << endl;
			cout << leimaaja;
			cin.get();
			break;
		case 8:
			cout << "Anna leimausluettelon koko" << endl;
			v = getIntFromStream();
			leimaaja.leimaluettelonKoko(v);
			break;
		case 9:
			break;
		}
	} while (v != 9);
	return 0;
}