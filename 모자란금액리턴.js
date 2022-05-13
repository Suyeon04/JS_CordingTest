function solution(price, money, count) {
    var answer = 0;
    let ans = 0;
    for(let i = 1; i<=count; i++){
        ans+=price*i;
    }
    if(ans-money>0)return ans-money;
    return answer;
}