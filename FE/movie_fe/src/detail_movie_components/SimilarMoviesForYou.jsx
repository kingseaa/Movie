import Movie from "./Movie";
import Slider from 'react-slick';
const SimilarMoviesForYou = () => {
  const settings = {
    // className: "h-[200px]",
    dots: true,
    speed: 500,
    // Giá trị luôn >= 5, giao diện không bị vỡ
    slidesToShow: 6,
    slidesToScroll: 1,
    infinity: false
  };
  return (
    <section >
      <h1 className="text-white">
        Similar Movies for you
      </h1>
      <div className="w-[1464px]">
        <div className=" w-[1365px]  max-w-full">
         
         <Slider {...settings}>
         <Movie
            image="/image-1@2x.png"
            h4="Red Notice"
            propBorderRadius="16px"
          />
          <Movie
            image="/image-2@2x.png"
            h4="Red Notice"
            propBorderRadius="16px"
          />
          <Movie
            image="/image-3@2x.png"
            h4="Red Notice"
            propBorderRadius="16px"
          />
          <Movie
            image="/image-4@2x.png"
            h4="Red Notice"
            propBorderRadius="16px"
          />
          <Movie
            image="/image-5@2x.png"
            h4="Red Notice"
            propBorderRadius="16px"
          />
          
         </Slider>

         </div>
        
      </div>
    </section>
  );
};

export default SimilarMoviesForYou;
