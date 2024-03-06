const now = new Date();
const hours = now.getHours();

export const isDay = hours >= 5 && hours < 18;
export const bgImage = isDay ? "/day.svg" : "/night.svg";

