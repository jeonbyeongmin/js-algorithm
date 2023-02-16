/**
 * 2019 카카오 개발자 겨울 인턴십 > 튜플
 * https://school.programmers.co.kr/learn/courses/30/lessons/64065
 */

function solution(s) {
  const arrs = s
    .split('},{')
    .map((item) => item.match(/\d+/g).map(Number))
    .sort((a, b) => a.length - b.length);

  let result = new Set();

  arrs.forEach((arr) => {
    arr.forEach((item) => {
      result.add(item);
    });
  });

  return [...result];
}
