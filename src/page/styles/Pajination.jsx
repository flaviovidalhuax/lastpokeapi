import { current } from '@reduxjs/toolkit';
import React from 'react'
import './Pajination.css'

const Pajination = ({page, pageLenght,setPage}) => {

    const pagePerBlock =8;
    const currentBlock= Math.ceil(page/ pagePerBlock );
    const blockLength =Math.ceil(pageLenght/pagePerBlock)

     const arrPage =[]
     const initialPage = (currentBlock-1) * pagePerBlock +1;
     const limitPage = blockLength === currentBlock ? pageLenght : currentBlock * pagePerBlock;

     for (let i = initialPage; i <= limitPage; i++) {
        arrPage.push(i)
        
     }
const handlePrev = () =>{
    setPage(page-1)
}
const handleNext = () =>{
    setPage(page+1)
}
const handlePage = (currentPage ) => {
    setPage(currentPage)
}

  return (
    <div className='pagination'>
        {
            page >1 &&
            <div onClick={handlePrev} className='pagination_prev pagination_active'> &#60; </div>

        }
        <ul  className='pagination_container'>
            {
                arrPage.map( e => (
                    <li 
                    className={`pagination_page ${page === e && 'pagination_active'}`}
                    onClick={() => handlePage(e)}
                    key={e}>{e}</li>
                ))
            }
        </ul>
        <div className='pagination_next pagination_active' onClick={handleNext}>&#62; </div>

    </div>
  )
}

export default Pajination