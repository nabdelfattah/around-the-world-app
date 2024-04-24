// if we repeat a logic and it has state: create a custom hook
// if the repeated logic doesn't have state: just create a helper function

import { useEffect, useState } from "react";

export function useFetch(url) {
  const [countriesList, setCountriesList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function loadDataFromStorage(){
    let loadedData = localStorage.getItem("countriesList")
    if(loadedData) {
      loadedData = JSON.parse(loadedData)
      setFilteredList(loadedData)
      setCountriesList(loadedData)
      setIsLoading(false)
      setIsError(false)
    } else {
      fetchData()
      // countriesList.length && localStorage.setItem('countriesList', JSON.stringify(countriesList))
    }
  }

  async function fetchData() {
    // while using fetch() we should handle: Error state, Loading state
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setIsError(false);
      setCountriesList(data);
      setFilteredList(data);
      if (!url.includes('name')) {
        // HomePage
        localStorage.setItem('countriesList', JSON.stringify(data))
      }
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (url.includes('name')) {
      fetchData();
    } else {
      loadDataFromStorage()
    }
  }, []);

  return {
    countriesList,
    filteredList,
    setFilteredList,
    isLoading,
    isError,
  };
}
