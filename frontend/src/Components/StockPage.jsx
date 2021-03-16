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



    const displayStockData = async() => {
        await fetchStockInfo()

        for(let stock in stockData){
            console.log(stock)
            return (
                <div>
                    <h4>{stock.companyName}</h4>
                    <p>{stock.description}</p>
                    <a href={stock.website}></a>
                </div>
            )
        }
    }
    return (
        <div>
            <button onClick={displayStockData}>Click</button>
        </div>
    )
}


export default StockPage