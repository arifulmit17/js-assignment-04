/*function signature/sample */
function calculateVAT( price ) {
    if(!isNaN(price) && price> 0){
        vat=price*(7.5/100);
        return vat;
    }
    else{
        return '"Invalid"';
    }
    
}

console.log(calculateVAT(1500))
console.log(calculateVAT(200))
console.log(calculateVAT(999))
console.log(calculateVAT(-500))
console.log(calculateVAT("i01"))
console.log(calculateVAT("foo"))
console.log(calculateVAT(15008))