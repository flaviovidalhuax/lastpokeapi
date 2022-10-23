import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemon404 from '../components/home/pokedex/PokedesByID/Pokemon404'
import './styles/PokedexById.css'
const PokedexById = ({url}) => {

   const {id} = useParams()
  //  console.log(id);
    const [pokemon, setPokemon] = useState()
    const [hasError, setHasEror] = useState(false)

    useEffect(() => {
      const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
        axios.get(URL)
          .then(res => setPokemon(res.data))
          .catch(err => {
            console.log(err)
            setHasEror(true)
          })
    }, [])
  console.log(pokemon);    

      if(hasError){
      return <Pokemon404 />

      }

  return (
    <article className='pokedesById'>
      <div className='pokedesById_conatiner_card'>
      <header className='pokedesById_container'>
         
         <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon" />
        
      </header >
      <section className='pokedesById_body'>
            <h3 className={`card-poke_name letter-${pokemon?.types[0].type.name}`}> {pokemon?.name}</h3>
            <ul className='card-poke_types-container'>
                {
                    pokemon?.types.map(type =>(
                        <li key={type.type.name} className='card-poke_type'>{type.type.name}</li>
                    ))
                }
            </ul>
            <p className='card-poke_type-label'>Type</p>
            <ul className='card-poke_stat-container'>
                    {
                        pokemon?.stats.map(stat =>(
                            <li key={stat.stat.name} className='card-poke_stat'>
                                <span className='card-poke_stat-label'>{stat.stat.name}</span>
                                <span className={`card-poke_stat-number letter-${pokemon?.types[0].type.name}`}>{stat.base_stat}</span>
                            </li>
                        ))
                    }
            </ul>
        </section>  
      </div>
 
    </article>
  )
}

export default PokedexById