/**
 * 연습문제 > 소수 찾기
 * https://programmers.co.kr/learn/courses/30/lessons/12921
 *
 * 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 문제
 *
 * 일반적으로 소수를 판별할 때는 2부터 sqrt(n)까지의 수로 나누어 떨어지는지 확인하면 된다.
 * 범위 내의 모든 소수를 찾아내는 상황에서는 에라토스테네스의 체를 사용하면 효율적이다.
 * 에라토스테네스의 체는 2부터 시작하여 소수의 배수를 모두 지우는 방식으로 소수를 찾아낸다.
 */

function solution(n) {
  const arr = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 2; i <= n; i++) {
    if (arr[i] === 0) continue;
    for (let j = 2 * i; j <= n; j += i) {
      arr[j] = 0;
    }
  }

  let result = 0;
  for (let i = 2; i <= n; i++) {
    if (arr[i] !== 0) result += 1;
  }
  return result;
}
