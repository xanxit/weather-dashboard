export const weatherUnitChange = (temp, isCelsius) => !isCelsius
? `${temp.toFixed()}°C`
: `${(temp * 1.8 +32).toFixed()}°F`;

