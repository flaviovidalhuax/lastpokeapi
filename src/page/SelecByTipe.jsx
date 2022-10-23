import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './styles/SelecById.css'
const SelecByTipe = ({setTypeSelected, setPage}) => {

        
        const [types, setType] = useState()
        useEffect(() => {
            const URL= 'https://pokeapi.co/api/v2/type'
            axios.get(URL)
                .then( res => setType(res.data.results))
                .catch(err => console.log(err))
                
        }, [])
        
        console.log(types);

        const handleChage = e => {
            setTypeSelected(e.target.value);
            setPage(setPage=1)
        }

  return (
    <select  onChange={handleChage} className='SelecById'>
        <option value='All pokemon'>All pokemon</option>
        {
            types?.map(type=> (
                <option key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>

  )
}

export default SelecByTipe