import React from 'react'
import Tekijalista from './components/Tekijalista'
import BikeStationInfo from './components/BikeStationInfo'

function App() {
  /*useEffect(async () => {
    const res = await tyontekijaService.getAll()
    setTyontekijat(res)
   }, []);

   useEffect(async () => {
     const res = await bikeService.getAll()
     setBikes(res)
   }, [])*/

  return (
    <div>
      <div>
        <h1>Työntekijät</h1>
        <Tekijalista />   
      </div>
      <div>
        <h1>Citybikes</h1>
        <BikeStationInfo/>
      </div>
    </div>
  )
}

export default App
