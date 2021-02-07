import React, {useState} from 'react'
import axios from 'axios'

const StockChart = () => {

    const [stockChartXValue, setStockChartXValue] = useState(0)
    const [stockChartYValue, setStockChartYValue] = useState(0)
    const [stock, setStock] = useState('')

   
    return(
        <div>
           <table></table>
        </div>
    )
}


export default StockChart