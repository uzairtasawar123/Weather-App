import React, { useEffect, useState } from "react";
import "./Weather.css";

const Weather = () => {
  /////////////////////////////////////////////////////////////////////////////////////////////
  const [city, setCity] = useState("");
  const [search, setSearch] = useState();
  ////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8b7847294a6b56a4fdf47d44a010eb6f`
      );
      const response = await res.json();
      console.log(response);
      setCity(response.main);
    };
    fetchData();
    console.log(city);
  }, [search, setCity]);

  return (
    <div>
      <div className="headding_div">
        <h1 class="heading">
          <span class="word word_1">Welcome</span>
          <span class="word word_2">to</span>
          <span class="word word_3">weather</span>
          <span class="word word_4">app</span>
        </h1>
      </div>
      <div className="container main_div row">
        <div>
          <input
            className="my-1"
            type="search"
            placeholder="Type city name here"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </div>
        <div>
          <h2 className='display_city_name temperature'>
            <i className="fa-solid fa-street-view mx-1"></i>
            {search}
          </h2>
          {city ? (
            <div className="inner_div">
              <h1 className="temperature">{city.temp}°C</h1>
              <h6 className="temperature">
                Min : {city.temp_min}°C | Max : {city.temp_max}°C
              </h6>
            </div>
          ) : (
            <p>City Not Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
