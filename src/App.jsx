import "./App.css";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PanelTitle from "./components/PaneTitle";
import SearchBar from "./components/SearcBar";
import WeatherCard from "./components/WeatherCard";
import { isDay, bgImage } from "./composables/DayNightChecker";
import handleSearch from "./composables/HandleSearch";
import Carousel from "./components/Carousel";
import SideBar from "./components/SideBar";
import AnimatingCards from "./components/AnimatingCards";
import WeatherDisplay from "./components/WeatherDisplay";
import ForcastGraph from "./components/ForcastGraph";

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
  const [forcastData, setForcastData] = useState(() => {
    const savedForcastData = JSON.parse(localStorage.getItem("forcastData"));

    return savedForcastData || {};
  });

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
      handleSearch(
        location,
        setWeatherData,
        setLoading,
        setError,
        forcastData,
        setForcastData
      );
    }
  };

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    // <div
    //   className="text-white h-screen w-full flex flex-col gap-y-10"
    //   style={{
    //     backgroundImage: `url(${bgImage})`,
    //     backgroundPosition: "center",
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //     width: "100vw",
    //     height: "100vh",
    //   }}
    // >
    //   <ToastContainer />
    //   <div className="px-10 pt-10 pb-4">
    //     <PanelTitle />
    //   </div>
    //   <div className="flex flex-wrap mx-auto justify-center gap-10">
    //     <SearchBar
    //       location={location}
    //       setLocation={setLocation}
    //       handleKeyDown={handleKeyDown}
    //     />
    //   </div>
    //   {loading ? (
    //     <div className="flex justify-center items-center">
    //       <div className="loader"></div>
    //     </div>
    //   ) : null}
    //   {Object.keys(weatherData).length && !loading && error === null ? (
    //     <WeatherCard
    //       isDay={isDay}
    //       weatherData={weatherData}
    //       formattedTime={formattedTime}
    //       handleToggle={handleToggle}
    //       isCelsius={isCelsius}
    //     />
    //   ) : null}
    //   <Carousel/>
    // </div>
    <section className="min-h-screen overflow-x-hidden">
      <SideBar />
      <div className="w-full lg:pl-[118px] min-h-screen">
        {/* <div className="border-b h-24 sticky"></div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:pl-9 min-h-screen">
          <div className="flex flex-col pt-8">
            <PanelTitle
              text="Weather Reports"
              titleClass="text-2xl md:text-3xl flex flex-col justify-center items-left gap-y-2 font-semibold pl-4"
            />
            <SearchBar
              location={location}
              setLocation={setLocation}
              handleKeyDown={handleKeyDown}
              setWeatherData={setWeatherData}
              setLoading={setLoading}
              setError={setError}
              forcastData={forcastData}
              setForcastData={setForcastData}
            />
            {loading ? (
              <div className="flex justify-center items-center mt-20">
                <div className="loader"></div>
              </div>
            ) : null}
            {Object.keys(weatherData).length && !loading && error === null ? (
              <>
                <WeatherDisplay
                  weatherData={weatherData}
                  formattedTime={formattedTime}
                />
                <PanelTitle
                  text="Temperature Forecast"
                  titleClass="text-xl md:text-2xl flex flex-col justify-center items-left gap-y-2 font-semibold pl-4"
                />
                <ForcastGraph forcastData={forcastData} />
              </>
            ) : null}
          </div>
          <div className="border-l bg-[#FAFBFF] pt-8">
            <PanelTitle
              text="Explore the weather of the world"
              gradientText="with the weather app"
            />
            <Carousel location={location} 
            setLocation={setLocation} 
            setWeatherData={setWeatherData}
            setLoading={setLoading}
            setError={setError}
            forcastData={forcastData}
            setForcastData={setForcastData}
            />
            <div className="pt-8">
              <PanelTitle
                text="Interesting Weather Videos"
                titleClass="text-xl md:text-2xl flex flex-col justify-center items-left gap-y-2 font-semibold pl-8"
              />
              <AnimatingCards />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
