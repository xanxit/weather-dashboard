export const weatherIcon = (type) =>
  type === "Clear"
    ? "/sun-icon.svg"
    : type === "Rain"
    ? "/rain.svg"
    : type === "Clouds"
    ? "/cloudy.svg"
    : "/default.svg";
