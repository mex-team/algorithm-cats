/**
 * 矩阵链乘最优解问题（动态规划）
 */
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var input = [];
rl.on('line', (line) => {
  input.push(line);
  (input.length == (parseInt(input[0]) + 1)) ? rl.close() : '';
});

rl.on('close', () => {
  // 输入完毕开始执行计算
  var chain = input.splice(1, input.length).map((v) => {
    return v.split(' ');
  });
  matrixChain(chain);
});

// 矩阵链乘主计算函数
let matrixChain = (chain) => {
  if (Object.prototype.toString.call(chain) !== "[object Array]") {
    return console.error('ensure your data format!');
  }

  // 初始化数据，用一个对象二维数组存储'n*n'这样一个二维数据表，记录子问题的解
  let len = chain.length;
  let dict = [];
  for (let i = 0; i < len; i++) {
    dict[i] = [];
    for (let j = 0; j < len; j++) {
      dict[i][j] = {rows: parseInt(chain[i][1]), cols: parseInt(chain[j][2]), cost: 0, order: chain[i][0]}
    }
  }

  // 相邻i个矩阵最优解(子链宽度)
  for (let i = 2; i <= len; i++) {
    // 从第j个矩阵开始后的i个矩阵
    for (let j = 0; j <= len-i; j++) {
      let best = Number.MAX_VALUE;
      let order = '', rows, cols;
      // 从第j个矩阵开始后的i个矩阵拆分为j到k和k+1到j+i-1两个部分
      for (let k = j; k < j + i-1; k++) {
        let left = dict[j][k];
        let right = dict[k+1][j+i-1];
        let cost = left.cost + right.cost + left.rows * left.cols * dict[j+i-1][j+i-1].cols;
        if (best > cost) {
          best = cost;
          rows = left.rows;
          cols = right.cols;
          order = left.order + right.order;
        }
      }
      dict[j][j+i-1] = {
        rows: rows,
        cols: cols,
        cost: best,
        order: `(${order})`
      };
    }
  }

  console.log(dict[0][len-1]);
  return dict[0][len-1];
};
