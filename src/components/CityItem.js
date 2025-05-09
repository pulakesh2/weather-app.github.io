import { useParams } from "react-router";
import { useCities } from "../context/CitiesContext";
import CityDetails from "./CityDetails";

const CityItem = () => {
  const { id } = useParams();
  const { city, data } = useCities();

  const cityItem = city.length
    ? city[0]
    : data.find((city) => city.cityName === id);
  return <CityDetails data={cityItem} />;
};

export default CityItem;
