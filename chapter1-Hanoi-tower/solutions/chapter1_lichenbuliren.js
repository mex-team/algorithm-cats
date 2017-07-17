let n = process.argv[2] || 3;
let count = 0;

let hanoi = (n, a = 'left', b = 'middle', c = 'right') => {
  count++;
  if (n == 1) {
    console.log(`${a} to ${c}`);
  } else {
    hanoi(n - 1, a, c, b);
    console.log(`${a} to ${c}`);
    hanoi(n - 1, b, a, c);
  }
};

hanoi(n, 'left', 'middle', 'right');
console.log(`\nleast steps: ${count}`);

// node chapter1_lichenbuliren.js 4