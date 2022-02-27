import { useEffect, useState } from "react";
import Search from "../components/Search";
import WeatherList from "../components/WeatherList";

const WeatherContainer = () => {

    const [weather, setWeather] = useState([]);

    const initialLocation = "london"

    useEffect(() => {
        console.log("use effect triggered");
        getWeatherByLocation(initialLocation);
      }, []);

    const getWeatherByLocation = async (locationSearch) => {
        const location = await fetch(`/api/location/search/?query=${locationSearch}`)
        .then(response => response.json())
        const locationId = location[0].woeid
        
        const weather = await fetch(`/api/location/${locationId}/`)
        .then(response => response.json())
        setWeather(weather)
    }

    return (
        <>
            <h1>Weather forecast</h1>
            <Search handleSearch={getWeatherByLocation}/>
            <WeatherList location={weather.title} weather={weather.consolidated_weather}/>
        </>

    );
}

export default WeatherContainer;