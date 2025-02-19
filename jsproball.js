
function calculateVAT( price ) {
    if(typeof price =='number' && price>= 0){
        let vat=price*(7.5/100);
        return vat;
    }
    else{
        return '"Invalid"';
    }
    
}


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




function  willSuccess( marks ) {
    let isPass=0;
    let isFail=0;
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



function  validProposal( person1 , person2 ) {
    if (typeof person1 ==='object' && typeof person2 ==='object'){
        if(Math.abs(person1.age-person2.age) <= 7 && person1.gender!=person2.gender){
            return true;
        }else{
            return false;
        }
        
    }
    else{
        return '"Invalid"';
    }
    
}




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

