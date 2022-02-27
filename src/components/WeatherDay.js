const WeatherDay = ({details}) => {
    return (
        <li>
            <p>{details.applicable_date}</p>
            <p>{details.weather_state_name}</p>
            <p>{details.the_temp} °C</p>
            <p>Wind: {details.wind_speed} m/s</p>
            <p>Humidity: {details.humidity} %</p>
        </li>
    );
}
export default WeatherDay;