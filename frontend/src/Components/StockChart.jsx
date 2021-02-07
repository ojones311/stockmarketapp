import React, {useState} from 'react'
import axios from 'axios'

const StockChart = ({stock, chart}) => {

    const [stockChartXValue, setStockChartXValue] = useState(0)
    const [stockChartYValue, setStockChartYValue] = useState(0)

    return(
        <div>
            <div className='title'>
                <span>
                <h2>{stock.companyName}</h2>
                <h3>{stock.symbol}</h3>
                <p>{stock.latestTime}</p>
                </span>
           </div>
           <div>
                {chart.map((elem) => {
                    return (
                        <div>
                            <p>{elem.symbol}</p>
                            <p>{elem.date}</p>
                            <p>Open: {elem.open}</p>
                            <p>Close: {elem.close}</p>
                        </div>
                    )
                })}
           </div>
        </div>
    )
}


export default StockChart