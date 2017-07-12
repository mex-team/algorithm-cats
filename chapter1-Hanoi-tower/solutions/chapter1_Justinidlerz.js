#!/usr/bin/env node
const readline = require('readline');

/**
 * 柱子换位法解决汉诺塔问题
 * @param {Number} level
 * @param {String} columnA
 * @param {String} columnB
 * @param {String} columnC
 * @param {Array} recorder
 */
const move = (level, columnA, columnB, columnC, recorder, prevStatus) => {
  if (level > 1) {
    move(level - 1, columnA, columnC, columnB, recorder, prevStatus);
    prevStatus[columnC].unshift(prevStatus[columnA].shift());
    recorder.push([columnA, columnC, JSON.stringify(prevStatus)]);
    move(level - 1, columnB, columnA, columnC, recorder, prevStatus);
    return recorder;
  }
  prevStatus[columnC].unshift(prevStatus[columnA].shift());
  return recorder.push([columnA, columnC, JSON.stringify(prevStatus)]);
};

/**
 * 汉诺塔
 * @param {Number} level
 */
const hanoi = (level) => {
  level = parseInt(level);
  const initStatus = {
    left: [],
    middle: [],
    right: []
  };
  for (let i = 0; i < level; i++) {
    initStatus.left.push(i + 1);
  }
  const records = move(level, 'left', 'middle', 'right', [], initStatus);
  readline.cursorTo(process.stdout, 0, 0);
  initStatus.left.push.apply(initStatus.left, initStatus.right.splice(0, level));
  records.unshift(['init', '', JSON.stringify(initStatus)]);
  print(records, level, 0);
}

const print = (records, level, index) => {
  const record = records[index];
  record[2] = JSON.parse(record[2]);
  record[2] = Object.keys(record[2]).map(key => {
    const patch = level - record[2][key].length;
    if (patch > 0) {
      record[2][key] = ' '.repeat(patch - 1).split(' ').concat(record[2][key]);
    }
    return record[2][key];
  });
  setTimeout(() => {
    createColumn(level, record);
    if (index < records.length - 1) {
      print(records, level, index + 1);
    } else {
      console.log(`\nleast: ${records.length}`);
    }
  }, 1200);
};

/**
 * 创建行状态
 * @param {Number} level
 */
const createBlock = (level) => {
  const blockLen = 2 * level - 1;
  const block = '-'.repeat(blockLen);
  const blank = ' '.repeat((19 - blockLen) / 2);
  const string = [blank, block, blank];
  return string.join('');
};

/**
 * 创建柱子状态
 * @param {Number} level
 * @param {Array}  record
 */
const createColumn = (level, record) => {
  const blank = createBlock(1).replace('-', '|');
  const footer = createBlock(3);
  const top = createBlock(1);
  const columns = [[footer, footer, footer].join(' ')];
  for (let i = level - 1; i >= 0 ; i--) {
    const status = Object.keys(record[2]).map(key => {
      const columnStatus = record[2][key][i];
      return  columnStatus ? createBlock(columnStatus) : blank;
    }).join(' ');
    columns.push([status]);
  }
  columns.push([top, top, top].join(' ').replace(/-/g, '|'));
  columns.reverse();
  readline.cursorTo(process.stdout, 0, 0);
  readline.clearScreenDown(process.stdout);
  process.stdout.write(columns.join('\n'));
  process.stdout.write(`\n${record[0]} => ${record[1]}`);
};

const level = process.argv[2];
if (!level) {
  console.log('Please input hanoi level');
  process.exit(1);
}
hanoi(level);