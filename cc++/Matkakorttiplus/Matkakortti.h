#pragma once
#include "stdafx.h"
#define HELSINKIHINTA 3.0f
#define SEUTUHINTA 4.8f

using namespace std;
enum Matkatyyppi {HELSINKI, SEUTU};
class Matkakortti
{
private:
	std::unique_ptr<string>ssp;
	std::unique_ptr<float>sfp;
public:
	Matkakortti();
	void alusta(string aNimi);
	~Matkakortti();
	void lataa(float maara);
	bool matkusta(enum Matkatyyppi);
	//void tulostaTiedot();// rikkoo menun
	string& palautaNimi();
	float& palautaSaldo();
	friend ostream& operator<<(ostream& os, const Matkakortti& m);
};

