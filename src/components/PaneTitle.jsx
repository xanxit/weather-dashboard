/* eslint-disable react/prop-types */
const PanelTitle = ({ text, gradientText, titleClass }) => {
  return (
    <div
      className={
        titleClass
          ? titleClass
          : `text-2xl md:text-3xl flex flex-col justify-center items-center gap-y-2 font-semibold text-center`
      }
    >
      <p>{text}</p>
      <p className="gradient-text">{gradientText}</p>
    </div>
  );
};
export default PanelTitle;
