import HeaderDetail from "../detail_movie_components/HeaderDetail";
import MovieInfo from "../detail_movie_components/MovieInfo";
import Video from "../detail_movie_components/Video";
// import ButtonLight from "../detail_movie_components/ButtonLight";
import SimilarMoviesForYou from "../detail_movie_components/SimilarMoviesForYou";
import FooterDetail from "../detail_movie_components/FooterDetail";
import PropTypes from "prop-types";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";




const OpenMovie = () => {
  const params = useParams();
  const [Movie, setMovie] = useState([]);

  const movieId = params.movieID;

  useEffect(() => {
    const handleActorMovie = async () => {
      try {
        const response = await fetch('http://localhost:8088/api/actor', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ movie_id: movieId })
        })
        const data = await response.json();
        setMovie(data)
        console.log(data)


      } catch (error) {
        setMovie([])
        console.error('Error fetching movies:', error);
      }
    }

    handleActorMovie();
  }, []);

  console.log(Movie);
  // const mergedData = {};
  // Movie.forEach(item => {
  //   const { movie_id, title, actor_id, actor_name, poster, original_language,release_date,duration,vote_count,vote_average,descriptions} = item;
  //   const key = `${movie_id}-${title}-${actor_id}-${poster}-${original_language}-${release_date}-${duration}-${vote_count}-${vote_average}-${descriptions}`;
  //   if (!mergedData[key]) {
  //     mergedData[key] = { movie: [actor_name],movie_id, title,  actor_name, poster, original_language,release_date,duration,vote_count,vote_average,descriptions};
  //   } else {
  //     mergedData[key].movie.push(movie_id);
  //   }
  // });
  const mergedData = {};
Movie.forEach(item => {
  const { movie_id, title, actor_id, actor_name, poster, original_language,release_date,duration,vote_count,vote_average,descriptions,actor_image} = item;
  const key = `${movie_id}-${title}-${poster}-${original_language}-${release_date}-${duration}-${vote_count}-${vote_average}-${descriptions}`;
  if (!mergedData[key]) {
    mergedData[key] = { 
      movie_id, 
      title, 
      poster, 
      original_language,
      release_date,
      duration,
      vote_count,
      vote_average,
      descriptions,
      actors: [{ actor_id, actor_name, actor_image }] // Đưa tất cả các tên diễn viên vào một mảng
    };
  } else {
    mergedData[key].actors.push({ actor_id, actor_name, actor_image }); // Nếu đã tồn tại, thêm tên diễn viên vào mảng
  }
});

const result = Object.values(mergedData);

  // const result = Object.values(mergedData);
  // [
  //  {data: []},
  //  {actor: [
  //   {actor_name: ""},
  //   {actor_image: ""},

    
  //  ]} 
  // ]
  console.log(result) 

  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-end justify-start tracking-[normal]">
      {result.map((movie) => (
      // <section key={movie.movie_id} className="self-stretch flex flex-col items-center justify-start gap-[218px] bg-[url('/hero@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full shrink-0 mq750:gap-[218px] mq450:gap-[218px]">
      <section key={movie.movie_id} className="self-stretch flex flex-col items-center justify-start gap-[218px]" style={{ backgroundImage: `url(${movie.poster})`, backgroundRepeat: 'no-repeat' ,backgroundSize: 'contain', backgroundPosition: 'center' }}>
        <HeaderDetail />
        <MovieInfo
          Movie={result}
        />
      </section>
      ))}
      <Video
        Movie={result}

      />
      {/* <ButtonLight /> */}
      <SimilarMoviesForYou />
      <FooterDetail />
    </div>
  );
};

OpenMovie.propTypes = {

  actor: PropTypes.arrayOf(
    PropTypes.shape({
      movieId: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleActorMovie: PropTypes.func.isRequired,
}

export default OpenMovie;
