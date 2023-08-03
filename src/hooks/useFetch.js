import { useState } from "react"
import axios from 'axios'


const useFetch = (url) => {

    const [infoApi, setInfoApi] = useState()
    
    //peticion a todos los pokemones

    const getApi = () => {
    axios
    .get(url)
    .then(resp => setInfoApi(resp.data))
    .catch(err => console.error(err))
    }

    // peticion a los tipos de pokemones 

    const getTypeApi = (urlType) => {
        axios.get(urlType)
          .then(resp => {
            const obj = {
              results: resp.data.pokemon.map(e => e.pokemon)
            }
            setInfoApi(obj)
          })
          .catch(err => console.log(err))
      }
    
 return [ infoApi, getApi, getTypeApi ]
}


export default useFetch