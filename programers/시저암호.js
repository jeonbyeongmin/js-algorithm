/**
 * 연습문제 > 시저암호
 * https://programmers.co.kr/learn/courses/30/lessons/12926
 *
 * 시저암호를 구하는 문제
 *
 * JavaScript에서 ASCII 코드를 이용하기 위해서는
 * String.fromCharCode()와 charCodeAt()을 사용한다.
 *
 * 이 문제에서는 n의 범위가 1부터 25로 정해져 있기 때문에
 * 알파벳을 2배로 늘려서 문자열을 만든 후
 * 주어진 문자열을 순회하며 해당 문자가 알파벳이면
 * 해당 문자의 인덱스에 n을 더한 인덱스의 문자를 반환하여 해결할 수 있다.
 *
 */

function solution(s, n) {
  const str =
    'abcdefghijklmnopqrstuvwxyz'.repeat(2) +
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.repeat(2);

  return [...s]
    .map((c) => (str.indexOf(c) !== -1 ? str[str.indexOf(c) + n] : ' '))
    .join('');
}
