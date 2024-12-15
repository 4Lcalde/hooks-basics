import './Owner.css'

import React, { useState } from 'react'

const Owner = () => {
  const [owner, setOwner] = useState('Aitor')
  return (
    <div className='owner'>
      <h2 className='owner-title'>Petición realizada por {owner}</h2>
      <input type='text' id='ownerName' />
      <button
        onClick={() => {
          const newOwner = document.querySelector('#ownerName')
          setOwner(newOwner.value)
        }}
      >
        Enviar
      </button>
    </div>
  )
}

export default Owner
