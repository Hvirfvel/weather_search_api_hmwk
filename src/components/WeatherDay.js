import './WeatherDay.css';

const WeatherDay = ({details}) => {
    return (
        <li>
            <h3>{details.applicable_date}</h3>
            <div className="forecast weather-state">
                <h4>{details.weather_state_name}</h4>
                <img className="weather-icon" src={`/static/img/weather/${details.weather_state_abbr}.svg`} alt="" />
            </div>
            <div className="forecast">
                
                <p>{Math.round(details.max_temp)}°C / {Math.round(details.min_temp)}°C</p>
            </div>
            <div className="forecast">
                
                <p>{`${details.predictability}%`}</p>
            </div>
            <div className="forecast">
                
                <p>{Math.round(details.wind_speed)} mph</p>
            </div>
            <div className="forecast">
                
                <p>{details.humidity} %</p>
            </div>
        </li>
    );
}
export default WeatherDay;