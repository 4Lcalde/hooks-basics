import './fetch.css'

import React, { useEffect, useState } from 'react'

const Fetch = () => {
  const [data, setData] = useState([])
  const [selectedCharacter, setCharacter] = useState(null)

  useEffect(() => {
    const getdata = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character')

      const res = await response.json()

      setData(res.results)
      console.log(res.results)
    }

    getdata()
  }, [])

  return (
    <div className='character-container'>
      {data.map((character) => (
        <div key={character.id}>
          <h3>{character.name}</h3>
          <img
            src={character.image}
            alt={character.name}
            onClick={() => {
              setCharacter(character)
            }}
            className={
              selectedCharacter && character.id === selectedCharacter.id
                ? 'click'
                : ''
            }
          />
        </div>
      ))}
    </div>
  )
}

export default Fetch
