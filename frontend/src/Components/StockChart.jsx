import React, {useRef, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Chart from 'chart.js'


const StockChart = ({stock, chart}) => {
    let history = useHistory()

    let chartRef = useRef(null);
    const [chartInstance, setChartInstance] = useState(null)

    const getDateLabels = (arr) => {
        let solutionArr = []
        for(let i = 0; i < arr.length; i++){
            if(arr[i].date){
                solutionArr.push(arr[i].date)
            }
        }
        return solutionArr
    }
    const getStockPrices = (arr) => {
        let stockPricesArr = arr.map((stockPrice) => {
            if(stockPrice.close){
                return stockPrice.close
            }
        })
        // console.log(stockPricesArr)
        return stockPricesArr
    }
    let chartConfig = {
        type: 'line',
        data: {
            labels: getDateLabels(chart),
            datasets:[{
                label:'Stock Price',
                data: getStockPrices(chart)
            }]
        },
        options: {
            scales: {
                xAxes: [
                  {
                    type: 'time',
                    time: {
                      unit: 'day'
                    }
                  }
                ],
                yAxes: [
                  {
                    type: 'linear',
                  }
                ]
              }
        }
    }
    const buildChart = () => { 
        if(chartInstance){
            chartInstance.destroy()
        }
        let newChartInstance = new Chart(chartRef.current, chartConfig)
        setChartInstance(newChartInstance)
    }

    const redirectToStockPage = () => {
        history.push(`/stocks/${stock.symbol}`)
    }

    useEffect(() => {
        buildChart()
    },[chart])

    return(
        <div>
            <div className='title'>
                <span>
                <h2 onClick={redirectToStockPage}>{stock.companyName}</h2>
                <h3>{stock.symbol}</h3>
                <p>{stock.latestTime}</p>
                </span>
           </div>
           <div>
                <canvas id='myLineChart' ref={chartRef} />
           </div>
        </div>
    )
}


export default StockChart