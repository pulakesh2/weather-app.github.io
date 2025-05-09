import Navbar from "../components/Navbar";
import ListCities from "../components/ListCities";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useCities } from "../context/CitiesContext";

const Home = () => {
  const { data, error, isLoading, city } = useCities();
  return (
    <div>
      <Navbar />
      {isLoading && <Loader />}
      {error ? (
        <Error error={error} />
      ) : (
        <ListCities data={city.length === 1 ? city : data} />
      )}
    </div>
  );
};

export default Home;
