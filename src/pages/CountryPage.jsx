import { Link, useParams } from "react-router-dom";
import { useFetch } from "../useFetch";
import { Error, Loading } from "../components";

export function CountryPage() {
  const { country } = useParams();
  const {
    isLoading,
    isError,
    filteredList: result,
  } = useFetch(`https://restcountries.com/v3.1/name/${country.toLowerCase()}`);

  return (
    <>
      {isError && <Error msg={`The data for ${country} is not available.`} />}
      {isLoading && <Loading />}
      {!isError && !isLoading && (
        <div>
          <Link
            className="mb-16 inline-block rounded-md bg-white p-3 md:mb-20"
            to="/"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="call-made">
                <path
                  id="Shape"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.8922 3.53553L7.07071 4.71405L3.18162 8.60313L18.0309 8.60313L18.0309 10.253L3.18162 10.253L7.07071 14.1421L5.8922 15.3206L-0.000355655 9.42809L5.8922 3.53553Z"
                  fill="#111827"
                />
              </g>
            </svg>
          </Link>
          <div className="grid gap-11 lg:grid-cols-2 lg:gap-36">
            {Object.keys(result).length ? (
              <>
                <img
                  className="w-full"
                  src={result[0]?.flags?.svg}
                  alt={result[0]?.flags?.alt}
                />
                <div>
                  <h1 className="mb-4 text-3xl font-extrabold lg:mb-7">
                    {result[0]?.name?.common}
                  </h1>
                  <div className="flex flex-col gap-5 md:gap-5 lg:flex-row">
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
                        <span className="font-semibold">
                          Top Level Domain:{" "}
                        </span>
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
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </>
  );
}
