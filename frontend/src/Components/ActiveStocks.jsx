import React from 'react'
import StockCard from './StockCard.jsx'

//Make request once when the button us pressed
//After it saves the jsonData in the window localStorage.
//?Maybe save currentDate and if the date is not the same as new date object make the req again?
const ActiveStocks = ({mostActiveStocks, getMostActiveStocks}) => {
    return (
        <div>
            <h3>Trending Stocks</h3>
            <button onClick={getMostActiveStocks}>Active Stocks</button>
            <div>
                {
                    mostActiveStocks && mostActiveStocks.map((stock) => (
                        <StockCard stock={stock}/>
                    ))
                }
            </div>
        </div>
        
    )
}

export default ActiveStocks