import React, { useState } from 'react'
import './App.css'
import axios from "axios"

function App() {

  let hour = new Date().getHours()

  console.log(hour)
  const [city, setCity] = useState('')


  const [available, setAvailable] = useState(false)

  const [name, setName] = useState('')
  const [region, setRegion] = useState('')
  const [country, setCountry] = useState('')
  const [temp, setTemp] = useState('')
  const [wind, setWind] = useState('')
  const [humidity, setHumidity] = useState('')
  const [condition, setCondition] = useState('')
  const [icon, setIcon] = useState()
  const [sunrise, setSunrise] = useState('')
  const [sunset, setSunset] = useState('')

  const [firstTemp, setFirstTemp] = useState('')
  const [firstHour, setFirstHour] = useState('')


  const [secondTemp, setSecondTemp] = useState('')
  const [secondHour, setSecondHour] = useState('')

  const [thirdTemp, setThirdTemp] = useState('')
  const [thirdHour, setThirdHour] = useState('')

  const [fourthTemp, setFourthTemp] = useState('')
  const [fourthHour, setFourthHour] = useState('')


  const [fifthTemp, setFifthTemp] = useState('')
  const [fifthHour, setFifthHour] = useState('')

  const [sixthTemp, setSixthTemp] = useState('')
  const [sixthHour, setSixthHour] = useState('')

  function checkWeather() {
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=412b492bf8de4497ae193119252801&q=${city}`)
      .then((res) => {
        console.log(res)
        setCity('')

        setName(res.data.location.name + " ,")
        setRegion(res.data.location.region + " ,")
        setCountry(res.data.location.country)
        setTemp(res.data.current.temp_c + " °C")
        setWind(res.data.current.wind_kph + " km/hr")
        setHumidity(res.data.current.humidity + " %")
        setCondition("Condition: " + res.data.current.condition.text)
        setIcon(res.data.current.condition.icon)
        setSunrise("Sunrise: " + res.data.forecast.forecastday[0].astro.sunrise)
        setSunset("Sunset: " + res.data.forecast.forecastday[0].astro.sunset)
        setFirstTemp(res.data.forecast.forecastday[0].hour[(hour + 1) % 24].temp_c + " °C")
        setFirstHour(res.data.forecast.forecastday[0].hour[(hour + 1) % 24].time.slice(11, 16))

        setSecondTemp(res.data.forecast.forecastday[0].hour[(hour + 2) % 24].temp_c + " °C")
        setSecondHour(res.data.forecast.forecastday[0].hour[(hour + 2) % 24].time.slice(11, 16))

        setThirdTemp(res.data.forecast.forecastday[0].hour[(hour + 3) % 24].temp_c + " °C")
        setThirdHour(res.data.forecast.forecastday[0].hour[(hour + 3) % 24].time.slice(11, 16))

        setFourthTemp(res.data.forecast.forecastday[0].hour[(hour + 4) % 24].temp_c + " °C")
        setFourthHour(res.data.forecast.forecastday[0].hour[(hour + 4) % 24].time.slice(11, 16))

        setFifthTemp(res.data.forecast.forecastday[0].hour[(hour + 5) % 24].temp_c + " °C")
        setFifthHour(res.data.forecast.forecastday[0].hour[(hour + 5) % 24].time.slice(11, 16))

        setSixthTemp(res.data.forecast.forecastday[0].hour[(hour + 6) % 24].temp_c + " °C")
        setSixthHour(res.data.forecast.forecastday[0].hour[(hour + 6) % 24].time.slice(11, 16))
        setAvailable(true)
      })
      .catch(() => {
        alert("Please enter city name")
        setCity('')
      })

  }

  return (
    <>

      <div id="first">

        <div id='heading'>
            <div id='s1'>WEATHER APP</div>

        </div>

        <input
          type="text"
          placeholder='Enter city name'
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />

        <button onClick={checkWeather}>Check</button>
      </div>

        {available && <div>
        <div id="second">
          <h3>{name}</h3>
          <h2>{region}</h2>
          <h1>{country}</h1>
        </div>


        <div id="third">
          <img src={icon} alt="" />
          <h2>{condition}</h2>

        </div>


        <div id="fourth">
          <h2>{sunrise}</h2>
          <h2>{sunset}</h2>
        </div>


        <div id='main'>
          <div id="temp">
            <h3>Temperature</h3>
            <img src="temperature.png" alt="" />
            <h2>{temp}</h2>
          </div>

          <div id="wind">
            <h3>Wind speed</h3>
            <img src="wind-turbine.png" alt="" />
            <h2>{wind}</h2>
          </div>

          <div id="humidity">
            <h3>Humidity</h3>
            <img src="humidity.png" alt="" />
            <h2>{humidity}</h2>
          </div>
        </div>

        <center>
          <h1>Upcoming hours</h1>
        </center>

        <div id='forecast'>
          <div>
            <h2>{firstHour}</h2>
            <img src="temperature.png" alt="" />
            <h2>{firstTemp}</h2>
          </div>

          <div>
            <h2>{secondHour}</h2>
            <img src="temperature.png" alt="" />
            <h2>{secondTemp}</h2>
          </div>

          <div>
            <h2>{thirdHour}</h2>
            <img src="temperature.png" alt="" />
            <h2>{thirdTemp}</h2>
          </div>


          <div>
            <h2>{fourthHour}</h2>
            <img src="temperature.png" alt="" />
            <h2>{fourthTemp}</h2>
          </div>

          <div>
            <h2>{fifthHour}</h2>
            <img src="temperature.png" alt="" />
            <h2>{fifthTemp}</h2>
          </div>

          <div>
            <h2>{sixthHour}</h2>
            <img src="temperature.png" alt="" />
            <h2>{sixthTemp}</h2>
          </div>
        </div>
      </div>}
    </>
  )
}

export default App