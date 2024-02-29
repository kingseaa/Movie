import wonderwomen from "../assets/wonderwomen.png";
import avartar_login from "../assets/login-avartar.jpg";
// Import Swiper styles
import PropTypes from "prop-types";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoStar } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { useEffect, useState } from "react";
import '../index.css';
import { AiFillBook } from "react-icons/ai";
import { FaPerson } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineHistory } from "react-icons/md";
import {Link} from 'react-router-dom';
import OpenMovie from "../pages/OpenMovie";
export default function Header(props) {
  const settings = {
    className:
      "container absolute bottom-20 max-w-screen-xl m-auto left-0 right-0 flex",
    infinite: true,
    slidesToShow: 6,
    centerPadding: "10px",
    swipeToSlide: true,
    autoplay: true,
    slidesToScroll: 1,
    // afterChange: function(index) {
    //   console.log(
    //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //   );
    // }
  };
  const [title, setTitle] = useState('');
  const [results, setResults] = useState([]);
  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch(`http://localhost:8088/api/search?title=${title}`, {
        method: 'GET',
        mode: 'cors',
      });
      const data = await response.json();
      setResults(data);
    };

    if (title.length >= 3) {
      fetchResults();
    } else {
      setResults([]);
    }
  }, [title]);

  const handleTitleChange = (event) => {
    const title = event.target.value;
    setTitle(title);
  };
  const handleGenreMovie = async (genres) => {
    const genreName = genres;
    console.log(genreName)
   try {
    const response = await fetch('http://localhost:8088/api/findgenre', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ genreName: genreName })
    })
    const data = await response.json();
    // console.log(data)
    props.handleFilerGenreMovie(data.slice(0, 20))
  
   } catch (error) {
    console.error('Error fetching movies:', error);
   }
  }

  const handlePlay = (titleMovie) => {
    console.log(titleMovie)
  }
  return (
    <>
      <div className="relative">
        
        <img
          src={wonderwomen}
          alt="wonderwomen"
          className="image h-96 w-full"
        />
        {/* Header */}
        <div className="container">
          <div className="header_nav absolute text-white left-0 right-0 top-0 max-w-screen-xl m-auto">
            <div className="inline-block">
              <ul className="flex">
                <li className="p-3">
                  <a href="#">Logo</a>
                </li>

                <li className="p-3 group flex items-center relative  inline-block dropdown">
                  <a href="#" className="mr-1 ">
                    Thể loại
                  </a>
                  <AiFillCaretDown size={15} />
                  <div className="cursor-pointer text-black p-1.5 max-w-lg w-[30rem] group-hover:flex hidden flex flex-wrap top-9 bg-slate-50 rounded  shadow-lg z-10 dropdown-content absolute ">
                    {props.genre.map((genre, index) => (
                      <a
                        key={index}
                        href="#"
                        className="w-3/12 p-1 hover:bg-slate-400 flex text-sm items-center"
                        onClick={() => handleGenreMovie(genre.genre_name)}
                      >
                        <AiFillCaretRight size={10} />
                        <p className="ml-1">{genre.genre_name}</p>
                      </a>
                    ))}
                  </div>
                </li>
                <li className="p-3">
                  <a href="#">Phim yêu thích</a>
                </li>
              </ul>
            </div>
            <div className=" float-right p-3 ">
            <div className="flex">
              <div className="max-w-md mx-auto">
                <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                  <div className="grid place-items-center h-full w-12 text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <input
                      className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                      id="search"
                      type="text"
                      placeholder="search"
                      value={title}
                      onChange={handleTitleChange}
                    />
                  </div>
                </div>
                {results.length > 0 && (
                  <div className="search-results mt-2 max-h-60 overflow-y-auto">
                    <ul className="bg-white shadow-md rounded-md">
                      {results.map((result) => (
                        <li key={result.movie_id} >
                          <Link element={<OpenMovie detai_id_film={result.movie_id} />} path={`/movie/${result.movie_id}`} className="block px-4 py-2 hover:bg-gray-100 text-black" >{result.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <li className="p-3 group flex items-center relative  inline-block dropdown">
                  <img
                    src={avartar_login}
                    alt="avartar_login"
                    className="h-8 w-8 rounded-3xl"
                  />

                  <div className="cursor-pointer text-black p-1.5 max-w-lg w-[16rem]  translate-x-[-50%] place-content-center group-hover:flex hidden flex flex-wrap top-14 shadow-lg z-10 dropdown-content  absolute" >
                    <div className="rounded-t-xl overflow-hidden max-w-lg w-full ">
                      <a href="#" >
                        <div className="flex text-sm items-center h-20 bg-lime-600 justify-center">
                          <div className="flex items-center ">
                            <img
                              src={avartar_login}
                              alt="avartar_login"
                              className="h-8 w-8 rounded-3xl mr-2"
                            />
                            <p>Name User</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="rounded-b-xl overflow-hidden max-w-lg w-[60rem]  ">

                      <a href="#" >
                        <div className=" text-sm items-center bg-slate-400 p-[8px]  ">
                          <div className="flex  justify-between">
                            <div className="flex items-center">
                              <div className="mr-2">
                                <FaPerson />
                              </div>

                              <p>Thông tin cá nhân</p>
                            </div>
                            <div className="flex items-center">

                              <AiFillCaretDown size={15} />
                            </div>

                          </div>
                        </div>
                      </a>
                      <a href="#" >
                        <div className=" text-sm items-center bg-slate-400 p-[8px]  ">
                          <div className="flex  justify-between">
                            <div className="flex items-center">

                              <div className="mr-2">
                                <AiFillBook />
                              </div>
                              <p>Bộ sưu tập</p>
                            </div>
                            <div className="flex items-center">

                              <AiFillCaretDown size={15} />
                            </div>

                          </div>
                        </div>
                      </a>
                      <a href="#" >
                        <div className=" text-sm items-center bg-slate-400 p-[8px]  ">
                          <div className="flex  justify-between">
                            <div className="flex items-center">
                              <div className="mr-2">
                                <MdOutlineHistory />
                              </div>
                              <p>Lịch sử xem phim</p>
                            </div>
                            <div className="flex items-center">

                              <AiFillCaretDown size={15} />
                            </div>

                          </div>
                        </div>
                      </a>
                      <a href="#" >
                        <div className=" text-sm items-center bg-slate-400 p-[8px]  ">
                          <div className="flex  justify-between">
                            <div className="flex items-center">

                              <div className="mr-2">
                                <IoIosLogOut />
                              </div>
                              <p>Đăng xuất</p>
                            </div>
                            <div className="flex items-center">

                              <AiFillCaretDown size={15} />
                            </div>

                          </div>
                        </div>
                      </a>
                    </div>


                  </div>


                </li>
              {/* <div><a href="">Đăng nhập</a></div> */}
            </div>
            
              
            </div>
          </div>
        </div>
        {/* // Time release film */}
        <div className="time absolute top-1/4">
          <div className="flex flex-row items-center">
            <div className="h-0.5 w-32 bg-white mr-1"></div>
            <p className="text-3xl italic text-neutral-50">Today</p>
          </div>
          <div className="flex flex-row items-center mt-4">
            <div className="h-0.5 w-44 bg-white mr-1"></div>
            <p className="text-3xl italic text-neutral-50">Soon</p>
          </div>
        </div>
        {/* film card */}
        <div className="slider-container">
          <Slider {...settings}>
            {props.movies.map((movie, index) => (
              <div
                className="film_card text-slate-200 overflow-hidden"
                key={index}
              >
                <div className=" bg-slate-600 mt-12 relative card-film rounded-md">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="h-full w-full"
                />
                <div className="detail-content absolute bottom-0 w-full">
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
            ))}
          </Slider>
        </div>
      </div>
      */
    </>
  );
}

Header.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      movie_id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      original_language: PropTypes.string.isRequired,
    })
  ).isRequired,
  genre: PropTypes.arrayOf(
    PropTypes.shape({
      genre_name: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleFilerGenreMovie: PropTypes.func.isRequired,
};
