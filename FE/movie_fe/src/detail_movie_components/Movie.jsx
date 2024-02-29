import { useMemo } from "react";
import propTypes from "prop-types";

const Movie = ({ image, h4, propBorderRadius }) => {
  const imageIconStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div className=" shrink-0 flex flex-col gap-[12px] text-grayscale-grayscale-10">
      <img
        className="self-stretch flex-1 relative rounded-2xl max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image}
        style={imageIconStyle}
      />
        <b className="self-stretch relative tracking-[0.01em] leading-[24px] text-white">
          {h4}
        </b>
        <div className="self-stretch flex flex-row items-center justify-center gap-[4px] text-xs">
          <div className="flex flex-row items-center justify-start gap-[3px]">
            <div className="flex flex-row ">
              <img
                className="h-[18px] w-[18px] relative"
                loading="eager"
                alt=""
                src="/star.svg"
              />
            </div>
            <div className="relative tracking-[0.01em] leading-[20px] font-semibold text-white">
              4.6
            </div>
          </div>
          <div className="text-white flex-1 relative tracking-[0.01em] leading-[20px] font-medium text-grayscale-grayscale-70">
            | Action • Movie
          </div>
        </div>
    </div>
  );
};

Movie.propTypes = {
  h4: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  propBorderRadius: propTypes.string.isRequired
}

export default Movie;
