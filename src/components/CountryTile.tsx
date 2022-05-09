import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { animated, config, useSpring, useTransition } from "react-spring";

const CountryTile = ({ country }: any) => {
  const navigate = useNavigate();

  const [show, showSet] = useState(false);
  const transitions = useTransition(true, {
    from: { scale: 0.9 },
    enter: { scale: 1 },
    config: config.molasses,
    reverse: show,
    delay: 100,
    onRest: () => showSet(!show),
  });
  // const spring = useSpring({
  //   from: { x: 0 },
  //   to: { x: 1 },
  //   reset: false,
  // });

  return transitions((styles, item) => (
    <animated.div
      style={styles}
      className="flex flex-col w-64  shadow-md rounded overflow-hidden bg-lmElems dark:bg-dmElems cursor-pointer"
      onClick={() => navigate("/country", { replace: true, state: { country } })}
    >
      <div className="basis-6/12 overflow-hidden">
        <img src={country?.flag} alt={`Flag of ${country?.name}`} className="w-full h-full object-cover" />
      </div>
      <div className="basis-6/12 px-5 pb-0 flex flex-col justify-evenly">
        <h4 className="text-[16px] font-[800] mb-0">{country?.name}</h4>
        <div className="text-[14px] font-[600]">
          <p>
            Population:{" "}
            <span className="font-[300]">{String(country?.population).replace(/(.)(?=(\d{3})+$)/g, "$1,")}</span>
          </p>
          <p>
            Region: <span className="font-[300]">{country?.region}</span>
          </p>
          <p>
            Capital: <span className="font-[300]">{country?.capital}</span>
          </p>
        </div>
      </div>
    </animated.div>
  ));
};

export default CountryTile;
