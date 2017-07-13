var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('please input levels(number): ', (levels) => {
  var stepList = moveHanio(levels);

  console.log(`at least ${stepList.length} steps \n steps:`)
  console.log(stepList.join('\n'));
  rl.close();
});

rl.on('close', () => {
  process.exit(0);
});

// --------------  recursive solution  ---------------
// 移动汉诺塔主操作方法
// 默认借助中间柱将目标从左移到右
function moveHanio (levelNum, initPos = 'left', helpPos = 'middle', targetPos = 'right', stepList = []) {
  if (levelNum <= 0) {
    console.error('at least 1 level!');
    return rl.close();
  } else if (levelNum === 1) {
    moveOne(levelNum, initPos, targetPos, stepList);
  } else {
    moveHanio(levelNum - 1, initPos, targetPos, helpPos, stepList);
    moveOne(levelNum, initPos, targetPos, stepList);
    moveHanio(levelNum - 1, helpPos, initPos, targetPos, stepList);
  }

  return stepList;
}

// 单步操作，将某一盘从起点柱换到目标柱
function moveOne (levelNum, initPos, targetPos, stepList) {
  stepList.push(`${initPos} => ${targetPos}`);     
}


// --------------  stack-recursive solution  ---------------
// // 移动汉诺塔主操作方法
// // 默认借助中间柱将目标从左移到右
// function moveHanio (levelNum, initPos = 'left', helpPos = 'middle', targetPos = 'right', stepList = []) {
//   var stack = new Stack();
//   stack.push(new Hanio(levelNum, initPos, helpPos, targetPos));
//   var curHanio = null;
//   while(!stack.isEmpty() && (curHanio = stack.pop()) != null) {
//     if(curHanio.levelNum === 1) {
//       stepList.push(`${curHanio.initPos} => ${curHanio.targetPos}`);     
//     } else {
//       stack.push(new Hanio(curHanio.levelNum - 1, curHanio.helpPos, curHanio.initPos, curHanio.targetPos));
//       stack.push(new Hanio(1, curHanio.initPos, curHanio.helpPos, curHanio.targetPos));
//       stack.push(new Hanio(curHanio.levelNum - 1, curHanio.initPos, curHanio.targetPos, curHanio.helpPos));
//     }
//   }
//   return stepList;
// }

// // 汉诺塔问题抽象类
// function Hanio (levelNum, initPos, helpPos, targetPos) {
//   this.levelNum = levelNum;
//   this.initPos = initPos;
//   this.helpPos = helpPos;
//   this.targetPos = targetPos;
// }

// // 栈结构
// function Stack () {
//   var items = [];
//   this.push = function (element) {
//     items.push(element);
//   };
//   this.pop = function () {
//     return items.pop();
//   };
//   this.isEmpty = function () {
//     return items.length === 0;
//   };
// }