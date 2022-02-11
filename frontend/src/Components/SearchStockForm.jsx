import React,{useEffect, useState} from 'react'
import useSubmitForm from '../Components/useSubmitForm'
import axios from 'axios'
import secrets from '../secrets' 
import '../Styles/SearchStockForm.css'

const SearchStockForm = ({setStock, setChart,setShowChart}) => {

    const {values, handleFormChange, handleFormSubmit} = useSubmitForm(() => {
        fetchStockQuoteValues(values.browser)
        fetchStockChartData(values.browser)
        setShowChart(true)
    } )

    const [symbols, setSymbols] = useState([])

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
           setSymbols(response.data)
        }catch(error){
            console.log('err',error)
        }
    }

    useEffect(() => {
        if(symbols.length === 0){
            // fetchIEXSymbols()
        }
        
    },[symbols])
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input list="browsers" name="browser" id="browser" onChange={handleFormChange} required/>
                <datalist id="browsers" onChange={handleFormChange}>
                    {symbols.map((elem, key) => 
                        <option key={key} value={elem.symbol}>{elem.symbol}:{elem.name}</option>
                    )}
                </datalist>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default SearchStockForm