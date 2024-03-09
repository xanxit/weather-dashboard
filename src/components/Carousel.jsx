/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import handleSearch from "../composables/HandleSearch";

function Responsive({
  setLocation,
  setWeatherData,
  setLoading,
  setError,
  forcastData,
  setForcastData,
}) {
  const slideShowData = [
    {
      city:"Moscow",
      state:"Russia",
      image: "/carousel/card-3.webp",
    },
    {
      city:"Tokyo",
      state:"Japan",
      image:"/carousel/card-2.webp",
    },
    {
      city:"Kyiv",
      state:"Ukraine",
      image:"/carousel/card.webp",
    },
    {
      city:"New York",
      state:"USA",
      image:"/carousel/card-3.webp",
    }
  ]

  const handleSearchFromCarousal = (item) => {
    const { city } = item;
    setLocation(city);
    handleSearch(city, setWeatherData, setLoading, setError, forcastData, setForcastData);
}
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  }
};
  return (
    <div className="slider-container mt-12">
      <Carousel responsive={responsive} showDots={true}  dotListClass="custom-dot-list-style">
        {slideShowData.map((data, index) => (
          <div
            key={index}
            className="mx-4"
            style={{ height: "340px" }}
          >
            <div
              className="flex flex-col items-start p-4 text-black cursor-pointer !w-full"
              onClick={()=> handleSearchFromCarousal(data)}
              style={{
                backgroundImage: `url(${data.image})`,
                height: "340px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "1px solid tansparent",
                borderRadius: "25px",
              }}
            >
              <h1 className="text-[22px]">{data.city}</h1>
              <p className="text-sm">{data.state}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Responsive;
