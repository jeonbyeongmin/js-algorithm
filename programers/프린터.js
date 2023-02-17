/**
 * 연습문제 > 프린터
 * https://programmers.co.kr/learn/courses/30/lessons/42587
 */

function solution(priorities, location) {
  const priorMap = priorities.map((p, index) => ({ loc: index, priority: p }));
  let count = 0;

  while (priorMap.length > 0) {
    const curr = priorMap.shift();
    let max = curr.priority;

    priorMap.forEach((p) => {
      max = Math.max(p.priority, max);
    });

    if (max !== curr.priority) {
      priorMap.push(curr);
      continue;
    }

    count += 1;
    if (curr.loc === location) return count;
  }
}
