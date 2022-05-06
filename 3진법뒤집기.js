//첫번째 시도
function solution(n) {
    var answer = 0;
    let x = 1;
    while(n!=0){
        answer += n%3*x;
        n=parseInt(n/3);
        x*=10;
    }
    let answer1 = 0;
    let y = 1;
    for(let i = x/10; i!=0; i=parseInt(i/10)){
        answer1 += parseInt(answer/i)*y;
        answer-=parseInt(answer/i)*i;
        y*=10;
    }answer = 0;
    x = 1;
     while(answer1!=0){
         answer+=answer1%10*x;
         x*=3;
         answer1=parseInt(answer1/10);
    }
    return answer;
}
//두번째 시도
function solution(n) {
    var answer = 0;
    let x = 1;
    while(n!=0){
        answer += n%3*x;
        n=parseInt(n/3);
        x*=10;
    }
    let answer1 = answer.toString().split('');
    x = 1;
    answer = 0;
    for(let i = 0; i< answer1.length;i++, x*=3){
        answer += answer1[i]*x;
    }
    return answer;
}