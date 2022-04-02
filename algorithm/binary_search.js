const testCase = [
  {
    input: [[5], 5],
    output: 0
  }, {
    input: [[-1, 0, 3, 5, 9, 12], 9],
    output: 4
  }, {
    input: [[-1, 0, 3, 5, 9, 12], 2],
    output: -1
  }
]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const binary_search = (nums, target) => {
  length = nums.length;
  s_index = 0;
  e_index = length - 1;
  while (s_index <= e_index) {
    pivot_index = Math.round((e_index + s_index) / 2);
    if (nums[pivot_index] === target) {
      return pivot_index;
    }
    // else if (nums[s_index] === target) {
    //   return s_index;
    // } else if (nums[e_index] === target) {
    //   return e_index;
    // } 
    else if (nums[pivot_index] < target) {
      s_index = pivot_index + 1
    } else {
      e_index = pivot_index - 1;
    }
  }
  return -1
}

module.exports = { binary_search, testCase };
