
function calculateVAT( price ) {
    if(typeof price =='number' && price>= 0){
        vat=price*(7.5/100);
        return vat;
    }
    else{
        return '"Invalid"';
    }
    
}

// console.log(calculateVAT(1500))
// console.log(calculateVAT(200))
// console.log(calculateVAT(999))
// console.log(calculateVAT(-500))
// console.log(calculateVAT("i01"))
// console.log(calculateVAT("foo"))


function  validContact( contact ) {
    if(typeof contact ==='string'){
        
        
            if(contact.length===11 && !contact.includes(' ') && contact.startsWith('01')){
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

// console.log(validContact("01819234567"))
// console.log(validContact("0181923 4567"))
// console.log(validContact("018192345679"))
// console.log(validContact(["01987654321"]))
// console.log(validContact("01345678900"))
// console.log(validContact("02145678900"))
// console.log(validContact(true))



function  willSuccess( marks ) {
    isPass=0;
    isFail=0;
    if(Array.isArray(marks)===true){
        for(const mark of marks){   
                if(mark>=50){
                    isPass+=1;
                }
                else{
                    isFail+=1;
                }
             
        }
    }
    else{
        return '"Invalid"';
    }
    if(isPass>isFail){
        return true;
    }
    else{
        return false;
    }
}

// console.log(willSuccess([60, 70, 80, 40, 30]));
// console.log(willSuccess([48 , 48 , 92 , 100 ]));
// console.log(willSuccess([48, 48, 50, 50, 100]));
// console.log(willSuccess([ ]));
// console.log(willSuccess([ 90 ]));
// console.log(willSuccess([ 90 ,  99 , 87 , 48 , 34 , 49 ]));
// console.log(willSuccess("100 , 100"));
// console.log(willSuccess(90));


function  validProposal( person1 , person2 ) {
    if (typeof person1 ==='object' && typeof person2 ==='object'){
        if(Math.abs(person1.age-person2.age) <= 7 && person1.gender!=person2.gender){
            return true;
        }else{
            return false;
        }
        
    }
    else{
        return '"Invalid"'
    }
    
}

// console.log(validProposal({ name: "Rahul", gender: "male", age: 28 },
//     { name: "Joya", gender: "female", age: 21 }));
// console.log(validProposal({ name: "milon", gender: "male", age: 20 },
//     { name: "sumi", gender: "female", age: 25 }
//     ));
// console.log(validProposal({ name: "shuvo", gender: "male", age: 20 },
//     { name: "joy", gender: "male", age: 25 } 
    
//     ));
// console.log(validProposal({ name: "toya", gender: "female", age: 20 },
//     { name: "kader", gender: "male", age: 24 } 
    
//     ));
// console.log(validProposal({ name: "toya", gender: "female", age: '33' },
//     { name: "bjoy", gender: "male", age: 32 }
    
//     ));
// console.log(validProposal("Mizan", { name: "mitu", gender: "male", age: 32 }

// ));
// console.log(validProposal({ name: "mitu", gender: "male", age: 32 }, "Mizan"

// ));
// console.log(validProposal({ name: "mitu", gender: "male", age: '33' }, "Mizan"

// ));


function  calculateSleepTime( times ) {
    if(Array.isArray(times)===true){
        let totalTime=0;
        let leftSecond=0;
        let hours=0;
        let minutes=0;
        let seconds=0;
        for(const time of times){
            if(typeof time == 'number'){
                
                totalTime+=time;
            }else{
                return '"Invalid"';
            }
            
            
        }

        if(totalTime>=3600){
            hours=Math.floor(totalTime/3600);
            leftSecond=Math.ceil(totalTime%3600);
            minutes=Math.floor(leftSecond/60);
            leftSecond=Math.ceil(totalTime%60); 
            seconds=leftSecond;
        }
        if ((totalTime >60 && totalTime <3600) ){
            hours=Math.floor(totalTime/3600);
            leftSecond=Math.ceil(totalTime%3600);
            minutes=Math.floor(leftSecond/60);
            leftSecond=Math.ceil(totalTime%60); 
            seconds=leftSecond;
        }
        if(totalTime<60){
            seconds=leftSecond;
        }
        
        return({hour:hours,minute:minutes,second:seconds});
    }else{
        return '"Invalid"';
    }
    
}

console.log(calculateSleepTime([1000, 499, 519, 300]))
console.log(calculateSleepTime([1000, 2000, 725]))
console.log(calculateSleepTime([100, 3800]))
console.log(calculateSleepTime([]))
console.log(calculateSleepTime([5600]))
console.log(calculateSleepTime([100, 3800, "90" ]))
console.log(calculateSleepTime("ssshhhh"))
console.log(calculateSleepTime([100, true, "90" ]))
console.log(calculateSleepTime(['a', 3800]))