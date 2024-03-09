import axios from "axios";
import { toast } from "react-toastify";

const handleSearch = async (
  location,
  setWeatherData,
  setLoading,
  setError,
  forcastData,
  setForcastData
) => {
  setLoading(true);
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric`
    );
    const forcastResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric`
    );
    const filteredForcastData = forcastResponse.data.list.map((item) => ({
      temp: item.main.temp,
      dt_txt: item.dt_txt.split(" ")[0],
    }));
    setForcastData(filteredForcastData);
    setWeatherData(res.data);
    localStorage.setItem("forcastData", JSON.stringify(filteredForcastData))
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
};

const notify = (code) => {
  var msg = "API Failure, please try again later";
  if (code === 404) {
    msg = "Error: 404, Invalid City name entered";
  }
  toast(msg);
};

export default handleSearch;
