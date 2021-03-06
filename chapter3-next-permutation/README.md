## 任务说明
最要涉及字典序全排列算法的问题。  
* 实现`下一排列`算法，输出给定排列在字典序中的下一个更大的排列
* 若没有下一排列，输出升序排列
* 原地重排，不分配额外内存
* 时间复杂度：O(n)，空间复杂度：O(1)

### 程序输入
```
Input: {int[]}  nums
[4, 3, 2, 1]
```

### 程序输出
```
Output: {int[]}
for (let i = 0; i < 25; i++) {
  console.log(nextPermutation(x));
}

[1, 2, 3, 4]
[1, 2, 4, 3]
[1, 3, 2, 4]
[1, 3, 4, 2]
[1, 4, 2, 3]
[1, 4, 3, 2]
[2, 1, 3, 4]
[2, 1, 4, 3]
[2, 3, 1, 4]
[2, 3, 4, 1]
[2, 4, 1, 3]
[2, 4, 3, 1]
[3, 1, 2, 4]
[3, 1, 4, 2]
[3, 2, 1, 4]
[3, 2, 4, 1]
[3, 4, 1, 2]
[3, 4, 2, 1]
[4, 1, 2, 3]
[4, 1, 3, 2]
[4, 2, 1, 3]
[4, 2, 3, 1]
[4, 3, 1, 2]
[4, 3, 2, 1]
[1, 2, 3, 4]
```
