function hanoi(level, sourcePillar, transportPillar, targetPillar, callback) {
  if(level === 1) callback(sourcePillar, targetPillar);
  else {
    hanoi(level - 1, sourcePillar, targetPillar, transportPillar, callback);
    hanoi(1, sourcePillar, transportPillar, targetPillar,  callback);
    hanoi(level - 1, transportPillar, sourcePillar, targetPillar, callback);
  }
}

function getCounter() {
  var count = 1;
  return function(pillarA, pillarB) {
    console.log(`${count}: ${pillarA} => ${pillarB}`);
    count++;
  }
}

function play(level, sourcePillar, transportPillar, targetPillar) {
  var counter = getCounter();
  hanoi(level, sourcePillar, transportPillar, targetPillar, counter);
}

module.exports = play;

// test
// node -e 'require("./chapter1_Colin6618.js")(3, "left", "middle", "right")'
