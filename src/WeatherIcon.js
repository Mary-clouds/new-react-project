import React from "react";

export default function WeatherIcon(props){
    return(
        <img
            src={props.iconUrl}
            alt="Weather icon"
            width={props.size}
            height={props.size}
        />
    );
}