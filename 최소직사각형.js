function solution(sizes) {
    let maxlength = 0;
    let maxhight = 0;
    for(let i = 0; i< sizes.length; i++){
        sizes[i].sort(function(a, b){
            return b-a;
        })
        if(maxlength<sizes[i][0]) maxlength = sizes[i][0];
        if(maxhight<sizes[i][1]) maxhight = sizes[i][1];
    }
    
    return maxhight*maxlength;
}