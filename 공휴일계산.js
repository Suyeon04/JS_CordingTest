function solution(leave, day, holidays){
    let answer= leave;
    let month = new Array(30).fill(0);
    let sat = 0;
    let sun =0;
    switch(day){
        case "MON" : 
            sat = 5; sun = 6; break;
        case "TUE" : 
            sat = 4; sun = 5; break;
        case "WED" : 
            sat = 3; sun = 4; break;
        case "THU" : 
            sat = 2; sun = 3; break;
        case "FRI" : 
            sat = 1; sun = 2; break;
        case "SAT" : 
            sat = 0; sun = 1; break;
        case "SUN" : 
            sat = 6; sun = 0; break;
    }
    let a = 0;
    holidays.sort(function(a, b)  {
        return a - b;
    });
    for(let i = 0; i<month.length; i++){
        if(holidays[a]-1==i){
            if(holidays.length>a) a++;
            month[i] = 1;
        }
        if(i%7==sat||i%7==sun){
            month[i] = 1;
        }
    }
    for(let i = 0; i<month.length; i++){
        let minus = 0;
        let b = -1;
        for(let j = i; j<month.length&&(minus<=leave||month[j]==1);j++){
            if(month[j]!=1) minus++;
            b++;
        }
        if(b>answer) answer = b;
    }
    return answer;
}
//TEST
let leave = 4;
let day = "FRI";
let holidays = [6, 21, 23, 27, 28];
let res = solution(leave, day, holidays);
console.log(res);

 leave = 3;
 day = "SUN";
 holidays = [7, 6, 17, 29];
 res = solution(leave, day, holidays);
console.log(res);

leave = 30;
 day = "MON";
 holidays = [1, 2, 3, 4, 28, 29, 30];
 res = solution(leave, day, holidays);
console.log(res);
