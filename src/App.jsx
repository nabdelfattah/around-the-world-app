import { useEffect, useState } from "react";
import {
  CountryList,
  Header,
  RegionMenue,
  SearchBar,
  Loading,
  Error,
} from "./components";

function App() {
  const [countriesList, setCountriesList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  async function fetchCountriesData() {
    // while using fetch() we should handle: Error state, Loading state
    try {
      setIsLoading(true);
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setIsError(false);
      setCountriesList(data);
      setFilteredList(data);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchCountriesData();
  }, []);

  return (
    <div className="min-h-screen w-screen bg-gray-100 font-inter dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <div className="container mx-auto px-5 md:px-5">
        {isError && <Error msg="The data for countries is not available." />}
        {isLoading && <Loading />}
        {!isError && !isLoading && (
          <>
            <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
              <SearchBar />
              <RegionMenue
                countriesList={countriesList}
                filterCountries={setFilteredList}
              />
            </div>
            <CountryList data={filteredList} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
