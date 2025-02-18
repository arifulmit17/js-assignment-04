/*function signature/sample */
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