import { TypeAnimation } from "react-type-animation";

const DefaultUI = () => {
  return (
    <>
      <div className="flex flex-col gap-y-8 pl-4">
        <div className="hidden md:flex justify-end pr-24 -mt-1">
          <img src="https://website-assets.atlan.com/img/forrester-arrow.svg" />
        </div>
        <div className="flex justify-start items-center md:-mt-12">
          <p className="text-left text-[42px] font-bold">
            {" "}
            Start Typing to know your
            <br />{" "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "city's temperature",
                2000, // wait 1s before replacing "temperature" with "humidity"
                "city's humidity",
                2000,
                "city's visibility",
                2000,
                "city's temperature forecast",
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              className="gradient-text2"
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default DefaultUI;
