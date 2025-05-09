import React from "react";
import styles from "./ListCities.module.css";
import City from "./City";

const ListCities = ({ data }) => {
  const cityList =
    data.length !== 1 ? (
      data.map((city) => <City data={city} key={city.id} />)
    ) : (
      <City data={data[0]} />
    );
  return <div className={styles.city__list}>{cityList}</div>;
};

export default ListCities;
