import Header from "../homepage_components/Header";
import Section from "../homepage_components/Section";
import Footer from "../homepage_components/Footer";
import News from "../homepage_components/News";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [dataMovies, setDataMovies] = useState([]);
  const [dataGenre, setDataGenre] = useState([]);
  const [, setDataGenreMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDataMovies();
    fetchDataGenre();
    fetchGenreMovies();
  }, []);

  const fetchDataMovies = async () => {
    try {
      // Fetch data from the API
      const response = await fetch("http://localhost:8088/api/movies", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      // Parse the response as JSON
      const jsonData = await response.json();
      // Update state with the fetched data
      setDataMovies(jsonData.slice(0, 40));
      setLoading(false); // Set loading to false
    } catch (error) {
      // Set error state if fetching fails
      setError(error);
      setLoading(false); // Set loading to false
    }
  };

  const fetchDataGenre = async () => {
    try {
      // Fetch data from the API
      const response = await fetch("http://localhost:8088/api/genre", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      // Parse the response as JSON
      const jsonData = await response.json();
      // Update state with the fetched data
      setDataGenre(jsonData);
      setLoading(false); // Set loading to false
    } catch (error) {
      // Set error state if fetching fails
      setError(error);
      setLoading(false); // Set loading to false
    }
  };

  const fetchGenreMovies = async () => {
    try {
      // Fetch data from the API
      const response = await fetch("http://localhost:8088/api/limited", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      // Parse the response as JSON
      const jsonData = await response.json();
      // console.log(jsonData)
      // Update state with the fetched data
      setDataGenreMovies(jsonData);
      setLoading(false); // Set loading to false
    } catch (error) {
      // Set error state if fetching fails
      setError(error);
      setLoading(false); // Set loading to false
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error message if an error occurred
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  


  const mergedData = {};
  dataMovies.forEach(item => {
    const { movie_id, title, poster, original_language,release_date, genre_name,duration,vote_average,descriptions} = item;
    const key = `${movie_id}-${title}-${poster}-${original_language}-${release_date}-${duration}-${descriptions}`;
    if (!mergedData[key]) {
      mergedData[key] = { movie_id, title,poster, original_language,release_date, genres: [genre_name],duration,vote_average,descriptions};
    } else {
      mergedData[key].genres.push(genre_name);
    }
  });
  
  const result = Object.values(mergedData);
  console.log(result) 

  const handleFilerGenreMovie = (newData) => {
    setDataMovies(newData);
  };

  return (
    <div>
      <Header
        genre={dataGenre}
        movies={result}
        handleFilerGenreMovie={handleFilerGenreMovie}
      />

      <Section movies={result} />

      <News />
      <Footer />
    </div>
  );
}
