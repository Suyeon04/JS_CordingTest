function solution(left, right) {
    var answer = 0;
    for(let i = left; i<=right;i++){
        let x =0;
        for(let j = 1; j<=i; j++){
            if(i%j==0)
                x++;
        }if(x%2==1){
            answer-=i;
        }else
            answer+=i;
    }
    return answer;
}