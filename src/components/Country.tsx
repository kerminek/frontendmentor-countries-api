import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Country = () => {
  const location: any = useLocation();
  const country = location.state?.country;
  const navigate = useNavigate();

  useEffect(() => {
    !country && navigate("/");
    // console.log(country);
  }, []);

  return (
    <div className="px-4 md:px-12 pb-16">
      <div className="py-10 md:py-16">
        <Link to={"/"} className="inline-block">
          <button className="w-32 bg-lmElems dark:bg-dmElems py-2 flex justify-center items-center gap-3 shadow-[0px_0px_6px_0px_#0000005d] rounded">
            <KeyboardBackspaceIcon />
            Back
          </button>
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-10 md:gap-20 h-full">
          <div className="h-full flex-1 basis-[500px] md:min-w-[500px] grow-0">
            <img src={country?.flag} alt="" className="w-full h-80 object-fill" />
          </div>
          <div className="flex flex-col flex-1 justify-center basis-auto max-w-[500px]">
            <div className="mb-5">
              <h2 className="text-[26px] font-[800]">{country?.name}</h2>
            </div>
            <div className="text-[14px] font-[600] flex gap-10 mb-10 max-w-100% flex-wrap">
              <div>
                <p>
                  Native Name: <span className="font-[300]">{country?.nativeName}</span>
                </p>
                <p>
                  Population:{" "}
                  <span className="font-[300]">{String(country?.population).replace(/(.)(?=(\d{3})+$)/g, "$1,")}</span>
                </p>
                <p>
                  Region: <span className="font-[300]">{country?.region}</span>
                </p>
                <p>
                  Sub Region: <span className="font-[300]">{country?.subregion}</span>
                </p>
                <p>
                  Capital: <span className="font-[300]">{country?.capital}</span>
                </p>
              </div>
              <div>
                <p>
                  Top Level Domain: <span className="font-[300]">{country?.topLevelDomain}</span>
                </p>
                <p className="flex gap-1">
                  Currencies:
                  <span className="font-[300]">
                    {country?.currencies
                      ? country.currencies.map((currency: any, index: number) => (
                          <span key={index} className="capitalize whitespace-nowrap">
                            {currency.name}
                          </span>
                        ))
                      : "None"}
                  </span>
                </p>
                <div className="flex gap-1">
                  Languages:
                  <div className="font-[300] flex gap-1">
                    {country?.languages?.map((language: any, index: number) => (
                      <span key={index}>
                        {language.name}
                        {country.languages.length - 1 !== index && ","}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[14px] font-[600]">
              <div>
                <div className="flex gap-2 items-center flex-wrap">
                  <p className="whitespace-nowrap text-[16px]">Border Countries:</p>
                  <div className="font-[300] flex gap-2 flex-wrap max-w-full">
                    {country?.borders ? (
                      country.borders.map((border: any, index: number) => (
                        <div
                          key={index}
                          className="flex-1 basis-24 grow-0 w-24 py-1 bg-lmElems dark:bg-dmElems flex items-center justify-center rounded shadow-md"
                        >
                          <p className="">{border}</p>
                        </div>
                      ))
                    ) : (
                      <span>None</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
