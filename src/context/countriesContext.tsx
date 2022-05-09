import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Context from "./store";

const CountriesContext = ({ children }: any) => {
  const [countries, countriesSet] = useState([]);

  const value = { countries, countriesSet };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        if (countries.length === 0) {
          const res = await axios.get("https://restcountries.com/v2/all");
          countriesSet(res.data);
        } else {
          return;
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountries();
  }, [countries]);

  return <Context.Provider value={countries}>{children}</Context.Provider>;
};

export default CountriesContext;
