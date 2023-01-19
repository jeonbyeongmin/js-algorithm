/**
 * 연습문제 > 최대공약수와 최소공배수
 * https://programmers.co.kr/learn/courses/30/lessons/12940
 *
 * 최대공약수와 최소공배수를 구하는 문제
 *
 * 유클리드 호제법을 이용하여 최대공약수를 구하고
 * 최소공배수는 두 수의 곱을 최대공약수로 나눈 값이다.
 */

function solution(n, m) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);

  return [gcd(n, m), lcm(n, m)];
}
