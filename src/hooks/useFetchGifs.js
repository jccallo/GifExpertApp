import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {
   // estado del componente funcional
   const [state, setState] = useState({
      data: [],
      loading: true
   })    

   // codigo que se ejecutara cuando el componente es renderizado por primera vez
   useEffect(() => {
      getGifs(category).then(imgs => {
         // retardamos setState para ver solo el efecto del loading
         setTimeout(() => {
            setState({
               data: imgs,
               loading: false
            })
         }, 1000);
      })
   }, [category]) // esto arregla que cuando usamos un setState el componente vuelve ejecutar el codigo raiz
   
   return state
}
