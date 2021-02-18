#include "stdafx.h"
using namespace std;

Matkakortti::Matkakortti()
{
	cout << "Construct";
	std::unique_ptr<string>ssp;
	std::unique_ptr<float>sfp;
}

Matkakortti::~Matkakortti()
{
	cout << "Destructed";
}

void Matkakortti::alusta(string aNimi) 
{
	ssp = std::unique_ptr<string>(new string(aNimi));
	sfp = std::unique_ptr<float>(new float(0));
}

void Matkakortti::lataa(float maara)
{
	sfp = std::unique_ptr<float>(new float(maara + *sfp));
	std::cout << *sfp;
}

bool Matkakortti::matkusta(enum Matkatyyppi tyyppi)
{	
	if (tyyppi == HELSINKI) {
		if (*sfp >= HELSINKIHINTA) {
			*sfp -= HELSINKIHINTA;
			return 1;
		}
		else {
			return 0;
		}
	}
	else {
		if (*sfp >= SEUTUHINTA) {
			*sfp -= SEUTUHINTA;
			return 1;
		}
		else {
			return 0;
		}
	}
}

string& Matkakortti::palautaNimi()
{
	return *ssp;

}

float& Matkakortti::palautaSaldo()
{
	return *sfp;
}

ostream& operator<<(ostream& os, const Matkakortti& m)
{
	string* n = m.ssp.get();
	float* f = m.sfp.get();
	os << "Nimi: " << *n << "\n" << "Saldo: " << *f;
	return os;
}
