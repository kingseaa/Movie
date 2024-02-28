import Info from "./Info";

const ButtonLight = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-10 pr-[204px] pl-[75px] box-border max-w-full shrink-0 text-left text-base text-gray-100 font-semibold-medium lg:pl-[37px] lg:pr-[102px] lg:box-border mq750:pr-[51px] mq750:box-border mq450:pr-5 mq450:box-border">
      <div className="w-[1569px] flex flex-col items-start justify-start gap-[40px] max-w-[135%] shrink-0 mq750:gap-[40px]">
        <div className="w-[314px] flex flex-row items-start justify-start gap-[24px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] text-white">
            <div className="relative tracking-[0.01em] leading-[24px] font-semibold">
              Episode
            </div>
            <div className="self-stretch h-0.5 relative bg-green [transform:_rotate(-90deg)]" />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
            <div className="relative tracking-[0.01em] leading-[24px] font-semibold">
              Universe
            </div>
            <div className="self-stretch h-0.5 relative [transform:_rotate(-90deg)]" />
          </div>
          <div className="flex flex-col items-start justify-start gap-[10px]">
            <div className="relative tracking-[0.01em] leading-[24px] font-semibold">
              News
            </div>
            <div className="w-11 h-0.5 relative [transform:_rotate(-90deg)]" />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
            <div className="relative tracking-[0.01em] leading-[24px] font-semibold">
              Reviews
            </div>
            <div className="self-stretch h-0.5 relative [transform:_rotate(-90deg)]" />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-5xl text-grayscale-grayscale-10 font-rubik">
          <div className="w-[1290px] flex flex-row flex-wrap items-center justify-start gap-[24px] max-w-full">
            <h1 className="m-0 flex-1 relative text-inherit tracking-[0.01em] leading-[32px] font-bold font-inherit inline-block min-w-[111px] max-w-full mq450:text-lgi mq450:leading-[26px]">
              1-9 Episode
            </h1>
            <div className="rounded-lg bg-black flex flex-row items-start justify-start text-xs text-white">
              <div className="rounded-lg flex flex-row items-center justify-center py-1 px-3.5 gap-[10px] whitespace-nowrap border-[1px] border-solid border-black1">
                <b className="relative tracking-[0.01em] leading-[22px]">
                  Season 1
                </b>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt=""
                  src="/iconoutlinechevrondown.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[1365px] h-[197px] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[16px] max-w-full text-base">
            <Info h4="Chapter 1" />
            <Info h4="Chapter 2" propBackgroundImage="url('/info1@3x.png')" />
            <Info h4="Chapter 3" propBackgroundImage="url('/info2@3x.png')" />
            <Info h4="Chapter 4" propBackgroundImage="url('/info3@3x.png')" />
            <div className="w-[301px] rounded-2xl flex flex-row items-end justify-start py-0 px-0 box-border bg-[url('/public/info4@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <div className="flex-1 rounded-t-none rounded-b-2xl [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] flex flex-col items-start justify-end py-2 px-5 gap-[9px]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <b className="self-stretch relative tracking-[0.01em] leading-[24px]">
                    Chapter 1 5
                  </b>
                  <div className="self-stretch flex flex-row items-center justify-center text-xs text-grayscale-grayscale-70">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px]">
                      The chapter about geuinea just want to go out fromhis
                      palace to get freedom...
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-5 flex flex-row items-center justify-start gap-[7px] text-xs text-grayscale-grayscale-40 font-semibold-medium">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    34 : 05
                  </div>
                  <img
                    className="h-2.5 w-[139px] relative"
                    alt=""
                    src="/group-503.svg"
                  />
                  <div className="self-stretch w-[67px] relative tracking-[0.01em] leading-[20px] font-medium inline-block">
                    00 : 57 : 45
                  </div>
                </div>
              </div>
              <div className="w-[167px] [background:linear-gradient(269.96deg,_#0d0c0f,_rgba(13,_12,_15,_0),_#0d0c0f)] flex flex-row items-center justify-end pt-[82px] px-5 pb-[83px] box-border z-[1] ml-[-167px]">
                <div className="h-8 w-8 rounded-81xl bg-black1 flex flex-row items-start justify-start p-1.5 box-border">
                  <img
                    className="h-5 w-5 relative"
                    alt=""
                    src="/arrowright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ButtonLight;
