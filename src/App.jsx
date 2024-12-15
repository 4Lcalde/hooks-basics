import { useState } from 'react'

import './App.css'
import Title from './components/title/title'
import Owner from './components/owner/Owner'
import Fetch from './components/fetch/Fetch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title></Title>
      <Owner></Owner>
      <Fetch></Fetch>
    </>
  )
}

export default App
