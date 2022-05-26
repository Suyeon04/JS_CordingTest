function solution(lottos, win_nums) {
    var answer = new Array(2).fill(7);
    lottos.sort(function(a,b){
        return b-a;
    });
    win_nums.sort(function(a,b){
        return b-a;
    })
    for(let i = 0; i<lottos.length;i++){
        if(lottos[i]==0) answer[0]--;
        else{
            for(let j = 0; j<win_nums.length; j++){
                if(lottos[i]==win_nums[j]){
                    answer[0]--;
                    answer[1]--;
                    break;
                }
            }
        }
    }if(answer[1]==7)answer[1]=6;
    if(answer[0]==7)answer[0]=6;
    return answer;
}