import "./App.css";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PanelTitle from "./components/PaneTitle";
import SearchBar from "./components/SearcBar";
import WeatherCard from "./components/WeatherCard";
import { isDay, bgImage } from "./composables/DayNightChecker";
import handleSearch from "./composables/HandleSearch";

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

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(location, setWeatherData, setLoading, setError);
    }
  };

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div
      className="text-white h-screen w-full flex flex-col gap-y-10"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
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
        />
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
