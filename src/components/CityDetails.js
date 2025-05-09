import styles from "./CityDetails.module.css";
import { useNavigate } from "react-router";
import Button from "./Button";
import "./Button.module.css";
import { useCities } from "../context/CitiesContext";

const CityDetails = ({ data }) => {
  const navigate = useNavigate();
  const { addCity, data: cityData, alreadyAdded } = useCities();

  const listed = cityData.filter((city) => city.cityName === data.cityName);

  return (
    <div className={styles.weatherCard}>
      <Button onClick={() => navigate("/")}>Back</Button>
      <h1 className={styles.cityName}>{data.cityName}</h1>
      <p className={styles.description}>Description: {data.description}</p>

      <div className={`${styles.weatherSection} ${styles.details}`}>
        <h3 className={styles.sectionTitle}>Atmospheric Conditions</h3>
        <div className={styles.gridContainer}>
          <div className={styles.dataItem}>
            <span className={styles.dataLabel}>Main</span>
            <span className={styles.dataValue}>{data.main}</span>
          </div>
          <div className={styles.dataItem}>
            <span className={styles.dataLabel}>Pressure</span>
            <span className={styles.dataValue}>{data.pressure} hPa</span>
          </div>
          <div className={styles.dataItem}>
            <span className={styles.dataLabel}>Humidity</span>
            <span className={styles.dataValue}>{data.humidity}%</span>
          </div>
          <div className={styles.dataItem}>
            <span className={styles.dataLabel}>Sea Level</span>
            <span className={styles.dataValue}>{data.sea_level}</span>
          </div>
        </div>
      </div>

      <div className={`${styles.weatherSection} ${styles.temperature}`}>
        <h3 className={styles.sectionTitle}>Temperature</h3>
        <div className={styles.gridContainer}>
          <div className={styles.dataItem}>
            <span className={styles.dataLabel}>Current</span>
            <span className={styles.dataValue}>{data.temp}°</span>
          </div>
          <div className={styles.dataItem}>
            <span className={styles.dataLabel}>Feels Like</span>
            <span className={styles.dataValue}>{data.feels_like}°</span>
          </div>
          <div className={styles.dataItem}>
            <span className={styles.dataLabel}>Maximum</span>
            <span className={styles.dataValue}>{data.temp_max}°</span>
          </div>
          <div className={styles.dataItem}>
            <span className={styles.dataLabel}>Minimum</span>
            <span className={styles.dataValue}>{data.temp_min}°</span>
          </div>
        </div>
      </div>

      <div className={`${styles.weatherSection} ${styles.wind}`}>
        <h3 className={styles.sectionTitle}>Wind</h3>
        <div className={styles.gridContainer}>
          <div className={styles.dataItem}>
            <span className={styles.dataLabel}>Speed</span>
            <span className={styles.dataValue}>{data.speed} m/s</span>
          </div>
          <div className={styles.dataItem}>
            <span className={styles.dataLabel}>Direction</span>
            <span className={styles.dataValue}>{data.deg}°</span>
          </div>
        </div>
        <Button
          onClick={() => {
            if (listed.length) {
              alert("this city is already added to your list");
              alreadyAdded();
              navigate("/");
            } else {
              addCity(data);
              alert("Are you add this city to your list");
              navigate("/");
            }
          }}
        >
          {listed.length ? "already Added" : "Add"}
        </Button>
      </div>
    </div>
  );
};

export default CityDetails;
