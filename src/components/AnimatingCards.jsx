import animatingCardsData from "../data/animatingcards";

const AnimatingCards = () => {
  return (
    <>
      <div className="flex w-full pl-6 pt-4 cursor-pointer">
        {animatingCardsData.map((ele, idx) => (
          <a href={ele.href} className="imageCard group" key={idx}>
            <img
              src={ele.image}
              className="group-hover:hidden rounded-lg"
              alt="first card"
            />
            <div className="hidden p-4 group-hover:flex flex-row gap-6 transition ease-in-out delay-700">
              <img
                src={ele.image}
                height={60}
                width={59}
                className="!h-[60px] !w-[59px] rounded-lg"
                alt="first image"
              />
              <div className="flex flex-col gap-0.5 min-w-40">
                <h1 className="text-md font-semibold">
                  {ele.title} <br /> {ele.title2}{" "}
                </h1>
                <p className="text-sm text-gray-600"> {ele.author}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};
export default AnimatingCards;
