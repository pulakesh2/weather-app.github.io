import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import CityItem from "./components/CityItem";
import { CitiesProvider } from "./context/CitiesContext";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="city/:id" element={<CityItem />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
