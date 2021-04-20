import React from 'react'
import useSubmitForm from '../Components/useSubmitForm'
import axios from 'axios'
import secrets from '../secrets' 
import '../Styles/SearchStockForm.css'

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
    //fetch symbols and map the results to its own option tag and return
    const fetchIEXSymbols = async () => {
        try{
           let response = await axios.get(`https://cloud.iexapis.com/stable/ref-data/symbols/?token=${secrets.iexKey}`)
           console.log(response.data)
        }catch(error){
            console.log('err',error)
        }
    }

    const renderDropdownOptions = () => {

    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input id='stock-search' type='text' placeholder='Quote lookup' name='stock' onChange={handleFormChange} value={values.stock || ''} required/>
                <select>

                </select>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchStockForm