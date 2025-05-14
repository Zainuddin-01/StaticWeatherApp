import { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import './App.css'

function App() {

  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)

  const weatherApi = async () => {
    const api = 'Use your apikey'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`
    fetch(url) 
    .then((res)=> res.json())
    .then((data)=> setWeather(data))
    .catch((err)=> console.log(`Something went wrong: ${err}`))
  }
  
  return (
    <div className='container mt-2 flex justify-center items-center flex-col'>
    <h2 className='my-7 text-2xl font-bold text-slate-600'>Weather App</h2>
    <div className='bg-slate-600 shadow-xl/30 p-5 w-96 rounded-lg text-white'>
      <div className='flex justify-center'> 
      <input type="text"
      onChange={(e)=> setCity(e.target.value)}
      placeholder='Enter city...'
      className='bg-white px-2 text-black border border-5 border-yellow-400 rounded-s-lg w-64'/>
      <button onClick={weatherApi} className='bg-yellow-400 p-2 rounded-e-lg'>
      <FaSearch className="cursor-pointer" />
      </button>
      </div>
      {weather && (
      <>
      <div className='my-8 text-xl font-medium flex justify-center flex-col items-center'>
      <h2 >{weather.name}</h2>
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} className='w-32' alt="weather icon"/>
      <h2>{Math.round(weather.main.temp)}°C</h2>
      </div> 
      <div className='flex justify-between gap-2'>
        <div className='bg-slate-500 w-28 h-16 py-2 rounded-md '>
        <h2>UV Index</h2>
        <h3>_</h3>
        </div>
        <div className='bg-slate-500 w-28 h-16 py-2 rounded-md '>
        <h2>wind</h2>
        <h3>{weather.wind.speed}km/h</h3>
        </div>
        <div className='bg-slate-500 w-28 h-16 py-2 rounded-md '>
        <h2>humidity</h2>
        <h3>{weather.main.humidity}%</h3>
        </div>
        <div className='bg-slate-500 w-28 h-16 py-2 rounded-md '>
        <h2>visibility</h2>
        <h3>{weather.visibility / 1000} km</h3>
        </div>
      </div>
      </>
      )}
    </div>
    </div>
  )
}

export default App
