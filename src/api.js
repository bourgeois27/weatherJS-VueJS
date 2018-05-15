import * as Geo from './geo';

const apiKey = 'f29e1a142713d161';
const baseUrl = `http://api.wunderground.com/api/${apiKey}`;

export const getForecast = async () => {
  const position = await Geo.getCurrentPosition();
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  
  const response = await fetch(`${baseUrl}/forecast7day/geolookup/q/${latitude},${longitude}.json`);
  const data = await response.json();

  return {
    latitude: latitude,
    longitude: longitude,
    city: data.location.city,
    state: data.location.state,
    forecast: data.forecast.simpleforecast.forecastday.map((day) => ({
      weekday: day.date.weekday,
      icon: day.icon_url,
      high: day.high.celsius,
      low: day.low.celsius
    }))
  };
}