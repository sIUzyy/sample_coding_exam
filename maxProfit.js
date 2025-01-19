function maxProfit(prices){
    let minPrice = prices[0]
    let maxProfit = 0
    
    // loop through prices
    for(let i = 1; i < prices.length; i++){
        const currentPrice = prices[i]
        
        // update minimum price if the lower price is found
        minPrice = Math.min(minPrice, currentPrice)
       
       // get the potential price
       const potentialProfit = currentPrice - minPrice
    
        // get the maximum profit
        maxProfit = Math.max(maxProfit, potentialProfit)
       
    }
    
    return maxProfit
    
   
}

const prices = [7,1,5,3,6,4]
const profit = maxProfit(prices)
