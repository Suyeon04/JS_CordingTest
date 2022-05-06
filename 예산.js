function solution(d, budget) {
    for(let i = 0; i< d.length-1; i++){
        for(let j = i; j<d.length; j++){
            if(d[i]>d[j]){
                let temp = d[i];
                d[i] = d[j];
                d[j] = temp;
            }
        }
    }
    let sum = 0;
    let i = 0;
    for(i = 0; i< d.length; i++){
        if(sum+d[i]<=budget){
            sum+=d[i];
        }else{
            break;
        }
    }
    return i;
}