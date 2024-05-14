// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

const userNumber = Number.parseInt (prompt ("Choose a number"), 10);
if (userNumber < 1 || userNumber > 20 || Number.isNaN(userNumber)) {
    userNumber = 12
}

for (let i = 0; i < userNumber; i++) {
    const tempArray = []
    for (let index = 0; index < 10; i++) {
            tempArray.push (Math.floor (Math.random() * 100) + 1);
        }
    console.log (tempArray)
}

// for (let i = 0; i < n; i++) {
//     for (let index = 0; index < 10; i++) {
//         let array = [Math.floor (Math.random ()*100) + 1];
//     }
//     console.log (array)
// }
