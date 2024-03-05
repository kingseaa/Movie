package svtt.example.movie_be.service.imp;

import java.util.List;
import java.util.Map;

import svtt.example.movie_be.entities.Movies;

public interface MovieServiceIplm {
	public List<Map<String, Object>> getAllMovies();

	public List<Movies> getFirst20Movies();

	public List<Movies> findByTitleContaining(String title);
	
//	public List<Movies> getMovieOverMovieId(Integer movie_id);

    
}
