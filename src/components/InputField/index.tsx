import React, { useState } from 'react'
import classes from './style.module.css'
import { useAddProductMutation } from '../../redux'

const InputField: React.FC = () => {
    const [ newProduct, setNewProduct ] = useState('')
    const [ addProduct, { isError} ] = useAddProductMutation();

    const submitHandler = async () => {
        if(newProduct.trim().length) {
            await addProduct({name: newProduct}).unwrap()
            setNewProduct('')
        }
    }

  return (
    <label className={classes.label}>
        <input 
            placeholder='Enter.. Enter some words..' 
            type="text" 
            className={classes.input}
            value={newProduct}
            onChange={ (e) => setNewProduct(e.target.value) }/>
        <button 
            type='submit' 
            className={classes.button}
            onClick={ submitHandler }>Add good</button>
    </label>
  )
}

export {InputField}