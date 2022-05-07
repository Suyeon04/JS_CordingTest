function solution(N, stages) {
    let stage = new Array(N+1).fill(0);
    let stage1 = new Array(N).fill(0);
    let x = 0;
    for(let i = 0; i < stages.length; i++, x++){
        stage[stages[i]-1]++;
    }
    for(let i = 0; i < stage.length-1; i++){
        let tmp = stage[i];
        stage[i] = (stage[i]/x);
        x-=tmp;
        stage1[i] = i+1;
        
    }
    for(let i = 1; i< stage1.length;i++){
        let j = i-1;
        let key = stage[i];
        while(j>=0&&key>stage[j]){
            let tmp = stage1[j];
            stage1[j] = stage1[j+1];
            stage1[j+1] = tmp;
            tmp = stage[j];
            stage[j] = stage[j+1];
            stage[j+1] = tmp;
            j--;
        }
    }
    return stage1;
}