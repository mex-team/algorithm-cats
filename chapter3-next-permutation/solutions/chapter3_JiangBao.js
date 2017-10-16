class Solution {
  /**
   * constructor
   * @param {number[]} nums 
   */
  constructor(nums) {
    this.nums = nums;
    this.swap = this.swap.bind(this);
    this.reverse = this.reverse.bind(this);
  }

  /**
   * main
   * @return {number[]}
   */
  nextPermutation() {
    let i = this.nums.length - 2;
    while (i >= 0 && this.nums[i] >= this.nums[i + 1]) {
      i--;
    }
    if (i >= 0) {
      let j = this.nums.length - 1;
      while (j >= 0 && this.nums[i] >= this.nums[j]) {
        j--;
      }
      this.swap(i, j);
    }
    this.reverse(i + 1);
  
    return this.nums;
  }

  /**
   * reverse the nums from start
   * @param {number} start 
   */
  reverse(start, end = this.nums.length - 1) {
    // let ;
    while (start < end) {
      this.swap(start, end);
      start++;
      end--;
    }
  }

  /**
   * swap the value at index i & j
   * @param {number} i 
   * @param {number} j 
   */
  swap(i, j) {
    let temp = this.nums[i];
    this.nums[i] = this.nums[j];
    this.nums[j] = temp;
  }
}