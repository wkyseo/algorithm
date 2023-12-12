function reverse(str) {
  if(str.length <= 1) {
    return;
  }
  let j = 0;
  let tmp = null;
  const len = str.length;
  for(let i = len -1; i >= parseInt(len/2); i--) {
    tmp = str[j];
    str[j] = str[i];
    str[i] = tmp;
    j++;
  }
  return str;
}