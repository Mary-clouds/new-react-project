import React, { useState, useEffect} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./forecastforDay";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(()=>{
        setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }
    function load(){
        let apiKey = "1b3cfb66ad014a3fo55df2e890";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl =`https://api.shecodes.io/weather/v1/current?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);

    }
    if (loaded){
        return( 
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function (dailyForecast, index){
                    if (index < 5){
                        return(
                            <div className="col" key={index}>
                                <WeatherForecastDay data={dailyForecast}/>
                            </div>
                        );
                    }else{
                        return null;
                    }
                })}
            </div>
        </div>
    );
}else{
    load();
    return null;
}
} 