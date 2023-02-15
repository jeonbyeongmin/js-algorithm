/**
 * 월간 코드 챌린지 시즌2 > 괄호 회전하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/76502
 */

function solution(s) {
  const str = s.repeat(2);
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    let flag = false;
    for (let j = i; j < s.length + i; j++) {
      if (str[j] === '{' || str[j] === '[' || str[j] === '(') {
        stack.push(str[j]);
        flag = true;
      }
      if (str[j] === '}' && stack[stack.length - 1] === '{') stack.pop();
      if (str[j] === ']' && stack[stack.length - 1] === '[') stack.pop();
      if (str[j] === ')' && stack[stack.length - 1] === '(') stack.pop();
    }

    if (stack.length === 0 && flag) result += 1;
  }

  return result;
}
