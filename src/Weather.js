import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [result, setResult] = useState(false);
  let [temperature, setTemperature] = useState({});

  function showData(response) {
    setResult(true);
    setTemperature({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
    console.log(response.data.main);
  }
  function handelData(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city} &appid=57821c3b75b60c68ecd1a8d0dd1aa8d3&units=metric`;
    axios.get(url).then(showData);
  }
  function final(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  let form = (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handelData}>
        <input
          type="search"
          placeholder="Enter your city..."
          onChange={final}
        />
        <input type="submit" value="search" />
      </form>
    </div>
  );
  if (result) {
    return (
      <div>
        {form}
        <ul>
          <li>{temperature.temperature}</li>
          <li>{temperature.wind}</li>
          <li>{temperature.humidity}</li>
          <li>Description: {temperature.description}</li>
          <li>
            <img src={temperature.icon} alt={temperature.description} />
          </li>
        </ul>
        {temperature}
      </div>
    );
  } else {
    return form;
  }
}
