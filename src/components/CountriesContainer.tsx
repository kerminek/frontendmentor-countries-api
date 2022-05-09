import CountryTile from "./CountryTile";
import { List, AutoSizer, WindowScroller } from "react-virtualized";
import "react-virtualized/styles.css";

const CountriesContainer = ({ countries }: any) => {
  return (
    <div className="h-full">
      <WindowScroller>
        {({ height, isScrolling, onChildScroll, scrollTop }) => (
          <AutoSizer disableHeight>
            {({ width }) => {
              const itemWidth = Math.min(276, width);
              const itemsPerRow = Math.floor(width / itemWidth);
              const rowCount = Math.ceil(countries.length / itemsPerRow);

              return (
                <List
                  autoHeight
                  isScrolling={isScrolling}
                  onScroll={onChildScroll}
                  scrollTop={scrollTop}
                  width={width}
                  height={height}
                  rowCount={rowCount}
                  rowHeight={320}
                  countries={countries}
                  className=""
                  rowRenderer={({ index, key, style }) => {
                    const items = [];
                    const fromIndex = index * itemsPerRow;
                    const toIndex = Math.min(fromIndex + itemsPerRow, countries.length);

                    for (let i = fromIndex; i < toIndex; i++) {
                      items.push(<CountryTile country={countries[i]} key={`${key}${i}`} />);
                    }

                    return (
                      <div key={key} className="flex justify-evenly gap-10 pb-10" style={style}>
                        {items}
                      </div>
                    );
                  }}
                />
              );
            }}
          </AutoSizer>
        )}
      </WindowScroller>
    </div>
  );
};

export default CountriesContainer;
