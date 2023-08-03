import { useSelector } from "react-redux"
import { useRef } from "react"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import PokemonCard from "../components/PokedexPage/PokemonCard"
import { useState } from 'react'
import './styles/PokedexPage.css'
import SelectType from "../components/PokedexPage/SelectType"
import Paginations from "../components/Paginations"
import { Link } from "react-router-dom"



const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('allPokemons') //para guardar el value del pokemon
  
  //paginacion
  const [currentPage, setCurrentPage] = useState(1)
  const [pokePerPage] = useState(9)

  const trainer = useSelector( reducer => reducer.trainer)

  //peticion
 const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100'
 const [ pokemons, getAllPokemons, getPokemonsByType] = useFetch(url)

 
 
 //peticion ascincronica

 useEffect( () => {
  if(selectValue === 'allPokemons'){
  getAllPokemons()
}else {
  getPokemonsByType(selectValue)
}

 }, [selectValue])

 //paginacion para cambiar 
 const indexOfLastPoke = currentPage * pokePerPage
 const indexOfFirstPoke = indexOfLastPoke - pokePerPage

 const paginate = (pageNumber) => {
  setCurrentPage(pageNumber)
}
 
const inputSearch = useRef()

const handleSubmit = e =>{
  e.preventDefault()
  setInputValue(inputSearch.current.value.trim().toLowerCase())
  setSelectValue('allPokemons')

}

const cbFilter = poke => poke.name.includes(inputValue)

  return (
    <div className="poke-container-page">

      <header className="header-pokedex">
      <Link to="/">
        <div className="header-logo">
            <img
              src="public/img/pokedex.png"
              alt="Pokedex"
            />
            </div>
          </Link>

          <div className="headerblack"></div>
        <div className="header__circle-outer">
          <div className="header__circle-inner"></div>
        </div>
      </header>
      
      <p className="poke_welcome"><span className="poke_tittle">Welcome {trainer} </span>, here you can find your favorite pokemon.</p>
      
      <div className="poke-forms">
      <form className="poke_form" onSubmit={handleSubmit}>
        <input className="second_input" ref={inputSearch} type="text"  placeholder ="Search your pokemon"/>
        <button className="poke_buttom" >Search</button>
      </form>
     
      < SelectType
      setSelectValue={setSelectValue}
      setInputValue={setInputValue}
      selectValue={selectValue}
      />
     </div>
      
      <div className="pokecard__container">
        {
          pokemons?.results
          .filter (cbFilter)
          .map((poke) => 
            <PokemonCard
            key={poke.url}
            url={poke.url}
            />)
            .slice(indexOfFirstPoke, indexOfLastPoke)
        }
        
       </div>

       <footer>
       <Paginations
        pokePerPage={pokePerPage}
        totalPoke={url.length}
        paginate={paginate}
        />
       </footer>

    </div>
  )
}

export default PokedexPage