import { useState } from "react";
import Button from "./Button";
import styles from "./SearchBox.module.css";
import { useCities } from "../context/CitiesContext";
const SearchBox = ({ fullWidth = false, onClick }) => {
  const [cityName, setCityName] = useState("");
  const { fetchWeather, isLoading } = useCities();

  const addCityHandler = () => {
    if (!cityName) return;
    fetchWeather(cityName);
    setCityName("");
    onClick();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addCityHandler();
    }
  };
  return (
    <div
      className={`${styles.searchContainer} ${
        fullWidth ? styles.fullWidth : ""
      }`}
    >
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Enter City Name"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        onKeyDown={handleKeyPress}
        aria-label="City name input"
      />
      <Button
        onClick={() => addCityHandler()}
        className={styles.searchButton}
        disabled={!cityName.trim()}
      >
        {isLoading ? "Loading..." : "Add"}
      </Button>
    </div>
  );
};

export default SearchBox;
