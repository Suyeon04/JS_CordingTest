
function solution(nums, target) {
    let num = new Array(2).fill(0);
    for(let i = 0; i<nums.length-1; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i]+nums[j]==target){
                num[0] = i;
                num[1] = j;
                return num;
            }
        }
    }
}

console.log(solution([2, 7, 11, 15], 9));
// 출력 결과 : [0, 1]

console.log(solution([2, 7, 11, 15], 22));
// 출력 결과 : [1, 3]

console.log(solution([2, 3, 4], 6));
// 출력 결과 : [0, 2]

console.log(solution([3, 3], 6));
    // 출력 결과 : [0, 1]
