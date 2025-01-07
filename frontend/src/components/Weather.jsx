import React, { useState, useEffect } from "react";

const Weather = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [weatherData, setWeatherData] = useState({
    temperature: 22,
    condition: "Partly Cloudy",
    icon: "☁️",
    city: "London",
  });
  const [forecastData, setForecastData] = useState([
   { time: "Now", temperature: 21, icon: "🌤️" },
    { time: "12PM", temperature: 23, icon: "☀️" },
    { time: "02PM", temperature: 24, icon: "☀️" },
    { time: "04PM", temperature: 22, icon: "🌤️" },
    { time: "06PM", temperature: 20, icon: "☁️" },
    { time: "08PM", temperature: 18, icon: "🌙" },
    { time: "10PM", temperature: 17, icon: "🌙" },
    { time: "12AM", temperature: 16, icon: "🌙" },
    { time: "02AM", temperature: 15, icon: "🌙" },
    { time: "04AM", temperature: 14, icon: "🌙" },
    { time: "06AM", temperature: 13, icon: "🌙" },
    { time: "08AM", temperature: 15, icon: "🌤️" },
    { time: "10AM", temperature: 17, icon: "🌤️" },
    { time: "12PM", temperature: 19, icon: "☀️" },
    { time: "02PM", temperature: 21, icon: "☀️" },
  ]);

  useEffect(() => {
    const getCurrentTimeAndDate = () => {
      const now = new Date();

      const timeOptions = { hour: "2-digit", minute: "2-digit", hourCycle: "h23" };
      setCurrentTime(now.toLocaleTimeString([], timeOptions));

      const dateOptions = { weekday: "long", month: "long", day: "numeric" };
      setCurrentDate(now.toLocaleDateString([], dateOptions));
    };

    getCurrentTimeAndDate();
    const timeInterval = setInterval(getCurrentTimeAndDate, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 w-[100%]">
      {/* First Card: Current Time and Date */}
      <div className="bg-white p-4 rounded-lg shadow-lg w-full flex-1 flex flex-col justify-center">
        <h2 className="text-4xl font-semibold text-center mb-2">{currentTime}</h2>
        <p className="text-center">{currentDate}</p>
      </div>

      {/* Second Card: Current Weather */}
      <div className="bg-white p-4 rounded-lg shadow-lg w-full flex-1 flex flex-col justify-center">
        <div className="flex flex-row justify-center space-x-4">
          <h2 className="text-2xl font-semibold text-center">
            {weatherData.temperature}°C
          </h2>
          <p className="text-center text-3xl">{weatherData.icon}</p>
        </div>
        <p className="text-center">{weatherData.city}</p>
        <p className="text-center">{weatherData.condition}</p>
      </div>

      {/* Third Card: Weather Forecast */}
      <div className="bg-white p-4 rounded-lg shadow-lg flex flex-grow justify-center">
        <div className="flex justify-between overflow-x-auto overflow-hidden  w-[100%] gap-4">
          {forecastData.map((item, index) => (
            <div key={index} className="flex flex-col justify-center gap-3 items-center">
              <p className="text-xs">{item.time}</p>
              <p className="text-2xl">{item.icon}</p>
              <p className="text-sm">{item.temperature}°C</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;
