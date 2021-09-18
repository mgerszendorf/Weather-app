import React from 'react';
import morning_sun from "../img/morning_sun.svg";
import sun from "../img/sun.svg";
import moon from "../img/moon.svg";
import drop from "../img/drop.svg";

function nextFiveDays(props) {
    return (
        <section className='next_five_day'>
                <div className="date_and_city">
                    <h1>Poznan</h1>
                    <p>Tuesday, Januar 10, 2021</p>
                </div>
                <div className="temperature">
                    <p className="mean_temperature">20°C</p>
                    <p>10°C / 25°C</p>
                </div>
                <div classNames="weather_data">
                    <div className="morning_temperature">
                        <img src={morning_sun} alt="Morning sun" />
                        <p>10°C</p>
                    </div>
                    <div className="day_temperature">
                        <img src={sun} alt="Sun" />
                        <p>20°C</p>
                    </div>
                    <div className="night_temperature">
                        <img src={moon} alt="Moon" />
                        <p>8°C</p>
                    </div>
                    <div className="humidity">
                        <img src={drop} alt="Drop" />
                        <p>10%</p>
                    </div>
                </div>
            </section>
    );
}

export default nextFiveDays;