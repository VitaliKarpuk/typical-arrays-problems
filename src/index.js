
exports.min = function min (array) {
  if(array === undefined || array.length < 1) return 0
  let min = array.sort((a,b) => a-b);
  
  return min[0];
}

exports.max = function max (array) {
  if(array === undefined || array.length < 1) return 0
  let max = array.sort((a,b) => b-a)
  return max[0];
}

exports.avg = function avg (array) {
  if(array === undefined || array.length < 1) return 0
  let length = array.length;
  let sum = array.reduce((acc, item) => acc + item , 0)
  return sum/length;
}
