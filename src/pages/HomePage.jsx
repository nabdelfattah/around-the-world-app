import {
  CountryList,
  RegionMenue,
  SearchBar,
  Loading,
  Error,
} from "../components";
import { useFetch } from "../useFetch";

export function HomePage() {
  const { isLoading, isError, filteredList, countriesList, setFilteredList } =
    useFetch("https://restcountries.com/v3.1/all");

  return (
    <>
      {isError && <Error msg="The data for countries is not available." />}
      {isLoading && <Loading />}
      {!isError && !isLoading && (
        <div>
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
        </div>
      )}
    </>
  );
}
