import Movie from "./Movie";

const SimilarMoviesForYou = () => {
  return (
    <section className="self-stretch box-border flex flex-col items-start justify-start py-10 pr-0 pl-[75px] gap-[24px] max-w-full shrink-0 text-left text-5xl text-grayscale-grayscale-10 font-rubik border-t-[1px] border-solid border-gray-300 lg:pl-[37px] lg:box-border mq450:pt-[26px] mq450:pb-[26px] mq450:box-border">
      <h1 className="m-0 self-stretch relative text-inherit tracking-[0.01em] leading-[32px] font-bold font-inherit mq450:text-lgi mq450:leading-[26px]">
        Similar Movies for you
      </h1>
      <div className="w-[1464px] h-64 flex flex-row items-center justify-start max-w-[107%] shrink-0 text-base">
        <div className="self-stretch w-[1365px] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[16px] max-w-full">
          <Movie image="/image-1@2x.png" h4="TOP GUN:Maverick" />
          <Movie
            image="/image-2@2x.png"
            h4="Spiderman; into the spider verse"
            propBorderRadius="16px"
          />
          <Movie
            image="/image-3@2x.png"
            h4="Black Panther; Wakanda Forever"
            propBorderRadius="16px"
          />
          <Movie
            image="/image-4@2x.png"
            h4="Batman V Superman"
            propBorderRadius="unset"
          />
          <Movie
            image="/image-5@2x.png"
            h4="Red Notice"
            propBorderRadius="16px"
          />
        </div>
        <div className="self-stretch w-[167px] [background:linear-gradient(269.96deg,_#0d0c0f,_rgba(13,_12,_15,_0),_#0d0c0f)] flex flex-row items-center justify-end py-[72px] px-5 box-border z-[1] ml-[-266px]">
          <div className="flex flex-row items-center justify-start">
            <div className="h-8 w-8 rounded-81xl bg-black1 flex flex-row items-start justify-start p-1.5 box-border">
              <img className="h-5 w-5 relative" alt="" src="/arrowright.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimilarMoviesForYou;
