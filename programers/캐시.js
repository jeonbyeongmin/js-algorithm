/**
 * 2018 KAKAO BLIND RECRUITMENT > [1차] 캐시
 * https://programmers.co.kr/learn/courses/30/lessons/17680
 * 캐시의 LRU 알고리즘이 큐와 관련되어 있다는 것을 아는 것을 물어보는 문제
 */

function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;

  const queue = Array(cacheSize).fill('');
  let result = 0;

  cities.forEach((c) => {
    const city = c.toLowerCase();
    const found = queue.findIndex((item) => item === city);
    if (found === -1) {
      result += 5;
      queue.shift();
      queue.push(city);
    } else {
      result += 1;
      queue.splice(found, 1);
      queue.push(city);
    }
  });

  return result;
}
