/**
 * 2018 KAKAO BLIND RECRUITMENT > 비밀지도
 * https://programmers.co.kr/learn/courses/30/lessons/17681
 *
 * 비밀지도를 구하는 문제
 *
 * 이 문제는 비트 연산자를 이용하여 해결할 수 있다.
 */

function solution(n, arr1, arr2) {
  const bin1 = arr1.map((a) => a.toString(2).padStart(n, 0));
  const bin2 = arr2.map((a) => a.toString(2).padStart(n, 0));

  const result = bin1.map((row, i) => {
    return row
      .split('')
      .map((item, j) => (item | bin2[i][j] ? '#' : ' '))
      .join('');
  });

  return result;
}
