import React,{useState, useEffect} from 'react'
import axios from 'axios'
import secrets from '../secrets'

const StockPage = (props) => {
    const [stockData, setStockData] = useState({})

    const fetchStockInfo = async () => {
        try{
            let response = await axios.get(`https://cloud.iexapis.com/stable/stock/${props.match.params.symbol}/company/?token=${secrets.iexKey}`)
            let stockInfo = response.data
            setStockData(stockInfo)
            console.log(stockInfo)

        }catch(error){
            console.log('err', error)
        }
    }
    
    useEffect(()=> {
        fetchStockInfo()
    },[])

    return (
        <div>
           <div className='stockInfo'>
                <h2>{stockData.companyName}</h2>
                <h4>{stockData.symbol}</h4>
                <a href={stockData.website}>{stockData.website}</a>
                <p>{stockData.description}</p>
           </div>
        </div>
    )
}


export default StockPage