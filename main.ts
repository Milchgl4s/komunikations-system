enum RadioMessage {
    message1 = 49434
}
// Nach Funkeingabe wird die Funkgruppe festgelegt.
function Funkset () {
    radio.setGroup(Funk3)
    basic.showString("Set Funk to")
    basic.pause(100)
    basic.showNumber(Funk3)
    Progstep = 2
}
// Script für die Funkanzeige/Funkbegrenzung 0-15
function FunkFunktion () {
    if (FunkText == 0) {
        basic.showString("Funk?")
        basic.pause(100)
        FunkText = 1
    } else {
        if (Funk3 < 0) {
            Funk3 = 0
        }
        if (Funk3 > 15) {
            Funk3 = 15
        }
        basic.showNumber(Funk3)
    }
}
// Funk +1
function Funk2 () {
    Funk3 += 1
}
// Wenn Encoder nach Rechts gedreht wird dann wird Funktion gestart je nach Progstep.
KY040.onTurned(direction.clockwise, function () {
    if (Progstep == 1) {
        Funk2()
    }
    if (Progstep == 2) {
    	
    }
    if (Progstep == 3) {
    	
    }
    if (Progstep == 4) {
    	
    }
})
// Wenn Encoder gedrückt wird dann wird Funktion gestart je nach Progstep.
KY040.onPressEvent(DigitalPin.C17, function () {
    if (Progstep == 1) {
        Funkset()
    }
    if (Progstep == 2) {
    	
    }
    if (Progstep == 3) {
    	
    }
    if (Progstep == 4) {
    	
    }
})
// Wenn Encoder nach Links gedreht wird dann wird Funktion gestart je nach Progstep.
KY040.onTurned(direction.counterclockwise, function () {
    if (Progstep == 1) {
        Funk()
    }
    if (Progstep == 2) {
    	
    }
    if (Progstep == 3) {
    	
    }
    if (Progstep == 4) {
    	
    }
})
// Funk -1
function Funk () {
    Funk3 += -1
}
// Startfrequenz:
// Setzt Sendeleistung Max
// Encoder Pins setzen
// Variablen auf 0
// ABC Liste erstellen
// LED in Rot,Grün,Blau,Weiß Leuchten lassen
// Variable Progstep (Programm Schritt) auf Start/Funkeingabe setzen.
// END
let ABC: string[] = []
let FunkText = 0
let Funk3 = 0
let Progstep = 0
radio.setTransmitPower(7)
KY040.setKY040(DigitalPin.C18, DigitalPin.C16)
Progstep = 0
Funk3 = 0
FunkText = 0
let Zahl = 0
let Klick = 0
for (let index = 0; index < 26; index++) {
    ABC.pop()
}
ABC = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"
]
basic.setLedColor(basic.rgb(255, 0, 0))
basic.pause(1000)
basic.setLedColor(basic.rgb(0, 255, 0))
basic.pause(1000)
basic.setLedColor(basic.rgb(0, 0, 255))
basic.pause(1000)
basic.setLedColor(basic.rgb(255, 0, 255))
Progstep += 1
// Progstep überprüfen
// Funktion ausführen je nach Progstep
basic.forever(function () {
    if (Progstep == 1) {
        FunkFunktion()
    } else if (Progstep == 2) {
    	
    } else if (Progstep == 3) {
    	
    } else if (Progstep == 4) {
    	
    }
})
