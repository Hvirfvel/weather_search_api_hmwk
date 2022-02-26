import { useEffect, useState } from "react";

const WeatherContainer = () => {

    const [foundLocation, setFoundLocation] = useState(null);
    const [locationSearch, setLocationSearch] = useState(null);

    useEffect(() => {
        getLocation();
    }, [locationSearch])

    const getLocation = () => {
        fetch(`/api/location/search/?query=${locationSearch}`)
        .then(response => response.json())
        .then(location => setFoundLocation(location))
        .catch(err => console.error(err))
    }

    const handleSearchChange = (event) => {
        setLocationSearch(event.target.value)
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();

    }

    

    return (
        <>
            <h1>Weather container</h1>
            <form onSubmit={handleSearchSubmit}>
                <input type="text" placeholder="Location" value={locationSearch} onChange={handleSearchChange}/>
                <input type="submit" value="Search" />
            </form>
        </>

    );
}

export default WeatherContainer;