import React,{useState} from 'react'
import StockChart from '../Components/StockChart'
import SearchStockForm from '../Components/SearchStockForm'

const LandingPage = () => {
    const [stock, setStock] = useState({})
    const [chart, setChart] = useState([])
    return (
        <div>
            <h3>Welcome to Speculator</h3>
            <div className='body'>
                <SearchStockForm stock={stock} chart={chart} setStock={setStock} setChart={setChart}/>
                <StockChart stock={stock} chart={chart} setChart={setChart}/>
            </div>
        </div>
    )
}


export default LandingPage