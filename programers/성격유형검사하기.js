/**
 * 2022 KAKAO TECHNICAL INTERNSHIP > 성격유형 검사하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/118666
 */

function solution(survey, choices) {
  const map = { R: 0, T: 0, F: 0, C: 0, M: 0, J: 0, A: 0, N: 0 };

  survey.forEach((s, index) => {
    const [first, second] = s.split('');
    choices[index] - 4 > 0
      ? (map[second] += choices[index] - 4)
      : (map[first] += Math.abs(choices[index] - 4));
  });

  return `${map['R'] >= map['T'] ? 'R' : 'T'}${
    map['C'] >= map['F'] ? 'C' : 'F'
  }${map['J'] >= map['M'] ? 'J' : 'M'}${map['A'] >= map['N'] ? 'A' : 'N'}`;
}
