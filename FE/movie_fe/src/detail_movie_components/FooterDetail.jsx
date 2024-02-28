const Footer = () => {
  return (
    <footer className="self-stretch box-border flex flex-col items-center justify-start pt-[70px] px-0 pb-10 gap-[60px] max-w-full shrink-0 text-left text-21xl text-white font-rubik border-t-[1px] border-solid border-gray-300 mq750:gap-[60px] mq450:pt-[45px] mq450:pb-[26px] mq450:box-border">
      <div className="self-stretch h-px relative box-border hidden opacity-[0.35] border-[1px] border-solid border-grey" />
      <div className="self-stretch flex flex-row items-end justify-between py-0 px-[75px] box-border gap-[20px] max-w-full mq1050:flex-wrap mq1050:pl-[37px] mq1050:pr-[37px] mq1050:box-border">
        <div className="w-[444px] flex flex-col items-start justify-center min-w-[444px] max-w-full mq750:min-w-full mq1050:flex-1">
          <h1 className="m-0 self-stretch h-48 relative text-inherit leading-[48px] font-medium font-inherit inline-block mq1050:text-13xl mq1050:leading-[38px] mq450:text-5xl mq450:leading-[29px]">{`Our platform is trusted by millions & features best updated movies all around the world.`}</h1>
        </div>
        <div className="flex flex-col items-end justify-end gap-[138px] min-w-[413px] max-w-full text-right text-xl mq750:min-w-full mq1050:flex-1 mq450:gap-[138px]">
          <h2 className="m-0 relative text-inherit leading-[32px] font-normal font-inherit whitespace-pre-wrap mq450:text-base mq450:leading-[26px]">
            Home / Discover / Influence / Release
          </h2>
          <div className="w-[248px] flex flex-row items-start justify-between gap-[20px]">
            <img
              className="h-8 w-8 relative object-contain min-h-[32px]"
              loading="eager"
              alt=""
              src="/iconsocial-networkinstagram@2x.png"
            />
            <img
              className="h-8 w-8 relative object-contain min-h-[32px]"
              loading="eager"
              alt=""
              src="/iconsocial-networkfacebook@2x.png"
            />
            <img
              className="h-8 w-8 relative object-contain min-h-[32px]"
              loading="eager"
              alt=""
              src="/iconsocial-networktwitter@2x.png"
            />
            <img
              className="h-8 w-8 relative object-contain min-h-[32px]"
              loading="eager"
              alt=""
              src="/iconsocial-networkgoogle@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between py-0 px-[75px] gap-[20px] text-sm text-gray-200 mq750:flex-wrap mq750:pl-[37px] mq750:pr-[37px] mq750:box-border">
        <div className="flex flex-row items-start justify-start gap-[26px] mq450:flex-wrap">
          <div className="relative leading-[22px]">Privacy policy</div>
          <div className="relative leading-[22px]">Term of service</div>
          <div className="relative leading-[22px]">Language</div>
        </div>
        <div className="relative text-mid leading-[25px] font-text-medium-text">
          © 2023
        </div>
      </div>
    </footer>
  );
};

export default Footer;
