import React from "react";
import morning_sun from "../img/morning_sun.svg";
import sun from "../img/sun.svg";
import moon from "../img/moon.svg";
import drop from "../img/drop.svg";

function NextFourDays(props) {
  return (
    <section className="next_four_day">
      <div className="date_and_city">
        <p>{props.dateFourDays}</p>
      </div>
      <div className="temperature">
        <p className="mean_temperature">{props.currentTemperatureFourDays}°F</p>
        <p>
          {props.minTemperature}°F / {props.maxTemperature}°F
        </p>
      </div>
      <div classNames="weather_data">
        <div className="morning_temperature">
          <img src={morning_sun} alt="Morning sun" />
          <p>{props.morningTemperature}°F</p>
        </div>
        <div className="day_temperature">
          <img src={sun} alt="Sun" />
          <p>{props.temperatureDuringTheDay}°F</p>
        </div>
        <div className="night_temperature">
          <img src={moon} alt="Moon" />
          <p>{props.nightTemperature}°F</p>
        </div>
        <div className="humidity">
          <img src={drop} alt="Drop" />
          <p>{props.humidityFourDays}%</p>
        </div>
      </div>
    </section>
  );
}

export default NextFourDays;
