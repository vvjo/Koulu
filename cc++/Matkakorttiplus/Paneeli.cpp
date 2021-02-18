#include "stdafx.h"
using namespace std;

Paneeli::Paneeli() {
	state = 0;
}

void Paneeli::setState(bool& i)
{
	state = i;
}

void Paneeli::getState()
{
	if (state) {
		cout << "Green" << endl;
	}
	else {
		cout << "Red" << endl;
	}
}