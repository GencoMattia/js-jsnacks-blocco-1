// L'utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

firstUserNumber = Number.parseInt (prompt ("Inserisci il primo numero"), 10)
secondUserNumber = Number.parseInt (prompt ("Inserisci il secondo numero"), 10)

if (firstUserNumber > secondUserNumber) {
    console.log (firstUserNumber + " è maggiore")
} else if (firstUserNumber < secondUserNumber) {
    console.log (secondUserNumber + " è maggiore")
} else {
    console.log ("I numeri dati sono uguali")
}


