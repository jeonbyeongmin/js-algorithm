/**
 * Two Sum
 *
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *
 * 1. 브루트포스로 계산하는 방법 (시간복잡도 O(n^2))
 * 2. 해시 테이블을 이용하는 방법 (시간복잡도 O(n))
 */

const twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map[complement] !== undefined) return [map[complement], i];
    map[nums[i]] = i;
  }
};
