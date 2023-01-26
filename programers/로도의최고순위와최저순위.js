/**
 * 2021 Dev-Matching: 웹 백엔드 개발자 > 로또의 최고 순위와 최저 순위
 * https://school.programmers.co.kr/learn/courses/30/lessons/77484
 *
 */

const reward = {
  6: 1,
  5: 2,
  4: 3,
  3: 4,
  2: 5,
};

function solution(lottos, win_nums) {
  const filtered = lottos.filter((item) => !win_nums.find((i) => i === item));
  const zeros = filtered.filter((item) => item === 0);
  const correct = lottos.length - filtered.length;

  return [reward[correct + zeros.length] ?? 6, reward[correct] ?? 6];
}
