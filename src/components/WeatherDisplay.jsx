/* eslint-disable react/prop-types */
import { weatherUnitChange } from "../composables/FahreinheitConverter";
import { weatherIcon } from "../composables/WeatherIcon";

const WeatherDisplay = ({ weatherData, formattedTime, isCelsius }) => {
  const weatherImage = weatherIcon(weatherData.weather[0].main);

  const currTemp = weatherUnitChange(weatherData.main.temp, isCelsius);
  const feelsLikeTemp = weatherUnitChange(
    weatherData.main.feels_like,
    isCelsius
  );
  return (
    <div className="py-12 px-4 flex flex-col !text-[#1736A4]">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <div className="flex gap-x-1">
            {" "}
            <img src={weatherImage} height={24} width={24} alt="weather" />
            <p className="text-md">{weatherData?.weather[0].main}</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold">{currTemp}</h1>
        </div>
        <div className="flex flex-col gap-1 font-medium md:pr-8 text-right">
          <h2 className="text-2xl">{weatherData.name + ", " + weatherData.sys.country}</h2>
          <p className="text-xl">{formattedTime} IST</p>
        </div>
      </div>
      <div className="mt-12 flex flex-wrap gap-4 justify-center md:justify-start">
        <div className="bg-[#F7FBFE] h-[86px] w-[131px] rounded shadow-sm border-[#F7FBFE] flex flex-col justify-center items-center">
          <h1 className="text-2xl font-semibold">{weatherData.main.humidity}</h1>
          <p className="text-sm font-medium">Humidity</p>
        </div>
        <div className="bg-[#F7FBFE] h-[86px] w-[131px] rounded shadow-sm border-[#F7FBFE] flex flex-col justify-center items-center">
          <h1 className="text-2xl font-semibold">{(weatherData.wind.speed *3.2).toFixed()} <span className="!text-sm">Km/H</span></h1>
          <p className="text-sm font-medium">Wind Speed</p>
        </div>
        <div className="bg-[#F7FBFE] h-[86px] w-[131px] rounded shadow-sm border-[#F7FBFE] flex flex-col justify-center items-center">
          <h1 className="text-2xl font-semibold">{(weatherData.visibility)}</h1>
          <p className="text-sm font-medium">Visibility</p>
        </div>
        <div className="bg-[#F7FBFE] h-[86px] w-[131px] rounded shadow-sm border-[#F7FBFE] flex flex-col justify-center items-center">
          <h1 className="text-2xl font-semibold">{feelsLikeTemp}</h1>
          <p className="text-sm font-medium">Feels like</p>
        </div>
      </div>
    </div>
  );
};
export default WeatherDisplay;
