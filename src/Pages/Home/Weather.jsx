import { useState, useEffect } from "react";
import SectionTitle from "../../Components/Shared/SectionTitle";
import sunrise from "../../assets/Media/weather-image/Sunrise.jpg";
import sunset from "../../assets/Media/weather-image/Sunset.jpg";
import clouds from "../../assets/Media/weather-image/clouds.png";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?lat=23.960787488560737&lon=90.10198030347681&appid=215b120bee26e404e9c8eafc8297ff65&units=metric"
        );
        const data = await response.json();
        if (response.ok) {
          setWeather(data);
          setLoading(false);
          console.log(data);
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchWeather();

    const intervalId = setInterval(fetchWeather, 600000);

    return () => clearInterval(intervalId);
  }, []);

  const sunriseTimestamp = weather?.sys?.sunrise;
  const sunsetTimestamp = weather?.sys?.sunset;

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    hours = hours < 10 ? '0' + hours : hours;
    return `${hours}.${minutes < 10 ? '0' + minutes : minutes} ${period}`;
  };

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-red-500">{error}</div>;
  }

  return (
    <>
      <SectionTitle
        heading={"Weather"}
        subHeading={"Current Weather in Our village"}
      />
      <div className="lg:w-3/4 w-full mx-auto mt-5 p-4 bg-blue-100 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-2 text-center">
          Weather in <span className="text-green-600">Beki Garail</span>
        </h2>
        <div className="grid justify-center">
          <h1 className="text-center text-5xl font-bold text-green-400">
            {weather?.main.temp}
          </h1>
          <h1 className="text-center text-2xl font-bold text-green-400">
            {weather?.weather[0]?.main}
          </h1>
          <img
            className="mx-auto"
            src={weather?.weather[0]?.main === "Clouds" ? clouds : ""}
            alt=""
          />
          <div>
            <h1 className="text-center font-bold">
              Feels Like: {weather?.main.feels_like}
            </h1>
            <h1 className="text-center font-bold">
              Humidity: {weather?.main.humidity} %
            </h1>
          </div>
          <div className="flex gap-10">
            <div>
              <h1 className="text-center font-bold">Sunrise</h1>
              <img className="h-40 w-40 rounded" src={sunrise} alt="" />
              <h1 className="text-xl font-bold text-green-950">Sunrise: {formatTime(new Date(sunriseTimestamp * 1000))}</h1>
            </div>
            <div>
              <h1 className="text-center font-bold">Sunset</h1>
              <img className="h-40 w-40 rounded" src={sunset} alt="" />
              <h1 className="text-xl font-bold text-green-950"> Sunset :{formatTime(new Date(sunsetTimestamp * 1000))}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
