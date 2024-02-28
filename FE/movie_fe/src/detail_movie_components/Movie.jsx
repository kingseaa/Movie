import { useMemo } from "react";
import PropTypes from "prop-types";

const Movie = ({ image, h4, propBorderRadius }) => {
  const imageIconStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div className="self-stretch w-[280px] shrink-0 flex flex-col items-start justify-center gap-[12px] text-left text-base text-grayscale-grayscale-10 font-rubik">
      <img
        className="self-stretch flex-1 relative rounded-2xl max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image}
        style={imageIconStyle}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
        <b className="self-stretch relative tracking-[0.01em] leading-[24px]">
          {h4}
        </b>
        <div className="self-stretch flex flex-row items-center justify-center gap-[4px] text-xs">
          <div className="flex flex-row items-center justify-start gap-[3px]">
            <div className="flex flex-row items-start justify-start">
              <img
                className="h-[18px] w-[18px] relative"
                loading="eager"
                alt=""
                src="/star.svg"
              />
            </div>
            <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
              4.6
            </div>
          </div>
          <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium text-grayscale-grayscale-70">
            | Action • Movie
          </div>
        </div>
      </div>
    </div>
  );
};

Movie.PropTypes = {
  h4: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  propBorderRadius: PropTypes.string.isRequired
}

export default Movie;
