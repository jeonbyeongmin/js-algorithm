/**
 * 연습문제 > 2016년
 * https://programmers.co.kr/learn/courses/30/lessons/12901
 *
 * Date 객체를 사용하지 않고 풀어보기
 * 2016년 1월 1일은 금요일이다.
 * 2016년 a월 b일은 무슨 요일일까?
 *
 * 1월 1일부터 a월 b일까지의 날짜를 더한 후 7로 나눈 나머지를 구한다.
 * 나머지에 해당하는 요일을 반환한다.
 */

function solution(a, b) {
  const days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  const totalDatePerMonth = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const sumDateFromStandardDay =
    totalDatePerMonth.reduce((p, c, i) => (i <= a - 1 ? p + c : p), 0) + b - 1;

  return days[sumDateFromStandardDay % 7];
}
