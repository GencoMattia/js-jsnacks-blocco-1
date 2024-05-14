// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

const n = prompt ("Choose a number");

for (let i = 0; i < n; i++) {
    for (let index = 0; index < 10; i++) {
        let array = [Math.floor (Math.random ()*100) + 1];
    }
    console.log (array)
}