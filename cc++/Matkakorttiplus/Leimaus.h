#pragma once
#include "stdafx.h"
using namespace std;

class Leimaus
{
private:
	string nimi;
	struct tm aikaleima;
	enum Matkatyyppi tyyppi;
public:
	Leimaus();
	Leimaus(string &name, enum Matkatyyppi &type, struct tm &aika);
	bool isDone(string &name);
	void tulosta();
	friend ostream& operator<<(ostream& os, const Leimaus& dt);
};

