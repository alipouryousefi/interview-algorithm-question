function maxProfit(prices: number[]): number {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        const priceDifference = prices[i] - prices[i - 1];
        if (priceDifference > 0) {
            profit += priceDifference;
        }
    }

    return profit;
}

// Test cases
const prices1: number[] = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // Output: 7

const prices2: number[] = [1, 2, 3, 4, 5];
console.log(maxProfit(prices2)); // Output: 4

const prices3: number[] = [7, 6, 4, 3, 1];
console.log(maxProfit(prices3)); // Output: 0
