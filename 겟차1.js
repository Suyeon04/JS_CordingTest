let prices = [3,2,4,8,7];
//let prices = [3,4,1,5,4];
function solution(prices){
    let max = prices[0]; let min = prices[0];
    for(let i = 1; i<prices.length; i++){
        if(max<prices[i]){
            max = prices[i];
        }else if(min>prices[i]) 
            min = prices[i];
    }return max-min;
}
console.log(solution(prices));