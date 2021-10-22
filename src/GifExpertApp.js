import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
   // usamos useState y creamos la variable categories que se inicializa con una lista
   const [categories, setCategories] = useState(['One punch']);

   // agrega un elemento al arreglo categories
   // const handleAdd = () => {
   //    // setCategories(['HunterXHunter', ...categories]);
   //    setCategories(cats => [...cats, 'HunterXHunter']);
   // }

   return (
      <>
         <h2>GifExpertApp</h2>
         <AddCategory setCategories={setCategories} />
         <hr />

         {/* <button onClick={handleAdd}>Agregar</button> */}

         <ol>
            {
               categories.map(category => {
                  return <GifGrid key={category} category={category} />
               })
            }
         </ol>
      </>
   )
}
