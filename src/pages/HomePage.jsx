import { useEffect, useState } from "react";
import {
  CountryList,
  RegionMenue,
  SearchBar,
  Loading,
  Error,
} from "../components";

export function HomePage() {
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
    <>
      {isError && <Error msg="The data for countries is not available." />}
      {isLoading && <Loading />}
      {!isError && !isLoading && (
        <>
          <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchBar
              countriesList={countriesList}
              filterCountries={setFilteredList}
            />
            <RegionMenue
              countriesList={countriesList}
              filterCountries={setFilteredList}
            />
          </div>
          <CountryList data={filteredList} />
        </>
      )}
    </>
  );
}
