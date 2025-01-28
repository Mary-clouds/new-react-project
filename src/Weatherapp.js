import React, {useEffect, useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weatherapp.css";

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready:false});
    const[city, setCity] = useState(props.defaultCity);
   //function to handle API response
    function handleResponse(response){
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon:response.data.weather[0].icon,
            wind:response.data.wind.speed,
            city:response.data.name,

        });
    }
    //function to handle form submission
    function handleSubmit(event){
        event.preventDefault();
        search();
    }
    //function to habdle city input changes
    function handleCityChange(event){
        setCity(event.target.value);
    }
    //function to fetch weather data
    function search(){ 
        const apiKey = "1989ce48f0ddeb9155d07cad2fe7cac2";
        let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }
   
    // calling the search function on initial load for default city
    useEffect(()=>{
        search();
    }, []);
    
        return(
         <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
             <div className="col-9">
                <input type="search"
                 placeholder="Enter a city.."
                 className="form-control"
                  autoFocus="on" 
                 onChange={handleCityChange} />
            </div>
             <div className="col-3">
                <input type="submit"
                 value= "Search" 
                 className="btn btn-primary w-100" />
            </div>
        </div>
    </form>

     {/*show loading text before data is fetched, or weather data after its ready*/}
    {weatherData.ready ?( 
        <>
        <WeatherInfo data={weatherData}/>
        <WeatherForecast coordinates={weatherData.coordinates}/>
        </>
    ) : (
        <p>"Loading...</p>
    )}
    
    </div>
 );
   
}


