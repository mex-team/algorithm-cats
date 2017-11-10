const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Permutation class
 * @param {Array} items   initial items
 */
class Permutation {
  constructor(items) {
    this.queue = [...items];
  }
  /**
   * Get the next permutation
   * @return {Array} the next permutation
   */
  next() {
    let division = this.queue.length - 2;
    let swap = this.queue.length - 1;

    // find the first smaller number from tail
    while (division > 0 && this.queue[division] > this.queue[division + 1]) {
      division -= 1;
    }

    // find the first larger number than the first smaller number from tail
    while (swap > division && this.queue[division] > this.queue[swap]) {
      swap -= 1;
    }

    // reverse queue if it is the last permutation
    if (division === 0 && swap === 0) {
      this.reverse(0);
    } else {
      // swap the first smaller number and the first larger number than smaller number
      this.swap(division, swap);
      // reverse the rest of the queue from the first smaller number
      this.reverse(division + 1);
    }

    return this.queue;
  }
  /**
   * Swap two numbers through its index
   * @param  {Number} from
   * @param  {Number} target
   */
  swap(from, target) {
    let temp = this.queue[from];

    this.queue[from] = this.queue[target];
    this.queue[target] = temp;
  }
  /**
   * Reverse the rest of the queue from specific start
   * @param  {Number} start
   * @param  {Number} end   (default is the length of queue)
   */
  reverse(start, end = this.queue.length - 1) {
    while (start < end) {
      this.swap(start, end);
      start += 1;
      end -= 1;
    }
  }
}

function nextRead(permutation) {
  rl.question('', function () {
    rl.write(`[${permutation.next().join(', ')}]`);
    nextRead(permutation);
  });
}

rl.question('Please input a group of numbers separated by space:\n', (numbers) => {
  const permutation = new Permutation(numbers.split(' '));

  rl.write('(Got them! Press the RETURN button to get the next permutation)');
  nextRead(permutation);
});