/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import handleSearch from "../composables/HandleSearch";
import slideShowData from "../data/slideshowdata";

const LeftCarousel =({
  setLocation,
  setWeatherData,
  setLoading,
  setError,
  forcastData,
  setForcastData,
}) =>{

  const handleSearchFromCarousal = (item) => {
    const { city } = item;
    setLocation(city);
    handleSearch(
      city,
      setWeatherData,
      setLoading,
      setError,
      forcastData,
      setForcastData
    );
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="mt-12">
      <Carousel
        responsive={responsive}
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        rewind={true}
        rewindWithAnimation={true}
        arrows={false}
        tradotListClass="custom-dot-list-style"
      >
        {slideShowData.map((data, index) => (
          <div key={index} className="mx-4" style={{ height: "340px" }}>
            <div
              className="flex flex-col items-start p-4 text-black cursor-pointer !w-full"
              onClick={() => handleSearchFromCarousal(data)}
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

export default LeftCarousel;
