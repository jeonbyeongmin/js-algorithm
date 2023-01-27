/**
 * 연습문제 > 숫자 짝궁
 * https://school.programmers.co.kr/learn/courses/30/lessons/131128
 *
 * 두 배열에서 같은 요소를 반환하기 위해서 반복문을 두번 사용해서는 안된다.
 */

function solution(X, Y) {
  const x = [...X].sort((a, b) => a - b);
  const y = [...Y].sort((a, b) => a - b);

  const result = [];

  while (x.length > 0 && y.length > 0) {
    if (x[x.length - 1] === y[y.length - 1]) {
      result.push(x[x.length - 1]);
      x.pop();
      y.pop();
    }
    if (x[x.length - 1] < y[y.length - 1]) {
      y.pop();
    }
    if (x[x.length - 1] > y[y.length - 1]) {
      x.pop();
    }
  }

  if (result.length === 0) return '-1';
  if (result[0] === '0') return '0';

  return result.join('');
}
