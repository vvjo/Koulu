#include "gotoxy.h"
#include "stdafx.h"

// t�m� l�ytyi Borlandin ymp�rist�st� conio.h-tiedostosta...
void gotoxy(int x, int y) {
	HANDLE hConsole;
	COORD cursorLoc;
	std::cout.flush();
	cursorLoc.X = x;
	cursorLoc.Y = y;
	hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
	SetConsoleCursorPosition(hConsole, cursorLoc);
}

