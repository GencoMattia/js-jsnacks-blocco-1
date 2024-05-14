// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l'altro di verde. Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari e in verde i numeri pari.

document.createElement ("div");

let body = document.querySelector ("body");

let numbers = [];

for (let i = 0; i < 50; i++) {
    numbers.push (Math.floor (Math.random () * 100) + 1);
}

console.log (numbers);

for (let k = 1; k < numbers; k++) {
    if (k % 2 === 0) {
        
    } else if (k % 2 === 1) {

    }
}