export const weatherIcon = (type) =>
  type === "Clear"
    ? "/clear.svg"
    : type === "Rain"
    ? "/rain.svg"
    : type === "Clouds"
    ? "/cloudy.svg"
    : "/cloudy.svg";
