import { Link, useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef } from "react"
import './styles/PokeIdPage.css'




const PokedexIdPage = () => {

const { id } = useParams()

const url = `https://pokeapi.co/api/v2/pokemon/${id}`

const [pokemon, getSinglePokemon] = useFetch(url)

useEffect(() => {
  getSinglePokemon()
},[id])

const navigate = useNavigate()

const handleSubmit = (e) => {
  e.preventDefault();
  navigate(`/pokedex/${inputSearch.current.value.trim()}`)
};
const inputSearch = useRef();


const firstType = pokemon?.types[0].type.name
const pokeBaseStat = 300

  return (
    <article>
   
    <header className="header-pokedex">
      <Link to="/">
        <div className="header-logo">
            <img
              src="./img/pokedex.png"
              alt="Pokedex"
            />
            </div>
          </Link>

          <div className="headerblack"></div>
        <div className="header__circle-outer">
          <div className="header__circle-inner"></div>
        </div>
    </header>
    

    <div className="poke-container">
        <header className={`card__header ${firstType}-gradient`}>
          <img
            className="card__imge"
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </header>

        <form className={`id__form ${firstType}-color`} onSubmit={handleSubmit}>
          
           <input
            className="id__input"
            placeholder= {`# ${pokemon?.id}`}
            ref={inputSearch}
            type="number"
          />
        </form>

        <h2 className={`title__name ${firstType}-color`}>
          {pokemon?.name}
        </h2>

        <ul className="card__measures">
          <li className="card__weight">
            <h4 className="card__weight-title">Weight</h4>
            <span className="card__weight-value">{pokemon?.weight}</span>
          </li>
          <li className="card__height">
            <h4 className="card__height-title">Height</h4>
            <span className="card__height-value">{pokemon?.height}</span>
          </li>
        </ul>

        <ul className="card__type-abilities">
          <div className="card__type-container">
            <h4 className="card__type__title">Type</h4>
            <div className="card__type">
              {pokemon?.types.map((typeInfo) => (
                <li
                  className={`card__type-list ${typeInfo.type.name}-background`}
                  key={typeInfo.type.url}
                >
                  {typeInfo.type.name}
                </li>
              ))}
            </div>
          </div>

          <div className="card__abilities-container">
            <h4 className="card__abilities-title">Abilities</h4>
            <div className="card__abilities">
              {pokemon?.abilities.map((abilityInfo) => (
                <li
                  className="card__abilities-list"
                  key={abilityInfo.ability.url}
                >
                  {abilityInfo.ability.name}
                </li>
              ))}
            </div>
          </div>
        </ul>

        <div>
          <h4 className="card__stats-title">Stats</h4>
          <ul className="card__stats">
            {pokemon?.stats.map((statInfo) => (
              <li className="card__stats-list" key={statInfo.stat.url}>
                <div className="card__stats-text">
                  <p className="card__stats__text-name">
                    {statInfo.stat.name}:
                  </p>
                  <p className="card__stats__text-value">
                    {statInfo.base_stat} / 300
                  </p>
                </div>
                <div className="card__stat-container">
                  <div
                    className="card__stat-value"
                    style={{
                      width: `calc(${statInfo.base_stat} / ${pokeBaseStat} * 100%)`,
                    }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="mov-container">
          <h4 className="card__mov-title">Movements</h4>
          <ul className="card__mov">
            {pokemon?.moves.map((moveInfo) => (
              <li className="card__mov-list" key={moveInfo.move.url}>
                {moveInfo.move.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default PokedexIdPage;
