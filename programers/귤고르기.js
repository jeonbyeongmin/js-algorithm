/**
 * 연습문제 > 귤 고르기
 * https://school.programmers.co.kr/learn/courses/30/lessons/138476
 * 맵 이용하기
 */
function solution(k, tangerine) {
  const map = {};
  tangerine.forEach((t) => {
    map[t] = map[t] ? map[t] + 1 : 1;
  });

  const sorted = Object.entries(map).sort((a, b) => b[1] - a[1]);

  let result = 0;
  let sum = 0;

  sorted.forEach((item) => {
    if (sum >= k) return;
    sum += item[1];
    result += 1;
  });

  return result;
}
