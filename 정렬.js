let stage = [5,4,3,2,1];
for(let i = 1; i< stage.length;i++){
    let j = i-1;
    let key = stage[i];
    while(j>=0&&key<stage[j]){
        let tmp = stage[j];
        stage[j] = stage[j+1];
        stage[j+1] = tmp;
        j--;
    }
}
console.log(stage);
