import React from 'react'
import FarmHome from '../components/home/FarmHome'
import './styles/home.css'

const Home = () => {
  return (
    <article className='pokedex'>
      
      <div className='pokedex_contaner-imagen'>
          <img className='pokedex_imagen' src='../../public/image/pokemon.png' alt="imagen_pokemon" />
      </div>
      <header className='pokedex_header'>
          <h1 className='pokedex_title'>Pokedex</h1>
          <h2 className='pokedes_subtitle'>Hi Triner!</h2>
          <p>Give me your favorite name if you want to see the pokemon</p>
      </header>
    <FarmHome />
    </article>
  )
}

export default Home