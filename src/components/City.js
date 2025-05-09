// import React from "react";
import Button from "./Button";
import styles from "./City.module.css";
import { Link } from "react-router";

const City = ({ data }) => {
  return (
    <div className={styles.city}>
      <div className={styles.city__details}>
        <h3 className={styles.cityName}>{data.cityName}</h3>

        <div className={styles.mainTemp}>
          <span className={styles.tempValue}>{data.temp}°</span>
          <span className={styles.feels}>feels like {data.feels_like}°</span>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Link to={`city/${data.cityName}`}>
          <Button size="small" type="primary">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default City;
