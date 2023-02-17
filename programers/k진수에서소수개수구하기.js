/**
 * 2022 KAKAO BLIND RECRUITMENT > k진수에서 소수 개수 구하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/92335
 */

function solution(n, k) {
  const arr = n
    .toString(k)
    .split('0')
    .filter((item) => isPrime(Number(item)));
  return arr.length;
}

function isPrime(num) {
  if (num === 1 || num === 0) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
