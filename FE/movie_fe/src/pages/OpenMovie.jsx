import HeaderDetail from "../detail_movie_components/HeaderDetail";
import MovieInfo from "../detail_movie_components/MovieInfo";
import Video from "../detail_movie_components/Video";
// import ButtonLight from "../detail_movie_components/ButtonLight";
import SimilarMoviesForYou from "../detail_movie_components/SimilarMoviesForYou";
import FooterDetail from "../detail_movie_components/FooterDetail";

const OpenMovie = () => {

  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-end justify-start tracking-[normal]">
      <section className="self-stretch flex flex-col items-center justify-start gap-[218px] bg-[url('/hero@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full shrink-0 mq750:gap-[218px] mq450:gap-[218px]">
        <HeaderDetail />
        <MovieInfo />
      </section>
      <Video />
      {/* <ButtonLight /> */}
      <SimilarMoviesForYou />
      <FooterDetail />
    </div>
  );
};

export default OpenMovie;
