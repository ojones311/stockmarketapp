import React, {useRef, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Chart from 'chart.js'

import '../Styles/StockChart.css'


const StockChart = ({stock, chart, showChart}) => {
    let history = useHistory()

    let chartRef = useRef(null);
    const [chartInstance, setChartInstance] = useState(null)
    const [stockPrices, setStockPrices] = useState([])
    
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
        return stockPricesArr
    }
    
    const getYAxisFloor = (arr) => {
        let yFloor = Math.min(...arr)
        return yFloor * .95
    }

    const setRandomColor = () => {
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
         return randomColor
    }

    let chartConfig = {
        type: 'line',
        data: {
            labels: getDateLabels(chart),
            datasets:[{
                label:'Stock Price',
                data: getStockPrices(chart),
                lineTension: 0,
                borderColor: setRandomColor(),
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
                    ticks: {
                        min: getYAxisFloor(getStockPrices(chart))
                    }
                  }
                ]
              },
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
        if(showChart){
            buildChart()
        } 
    },[chart])

    return(
        <div>

            {showChart ? 
            <div className='title'>
                <h2 id='title-link-sp' onClick={redirectToStockPage}>{stock.companyName}</h2>
                <h3 id='ticker-link-sp' onClick={redirectToStockPage}>{stock.symbol}</h3>
                <p>{'Price: '}{stock.latestPrice}</p>
                <p>{'Change: '}{stock.change}</p>
                <p>{'Change Percent: '}{stock.changePercent}</p>
                <p>{stock.latestTime}</p>
           </div>: <div></div>}   

           <div className= 'chart-instance'>
                <canvas id='myLineChart' ref={chartRef} />
           </div>
        </div>
    )
}


export default StockChart