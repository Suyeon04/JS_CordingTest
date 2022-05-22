function solution(s){
    for(let i = 1; i<parseInt(s.length/2)+1; i++){
        let x = true;
        for(let j = i; j<s.length; j+=i){
            if(s.substr(0,i)!=s.substr(j,i)){
                x = false;
                break;
            }
        }
        if(x==true) return i;
    }
    return s.length;
}

let s = "abababab";
s = "abcabcabd"
console.log(solution(s));