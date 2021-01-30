import {useState} from 'react'

const useSubmitForm = (callback) => {
    const [values, setValue] = useState({})
    
    const handleFormSubmit = (e) => {
     e.preventDefault()
     callback()
     console.log('Form was submitted')
     setValue({})
    }
    const handleFormChange = (e) => {
     e.persist()
     setValue(values => ({...values, [e.target.name]:e.target.value}));
    //  console.log(values)
    }
 
    return {
       handleFormSubmit,
       handleFormChange,
       values,
    }
 }
 
 export default useSubmitForm