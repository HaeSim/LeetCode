/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) { 
    let max = 0;
    let cur = prices[0];
    
    for(let i=1; i<prices.length; i++) {
        let diff = (prices[i] - cur);
        if(diff > max) {
            max = diff;
        }
        if(cur > prices[i]) {
            cur = prices[i];
        }
    }
    return max<0 ? 0 : max; 
};