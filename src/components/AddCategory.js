import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
   // definimos la variable inputValue y se inicializa como una cadena vacia 
   const [inputValue, setInputValue] = useState('')

   // establece el valor de inputValue con el valor del input
   const handleInputChange = (e) => {
      setInputValue(e.target.value)
   }

   // agrega una categoria desde el formulario usando setCategories
   const handleSubmit = (e) => {
      e.preventDefault()
      if (inputValue.trim().length > 2) {
         setCategories(cats => [inputValue, ...cats])
         setInputValue('')
      }
   }

   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
         />
      </form>
   ) 
}

AddCategory.propTypes = {
   setCategories: PropTypes.func.isRequired
}
