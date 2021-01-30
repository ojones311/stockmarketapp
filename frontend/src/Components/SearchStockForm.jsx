import React from 'react'
import useSubmitForm from '../Components/useSubmitForm'

const SearchStockForm = ({fetchStockValues, stock}) => {

    const {values, handleFormChange, handleFormSubmit} = useSubmitForm(() => fetchStockValues() )
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