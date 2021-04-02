import React,{useState} from 'react'
import StockChart from '../Components/StockChart'
import SearchStockForm from '../Components/SearchStockForm'

const LandingPage = () => {
    const [stock, setStock] = useState({})
    const [chart, setChart] = useState([])
    const [showChart, setShowChart] = useState(false)

    return (
        <div>
            <div className='header'>
                <h2>Welcome to Speculator</h2>
                <SearchStockForm stock={stock} chart={chart} setStock={setStock} setChart={setChart} setShowChart={setShowChart}/>
            </div>
            <div className='body'>
                <StockChart stock={stock} chart={chart} setChart={setChart} showChart={showChart} />
            </div>
        </div>
    )
}


export default LandingPage