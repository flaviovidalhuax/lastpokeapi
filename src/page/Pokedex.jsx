import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import CardPoke from '../components/home/pokedex/CardPoke'
import ImputSearch from '../components/shared/ImputSearch'
import SelecByTipe from './SelecByTipe'
import Pajination from './styles/Pajination'
import './styles/Pokedex.css'

const Pokedex = () => {
   
  const [pokemon, setPokemon] = useState()
  const [typeSelected, setTypeSelected] = useState('All pokempons')

    useEffect(() => {
      if(typeSelected !== 'All pokempons'){ 
        // si se selecciono un tipo
          axios.get(typeSelected)
            .then(res => {
              const result = res.data.pokemon.map(e => e.pokemon)
              setPokemon(result)
            })
            .catch(err => console.log(err))
      }else{
          //si quiero todos lo pokemons
        const URL = "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0"
        axios.get(URL)
          .then(res => setPokemon(res.data.results))
          .then(err => console.log(err)) 
      }
    }, [typeSelected])
  
    console.log(pokemon);
    const userName = useSelector(state =>state.userName)
      //  logica de paginacion
      const [page, setPage] = useState(1)
      const [pokePerPage, setPakePerPage] = useState(20)
      const initialPoke = (page -1) * pokePerPage;
      //    initialPke +pokePerPage +1
      const finalPoke = page * pokePerPage;


  return (
    <div className='pokedex'>
      <header className='pokedex_header'>
        <h1 className='pokedex_title'>pokedex</h1>
        <p className='pokedex_p'>welcome <span className='pokedex_span'>{`${userName} `}
        </span>here, you can find your favorite pokemon</p>
      </header>
      <aside className='pokedex_aside'>
        <ImputSearch />
        <SelecByTipe  
              setTypeSelected={setTypeSelected}
              setPage={setPage}
        />
        <Pajination
            page={page}
            pageLenght ={pokemon && Math.ceil(pokemon.length / pokePerPage )}
            setPage={setPage}
            />
      </aside>
      <main>
        <div className='card-container'>
            {
              pokemon?.slice(initialPoke, finalPoke).map(pokemon => (
                <CardPoke 
                key ={pokemon.url}
                url={pokemon.url}
                />
               ) )
            }
        </div>
      </main>
    </div>
  )
}

export default Pokedex