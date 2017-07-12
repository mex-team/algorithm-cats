const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * 汉诺塔移动函数
 * @param  {Number} levels 本次要移动的层级数
 * @param  {String} from   本次要移动的起始柱
 * @param  {String} cache  本次可以使用的缓存柱
 * @param  {String} dest   本次要移动的目标柱
 * @param  {Array}  steps  步骤暂存数组
 * @return {Array}         需要移动的步骤详情
 */
function hanoi(levels, from = 'left', cache = 'middle', dest = 'right', steps = []) {
  if (levels > 0) {
    hanoi(levels - 1, from, dest, cache, steps);
    steps.push(`${from} => ${dest}`);
    hanoi(levels - 1, cache, from, dest, steps);
  }
  return steps;
}

rl.question('', (levels) => {
  const steps = hanoi(levels);

  console.log(`least: ${steps.length}\nsteps:`);
  steps.forEach(step => console.log(step));

  rl.close();
});
