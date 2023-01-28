/**
 * 연습문제 > 기사단원의 무기
 * https://school.programmers.co.kr/learn/courses/30/lessons/136798
 *
 */

function solution(number, limit, power) {
  const w = [];

  for (let i = 1; i <= number; i++) {
    if (i === 1) {
      w.push(1);
      continue;
    }

    let number = 0;

    for (let j = 1; j < Math.sqrt(i); j++) {
      if (i % j === 0) number += 1;
    }

    number =
      Math.sqrt(i) === parseInt(Math.sqrt(i)) ? number * 2 + 1 : number * 2;

    if (number > limit) w.push(power);
    else w.push(number);
  }

  return w.reduce((prev, current) => prev + current, 0);
}
