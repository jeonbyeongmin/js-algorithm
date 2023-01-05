/**
 * 2021 카카오 채용연계형 인턴십
 * https://programmers.co.kr/learn/courses/30/lessons/81302
 *
 * bfs를 이용하여 거리두기를 확인하는 문제
 *
 * 1. queue에 [y, x, depth]를 넣어서 bfs를 돌린다.
 * 2. depth가 2가 되면 더이상 탐색하지 않는다.
 * 3. partition을 만나면 더이상 탐색하지 않는다.
 * 4. depth가 0이 아니고, P를 만나면 false를 반환한다.
 * 5. 모든 탐색이 끝나면 true를 반환한다.
 */

const PERSON = 'P';
const PARTITION = 'X';

function solution(places) {
  const answer = [];

  for (let place of places) {
    let check = 1;

    for (let y = 0; y < 5; y++) {
      for (let x = 0; x < 5; x++) {
        if (place[y][x] === PERSON && !bfs([y, x, 0], place)) check = 0;
      }
    }
    answer.push(check);
  }

  return answer;
}

function bfs(start, place) {
  const offsetX = [-1, 1, 0, 0];
  const offsetY = [0, 0, 1, -1];

  const queue = [start];
  const visit = [...Array(5)].map(() => Array(5).fill(false));

  while (queue.length) {
    const [currentY, currentX, depth] = queue.shift();

    if (!visit[currentY][currentX]) {
      visit[currentY][currentX] = true;

      if (depth !== 0 && place[currentY][currentX] === PERSON) return false;

      for (let i = 0; i < 4; i++) {
        const nextX = currentX + offsetX[i];
        const nextY = currentY + offsetY[i];

        if (
          nextY >= 0 &&
          nextY < 5 &&
          nextX >= 0 &&
          nextX < 5 &&
          depth < 2 &&
          place[nextY][nextX] !== PARTITION
        ) {
          queue.push([nextY, nextX, depth + 1]);
        }
      }
    }
  }

  return true;
}
