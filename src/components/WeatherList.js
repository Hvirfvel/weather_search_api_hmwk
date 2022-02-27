import WeatherDay from "./WeatherDay";
import './WeatherList.css'

const WeatherList = ({location, weather}) => {

    const allWeatherDays = weather ? weather.map((weatherDay) => {
            return <WeatherDay details={weatherDay} key={weatherDay.id}/>
        }) : [];

    return (
        <article>
            <section className="forecast-headings">
                <h2>{location}</h2>
                <h4>Forecast</h4>
                <h4>Max/min. temp.</h4>
                <h4>Chance of rain</h4>
                <h4>Wind</h4>
                <h4>Humidity</h4>
            </section>
            <ul>
                {allWeatherDays}
            </ul>
        </article>
    );
}

export default WeatherList;