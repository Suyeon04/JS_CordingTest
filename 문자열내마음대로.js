function solution(strings, n) {
    var answer = [];
    var answer1 = [];
    for(let i  = 0; i<strings.length; i++){
        answer[i] = { num : strings[i][n], pure : strings[i]};
    }
    answer.sort(function(a,b){
        if(a.num<b.num) {
            return -1;
            console.log(a.num)
        }else if(a.num == b.num){
            if(a.pure<b.pure) return -1;
            else return 1;
        }else return 1;
    })
    for(let i  = 0; i<strings.length; i++){
        answer1[i] = answer[i].pure;
    }
    return answer1;
}