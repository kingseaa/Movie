import { useMemo } from "react";
import PropTypes from "prop-types";
const Info = ({ h4, propBackgroundImage }) => {
  const infoStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div
      className="self-stretch w-[301px] rounded-2xl flex flex-row items-end justify-center bg-[url('/public/info@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-base text-grayscale-grayscale-10 font-rubik"
      style={infoStyle}
    >
      <div className="flex-1 flex flex-col items-start justify-end py-0 px-0">
        <div className="self-stretch rounded-t-none rounded-b-2xl [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] flex flex-col items-start justify-end py-2 px-5 gap-[9px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <b className="self-stretch relative tracking-[0.01em] leading-[24px]">
              {h4}
            </b>
            <div className="self-stretch flex flex-row items-center justify-center text-xs text-grayscale-grayscale-70">
              <div className="flex-1 relative tracking-[0.01em] leading-[20px]">
                The chapter about geuinea just want to go out fromhis palace to
                get freedom...
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[7px] text-xs text-grayscale-grayscale-40 font-semibold-medium">
            <div className="relative tracking-[0.01em] leading-[20px] font-medium">
              34 : 05
            </div>
            <img
              className="h-2.5 w-[139px] relative"
              loading="eager"
              alt=""
              src="/group-503.svg"
            />
            <div className="relative tracking-[0.01em] leading-[20px] font-medium">
              00 : 57 : 45
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Info.PropTypes = {
  h4: PropTypes.string.isRequired,
  propBackgroundImage: PropTypes.string.isRequired
}

export default Info;
