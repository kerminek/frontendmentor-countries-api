import SearchIcon from "@mui/icons-material/Search";

const SearchInput = ({ searchValSet }: any) => {
  return (
    <div className="rounded shadow-md w-full bg-white dark:bg-dmElems h-fit md:max-w-xs">
      <label htmlFor="searchInput" className="py-4 px-6 flex gap-4 text-[14px] text-lmInp cursor-pointer">
        <SearchIcon fontSize="small" className="text-lmInp dark:text-dmTxt" />
        <input
          id="searchInput"
          type="text"
          placeholder="Search for a country..."
          className="outline-none font-[600] w-64 cursor-pointer bg-transparent placeholder:text-lmInp dark:text-dmTxt dark:placeholder:text-dmTxt"
          onChange={(e) => searchValSet(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchInput;
