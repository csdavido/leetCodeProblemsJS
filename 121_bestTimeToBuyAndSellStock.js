var maxProfit = function(prices) {
    
    var buy = Number.MAX_SAFE_INTEGER;
    var profit = 0;
    
    for (var x = 0; x < prices.length; x++) {
        if (prices[x] < buy) {
            buy = prices[x];
        }
        else if (prices[x] - buy > profit) {
            profit = prices[x] - buy;         
        }
    }
    
    return profit;
};