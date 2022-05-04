function solution(n) {
    var answer = 0;
    let num = 0;
    let num1 = 1;
    for(let i = n; i!=0; num1*=10){
        let x = 0;
        if(i%2==1){
            num++;
            i--;
        }
        i/=2;
    }
    let n1 = n;
    while(1){
        n1++;
        num1 = 1;
        let number = 0;
        for(let i = n1; i!=0; num1*=10){
        let x = 0;
            if(i%2==1){
                number++;
                i--;
            }
            i/=2;
        }
        if(num==number){
            return n1;
        }    
    }
    return answer;
}