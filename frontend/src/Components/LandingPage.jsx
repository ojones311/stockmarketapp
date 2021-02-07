import React from 'react'
import StockChart from '../Components/StockChart'
import SearchStockForm from '../Components/SearchStockForm'

const LandingPage = () => {
    return (
        <div>
            <h3>Welcome to Speculator</h3>
            <div className='body'>
                <SearchStockForm />
                <StockChart />
            </div>
        </div>
    )
}


export default LandingPage