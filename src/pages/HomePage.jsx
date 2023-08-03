import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTrainerG } from "../store/slices/trainerName.slice"
import { useNavigate } from "react-router-dom"
import './styles/HomePage.css'


const HomePage = () => {
 
 //const trainer = useSelector(reducer => reducer.trainer)

 //console.log(trainer)

 const dispatch = useDispatch()

 const inputTrainer = useRef()

 const navigate = useNavigate()

 const handleSubmit = e => {
  e.preventDefault()
  //e.target.inputTrainer.value  (opcional para capturar el input)
  dispatch(setTrainerG(inputTrainer.current.value.trim()))
  navigate('/pokedex')
 }

  return (
    <div className="home-container">
      <div className="home-tittle" >
      <img  src="/img/pokedex.png" alt="" />
      </div>
      <h2 className="home-trianer">Hi trainer!</h2>
      <p className="home-message">To start with the app, give me your name trainer</p>
      <form className="home_form" onSubmit={handleSubmit}>
        <input className="first_input"  ref={inputTrainer} type="text" placeholder="Name"/>
        <button className="home_buttom">Gotta catch 'em all!</button>
      </form>
    
    <footer className="home_footer">
    <div className="footerblack"></div>
        <div className="footer__circle-outer">
          <div className="footer__circle-inner"></div>
        </div>
    </footer>
    </div>

  )
}

export default HomePage