import React from 'react';
import drop from "../img/drop.svg";

function Day(props) {
    return (
        <section className='day_wrapper'>
            <div className='day'>
                <div className='date_and_city_d'>
                    <h1>{props.cityName}</h1>
                    <p>{props.date}</p>
                </div>
                <div className='temperature_d'>
                    <p>{props.currentTemperature}°F</p>
                </div>
                <div className='humidity_d'>
                    <img src={drop} alt="Drop" />
                    <p>{props.currentHumidity}%</p>
                </div>
            </div>
        </section>
    );
}

export default Day;