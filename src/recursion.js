// 假如这里有 n 个台阶，每次你可以跨 1 个台阶或者 2 个台阶，请问走这 n 个台阶有多少种走法
const cache = {}
function getCount(n) {
  if(n === 1) { return 1;}
  if(n === 2) { return 2;}
  if(cache[n]) {
    return cache[n];
  }
  const ret = getCount(n-1) + getCount(n-2);
  cache[n] = ret;
  return ret;
}