// ���������� n ��̨�ף�ÿ������Կ� 1 ��̨�׻��� 2 ��̨�ף��������� n ��̨���ж������߷�
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