import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../../page/styles/CardPoke.css' 

const CardPoke = ({url}) => {
    
    const [pokemon, setpokemon] = useState()

    useEffect(() => {
        
        axios.get(url)
            .then(res => setpokemon(res.data))
            .catch(err => console.log(err))
    }, [])
    
    const navigate =useNavigate()
    const handleClick = () =>{
        navigate(`/pokedex/${pokemon.id}`)
    }

  return (
    <article className={`card-poke border-${pokemon?.types[0].type.name}`} >
        <header className={`card-poke_header bg-${pokemon?.types[0].type.name}`}>
            <img 
            onClick={handleClick}
            className='card-poke_sprite'
            src={pokemon?.sprites.other['official-artwork'].front_default} alt="sprite" />
        </header>  
        <section className='card-poke_body'>
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
    </article>
  )
}

export default CardPoke