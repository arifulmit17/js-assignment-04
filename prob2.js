/*function signature/sample */
function  validContact( contact ) {
    if(typeof contact ==='string'){
        if(contact.length===11 && !contact.includes(' ') && contact[0]==='0' && contact[1]==='1'){
            return true;
        }
        
        else{
            return false;
        }
    }
    else{
        return '"Invalid"';
    }
    
}

console.log(validContact("01819234567"))
console.log(validContact("0181923 4567"))
console.log(validContact("018192345679"))
console.log(validContact(["01987654321"]))
console.log(validContact("01345678900"))
console.log(validContact("02145678900"))
console.log(validContact(true))