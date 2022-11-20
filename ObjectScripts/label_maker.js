let myInfo = {
    fullName: 'Paul Asuncion',
    address: '268 Oriente St',
    city: 'daly city',
    state: 'California',
    zip: '94014',
}

function printContact(contact) {
    let printContact = `${contact.fullName} ${contact.address} ${contact.city}, ${contact.state} ${contact.zip}`;
    console.log(printContact)
}

printContact(myInfo)

// let firstLine = {
//     fullName: 'Paul Asuncion'
// }
// let secondLine = {
//     address: '268 Oriente st'
// }
// let thirdLine = {
//     city: 'daly city',
//     state: 'california',
//     zip: '94014',
// }

// function printContact(mail1) {
//     let printContact = `${fullName}`;
//     console.log(printContact)
// }
// function printContact(mail2) {
//     let printContact = `${address}`;
//     console.log(printContact)
// }
// function printContact(mail3) {
//     let printContact = `${city} ${state} ${zip}`;
//     console.log(printContact)
// }

// printContact(mail1, mail2, mail3)