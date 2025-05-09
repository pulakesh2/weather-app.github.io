import { nanoid } from "nanoid";
import { createContext, useContext, useEffect, useReducer } from "react";
const CitiesContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "getData":
      return { ...state, data: action.payload, error: "" };
    case "getCity":
      return { ...state, listed: true, city: action.payload, error: "" };
    case "getError":
      return { ...state, error: action.payload };
    case "addCity":
      return { ...state, data: [action.payload, ...state.data], city: [] };
    case "loader":
      return { ...state, isLoading: !state.isLoading };
    case "alreadyAdded":
      return { ...state, city: [] };
    default:
      return "unknown action triggered";
  }
}

const CitiesProvider = ({ children }) => {
  const [{ error, isLoading, data, city, listed }, dispatch] = useReducer(
    reducer,
    {
      error: "",
      isLoading: false,
      data: [],
      city: [],
      listed: false,
    }
  );

  useEffect(() => {
    try {
      dispatch({ type: "loader" });
      async function fetchData() {
        const res = await fetch("http://localhost:9000/temperature");
        if (!res.ok) throw new Error("Can't connect to server");
        else {
          const data = await res.json();
          dispatch({ type: "getData", payload: data.reverse() });
        }
      }
      fetchData();
    } catch (err) {
      dispatch({ type: "getError", payload: err.message });
    } finally {
      dispatch({ type: "loader" });
    }
  }, []);

  async function fetchWeather(cityName) {
    try {
      dispatch({ type: "loader" });
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c332d059376eda57c65795bf9349d3d4&units=metric`
      );
      if (!res.ok) {
        throw new Error("City Not Found");
      }
      const data = await res.json();
      if (!data.name) return;

      const apiCity = [
        {
          id: nanoid(),
          cityName: data.name,
          ...data.main,
          ...data.weather[0],
          ...data.wind,
          listed,
        },
      ];
      dispatch({ type: "getCity", payload: apiCity });
    } catch (error) {
      dispatch({ type: "getError", payload: error.message });
    } finally {
      dispatch({ type: "loader" });
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

    dispatch({ type: "addCity", payload: data });
  }

  function alreadyAdded() {
    dispatch({ type: "alreadyAdded" });
  }

  const value = {
    data,
    error,
    isLoading,
    fetchWeather,
    city,
    addCity,
    alreadyAdded,
    listed,
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
