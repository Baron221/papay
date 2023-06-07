

// function buyStock(stock_prices){
//     let maxProf = 0;
//     let minPrice = stock_prices[0];
//     for (let sell = 1; sell < stock_prices.length; sell++){
//         let sellPrice = stock_prices[sell]
//         let profit =  sellPrice - minPrice
//         maxProf = Math.max(maxProf, profit)

//         if(sellPrice < minPrice) minPrice = sellPrice;
    
//     }
//     return `index: ${stock_prices.length} , profit: ${maxProf}`
// }

function findDigits(str){
    const stringNum = str.replace(/\D/g, ''); 
    return stringNum;
   }
   console.log(findDigits('ad5we34jkf89'));
   
