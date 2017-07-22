def hanoi(level, sourcePillar, transportPillar, targetPillar, callback):
    if level == 1:
        callback(sourcePillar, targetPillar)
    else:
        hanoi(level - 1, sourcePillar, targetPillar, transportPillar, callback)
        hanoi(1, sourcePillar, transportPillar, targetPillar,  callback)
        hanoi(level - 1, transportPillar, sourcePillar, targetPillar, callback)

def getCounter():
    a = [1]
    def count(pillarA, pillarB):
        print (a[0], pillarA, pillarB)
        a[0] = a[0] + 1
        return a[0]
    return count


def play(level, sourcePillar, transportPillar, targetPillar):
    counter = getCounter()
    hanoi(level, sourcePillar, transportPillar, targetPillar, counter)

play(5, "left", "middle", "right");
