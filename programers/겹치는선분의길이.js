/**
 * 코딩테스트 입문 > 겹치는 선분의 길이
 * https://school.programmers.co.kr/learn/courses/30/lessons/120876
 * 겹치는 선분의 길이를 구하는 문제
 *
 * 모든 경우에 효율적인 코드는 아니지만
 * 좌표의 전체 길이가 작고 선분의 개수가 많다면 효율적인 코드가 될 수 있다.
 */

const BOUND = 100;

function solution(lines) {
  const ground = Array(BOUND * 2 + 1).fill(0);

  lines.forEach((line) => {
    const [x1, x2] = line;
    ground[x1 + BOUND] += 1;
    ground[x2 + BOUND] -= 1;
  });

  let layer = 0;
  let result = 0;

  ground.forEach((g) => {
    layer += g;
    if (layer > 1) result += 1;
  });

  return result;
}
