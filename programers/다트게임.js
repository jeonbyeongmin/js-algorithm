/**
 * 2018 KAKAO BLIND RECRUITMENT > [1차] 다트 게임
 * https://programmers.co.kr/learn/courses/30/lessons/17682
 *
 */

const BONUS = {
  S: '1',
  D: '2',
  T: '3',
};

function solution(dartResult) {
  const scoreRegex = /\d+/g;
  const scores = dartResult.match(scoreRegex);
  const bonusAndOption = dartResult.split(scoreRegex);

  let prevNum = 0;

  return scores.reduce((prev, score, i) => {
    const [bonus, option] = bonusAndOption[i + 1].split('');
    const squared = score ** BONUS[bonus];
    let result = prev + squared;

    if (option) {
      const computed = option === '*' ? squared * 2 : -squared;
      result =
        option === '*'
          ? prev - prevNum + prevNum * 2 + computed
          : prev + computed;

      prevNum = computed;
      return result;
    }

    prevNum = squared;
    return result;
  }, 0);
}
