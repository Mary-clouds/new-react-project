import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weatherapp.css";

export default function Weather(props){
    const [weatherData, setWeatherData] = useSttate({ready:false});
    const[city, setCity] = useState(props.defaultCity);
   
    function handleResponse(response){
        setWeatherData({
            ready: true,
            coordinates: response.data.main.coord,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt*1000),
            description: response.data.weather[0].icon,
            icon:response.data.weather[0].icon,
            wind:response.data.wind.speed,
            city:response.data.name,

        });
    }
    function handleCityChange(event){
        const apiKey = "1b3cfb66ad014a3fo55df2e890f445t9";
        let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}`;
        axios.get(apiUrl).then(handleResponse);
    }
    if (weatherData.ready){
        return(
         <div className="weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
             <div className="col-9">
                <imput type="search" placeholder="Enter a city.." className="form-control" autofocus="on" onChange={handleCityChange} />
            </div>
             <div className="col-3">
                <input type="submit" value= "Search" className="btn btn-primary w-100" />
            </div>
        </div>
    </form>
    <WeatherInfo data={weatherData}/>
    <weatherForecast coordinates={weatherData.coordinates}/>
    </div>
 );
    }else{
        search();
        return "Loading...";
    }
}

