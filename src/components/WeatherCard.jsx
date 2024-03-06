import { weatherUnitChange } from "../composables/FahreinheitConverter";
import { weatherIcon } from "../composables/WeatherIcon";

const WeatherCard = ({ isDay, weatherData, formattedTime, isCelsius }) => {
  const weatherImage = weatherIcon(weatherData.weather[0].main);

  const currTemp = weatherUnitChange(weatherData.main.temp, isCelsius);
  const feelsLikeTemp = weatherUnitChange(
    weatherData.main.feels_like,
    isCelsius
  );
  return (
    <div
      className={`h-auto w-full md:w-[628px] flex flex-col mx-auto rounded-3xl ${
        isDay ? "bg-[#5E879C]" : "bg-[#24353E]"
      } px-6 py-4`}
      style={{ boxShadow: "10px 9px 70px 0px #24353E66" }}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-x-0.5">
          <img src="/location-icon.svg" alt="location" height={24} width={24} />
          <p className="text-lg">{weatherData.name}</p>
        </div>
        <div className="flex">
          <p className="text-lg">{formattedTime} IST</p>
        </div>
      </div>
      <div className="flex flex-col -mt-2 items-center justify-center">
        <img src={weatherImage} alt="weather" className="!h-32" />
        <div className="flex gap-x-2">
          <img src="/temperature-icon.svg" alt="temp" className="!h-8" />
          <p className="text-2xl font-bold">
            {currTemp}
            <br />
            <span className="font-semibold !text-lg">
              {weatherData.weather[0].main}
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-8 items-center">
        <div className="flex flex-col gap-y-0.5 text-center">
          <p className="text-lg">{weatherData.main.humidity}%</p>
          <p className="text-md">Humidity</p>
        </div>
        <div className="flex flex-col gap-y-0.5 text-center">
          <p className="text-lg">{feelsLikeTemp}</p>
          <p className="text-md">Feels Like</p>
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
