function solution(n, lost, reserve) {
    var answer = n-lost.length;
    let y = 0;
    lost.sort(function(a, b)  {
        return a - b;
    });
    reserve.sort(function(a, b)  {
        return a - b;
    });
    for(let i = 0; i<lost.length; i++){
        for(let j = y; j<reserve.length;j++){
            if(lost[i]==reserve[j]||lost[i]==reserve[j]+1||lost[i]==reserve[j]-1){
                y++;
                answer++;
                break;
            }
        }
    }
    return answer;
}