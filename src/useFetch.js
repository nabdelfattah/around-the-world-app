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
    }
  }

  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setIsError(false);
      setCountriesList(data);
      setFilteredList(data);
      if (!url.includes('name')) {
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
