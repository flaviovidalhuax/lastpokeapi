import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserNameGlobal } from '../../store/slice/UserName.slice'

const FarmHome = () => {
      const distpatch =useDispatch()
      const navigate = useNavigate()


    const submit = e => {
      e.preventDefault()
      distpatch(setUserNameGlobal(e.target.firstChild.value.trim()))
      navigate('/pokedex')
    }

  return (
    <form onSubmit={submit} className='pokedex_form' >
      <input 
      className='pokedex_input'
      type="text" 
      placeholder='enter yer name here'
      />
     <button className='pokedex_btn'> catch all them!</button>
    </form>
  )
}

export default FarmHome