// ��Ʊ������ 2
// [1,5,8,9,10,2]
// [3,1,4,6,2,7]
function maxProfit(prices) {
  let max = 0;
  let minPrice = prices[0];
  for(let i = 0; i < prices.length; i++) {
    console.log('prices', prices[i]);
    if(prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      max = Math.max(max, prices[i]-minPrice);
    }
  }
  return max
}

var maxProfitFee = function(prices, fee) {
  let result = 0
  let minPrice = prices[0]
  for(let i = 1; i < prices.length; i++) {
      console.log('price:', prices[i]);
      if(prices[i] < minPrice) {
          minPrice = prices[i]
      }
      if(prices[i] >= minPrice && prices[i] <= minPrice + fee) {
          continue
      }

      if(prices[i] > minPrice + fee) {
          result += prices[i] - minPrice - fee
          // ���������ֻ��Ҫ֧��һ��������
          minPrice = prices[i] -fee
      }
  }
  return result
};


// ����֮�����Ϊ0
// �ο���https://leetcode-cn.com/problems/3sum/