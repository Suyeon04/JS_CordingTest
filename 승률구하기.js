function solution(weights, head2head){
    let answer = new Array();
    let win = new Array(head2head.length).fill(0);

    for(let i = 0; i< head2head.length; i++){
        win[i] = {idx:i+1, wins:0, heavy:0, weight:weights[i]};
        
        let a = head2head[i].split('');
        for(let j = 0; j<a.length; j++){
            if(a[j]=="W"){
                win[i].wins+=1;
                if(weights[i]<weights[j]){
                    win[i].heavy+=1;
                }
            }
        }
    }
    win.sort(function(a,b){
        if(a.wins<b.wins) return 1;
        else if(a.wins==b.wins){
            if(a.heavy>b.heavy) return 1;
            else if(a.heavy<b.heavy) return -1;
            else{
                if(a.weight>b.weight) return 1;
                else if(a.weight<b.weight) return -1;
                else{
                    if(a.idx>b.idx) return -1;
                    else return 1;
                }
            }  
        }else return 0;
    })
    let x =weights.length;
    for(let i = 0; i<weights.length; i++){
        answer[--x] = win[i].idx;
    }
    return answer;
}
let weights = [50, 82, 75, 120];
let head2head = ["NLWL", "WNLL", "LWNW", "WWLN"];
alert(solution(weights, head2head));

