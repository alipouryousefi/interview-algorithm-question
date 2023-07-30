/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buyTime = 0;
    let sellTime = 0;
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[buyTime] > prices[i]) {
            buyTime = i
            sellTime = i
        }
        if (prices[sellTime] < prices[i]) {
            sellTime = i
        }
        if (profit < prices[sellTime] - prices[buyTime]) {
            profit = prices[sellTime] - prices[buyTime]
        }
    }
    return profit

};

// Test cases
const prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // Output: 5

const prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2)); // Output: 0