import React,{useState} from 'react'
import useSubmitForm from '../Components/useSubmitForm'
import axios from 'axios'

const SearchStockForm = () => {

    // const [stock, setStock] = useState('')
    const {values, handleFormChange, handleFormSubmit} = useSubmitForm(() => fetchStockValues(values.stock) )


    const fetchStockValues = async (stock) => {
        try{
            console.log(stock)
            let response = await axios.get(`https://cloud.iexapis.com/stable/stock/${stock}/quote/?token=pk_7f13b52925e94bf28f2f49c3c0666ed2`);
            console.log(response.data)
        }catch(error){
            console.log('err',error)
        } 
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type='text' name='stock' onChange={handleFormChange} value={values.stock || ''} required/>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchStockForm