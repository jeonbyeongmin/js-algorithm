/**
 * 2019 KAKAO BLIND RECRUITMENT > 실패율
 * https://school.programmers.co.kr/learn/courses/30/lessons/42889
 *
 */

function solution(N, stages) {
  const result = [];

  for (let i = 1; i <= N; i++) {
    const total = stages.filter((a) => a >= i).length;
    const fail = stages.filter((a) => a === i).length;

    result.push([fail / total || 0, i]);
  }

  return result.sort((a, b) => b[0] - a[0]).map((a) => a[1]);
}
