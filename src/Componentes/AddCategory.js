import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    //Funciones
    const handleInputValue = (e) =>{
            setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories( categ => [inputValue,...categ ])
            setInputValue('')
        }     
    }
    return (
            <form onSubmit = {handleSubmit}>
                <input 
                    type = 'text'
                    value = {inputValue}
                    onChange = { handleInputValue}
                />
            </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}
