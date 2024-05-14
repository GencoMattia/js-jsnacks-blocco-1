// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

let array = [];
let somma = 0;

// for (let i = 1; i <= 50; i++) {
//     array.push (Number.parseInt(i), 10);
//     unevenNumbers.push (Number.parseInt (i % 2 === 1), 10)

//     console.log (array)
//     console.log (unevenNumbers)
// }

for (let i = 1; i <= 50; i++) {
    array.push (i);

    console.log (array);
}

for ( let index = 0; index < array.length; index++) {
    if (index % 2 === 1) {
        somma += array [index];
    }
}

console.log (array, somma);