/* eslint-disable react/prop-types */
import handleSearch from "../composables/HandleSearch";
const SearchBar = ({
  location,
  setLocation,
  handleKeyDown,
  setWeatherData,
  setLoading,
  setError,
  forcastData,
  setForcastData,
}) => {
  return (
    <div className="flex justify-start gap-x-6 pl-4 pt-8 items-center relative">
      <img
        src="/search-icon.svg"
        alt="search icon"
        className="absolute ml-4"
        height={24}
        width={24}
      ></img>
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for cities"
        type="text"
        className="pl-12 pr-8 py-3 relative text-lg rounded-3xl bg-transparent outline-[#AAB0C7] placeholder:text-[#737396] w-[440px]"
        style={{ border: "1px solid #AAB0C7" }}
      />
      <button
        className="border md:w-[125px] h-[52px] w-full rounded-3xl text-white hover:scale-95 disabled:opacity-65 cursor-pointer"
        onClick={() =>
          handleSearch(
            location,
            setWeatherData,
            setLoading,
            setError,
            forcastData,
            setForcastData
          )
        }
        style={{
          background: `linear-gradient(90.85deg, #004EE4 39.76%, #7F9CFF 100%)`,
        }}
        disabled={location.length === 0 ? true : false}
      >
        Search
      </button>
    </div>
  );
};
export default SearchBar;
