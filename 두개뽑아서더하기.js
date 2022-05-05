function solution(numbers) {
    var answer = [];
    let nums = new Array();
    for(let i = 0; i< numbers.length-1; i++){
        for(let j = i+1; j<numbers.length;j++){
            nums[numbers[i]+numbers[j]] = 1;
        }
    }
    let a = 0;
    for(let j = 0; j<nums.length;j++){
        if(nums[j]==1){
            answer[a++] = j;
        }
    }
    return answer;
}