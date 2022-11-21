let myInfo = {
    fullName: 'Paul Asuncion',
    address: '268 Oriente St', 
    city: 'daly city', state: 'California', zip: '94014',
}

function printContact(contact) {
    let printContact = `${contact.fullName} ${contact.address} ${contact.city}, ${contact.state} ${contact.zip}`;
    console.log(myInfo.fullName)
    console.log(myInfo.address)
    console.log(myInfo.city, myInfo.state, myInfo.zip)
}

printContact(myInfo)