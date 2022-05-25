function solution(s) {
    let y = s.split('').length;
      //반복문을 이용하기 위해 문자열의 길이를 알아냈습니다.
      for(let i = y-1; i>=0;i--){
      //문자열의 길이-1에서 0까지 반복문을 만들었습니다.
          for(let j = 0; y>i+j; j++){
                  //문자열의 길이보다 i+j가 더 커지기 전까지 j++하였습니다.
              let result = s.substr(j, i+1);
                          //j부터 i만큼 문자열을 잘라서 result에 넣어주었습니다.
              if(result.split('').reverse().join('')== result){
                          //result를 배열로 만들고, 배열을 앞뒤로 바꾼 뒤 join으로 합쳐주고 
                          //원래 result와 비교하였습니다.
                  return result;
              }
          }
      }
  }
  
  console.log(solution('babad'));
  // 출력 결과 : bab 혹은 aba(둘중 하나만 나와도 됩니다)
  
  console.log(solution('cbbd'));
  // 출력 결과 : bb
  
  console.log(solution('abcdcba'));
  // 출력 결과 : abcdcba
  
  console.log(solution('abacde'));
  // 출력 결과 : aba
  