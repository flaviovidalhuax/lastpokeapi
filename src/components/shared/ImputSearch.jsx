import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/ImputSearch.css'
const ImputSearch = () => {
    
    const navigate = useNavigate()

    const submit = e =>{
        e.preventDefault()
        navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`) //formulario (e.target)
    }
       
  return (
    <form onSubmit={submit} className='ImputSearch' >
        <input className='ImputSearch_imput' type="text" id='search'  placeholder='Search a pokemon' />
        <button className='ImputSearch_buttom'>Search</button>
    </form>
  )
}

export default ImputSearch



/*
import React from 'react'
import { useNavigate } from 'react-router-dom'

const InputSearch = () => {

  const navigate = useNavigate()

  const submit = e => {
    e.preventDefault()
    navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
  }

  return (
    <form onSubmit={submit}>
      <input id='search' type="text" placeholder='Search a pokemon' />
      <button>Search</button>
    </form>
  )
}

export default InputSearch
*/ 

//404 error
/*
import React from 'react'
import { Link } from 'react-router-dom'

const Pokemon404 = () => {
  return (
    <>
      <h1>Pokemon not Found 😅</h1>
      <Link to='/pokedex'>Return to Pokedex</Link>
    </>
  )
}

export default Pokemon404
*/