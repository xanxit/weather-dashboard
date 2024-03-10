const AnimatingCards = () => {
  return (
    <>
      <div className="flex w-full pl-6 pt-4 cursor-pointer">
        <div className="imageCard group">
          <img
            src="/image-1.webp"
            className="group-hover:hidden rounded-lg"
            alt="first card"
          />
          <div className="hidden p-4 group-hover:flex flex-row gap-6 transition ease-in-out delay-700">
            <img
              src="/image-1.webp"
              height={60}
              width={59}
              className="!h-[60px] !w-[59px] rounded-lg"
              alt="first image"
            />
            <div className="flex flex-col gap-1 min-w-40">
              <h1 className="text-md font-semibold">
                {" "}
                Strange Cloud <br />
                Formation
              </h1>
              <p className="text-sm text-gray-600"> By Mike Taylor</p>
            </div>
          </div>
        </div>
        <div className="imageCard group">
          <img
            src="/image-2.webp"
            className="group-hover:hidden rounded-lg"
            alt="first card"
          />
          <div className="hidden p-4 group-hover:flex flex-row gap-6 transition delay-700">
            <img
              src="/image-2.webp"
              height={60}
              width={59}
              className="!h-[60px] !w-[59px] rounded-lg"
              alt="first image"
            />
            <div className="flex flex-col gap-1 min-w-40">
              <h1 className="text-md font-semibold">
                {" "}
                Strange Cloud <br />
                Formation
              </h1>
              <p className="text-sm text-gray-600"> By Mike Taylor</p>
            </div>
          </div>
        </div>
        <div className="imageCard group">
          <img
            src="/image-3.webp"
            className="group-hover:hidden rounded-lg"
            alt="first card"
          />
          <div className="hidden p-4 group-hover:flex gap-6 transition transform ease-in-out delay-100">
            <img
              src="/image-3.webp"
              height={60}
              width={59}
              className="!h-[60px] !w-[59px] rounded-lg"
              alt="first image"
            />
            <div className="flex flex-col gap-1 min-w-40">
              <h1 className="text-md font-semibold">
                {" "}
                Strange Cloud <br />
                Formation
              </h1>
              <p className="text-sm text-gray-600"> By Mike Taylor</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AnimatingCards;
