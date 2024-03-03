import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PanelTitle from "./components/PaneTitle";
import SearchBar from "./components/SearcBar";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(() => {
    const savedWeatherData = JSON.parse(localStorage.getItem("weatherData"));

    return savedWeatherData || {};
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [time, setTime] = useState(new Date());
  const [isCelsius, setIsCelsius] = useState(false);

  const handleToggle = () => {
    setIsCelsius(!isCelsius);
  };

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timerID);
  }, []);
  const handleSearch = () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
        );
        setWeatherData(res.data);
        localStorage.setItem("weatherData", JSON.stringify(res.data));
        setError(null);
      } catch (err) {
        if (err.response) {
          if ([401, 500, 404].includes(err.response.status)) {
            setError(`${err.message}`);
            notify(err.response.status);
          }
        } else {
          setError("Network Error. Please try again.");
          notify();
        }
      } finally {
        setLoading(false);
      }
    }, 1000); // Delay of 1 second
  };
  const notify = (code) => {
    var msg = "API Failure, please try again later";
    if (code === 404) {
      msg = "Error: 404, Invalid City name entered";
    }
    toast(msg);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  // Extract the hours from the Date object using getHours()
  const now = new Date();
  const hours = now.getHours();

  const isDay = hours >= 5 && hours < 18;
  const bgImage = isDay ? "/day.svg" : "/night.svg";
  return (
    <div
      className="text-white h-screen w-full flex flex-col gap-y-10"
      style={{ background: `url(${bgImage})` }}
    >
      <ToastContainer />
      <div className="px-10 pt-10 pb-4">
        <PanelTitle />
      </div>
      <div className="flex flex-wrap mx-auto justify-center gap-10">
        <SearchBar
          location={location}
          setLocation={setLocation}
          handleKeyDown={handleKeyDown}
          handleSearch={handleSearch}
        />
        <div className="flex">
          <div className="toggle-container flex gap-x-2">
            <span>°C</span>
            <label className="toggle">
              <input
                type="checkbox"
                checked={isCelsius}
                onChange={handleToggle}
              />
              <span className="slider round"></span>
            </label>
            <span>°F</span>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="loader"></div>
        </div>
      ) : null}
      {Object.keys(weatherData).length && !loading && error === null ? (
        <WeatherCard
          isDay={isDay}
          weatherData={weatherData}
          formattedTime={formattedTime}
          handleToggle={handleToggle}
          isCelsius={isCelsius}
        />
      ) : null}
    </div>
  );
};

export default App;
