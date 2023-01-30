/**
 * 2019 카카오 개발자 겨울 인턴십 > 크레인 인형뽑기 게임
 * https://school.programmers.co.kr/learn/courses/30/lessons/64061
 */

function solution(board, moves) {
  const stack = [];
  let result = 0;

  moves.forEach((move) => {
    let item = null;

    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1] !== 0) {
        item = board[i][move - 1];
        board[i][move - 1] = 0;
        break;
      }
    }

    if (!item) return;

    if (stack[stack.length - 1] === item) {
      stack.pop();
      result += 2;
    } else {
      stack.push(item);
    }
  });

  return result;
}
