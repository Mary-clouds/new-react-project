import React from "react";
import FormattedDate from "./Formatteddate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    //base Url
    const iconBaseurl = "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/";

    // construct the full url for the wearher icon based on the icon code
    const iconUrl = `${iconBaseurl}${props.data.icon}.png`;

    return(
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={props.data.date}/>
                </li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                <div className="d-flex">
                <div>
                    {/*passing the constructed icon url to weatherIcon*/}
                <WeatherIcon iconUrl={iconUrl} size={52} />
                </div>
            
                <div><WeatherTemperature celsius={props.data.temperature}/>
                </div>
                </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {props.data.humidity} %</li>
                        <li>Wind: {props.data.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
    
}