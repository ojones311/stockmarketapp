import React, {useState} from 'react'
import Chart from 'chart.js'
import axios from 'axios'

const StockChart = ({stock, chart}) => {
    let chartRef = React.createRef();
    const myLineGraph = new Chart(chartRef, {
        type: 'line',
        data: '',

    })

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