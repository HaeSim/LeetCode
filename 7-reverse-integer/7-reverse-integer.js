/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const isPlus = x > 0;
  x = Math.abs(x);
  let result = 0;
  while (x > 0) {
    const num = x % 10;
    x = Math.floor(x / 10);
    result *= 10;
    result += num;
  }
  if (result > Math.pow(2,31)) return 0;
  return isPlus ? result : result * -1;

};