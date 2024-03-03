const SearchBar = ({ location, setLocation, handleKeyDown, handleSearch }) => {
  return (
    <div className="flex justify-center gap-x-10 items-center relative">
      <img
        src="/search-icon.svg"
        alt="search icon"
        className="absolute mr-80 -ml-6"
        height={26}
        width={26}
      ></img>
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter Location "
        type="text"
        className="pl-12 pr-8 py-3 relative text-lg rounded-3xl bg-transparent outline-[#FFFFFFCC] placeholder:text-[#f8f8f8] w-[400px]"
        style={{ border: "1px solid #FFFFFFCC" }}
      />
      <button
        className="border absolute ml-80 mr-8 border-white bg-white px-3 py-1 rounded-2xl hover:bg-white text-black hover:scale-95 disabled:opacity-35"
        onClick={handleSearch}
        disabled={location.length === 0 ? true : false}
      >
        Search
      </button>
    </div>
  );
};
export default SearchBar;
