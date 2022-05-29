function solution(n, lost, reserve) {
    var answer = 0;
    let y = 0;
    for(let i = 0; i<n; i++){
        if(i+1!=lost[y]){
            answer++;
        }else y++;
    }
    y = 0;
    console.log(answer)
    for(let i = 0; i<lost.length; i++){
        for(let j = y; j<reserve;j++){
            if(lost[i]==reserve[j]||lost[i]==reserve[j]+1||lost[i]==reserve[j]-1){
                y++;
                answer++;
                break;
            }
        }
    }
    return answer;
}