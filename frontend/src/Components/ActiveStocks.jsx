import React from 'react'

//Make request once when the button us pressed
//After it saves the jsonData in the window localStorage.
//?Maybe save currentDate and if the date is not the same as new date object make the req again?
const ActiveStocks = ({mostActiveStocks, getMostActiveStocks}) => {
    return (
        <div>
            <button onClick={getMostActiveStocks}>Active Stocks</button>
            <div>
                {
                    mostActiveStocks && mostActiveStocks.map((stock) => (
                        <p>stock T</p>
                    ))
                }
            </div>
        </div>
        
    )
}

export default ActiveStocks