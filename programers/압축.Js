/**
 * 2018 KAKAO BLIND RECRUITMENT > [3차] 압축
 * https://programmers.co.kr/learn/courses/30/lessons/17684
 */

const dict = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function solution(msg) {
  const dic = new Map(dict.map((d, i) => [d, i + 1])); // 초기 사전을 해시 테이블로 변환
  const result = [];

  let prev = '';
  for (let i = 0; i < msg.length; i++) {
    const curr = msg[i];
    const comb = prev + curr;

    if (dic.has(comb)) {
      prev = comb;
    } else {
      result.push(dic.get(prev));
      dic.set(comb, dic.size + 1);
      prev = curr;
    }
  }

  result.push(dic.get(prev)); // 마지막 문자의 인덱스를 결과 배열에 추가
  return result;
}
