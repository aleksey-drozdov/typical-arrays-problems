
exports.min = function min(array) {
  if (!array || array.length == 0) {
    return 0;
  } else {
    var minNum = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < minNum) {
        minNum = array[i]
      }
    }
    return minNum
  }
}

exports.max = function max(array) {
  if (!array || array.length == 0) {
    return 0;
  } else {
    var maxNum = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maxNum) {
        maxNum = array[i]
      }
    }
    return maxNum
  }
}

exports.avg = function avg(array) {
  if (!array || array.length == 0) {
    return 0;
  } else {
    var avgNum = 0;
    for (let i = 0; i < array.length; i++) {
      avgNum += array[i];
    }
    avgNum = avgNum / array.length;
    return avgNum;
  }
}
