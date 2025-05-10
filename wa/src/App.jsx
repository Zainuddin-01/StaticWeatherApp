import { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import './App.css'

function App() {

  return (
    <div className='container mt-24 flex justify-center items-center'>
    <div className='bg-slate-600 p-5 w-96 rounded-lg text-white'>
      <div className='flex justify-center'> 
      <input type="text" className='bg-white px-2 text-black border border-5 border-yellow-400 rounded-s-lg w-64'/>
      <button className='bg-yellow-400 p-2 rounded-e-lg'><FaSearch className="cursor-pointer" /></button>
      </div>
      <div className='my-8 text-xl font-medium flex justify-center flex-col items-center'>
      <h2>Hyderabad</h2>
      <img src="src/assets/w.png" className='w-32'/>
      <h2>31°</h2>
      </div> 
      <div className='flex justify-between gap-2'>
        <div className='bg-slate-500 w-28 h-16 py-2 rounded-md '>
        <h2>uv index</h2>
        <h3>03</h3>
        </div>
        <div className='bg-slate-500 w-28 h-16 py-2 rounded-md '>
        <h2>wind</h2>
        <h3>06 km/h</h3>
        </div>
        <div className='bg-slate-500 w-28 h-16 py-2 rounded-md '>
        <h2>humidity</h2>
        <h3>20%</h3>
        </div>
        <div className='bg-slate-500 w-28 h-16 py-2 rounded-md '>
        <h2>visibility</h2>
        <h3>12km</h3>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
