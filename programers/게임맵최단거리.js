/**
 * 깊이/너비 우선 탐색(DFS/BFS) > 게임 맵 최단거리
 * https://programmers.co.kr/learn/courses/30/lessons/1844
 */

function solution(maps) {
  const visited = Array.from(Array(maps.length), () =>
    new Array(maps[0].length).fill(false)
  );
  return bfs(maps, visited);
}

function bfs(maps, visited) {
  const y = [-1, 1, 0, 0];
  const x = [0, 0, 1, -1];

  const queue = [];
  queue.push([0, 0, 1]);

  while (queue.length !== 0) {
    const [cy, cx, move] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = cx + x[i];
      const ny = cy + y[i];

      if (nx < 0 || nx >= maps[0].length || ny < 0 || ny >= maps.length)
        continue;
      if (visited[ny][nx] || maps[ny][nx] !== 1) continue;
      if (ny === maps.length - 1 && nx === maps[0].length - 1) return move + 1;
      visited[ny][nx] = true;

      queue.push([ny, nx, move + 1]);
    }
  }

  return -1;
}
