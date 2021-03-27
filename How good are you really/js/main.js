const betterThanAverage = (classPoints,yourPoints) => (classPoints.reduce((a,b) => a + b) / classPoints.length) < yourPoints ? true : false
