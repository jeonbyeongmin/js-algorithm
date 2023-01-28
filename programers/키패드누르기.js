/**
 * 2020 카카오 인턴십 > 키패드 누르기
 * https://programmers.co.kr/learn/courses/30/lessons/67256
 *
 */

const POS = {
  1: [0, 0],
  2: [1, 0],
  3: [2, 0],
  4: [0, 1],
  5: [1, 1],
  6: [2, 1],
  7: [0, 2],
  8: [1, 2],
  9: [2, 2],
  0: [1, 3],
};

function solution(numbers, hand) {
  let result = '';

  let leftHandPos = [0, 3];
  let rightHandPos = [2, 3];

  numbers.forEach((number) => {
    const [targetX, targetY] = POS[number];
    const [leftX, leftY] = leftHandPos;
    const [rightX, rightY] = rightHandPos;

    if (number === 1 || number === 4 || number === 7) {
      result += 'L';
      leftHandPos = POS[number];
      return;
    }

    if (number === 3 || number === 6 || number === 9) {
      result += 'R';
      rightHandPos = POS[number];
      return;
    }

    const leftDis = Math.abs(targetX - leftX) + Math.abs(targetY - leftY);
    const rightDis = Math.abs(targetX - rightX) + Math.abs(targetY - rightY);

    if (leftDis === rightDis) {
      if (hand === 'left') {
        result += 'L';
        leftHandPos = POS[number];
      } else {
        result += 'R';
        rightHandPos = POS[number];
      }
    }

    if (leftDis > rightDis) {
      result += 'R';
      rightHandPos = POS[number];
    }

    if (leftDis < rightDis) {
      result += 'L';
      leftHandPos = POS[number];
    }
  });

  return result;
}
