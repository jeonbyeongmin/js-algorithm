/**
 * 2021 KAKAO BLIND RECRUITMENT > 신규 아이디 추천
 *
 * 간단한 정규표현식을 구현하기 좋은 문제
 * 1. 소문자로 치환
 * 2. [] 안에 있는 문자를 제외한 모든 문자 제거 (정규표현식: [^문자], \w: [a-zA-Z0-9_])
 * 3. .이 2번 이상 연속된 부분을 .으로 치환 (정규표현식: .+)
 * 4. .이 처음이나 끝에 위치하면 제거 (정규표현식: ^\.|\.$, ^: 문자열의 시작, $: 문자열의 끝)
 * 5. 빈 문자열이면 a 대입 (정규표현식: ^$)
 * 6. 문자열의 길이가 16자 이상이면 15자까지만 남기고 제거 (마지막 문자가 .이면 4번 방법으로 제거)
 * 7. 문자열의 길이가 2자 이하면 마지막 문자를 길이가 3이 될 때까지 반복해서 붙임 (padEnd: 문자열의 끝에 다른 문자열을 붙임)
 */

function solution(new_id) {
  const answer = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');

  return answer.length > 2
    ? answer
    : answer.padEnd(3, answer.charAt(answer.length - 1));
}
