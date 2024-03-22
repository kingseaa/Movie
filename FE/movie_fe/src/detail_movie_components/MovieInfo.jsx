import React, { useState } from 'react';

const MovieInfo = (props) => {
  console.log(props.Movie)
  // State để lưu trữ số sao được chọn
  const [rating, setRating] = useState(0);

  // Hàm xử lý sự kiện khi click vào một ngôi sao
  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };
  
  // console.table(rating)
  return (
    <>

      <div className="self-stretch flex flex-row items-end justify-between py-16 px-[75px] box-border gap-[20px] max-w-full text-left text-13xl text-white font-rubik lg:flex-wrap lg:pl-[37px] lg:pr-[37px] lg:box-border">

        <div className="w-[506px] flex flex-col items-start justify-start gap-[24px] min-w-[506px] max-w-full lg:flex-1 mq750:min-w-full">
          {props.Movie.map((movie) => (
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[0.01em] leading-[40px] font-bold font-inherit mq1050:text-7xl mq1050:leading-[32px] mq450:text-lgi mq450:leading-[24px] text-2xl md:text-3xl lg:text-3xl">
                {movie.title}
              </h1>
              <div className="self-stretch relative text-lg tracking-[0.01em] leading-[22px] text-grayscale-grayscale-60 flex items-center">
                <span className="mr-1">Release_date: {movie.release_date} •</span>
                <img
                  className="h-4 w-4 relative mr-1"
                  loading="eager"
                  alt=""
                  src="/star.svg"
                />
                <span className="mr-1">{movie.vote_average}</span>
                <span>• Vote: {movie.vote_count}</span>
              </div>
            </div>
          ))}
          <div className="flex flex-row items-center justify-start gap-[24px] max-w-full text-sm text-grayscale-grayscale-10 font-semibold-medium mq750:flex-wrap">
            <div className="flex flex-row items-center justify-center">
              <div className="h-[46px] rounded-3xs bg-green flex flex-row items-center justify-center py-3 px-6 box-border gap-[9px] whitespace-nowrap">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="eager"
                  alt=""
                  src="/iconsolidplay.svg"
                />
                <b className="relative tracking-[0.01em] leading-[22px]">
                  Continue Watching
                </b>
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start">
              <div className="h-12 rounded-3xs box-border flex flex-row items-start justify-start py-3 pr-[21px] pl-6 gap-[10px] whitespace-nowrap border-[1px] border-solid border-white">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/iconoutlinebookmark.svg"
                />
                <b className="relative text-sm tracking-[0.01em] leading-[22px] font-semibold-medium text-white text-left">
                  Add Watchlist
                </b>
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-row items-center justify-start gap-[24px] max-w-full mq750:flex-wrap">
          <button className="cursor-pointer [border:none] p-0 bg-black flex flex-row items-start justify-start">
            <div className="h-12 rounded-3xs box-border flex flex-row items-start justify-start py-3 pr-[25px] pl-[23px] gap-[10px] border-[1px] border-solid border-black1">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/iconoutlinedownload.svg"
              />
              <b className="relative text-sm tracking-[0.01em] leading-[22px] font-semibold-medium text-white text-left">
                Download
              </b>
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start">
            <div className="h-12 rounded-3xs bg-black box-border flex flex-row items-start justify-start py-3 pr-[25px] pl-[23px] gap-[10px] border-[1px] border-solid border-black1">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/iconoutlineshare.svg"
              />
              <b className="relative text-sm tracking-[0.01em] leading-[22px] font-semibold-medium text-white text-left">
                Share
              </b>
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start">
            <div className="h-12 rounded-3xs bg-black box-border flex flex-row items-start justify-start py-3 pr-[25px] pl-[23px] gap-[10px] border-[1px] border-solid border-black1">
            {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  onClick={() => handleStarClick(index + 1)}
                  className={`h-4 w-4 relative mr-1 cursor-pointer ${index < rating ? 'text-yellow-500' : 'text-gray-400'
                }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M17.99,7.53a1,1,0,0,0-.81-.68l-5.55-.64L10.35,1.1a1,1,0,0,0-1.87,0L8.36,6.21,2.81,6.85a1,1,0,0,0-.81.68,1,1,0,0,0,.29.91l4,3.66L4.57,17.4a1,1,0,0,0,1.45,1.05L10,15.36l4.14,3.09a1,1,0,0,0,1.45-1.05l-1.52-5.86,4-3.66A1,1,0,0,0,17.99,7.53Z"
              ></path>
            </svg>
              ))}
            </div>
          </button>
        </div>
      </div>

    </>
  );

};

export default MovieInfo;
