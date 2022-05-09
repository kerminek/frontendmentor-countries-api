import { useContext, useEffect, useState } from "react";
import context from "../context/store";
import CountriesContainer from "./CountriesContainer";
import Filter from "./Filter";
import SearchInput from "./SearchInput";

const Countries = () => {
  const [searchVal, searchValSet] = useState("");
  const countries: any = useContext(context);
  const [filteredCountries, filteredCountriesSet] = useState<any>([countries]);
  const [selectedRegion, selectedRegionSet] = useState<any>(null);

  const filteredResults = () => {
    filteredCountriesSet(
      countries.filter((country: any) => {
        if (selectedRegion) {
          console.log(selectedRegion);

          return (
            country.region.toLowerCase() === selectedRegion.toLowerCase() &&
            country.name.toLowerCase().startsWith(searchVal.toLocaleLowerCase())
          );
        } else {
          return country.name.toLowerCase().startsWith(searchVal.toLocaleLowerCase());
        }
      })
    );
  };

  useEffect(() => {
    if (searchVal.length === 0 && !selectedRegion) {
      filteredCountriesSet(countries);
    } else {
      filteredResults();
    }
  }, [searchVal, countries, selectedRegion]);

  return (
    <div className="px-4 md:px-12 pb-12 w-full flex-1 flex justify-center">
      <div className="max-w-screen-2xl flex-1 flex flex-col w-full">
        <div className="flex justify-between my-10 w-full flex-wrap gap-10">
          <SearchInput searchValSet={searchValSet} />
          <Filter selectedRegionSet={selectedRegionSet} selectedRegion={selectedRegion} />
        </div>
        <CountriesContainer countries={filteredCountries} />
      </div>
    </div>
  );
};

export default Countries;
