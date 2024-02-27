package svtt.example.movie_be.service.imp;

import java.util.List;

public interface GenreMovieServiceIplm {
	public List<Object[]> findByGenreName(String genreName);
}