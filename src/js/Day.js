import React from 'react';
import drop from "../img/drop.svg";

function Day(props) {
    return (
        <section className='day_wrapper'>
            <div className='day'>
                <div className='date_and_city_d'>
                    <h1>Poznan</h1>
                    <p>Tuesday, Januar 10, 2021</p>
                </div>
                <div className='temperature_d'>
                    <p>20°C</p>
                </div>
                <div className='humidity_d'>
                    <img src={drop} alt="Drop" />
                    <p>10%</p>
                </div>
            </div>
        </section>
    );
}

export default Day;