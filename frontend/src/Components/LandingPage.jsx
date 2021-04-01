import React,{useState} from 'react'
import StockChart from '../Components/StockChart'
import SearchStockForm from '../Components/SearchStockForm'

const LandingPage = () => {
    const [stock, setStock] = useState({})
    const [chart, setChart] = useState([])
    const [showChart, setShowChart] = useState(false)

    return (
        <div>
            <h3>Welcome to Speculator</h3>
            <div className='body'>
                <SearchStockForm stock={stock} chart={chart} setStock={setStock} setChart={setChart} setShowChart={setShowChart}/>
                <StockChart stock={stock} chart={chart} setChart={setChart} showChart={showChart} />
            </div>
        </div>
    )
}


export default LandingPage