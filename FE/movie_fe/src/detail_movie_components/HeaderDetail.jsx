const HeaderDetail = () => {
  return (
    <header className="self-stretch flex flex-row items-center justify-between py-[39px] px-[75px] box-border gap-[20px] top-[0] z-[99] sticky max-w-full text-left text-base text-white font-semibold-medium mq1050:pl-[37px] mq1050:pr-[37px] mq1050:box-border">
      <div className="flex flex-row items-center justify-start gap-[4px]">
        <img
          className="h-8 w-8 relative overflow-hidden shrink-0"
          loading="eager"
          alt=""
          src="/logo.svg"
        />
        <img
          className="h-[22px] w-[117.6px] relative"
          loading="eager"
          alt=""
          src="/saintstream.svg"
        />
      </div>
      <div className="w-[445px] flex flex-row items-start justify-start gap-[32px] max-w-full mq750:hidden mq450:gap-[32px]">
        <div className="relative font-extrabold">Home</div>
        <div className="relative">Discover</div>
        <div className="relative whitespace-nowrap">Movie Release</div>
        <div className="relative">Forum</div>
        <div className="relative">About</div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[23px]">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="eager"
          alt=""
          src="/iconoutlinesearch.svg"
        />
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="eager"
          alt=""
          src="/iconoutlinebell.svg"
        />
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <img
            className="h-8 w-8 relative rounded-[50%] object-contain"
            loading="eager"
            alt=""
            src="/image@2x.png"
          />
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0"
            loading="eager"
            alt=""
            src="/arrow--down-2.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderDetail;
