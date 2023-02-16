/**
 * 2018 KAKAO BLIND RECRUITMENT > [1차] 뉴스 클러스터링
 * https://school.programmers.co.kr/learn/courses/30/lessons/17677
 *
 * 다중잡합에서 교집합과 합집합의 개수를 구하는 문제
 */

function solution(str1, str2) {
  const mulset1 = mulsetGenerator(str1);
  const mulset2 = mulsetGenerator(str2);
  const map1 = getElCount(mulset1);
  const map2 = getElCount(mulset2);
  const union = [...new Set([...mulset1, ...mulset2])];

  let intersecCount = 0;
  let unionCount = 0;

  union.forEach((c) => {
    intersecCount += Math.min(map1[c] ?? 0, map2[c] ?? 0);
    unionCount += Math.max(map1[c] ?? 0, map2[c] ?? 0);
  });

  if (unionCount === 0) return 65536;
  return Math.floor((intersecCount / unionCount) * 65536);
}

const mulsetGenerator = (str) => {
  const mulset = [];
  const regex = /[^a-z]+/;
  for (let i = 0; i < str.length - 1; i++) {
    const s = str.toLowerCase();
    const el = s[i] + s[i + 1];
    if (regex.test(el)) continue;
    mulset.push(el);
  }
  return mulset;
};

const getElCount = (arr) => {
  return arr.reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 1 }), {});
};
