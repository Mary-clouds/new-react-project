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
            coordinates: response.data.coordinates,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            date:  console.log("Date object:", new Date(response.data.dt * 1000)),
            description: response.data.condition.description,
            iconUrl:response.data.condition.icon,
            wind:response.data.wind.speed,
            city:`${response.data.city}, ${response.data.country}`,

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
        const apiKey ="1b3cfb66ad014a3fo55df2e890f445t9";  
        let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
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


