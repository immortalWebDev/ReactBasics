import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <h1 className='bg-blue-300 text-black p-4 rounded-xl mb-5'>Tailwind test</h1>
      <Card username="Jessica" btn="Show info"/>
      <Card username="Rebecca" btn="Show info"/>
      </>
  )
}

export default App
