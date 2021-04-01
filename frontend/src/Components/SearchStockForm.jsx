import React from 'react'
import useSubmitForm from '../Components/useSubmitForm'
import axios from 'axios'
import secrets from '../secrets' 

const SearchStockForm = ({setStock, setChart,setShowChart}) => {

    const {values, handleFormChange, handleFormSubmit} = useSubmitForm(() => {
        fetchStockQuoteValues(values.stock)
        fetchStockChartData(values.stock)
        setShowChart(true)
    } )

    const fetchStockQuoteValues = async (stock) => {
        try{
            let response = await axios.get(`https://cloud.iexapis.com/stable/stock/${stock}/quote/?token=${secrets.iexKey}`);
            console.log(response.data)
            setStock(response.data)
        }catch(error){
            console.log('err',error)
        } 
    }
    const fetchStockChartData = async (stock) => {
        try {
            let response = await axios.get(`https://cloud.iexapis.com/stable/stock/${stock}/chart/?token=${secrets.iexKey}`)
            console.log(response.data)
            setChart(response.data)
        }catch(error){
            console.log('err', error)
        }
    }
    
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type='text' placeholder='Quote lookup' name='stock' onChange={handleFormChange} value={values.stock || ''} required/>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchStockForm