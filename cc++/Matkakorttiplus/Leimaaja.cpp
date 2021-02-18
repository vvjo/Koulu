#include "stdafx.h"
using namespace std;

Leimaaja::Leimaaja()
{
	std::unique_ptr<Leimaus> olio;
	std::unique_ptr<Paneeli> paneeli;
	i = 0;
	luettelonKoko = 5;
	arr = new Leimaus * [luettelonKoko];
	for (int x = 0; x < luettelonKoko; x++) {
		arr[x] = new Leimaus();
	}
}

Leimaaja::~Leimaaja()
{
	for (int a = 0; a < luettelonKoko; a++) {
		delete arr[a];
	}
	delete arr;
}

void Leimaaja::tulostaTiedot()
{
	for (int a = 0; a < luettelonKoko; a++) {
		if (arr[a]->isDone(leimaajaN)) {
			arr[a]->tulosta();
			cout << endl;
		}
	}
}

void Leimaaja::tulostaOperaattorilla()
{
	for (int a = 0; a < luettelonKoko; a++) {
		if (arr[a]->isDone(leimaajaN)) {
			Leimaus* p = arr[a];
			cout << *p;
			cout << endl;
		}
	}
}

string& Leimaaja::palautaNimi()
{
	return leimaajaN;
}

ostream& operator<<(ostream& os, const Leimaaja& l)
{
	string n = l.leimaajaN;
	for (int a = 0; a < l.luettelonKoko; a++) {
		if (l.arr[a]->isDone(n)) {
			Leimaus* p = l.arr[a];
			os << *p << endl;
		}
	}
	return os;
}

bool Leimaaja::operator<<(Matkakortti& card)
{
	if (i == luettelonKoko) {
		i = 0;
	}

	enum Matkatyyppi type = HELSINKI;

	struct tm aikaLeima;
	time_t sekunnit;
	bool ok = card.matkusta(HELSINKI);
	if (ok && i < luettelonKoko) {
		time(&sekunnit);
		localtime_s(&aikaLeima, &sekunnit);
		olio = std::unique_ptr<Leimaus>(new Leimaus(card.palautaNimi(), type, aikaLeima));
		arr[i] = new Leimaus(card.palautaNimi(), type, aikaLeima);
		i++;
		return true;
	}
	return false;
}

void Leimaaja::leimaluettelonKoko(int& a)
{
	for (int i = 0; i < luettelonKoko; i++) {
		delete arr[i];
	}
	delete arr;

	luettelonKoko = a;
	arr = new Leimaus * [a];
	for (int x = 0; x < a; x++) {
		arr[x] = new Leimaus();
	}
}

bool Leimaaja::leimaa(Matkakortti& kortti, Matkatyyppi tyyppi)
{
	if (i == luettelonKoko) {
		i = 0;
	}
	paneeli = std::unique_ptr<Paneeli>(new Paneeli());
	struct tm aikaLeima;
	time_t sekunnit;
	bool ok = kortti.matkusta(tyyppi);
	paneeli->setState(ok);
	paneeli->getState();
	if (ok && i < luettelonKoko) {
		time(&sekunnit);
		localtime_s(&aikaLeima, &sekunnit);
		olio = std::unique_ptr<Leimaus>(new Leimaus(kortti.palautaNimi(), tyyppi, aikaLeima));
		arr[i] = new Leimaus(kortti.palautaNimi(), tyyppi, aikaLeima);
		i++;
		return true;
	}
	return false;
}
