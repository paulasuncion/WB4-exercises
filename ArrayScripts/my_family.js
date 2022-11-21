function myFamily() {
    family = ['Mom', 'Dad', 'Sisters', 'Brother'];
    return family;
}

function displayFamily() {
    let numFamily = family.length;
    for(let i = 0; i < 4; i++) {
        console.log(family[i])
    }
}

let ourFamily = myFamily();
displayFamily()

