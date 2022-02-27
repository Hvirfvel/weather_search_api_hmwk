const WeatherDay = ({details}) => {
    return (
        <li>
            <h3>{details.applicable_date}</h3>
            <div className="forecast">
                <h4>{details.weather_state_name}</h4>
                <img src={`/static/img/weather/${details.weather_state_abbr}.svg`} alt="" />
            </div>
            <div className="forecast">
                <h4>Max/min. temp.</h4>
                <p>{Math.round(details.max_temp)}°C / {Math.round(details.min_temp)}°C</p>
            </div>
            <div className="forecast">
                <h4>Chance of rain</h4>
                <p>{`${details.predictability}%`}</p>
            </div>
            <div className="forecast">
                <h4>Wind</h4>
                <p>{Math.round(details.wind_speed)} mph</p>
            </div>
            <div className="forecast">
                <h4>Humidity</h4>
                <p>{details.humidity} %</p>
            </div>
        </li>
    );
}
export default WeatherDay;