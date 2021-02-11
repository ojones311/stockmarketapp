import React, {useRef, useState, useEffect} from 'react'
import Chart from 'chart.js'


const StockChart = ({stock, chart}) => {

    let chartRef = useRef(null);
    const [chartInstance, setChartInstance] = useState(null)

    const getDateLabels = (arr) =>{
        let solutionArr = []
        // let dateArr = arr.filter((elem) => elem.date)
        // for(let i = 0; i < arr.length; i++){
        //     if(arr[i].date){
        //         solutionArr.push(arr[i].date)
        //     }
        // }
        // console.log(arr)
        // console.log(solutionArr)
        // return dateArr
     }
    let chartConfig = {
        type: 'line',
        data: {
            labels: getDateLabels(chart),
            datasets:[{
                label:'Dates',
                data: [12,3,4,5,6,7]
            }]
        },
        // options: {
        //     scales: {
        //         xAxes: [
        //           {
        //             type: 'time',
        //             time: {
        //               unit: 'week'
        //             }
        //           }
        //         ],
        //         yAxes: [
        //           {
        //             ticks: {
        //               min: 0
        //             }
        //           }
        //         ]
        //       }
        // }
    }

    useEffect (() => {
        if(chartRef && chartRef.current){
            const newLineChart = new Chart(chartRef.current, chartConfig)
            setChartInstance(newLineChart)
        }
    },[chartRef])

    const updateChart = (chartIndex, chart) => {
        chartInstance.data.datasets[chartIndex].data = chart
        chart.update()
    }
    // const myLineGraph = new Chart(chartRef, {
    //     type: 'line',
    //     data: {
    //         labels: ['One', 'Two','Three', 'Four'],
    //         datasets:[{
    //             label:'Numbers',
    //             data: [12,3,4,5,6,7]
    //         }]
    //     },
    //     options: {
    //         scales: {
    //             xAxes: [
    //               {
    //                 type: 'time',
    //                 time: {
    //                   unit: 'week'
    //                 }
    //               }
    //             ],
    //             yAxes: [
    //               {
    //                 ticks: {
    //                   min: 0
    //                 }
    //               }
    //             ]
    //           }
    //     }
    // })

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
                <canvas id='myLineChart' ref={chartRef} />
           </div>
        </div>
    )
}


export default StockChart