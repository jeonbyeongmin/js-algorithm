/**
 * 연습문제 > 옹알이(2)
 * https://school.programmers.co.kr/learn/courses/30/lessons/133499
 *
 * 1. 정규식을 이용하여 특정 문자열일 중복되는 문자열인지 확인 (정규식 : /(aya|ye|woo|ma)\1+/, \1: 첫 번째 그룹과 일치, +: 1번 이상 반복)
 * 2. 정규식을 이용하여 특정 문자열로만 이루어진 문자열인지 확인 (정규식 : /^(aya|ye|woo|ma)+$/, ^: 문자열의 시작, $: 문자열의 끝, +: 1번 이상 반복)
 * 3. reduce를 이용하여 조건에 맞는 문자열의 개수를 구함
 *
 * g 플래그를 없이 test
 */

function solution(babbling) {
  const regex1 = /(aya|ye|woo|ma)\1+/;
  const regex2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce(
    (acc, b) => (!regex1.test(b) && regex2.test(b) ? (acc += 1) : acc),
    0
  );
}
