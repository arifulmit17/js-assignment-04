/*function signature/sample */
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

console.log(willSuccess([60, 70, 80, 40, 30]));
console.log(willSuccess([48 , 48 , 92 , 100 ]));
console.log(willSuccess([48, 48, 50, 50, 100]));
console.log(willSuccess([ ]));
console.log(willSuccess([ 90 ]));
console.log(willSuccess([ 90 ,  99 , 87 , 48 , 34 , 49 ]));
console.log(willSuccess("100 , 100"));
console.log(willSuccess(90));