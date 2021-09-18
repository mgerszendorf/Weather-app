import React, { useState } from "react";

import "../css/App.css";
import "../css/Day.css";
import "../css/Popup.css";
import "../css/NextFourDays.css";

import Day from "./Day";
import Popup from "./Popup";
import NextFourDays from "./NextFourDays";

function App() {
  const [button, setButton] = useState(true);
  const [city, setCity] = useState();
  const [cityName, setCityName] = useState();
  const [date, setDate] = useState();
  const [currentTemperature, setCurrentTemperature] = useState();
  const [currentHumidity, setCurrentHumidity] = useState();

  const [dateFourDaysArr, setDateFourDaysArr] = useState([]);
  const [currentTemperatureFourDaysArr, setCurrentTemperatureFourDaysArr] =
    useState([]);
  const [minTemperatureArr, setMinTemperatureArr] = useState([]);
  const [maxTemperatureArr, setMaxTemperatureArr] = useState([]);
  const [morningTemperatureArr, setMorningTemperatureArr] = useState([]);
  const [temperatureDuringTheDayArr, setTemperatureDuringTheDayArr] = useState(
    []
  );
  const [nightTemperatureArr, setNightTemperatureArr] = useState([]);
  const [humidityFourDaysArr, setHumidityFourDaysArr] = useState([]);
  const [numberOfDaysArr, setNumberOfDaysArr] = useState([]);

  function handleBtn() {
    setButton(!button);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setButton(false);

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=5c0f5a3c8c028bf20d8639662dad3525`
    )
      .then((res) => res.json())
      .then((res) => {
        setCityName(res.city.name);
        setDate(res.list[0].dt_txt);
        setCurrentTemperature(res.list[0].main.temp);
        setCurrentHumidity(res.list[0].main.humidity);

        const dateFourDays = [];
        const currentTemperatureFourDays = [];
        const minTemperature = [];
        const maxTemperature = [];
        const morningTemperature = [];
        const temperatureDuringTheDay = [];
        const nightTemperature = [];
        const humidityFourDays = [];
        const temperatureData = [];
        const numberOfDays = [];

        for (let i = 8; i <= 32; i = i + 8) {
          if (
            res.list[0].dt_txt ===
            `${new Date().toISOString().slice(0, 10)} 00:00:00`
          ) {
            dateFourDays[i / 8 - 1] = res.list[i].dt_txt.slice(0, 10);
            const arr = [];
            for (let y = 0; y < 8; y++) {
              arr[y] = res.list[i + y].main.temp;
            }
            temperatureData[i / 8 - 1] = arr;
            morningTemperature[i / 8 - 1] = res.list[i + 2].main.temp;
            temperatureDuringTheDay[i / 8 - 1] = res.list[i + 3].main.temp;
            nightTemperature[i / 8 - 1] = res.list[i].main.temp;
            humidityFourDays[i / 8 - 1] = res.list[i].main.humidity;
          } else if (
            res.list[0].dt_txt ===
            `${new Date().toISOString().slice(0, 10)} 03:00:00`
          ) {
            dateFourDays[i / 8 - 1] = res.list[i - 1].dt_txt.slice(0, 10);
            const arr = [];
            for (let y = 0; y < 8; y++) {
              arr[y] = res.list[i - 1 + y].main.temp;
            }
            temperatureData[i / 8 - 1] = arr;
            morningTemperature[i / 8 - 1] = res.list[i + 1].main.temp;
            temperatureDuringTheDay[i / 8 - 1] = res.list[i + 2].main.temp;
            nightTemperature[i / 8 - 1] = res.list[i - 1].main.temp;
            humidityFourDays[i / 8 - 1] = res.list[i - 1].main.humidity;
          } else if (
            res.list[0].dt_txt ===
            `${new Date().toISOString().slice(0, 10)} 06:00:00`
          ) {
            dateFourDays[i / 8 - 1] = res.list[i - 2].dt_txt.slice(0, 10);
            const arr = [];
            for (let y = 0; y < 8; y++) {
              arr[y] = res.list[i - 2 + y].main.temp;
            }
            temperatureData[i / 8 - 1] = arr;
            morningTemperature[i / 8 - 1] = res.list[i].main.temp;
            temperatureDuringTheDay[i / 8 - 1] = res.list[i + 1].main.temp;
            nightTemperature[i / 8 - 1] = res.list[i - 2].main.temp;
            humidityFourDays[i / 8 - 1] = res.list[i - 2].main.humidity;
          } else if (
            res.list[0].dt_txt ===
            `${new Date().toISOString().slice(0, 10)} 09:00:00`
          ) {
            dateFourDays[i / 8 - 1] = res.list[i - 3].dt_txt.slice(0, 10);
            const arr = [];
            for (let y = 0; y < 8; y++) {
              arr[y] = res.list[i - 3 + y].main.temp;
            }
            temperatureData[i / 8 - 1] = arr;
            morningTemperature[i / 8 - 1] = res.list[i - 1].main.temp;
            temperatureDuringTheDay[i / 8 - 1] = res.list[i].main.temp;
            nightTemperature[i / 8 - 1] = res.list[i - 3].main.temp;
            humidityFourDays[i / 8 - 1] = res.list[i - 3].main.humidity;
          } else if (
            res.list[0].dt_txt ===
            `${new Date().toISOString().slice(0, 10)} 12:00:00`
          ) {
            dateFourDays[i / 8 - 1] = res.list[i - 4].dt_txt.slice(0, 10);
            const arr = [];
            for (let y = 0; y < 8; y++) {
              arr[y] = res.list[i - 4 + y].main.temp;
            }
            temperatureData[i / 8 - 1] = arr;
            morningTemperature[i / 8 - 1] = res.list[i - 2].main.temp;
            temperatureDuringTheDay[i / 8 - 1] = res.list[i - 1].main.temp;
            nightTemperature[i / 8 - 1] = res.list[i - 4].main.temp;
            humidityFourDays[i / 8 - 1] = res.list[i - 4].main.humidity;
          } else if (
            res.list[0].dt_txt ===
            `${new Date().toISOString().slice(0, 10)} 15:00:00`
          ) {
            dateFourDays[i / 8 - 1] = res.list[i - 5].dt_txt.slice(0, 10);
            const arr = [];
            for (let y = 0; y < 8; y++) {
              arr[y] = res.list[i - 5 + y].main.temp;
            }
            temperatureData[i / 8 - 1] = arr;
            morningTemperature[i / 8 - 1] = res.list[i - 3].main.temp;
            temperatureDuringTheDay[i / 8 - 1] = res.list[i - 2].main.temp;
            nightTemperature[i / 8 - 1] = res.list[i - 5].main.temp;
            humidityFourDays[i / 8 - 1] = res.list[i - 5].main.humidity;
          } else if (
            res.list[0].dt_txt ===
            `${new Date().toISOString().slice(0, 10)} 18:00:00`
          ) {
            dateFourDays[i / 8 - 1] = res.list[i - 6].dt_txt.slice(0, 10);
            const arr = [];
            for (let y = 0; y < 8; y++) {
              arr[y] = res.list[i - 6 + y].main.temp;
            }
            temperatureData[i / 8 - 1] = arr;
            morningTemperature[i / 8 - 1] = res.list[i - 4].main.temp;
            temperatureDuringTheDay[i / 8 - 1] = res.list[i - 4].main.temp;
            nightTemperature[i / 8 - 1] = res.list[i - 6].main.temp;
            humidityFourDays[i / 8 - 1] = res.list[i - 6].main.humidity;
          } else if (
            res.list[0].dt_txt ===
            `${new Date().toISOString().slice(0, 10)} 21:00:00`
          ) {
            dateFourDays[i / 8 - 1] = res.list[i - 7].dt_txt.slice(0, 10);
            const arr = [];
            for (let y = 0; y < 8; y++) {
              arr[y] = res.list[i - 7 + y].main.temp;
            }
            temperatureData[i / 8 - 1] = arr;
            morningTemperature[i / 8 - 1] = res.list[i - 5].main.temp;
            temperatureDuringTheDay[i / 8 - 1] = res.list[i - 4].main.temp;
            nightTemperature[i / 8 - 1] = res.list[i - 7].main.temp;
            humidityFourDays[i / 8 - 1] = res.list[i - 7].main.humidity;
          }
        }

        for (let i = 0; i < 4; i++) {
          numberOfDays[i] = i;
          minTemperature[i] = Math.min(...temperatureData[i]);
          maxTemperature[i] = Math.max(...temperatureData[i]);
          currentTemperatureFourDays[i] =
            (minTemperature[i] + maxTemperature[i]) / 2;
        }

        setDateFourDaysArr([...dateFourDays]);
        setCurrentTemperatureFourDaysArr([...currentTemperatureFourDays]);
        setMinTemperatureArr([...minTemperature]);
        setMaxTemperatureArr([...maxTemperature]);
        setMorningTemperatureArr([...morningTemperature]);
        setTemperatureDuringTheDayArr([...temperatureDuringTheDay]);
        setNightTemperatureArr([...nightTemperature]);
        setHumidityFourDaysArr([...humidityFourDays]);
        setNumberOfDaysArr([...numberOfDays]);
      });
  }

  return (
    <div className="App">
      <Day
        cityName={cityName}
        date={date}
        currentTemperature={currentTemperature}
        currentHumidity={currentHumidity}
      />
      <Popup
        button={button}
        setButton={setButton}
        city={city}
        setCity={setCity}
        handleBtn={handleBtn}
        handleSubmit={handleSubmit}
      />
      <div className="next_four_days_wrapper">
        {numberOfDaysArr.map((data) => (
          <NextFourDays
            key={data}
            dateFourDays={dateFourDaysArr[data]}
            currentTemperatureFourDays={currentTemperatureFourDaysArr[data]}
            minTemperature={minTemperatureArr[data]}
            maxTemperature={maxTemperatureArr[data]}
            morningTemperature={morningTemperatureArr[data]}
            temperatureDuringTheDay={temperatureDuringTheDayArr[data]}
            nightTemperature={nightTemperatureArr[data]}
            humidityFourDays={humidityFourDaysArr[data]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
