function solution(scores) {
    var answer = new Array(scores.length).fill(0);
    let sc = new Array(scores.length).fill(0);
    let a = 0; 
    let b = 0;
    for(let i = 0; i<scores.length; i++){
        a+=parseInt(scores[i][0]);
        b+=parseInt(scores[i][1]);
    }
    if(a>b){
        b = 1;
    }else if(a==b){
        b = -1;
    }
    let ab = 0;
    for(let i = 0; i<scores.length; i++){
        if(b==-1) {
            ab=0;
        }else {
            ab = scores[i][b];
        }
        sc[i] = {idx : i+1, total : scores[i][0]+scores[i][1], hard : ab};
    }
    sc.sort(function(a,b){
        if(a.total<b.total) return 1;
        else if(a.total==b.total){
            if(a.hard<b.hard)return 1;
            else if(a.hard==b.hard){
                if(a.idx>b.idx)return 1;
                else return -1;
            }else return -1;
        }else return -1;
    })
    for(let i = 0; i<scores.length; i++){
        answer[sc[i].idx-1] = i+1;
    }
    return answer;
}
let scores = [[85,90],[65,57],[88,87],[88,87],[73,81],[65,89],[99,100],[80,94]];
solution(scores)
