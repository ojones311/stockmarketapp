import React, {useState} from 'react'
import SearchStockForm from '../Components/SearchStockForm'
import axios from 'axios'

const StockChart = () => {

    const [stockChartXValue, setStockChartXValue] = useState(0)
    const [stockChartYValue, setStockChartYValue] = useState(0)
    const [stock, setStock]  =  useState('')

    const fetchStockValues = async () => {
        try{
            // let response = await axios.get(`https://cloud.iexapis.com/stable/stock/${}/quote/?token=pk_7f13b52925e94bf28f2f49c3c0666ed2`);
            // console.log(response.data)
        }catch(error){
            console.log('err',error)
        } 
    }
    return(
        <div>
           <SearchStockForm  fetchStockValues={fetchStockValues} stock={stock}/> 
        </div>
    )
}


export default StockChart