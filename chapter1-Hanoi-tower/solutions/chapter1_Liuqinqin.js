/**
 * Created by meizu on 17/7/16.
 */

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function hanoi(level, left = 'left', middle = 'middle', right = 'right', step =[]) {
    if (level === 1) {
        move(left, right, step);
    } else {
        hanoi(level - 1, left, right, middle, step);
        move(left, right, step);
        hanoi(level - 1, middle, left, right, step);
    }
    return step;
}

function move(start, end, step) {
    step.push(start + " ＝> " + end);
}

rl.question('', (level) => {
    const step = hanoi(level);
    console.log(`At least: ${step.length}`);
    console.log(step.join('\n'));
    rl.close();
});