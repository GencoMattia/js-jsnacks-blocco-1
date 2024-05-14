// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l'altro di verde. Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari e in verde i numeri pari.

let textRed = document.createElement ("div");
textRed.classList.add ("font-red");

let textGreen = document.createElement ("div");
textGreen.classList.add ("font-green");


let containerEl = document.querySelector ("div.container");
console.log (containerEl);


let numbers = [];

for (let i = 0; i < 50; i++) {
    numbers.push (Math.floor (Math.random () * 100) + 1);
}

console.log (numbers);

for (let index = 1; index < numbers.length; index++) {
    const newElement = document.createElement("p");
    newElement.append (numbers[index]);
    if (numbers[index] % 2 === 0) {
        textGreen.appendChild (newElement);
    } else if (numbers[index] % 2 === 1) {
        textRed.appendChild (newElement);
    }
}

containerEl.appendChild (textGreen);
containerEl.appendChild (textRed);