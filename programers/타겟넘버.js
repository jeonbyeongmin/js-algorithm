/**
 * 깊이/너비 우선 탐색(DFS/BFS) > 타겟 넘버
 * https://programmers.co.kr/learn/courses/30/lessons/43165
 */

function solution(numbers, target) {
  const answer = dfs(numbers, target, 0, 0);
  const answerBFS = bfs(numbers, target);
  return answer;
}

function bfs(numbers, target) {
  let answer = 0;

  const queue = [];
  queue.push([0, 0]);

  while (queue.length > 0) {
    const [currSum, currDepth] = queue.shift();

    if (currDepth === numbers.length) {
      answer += currSum === target ? 1 : 0;
      continue;
    }

    queue.push([currSum + numbers[currDepth], currDepth + 1]);
    queue.push([currSum - numbers[currDepth], currDepth + 1]);
  }

  return answer;
}

function dfs(numbers, target, sum, depth) {
  let answer = 0;
  if (numbers.length === depth) return sum === target ? 1 : 0;
  answer += dfs(numbers, target, sum + numbers[depth], depth + 1);
  answer += dfs(numbers, target, sum - numbers[depth], depth + 1);

  return answer;
}
