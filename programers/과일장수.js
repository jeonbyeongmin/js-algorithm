/**
 * 연습문제 > 과일장수
 * https://school.programmers.co.kr/learn/courses/30/lessons/135808
 *
 * 배열을 나눠서 처리하지 않고 정렬 후 인덱스로 접근하는 방법을 생각해보자.
 */

function solution(k, m, score) {
  let result = 0;
  const arr = [...score].sort((a, b) => b - a);
  for (let i = m - 1; i < arr.length; i += m) {
    result += arr[i] * m;
  }
  return result;
}
