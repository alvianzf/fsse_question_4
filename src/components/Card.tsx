import '../assets/css/card.css';
import Clock from 'react-clock';
import { useEffect, useState } from 'react';
import 'react-clock/dist/Clock.css';

// Documentation on icons: https://openweathermap.org/weather-conditions

function Card() {
  const [clock, setClock] = useState(new Date());
  const [location, setLocation] = useState("");

  useEffect(() => {
    const interval = setInterval(() => setClock(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleChange = (event: any) => {
    setLocation(event.target.value);
  };

  const handleLocation = async () => {
  };

  return (
    <div className='card'>
      <div className="search-section">
        <input name="search" placeholder="Search Location" className="location-search" onChange={handleChange}></input>
        <span className="material-symbols-outlined floated" onClick={handleLocation}>search</span>
      </div>
      <div className="clock">
        <Clock value={clock}/>
      </div>
      <div className="location">Jakarta</div>
      <div className="temp">32º</div>
      <div className="weather-icon">
        <span className="material-symbols-outlined">partly_cloudy_day</span>
        <span className="material-symbols-outlined active">thunderstorm</span>
        <span className="material-symbols-outlined">rainy</span>
        <span className="material-symbols-outlined">sunny</span>
      </div>
    </div>
  )
}

export default Card;
