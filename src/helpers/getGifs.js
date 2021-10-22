// hacemos que nuestra funcion sea async para utilizar dentro de ella el await
export const getGifs = async (category) => {
   // mandamos la query pero pasado por encodeuri para mandarlo escapado 
   const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=uVrX260IMDJBkkAxEdwSmVziAQ8LtMYh`
   const resp = await fetch(url)
   const { data } = await resp.json()

   // guardamos un array con los elementos que son las imagenes
   const gifs = data.map(img => {
      return {
         id: img.id,
         title: img.title,
         url: img.images.downsized_medium.url
      }
   })

   return gifs
}
