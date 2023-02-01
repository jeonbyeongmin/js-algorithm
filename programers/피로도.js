/**
 * 완전탐색 > 피로도
 * https://school.programmers.co.kr/learn/courses/30/lessons/87946
 *
 * 모든 경우의 수를 탐색해야 하므로, 순열을 사용한다.
 * 순열을 구현하는 방법은 여러가지가 있지만, 여기서는 다음 순열을 구하는 방법을 사용한다.
 *
 * 다음 순열을 구하는 방법은 다음과 같다.
 * 1. 배열의 뒤에서부터 탐색하면서, 앞의 원소가 뒤의 원소보다 작은 인덱스를 찾는다.
 * 2. 그 인덱스를 i-1라고 하면, i-1보다 큰 인덱스 중에서 가장 작은 값을 찾는다.
 * 3. i-1과 j를 swap한다.
 * 4. i부터 끝까지의 배열을 뒤집는다.
 *
 */

function solution(k, dungeons) {
  let result = 0;
  dungeons = dungeons.map((d, i) => [...d, i + 1]);

  do {
    let complete = 0;
    let kk = k;

    for (let dungeon of dungeons) {
      const [need, consume] = dungeon;
      if (kk >= need) {
        kk -= consume;
        complete += 1;
      }
    }
    result = Math.max(complete, result);
  } while (getNextPermutation(dungeons));

  return result;
}

function getNextPermutation(array) {
  let n = array.length;
  let i = n - 1;

  while (i > 0 && array[i - 1][2] >= array[i][2]) i -= 1;
  if (i < 1) return false;

  let j = n - 1;

  while (array[j][2] <= array[i - 1][2]) j -= 1;

  swap(array, i - 1, j);
  reverse(array, i, n - 1);

  return true;
}

function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

function reverse(array, i, j) {
  while (i < j) {
    swap(array, i, j);
    i += 1;
    j -= 1;
  }
}
