import React,{useState} from 'react'
import StockChart from '../Components/StockChart'
import SearchStockForm from '../Components/SearchStockForm'
import ActiveStocks from './ActiveStocks'
import secrets from '../secrets' 
import axios from 'axios'

const LandingPage = () => {
    const [stock, setStock] = useState({})
    const [chart, setChart] = useState([])
    const [showChart, setShowChart] = useState(false)
    const [mostActiveStocks, setMostActiveStocks] = useState([])

    //Make request once when the button us pressed
    //After it saves the jsonData in the window localStorage.
    //?Maybe save currentDate and if the date is not the same as new date object make the req again?
    // /stable/stock/market/list/mostactive?token=apiKey&listLimit=5

    const getMostActiveStocks = async () => {
        try{
            let response = await axios.get(`https://cloud.iexapis.com/stable/stock/market/list/mostactive/?token=${secrets.iexKey}&listLimit=5`)
            console.log(response.data,response.status)
            if(response.status === 200){
                setMostActiveStocks(response.data)
            }
        }catch(error){
            console.log('error',error)
        }

    }
    return (
        <div>
            <div className='header'>
                <SearchStockForm stock={stock} chart={chart} setStock={setStock} setChart={setChart} setShowChart={setShowChart}/>
            </div>
            <div className='body'>
                <ActiveStocks mostActiveStocks={mostActiveStocks} getMostActiveStocks={getMostActiveStocks}/>
                <StockChart stock={stock} chart={chart} setChart={setChart} showChart={showChart} />
            </div>
        </div>
    )
}


export default LandingPage