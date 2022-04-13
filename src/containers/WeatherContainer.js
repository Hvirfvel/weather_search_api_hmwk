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
        try {
            const location = await fetch(`/api/location/search/?query=${locationSearch}`)
            const locationData = await location.json()
            const locationId = locationData[0].woeid
            
            const weather = await fetch(`/api/location/${locationId}/`)
            const weatherData = await weather.json()
            setWeather(weatherData)
        }
        catch(error){
            console.error(error);
        }
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