import React from "react";

export default function FormattedDate(props){
    //check if date is valid
    if(!(props.date instanceof Date) || isNaN(props.date)){
        console.error("Invalid date:", props.date);
        //Fallback message if the date is invalid
        return <div>Invalid date</div>;
    }
    
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"

    ];

    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    if(hours < 10){
        hours = `0${hours}`;
    }

    let minutes = props.date.getMinutes();
    if(minutes <10){
        minutes = `0${minutes}`;
    }
    return(
        <div>
            {day} {hours}:{minutes}
        </div>
    );
}