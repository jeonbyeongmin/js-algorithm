/**
 * 연습문제 > 구명보트
 * https://programmers.co.kr/learn/courses/30/lessons/42885
 *
 * 그리디 알고리즘과 투 포인터 알고리즘을 사용한다.
 * 무게 제한이 있으므로, 가장 가벼운 사람과 가장 무거운 사람을 태워보고,
 * 무게 제한을 넘지 않는다면 둘을 같이 태우고, 넘는다면 무거운 사람만 태운다. (이때 left, right 포인터를 조정한다.)
 * 이렇게 반복하면서 구명보트의 수를 세면 된다.
 */

function solution(people, limit) {
  const sorted = people.sort((a, b) => a - b);

  let count = 0;
  let left = 0;
  let right = sorted.length - 1;

  while (left <= right) {
    if (sorted[left] + sorted[right] <= limit) {
      left++;
    }
    right--;
    count++;
  }

  return count;
}
