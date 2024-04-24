import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function CountryPage() {
  const { country } = useParams();
  const [result, setResult] = useState({});

  useEffect(() => {
    async function fetchCountry() {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${country.toLowerCase()}`,
      );
      setResult(await response.json());
    }
    fetchCountry();
  }, []);

  return (
    <div className="grid gap-11 lg:grid-cols-2 lg:gap-36">
      {Object.keys(result).length && (
        <>
          <img
            className="w-full"
            src={result[0].flags.svg}
            alt={result[0].flags.alt}
          />
          <div>
            <h1 className="mb-4 text-3xl font-extrabold lg:mb-7">
              {result[0]?.name?.common}
            </h1>
            <div className="flex flex-col gap-8 md:gap-40 lg:flex-row">
              <div className="flex flex-col gap-5">
                <p>
                  <span className="font-semibold">Population: </span>
                  <span className="font-light">
                    {parseInt(result[0]?.population).toLocaleString()}
                  </span>
                </p>

                <p>
                  <span className="font-semibold">Region: </span>
                  <span>{result[0]?.region}</span>
                </p>

                <p>
                  <span className="font-semibold">Sub Region: </span>
                  <span>{result[0]?.subregion}</span>
                </p>

                <p>
                  <span className="font-semibold">Capital: </span>
                  <span>{result[0]?.capital}</span>
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <p>
                  <span className="font-semibold">Top Level Domain: </span>
                  <span>{result[0]?.tld?.join(", ")}</span>
                </p>

                <p>
                  <span className="font-semibold">Currencies: </span>
                  <span className="font-thin">
                    {result[0]?.currencies &&
                      Object.keys(result[0].currencies)
                        .map(
                          (currency) =>
                            `${result[0]?.currencies[currency].name}`,
                        )
                        .join(", ")}
                  </span>
                </p>

                <p>
                  <span className="font-semibold">Languages: </span>
                  <span className="font-thin">
                    {result[0]?.languages &&
                      Object.values(result[0].languages)
                        .map((lang) => `${lang}`)
                        .join(", ")}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
