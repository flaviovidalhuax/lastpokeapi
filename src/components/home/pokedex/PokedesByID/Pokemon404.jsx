import React from 'react'
import { Link } from 'react-router-dom'
import './pokmon404.css'

const Pokemon404 = () => {
  return (
    <>
     <div className='error404'>
           <div class="drop"></div>
           <div class="wave"></div>
            <div className='error404_contain'>
                <h1>Pokemon not Found 😅</h1>
                <Link to='/pokedex'>Return to Pokedex</Link>
            </div>
     </div>
    </>
  )
}
export default Pokemon404