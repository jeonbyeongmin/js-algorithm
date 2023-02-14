/**
 * Summer/Winter Coding(~2018) > 점프와 순간 이동
 *
 * 1. BFS
 * 2. DP
 */

function solution(n) {
  let result = 0;
  let sum = n;

  while (sum !== 0) {
    if (sum % 2 === 0) {
      sum /= 2;
    } else {
      sum -= 1;
      result += 1;
    }
  }

  return result;
}

function dp(n) {
  const dp = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      dp[i] = dp[i / 2];
    } else {
      dp[i] = dp[i - 1] + 1;
    }
  }

  return dp[n];
}

function bfs(n) {
  let result = 0;
  let queue = [n];

  while (queue.length > 0) {
    let current = queue.shift();
    if (current === 0) {
      return result;
    }
    if (current % 2 === 0) {
      queue.push(current / 2);
    } else {
      queue.push(current - 1);
      result += 1;
    }
  }
}
