import WeatherDay from "./WeatherDay";

const WeatherList = ({location, weather}) => {

    const allWeatherDays = weather ? weather.map((weatherDay) => {
            return <WeatherDay details={weatherDay} key={weatherDay.id}/>
        }) : [];

    return (
        <>
        <h2>{location}</h2>

        <ul>
            {allWeatherDays}
        </ul>
        </>
    );
}

export default WeatherList;