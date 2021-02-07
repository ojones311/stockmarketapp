import React,{useState} from 'react'
import useSubmitForm from '../Components/useSubmitForm'
import axios from 'axios'

const SearchStockForm = () => {

    const {values, handleFormChange, handleFormSubmit} = useSubmitForm(() => fetchStockValues(values.stock) )


    const fetchStockValues = async (stock) => {
        try{
            console.log(stock)
            let response = await axios.get(`https://cloud.iexapis.com/stable/stock/${stock}/quote/?token=${process.env.REACT_APP_IEX_API_KEY}`);
            console.log(response.data)
        }catch(error){
            console.log('err',error)
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