#pragma once
#include "stdafx.h"
using namespace std;

class Paneeli {
private:
	bool state;
public:
	Paneeli();
	void setState(bool& i);
	void getState();
};