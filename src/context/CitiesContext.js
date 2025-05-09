import { nanoid } from "nanoid";
import { createContext, useContext, useEffect, useState } from "react";
const CitiesContext = createContext();

const CitiesProvider = ({ children }) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [city, setCity] = useState([]);
  const [listed, setListed] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      async function fetchData() {
        const res = await fetch("http://localhost:9000/temperature");
        if (!res.ok) throw new Error("Can't connect to server");
        else {
          const data = await res.json();
          setData(data.reverse());
          setError("");
        }
      }
      fetchData();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  async function fetchWeather(cityName) {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c332d059376eda57c65795bf9349d3d4&units=metric`
      );
      if (!res.ok) {
        throw new Error("City Not Found");
      }
      const data = await res.json();
      if (!data.name) return;
      setListed(true);
      setCity([
        {
          id: nanoid(),
          cityName: data.name,
          ...data.main,
          ...data.weather[0],
          ...data.wind,
          listed,
        },
      ]);
      setError("");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function addCity(newCity) {
    const res = await fetch("http://localhost:9000/temperature", {
      method: "POST",
      body: JSON.stringify(newCity),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    setData((cities) => [data, ...cities]);
    setCity([]);
  }

  function deleteCity(deletecity) {
    setData((cities) =>
      cities.filter((city) => city.cityName !== deletecity.cityName)
    );
  }

  const value = {
    data,
    error,
    isLoading,
    fetchWeather,
    city,
    addCity,
    deleteCity,
    listed,
    setIsLoading,
  };

  return (
    <CitiesContext.Provider value={value}>{children}</CitiesContext.Provider>
  );
};

const useCities = () => {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error("Call outside the provider");
  return context;
};

export { CitiesProvider, useCities };
