import PropTypes from "prop-types";
import { IoStar } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { MdOutlineBookmarkAdd } from "react-icons/md";
export default function Section(props) {

  const handlePlay = (titleMovie) => {
    console.log(titleMovie)
  }
  return (
    <div className="max-w-screen-xl m-auto">
      {/* Current playing */}
      <div className="current_playing mt-16 mb-6">
       
      </div>
      <div className="grid grid-cols-4 gap-4">
        {props.movies.map((movie, index) => (
          <div key={index}>
          <div  className="w-full ">
            <div className="relative">
              <div className="w-72 h-96 bg-slate-600 mt-12 relative card-film  ">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="h-full w-full"
                />
                <div className="detail-content absolute bottom-0  w-full">
                  <div className="button flex justify-end  mb-2.5 mr-2.5  ">
                    {" "}
                    <div className="p-3 rounded-full bg-green-500 mr-2 cursor-pointer" onClick={() => handlePlay(movie.title)}>
                      <FaPlay color="white" />
                    </div>
                    <div className="p-3 rounded-full bg-slate-200">
                      <MdOutlineBookmarkAdd color="black" />
                    </div>
                  </div>
                  <div className="   text-xs text-white bg-slate-900 h-3/6 w-full p-2">
                    <h1 className="text-2xl">{movie.title}</h1>
                    <div className="flex items-center mt-2">
                      <IoStar color="yellow" className="mr-1" />
                      <span className="mr-1">{movie.vote_average}</span>
                      <div className="divide w-1 h-3 bg-gray-500 mr-1"></div>
                      <p className="mr-1">{movie.duration} phút</p>
                      <div className="divide w-1 h-3 bg-gray-500 mr-1"></div>
                      <p className="mr-1">{movie.release_date}</p>
                    </div>
                    <div className="genre mb-2">
                      {movie.genres.map((genre, index) => (
                          <>
                           <div key={index} className="genre-card bg-gray-500 inline-block px-1 rounded-sm mr-2 mt-2 ">
                        {genre}
                        </div>
                          </>
                      ))}
                     
                      
                    </div>
                    <div className="description line-clamp-5">
                      <p>{movie.descriptions}</p>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-white">{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

Section.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      movie_id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      original_language: PropTypes.string.isRequired,
    })
  ).isRequired,
};
