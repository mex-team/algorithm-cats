function mult(matrixChain) {
  let matrixChainLen = matrixChain.length;
  //初始化中间结果为Infinity，ij表示存储 matrix[0] * matrix[1] 的结果
  let cost = [];
  for (var i = 0; i < matrixChainLen ; i++) {
    cost[i] = [];
    for (var j = 0; j < matrixChainLen ; j++) {
      if(i === j)
        cost[i][j] = [0, 'rows', 'cols', matrixChain[i][0]];
      else
        cost[i][j] = [Infinity, 'rows', 'cols', '(' + matrixChain[i][0] + matrixChain[j][0] + ')'];
    }
  }
  //第一层待计算长度
  for(let len = 2; len <= matrixChainLen; len++) {
    //第二层起始位置
    for(let start = 0; start <= matrixChainLen - len ; start++) {
      let end = start + len - 1;
      //第三层隔开的位置
      for(let mid = start; mid < end; mid++) {
        let tryCost = [];
        tryCost[0] = cost[start][mid][0] + cost[mid+1][end][0] + matrixChain[start][1] * matrixChain[mid][2] * matrixChain[end][2];
        if(tryCost[0] < cost[start][end][0]) {
          tryCost[1] = matrixChain[start][1];
          tryCost[2] = matrixChain[end][2];
          tryCost[3] = ['(', cost[start][mid][3], cost[mid+1][end][3], ')'].join('');
          cost[start][end] = tryCost;
        }
      }
    }
  }
  // console.log(cost)
  return cost;
}

module.exports = mult;

// In [2]:
// mult([('A', 10, 20), ('B', 20, 30), ('C', 30, 40)])
// Out[2]:  10*20*30+10*30*40=6000+12000=18000  【10，40】
// {'cols': 40, 'cost': 18000, 'order': '((AB)C)', 1: 10}
// In [3]:
// mult([('A', 10, 5), ('B', 5, 1), ('C', 1, 5), ('D', 5, 10), ('E', 10, 1)])
// Out[3]:
// {'cols': 1, 'cost': 110, 'order': '(A(B(C(DE))))', 1: 10}

let mcInput = [['A', 10, 20],['B', 20, 30],['C', 30, 40]];
let mcInput2 = [['A', 10, 5], ['B', 5, 1], ['C', 1, 5], ['D', 5, 10], ['E', 10, 1]]
let cost = mult(mcInput2);
console.log(`minial cost : ${cost[0][mcInput2.length - 1]}`);
