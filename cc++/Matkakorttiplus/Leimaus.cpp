#include "stdafx.h"

Leimaus::Leimaus(string& name, Matkatyyppi& type, tm& aika)
{
	nimi = name;
	tyyppi = type;
	aikaleima = aika;
}

Leimaus::Leimaus()
{
	nimi = "";
}

bool Leimaus::isDone(string& name)
{
	if (nimi != "") {
		return true;
	}
	return false;
}

void Leimaus::tulosta()
{
	if (tyyppi == HELSINKI) {
		cout << nimi << " HELSINKI " << aikaleima.tm_hour << ":" << aikaleima.tm_min << ":" << aikaleima.tm_sec;

	}
	else {
		cout << nimi << " SEUTU " << aikaleima.tm_hour << ":" << aikaleima.tm_min << ":" << aikaleima.tm_sec;
	}
}

ostream& operator<<(ostream& os, const Leimaus& l)
{
	os << l.nimi << ' ' << l.tyyppi << ' ' << l.aikaleima.tm_hour << ":" << l.aikaleima.tm_min << ":" << l.aikaleima.tm_sec;;
	return os;
}

