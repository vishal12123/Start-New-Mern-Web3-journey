import React from 'react'
import './styles.css';

const CardWrapper = ({innerComponent}) => {
  return (
    <>
    <div className='card'>
       {innerComponent}
    </div>
      
    </>
  )
}

export default CardWrapper