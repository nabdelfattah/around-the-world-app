import { useEffect, useState } from "react";
import { CountryList, Header, RegionMenue, SearchBar } from "./components";

function App() {
  const [countriesList, setCountriesList] = useState([]);

  async function fetchCountriesData() {
    // while using fetch() we should handle: Error state, Loading state
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountriesList(data);
    } catch (err) {
      alert(err);
    }
  }

  useEffect(() => {
    fetchCountriesData();
  }, []);

  return (
    <div className="min-h-screen w-screen bg-gray-100 font-inter dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <div className="container mx-auto px-5 md:px-5">
        <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
          <SearchBar />
          <RegionMenue />
        </div>
        <CountryList data={countriesList} />
      </div>
    </div>
  );
}

export default App;
