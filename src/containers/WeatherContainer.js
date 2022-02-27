import { useEffect, useState } from "react";
import Search from "../components/Search";

const WeatherContainer = () => {

    const [weather, setWeather] = useState([]);

    useEffect(() => {
        console.log("use effect triggered");
        
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
            <h1>Weather container</h1>
            <Search handleSearch={getWeatherByLocation}/>
        </>

    );
}

export default WeatherContainer;