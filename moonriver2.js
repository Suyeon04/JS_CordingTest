function solution(prices) {
    let result = 0;
    let max = 0;
    let min = 0;
    for(let i = 0; i<prices.length-1;i++){
        max = 0;
        min =  prices[i];
        for(let j = i+1; j<prices.length; j++){
            if(max<prices[j])  max = prices[j];
        }
        if(result<max-min) result = max-min;
    }
    if(result==0) return 0;
    else return result;
}

console.log(solution([7, 1, 5, 3, 6, 4]));
// 출력 결과 : 5
// 추가 설명 : 두번째날(가격 1)에 사고 다섯번째 날 (가격 6)에 팔면 최대 수익 5입니다.

console.log(solution([7, 6, 4, 3, 1]));
// 출력 결과 : 0
// 추가 설명 : 지속적으로 가격이 떨어졌기 때문에 최대 수익이 0입니다.
