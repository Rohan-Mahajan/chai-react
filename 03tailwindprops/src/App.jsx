// import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {

  return (
    <>
      {/* <h1 className='bg-green-400 text-black p-3 rounded-lg'>Namaste Tailwind CSS</h1> */}
      <div className='flex'>
      <Card btnText="Help me"/>
      <Card name="Dani"/>
      </div>
    </>
  )
}

export default App
