// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

const partyAttendantsList = ["Giangiorgio", "Pierluigi", "Annamaria", "Benedettamarcella", "Marialuigia"];

let userName = prompt ("Inserisci il tuo nome");
userName = userName.charAt(0).toUpperCase() + userName.substring(1, userName.length).toLowerCase();

if (partyAttendantsList.includes(userName) === true) {
    console.log ("Congratulazioni, puoi entrare");
} else {
    console.log ("Sparisci straccione/a");
}

// for (index = 0; index < partyAttendantsList.length; index++) {
//     // console.log (index, partyAttendantsList[index]);
//     if (userName === partyAttendantsList[index]) {
//         console.log ("Congratulazioni, puoi entrare");
//     } else {
//         console.log ("Sparisci straccione/a");
//     }
// }
