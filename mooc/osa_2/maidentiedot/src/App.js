import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ weather, city }) => {
  return (
    <>
      <h2>Weather in {city}</h2>
      <p>Temperature: {weather.temp} &#x2103;</p>
      <p>Wind: {weather.wind} m/s</p>
      <p>Description: {weather.weather}</p>
    </>
  )
}

const blank = {
  weather: [],
  temp: [],
  wind: []
}

const MaanTiedot = ({ maa }) => {
  const [weather, setWeather] = useState([blank])
  const url = 'http://api.openweathermap.org/data/2.5/find?q=' + maa.capital + '&appid=5b202b57b510ebc264a937624b164fe9&units=metric'
  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setWeather({
          weather: response.data.list[0].weather[0].description,
          temp: response.data.list[0].main.temp,
          wind: response.data.list[0].wind.speed
        })
      })
  }, [])
  
  console.log(weather)
  return (
    <>
      <h2>{maa.name}</h2>
      <p>Capital: {maa.capital} </p>
      <p>Population: {maa.population} </p>
      <div>Languages: <ul>{maa.languages.map(lng => <li key={maa.languages.indexOf(lng)}>{lng.name}</li>)}</ul> </div>
      <h2>Flag</h2>
      <img src={maa.flag} alt="flag" height="60px"></img>
      <Weather weather={weather} city={maa.capital} />
    </>
  )
}

const Maa = ({ maat, setmaat, setNewFilter }) => {
  if (maat.length > 10) {
    return (<p>Too many matches, specify another filter</p>)
  }
  if (maat.length === 1) {
    return (
      <MaanTiedot maa={maat[0]} />
    )
  }
  const maaLi = maat.map(maa => <li key={maat.indexOf(maa)}>{maa.name} <button onClick={() => setmaat(maa), () => setNewFilter(maa.name)}>show</button></li>)
  return (
    <ul>{maaLi}</ul>
  )
}

const Filter = (props) => {
  return (
    <form>Find countries: <input value={props.newFilter} onChange={props.handleFilter}></input></form>
  )
}

function App() {
  const [maat, setMaat] = useState([])
  const [newFilter, setNewFilter] = useState("")

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setMaat(response.data)
      })
  }, [])

  const maaToShow = maat.some(e => e.name.includes(newFilter)) ? maat.filter(e => e.name.includes(newFilter)) : maat

  const handleFilter = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <Filter newFilter={newFilter} handleFilter={handleFilter} />
      <Maa maat={maaToShow} setmaat={setMaat} setNewFilter={setNewFilter} />
    </div>
  );
}

export default App;