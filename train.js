const prices =[2,1,30,3,10];
console.log("You should buy stock =>",buyStock(prices));

function buyStock(stock_prices){
    let maxProf = 0;
    let minPrice = stock_prices[0];
    for (let sell = 1; sell < stock_prices.length; sell++){
        let sellPrice = stock_prices[sell]
        let profit =  sellPrice - minPrice
        maxProf = Math.max(maxProf, profit)

        if(sellPrice < minPrice) minPrice = sellPrice;
    
    }
    return `index: ${stock_prices.length} , profit: ${maxProf}`
}

