#pragma once
#include "stdafx.h"
using namespace std;
class Matkakortti;// forward m‰‰rittely
class Leimaus;
class Paneeli;

class Leimaaja {
private:
	string leimaajaN;
	std::unique_ptr<Leimaus> olio;
	std::unique_ptr<Paneeli> paneeli;
	int i, luettelonKoko;
	Leimaus** arr;
public:
	Leimaaja();
	~Leimaaja();
	bool leimaa(Matkakortti& kortti, enum Matkatyyppi tyyppi);
	void tulostaTiedot();
	void tulostaOperaattorilla();
	string& palautaNimi();
	bool operator<<(Matkakortti& card); //Leimaus operaattorilla
	friend ostream& operator<<(ostream& os, const Leimaaja& l);
	void leimaluettelonKoko(int& a);
};