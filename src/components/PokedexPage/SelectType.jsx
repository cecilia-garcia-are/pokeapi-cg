import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import './styles/SelectType.css'


const SelectType = ({ setSelectValue, setInputValue, selectValue }) => {


    const url= 'https://pokeapi.co/api/v2/type'

    const [ types, getAllTypes ]=useFetch(url)

    useEffect(() => {
        getAllTypes()
    }, []) 

    const handleChange = e => {
        setSelectValue(e.target.value)
        setInputValue('')
    }

  return (
    <div className="content-select">
    <select  value={selectValue} onChange={handleChange}>
        <option value="allPokemons">All Pokemons</option>
        {
            types?.results.map(type => (
                <option key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>
    </div>
  )
}

export default SelectType