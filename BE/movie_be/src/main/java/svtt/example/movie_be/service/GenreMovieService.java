package svtt.example.movie_be.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import svtt.example.movie_be.entities.GenreMovie;
import svtt.example.movie_be.repository.GenreMovieRepository;
@Service
public class GenreMovieService {
    private final GenreMovieRepository genreMovieRepository;

    
    public GenreMovieService(GenreMovieRepository genreMovieRepository) {
        this.genreMovieRepository = genreMovieRepository;
    }

    public List<Object[]> get20GenreMovies() {
        return genreMovieRepository.findFirst20By();
    }
    
    public List<Map<String, Object>> getMoviesByGenre(String name) {
    	 List<Object[]> resultList = genreMovieRepository.findMoviesByGenre(name);
         List<Map<String, Object>> movies = new ArrayList<>();

         for (Object[] row : resultList) {
             Map<String, Object> movieMap = new HashMap<>();
             movieMap.put("movie_id", row[0]);
             movieMap.put("title", row[2]);
             movieMap.put("poster", row[11]);
             movieMap.put("original_language", row[7]);
             movieMap.put("release_date", row[4]);
             movieMap.put("genre_name", row[12]);
             movieMap.put("duration", row[5]);
             movieMap.put("vote_average", row[9]);
             movieMap.put("descriptions", row[3]);
             movies.add(movieMap);
         }

         return movies;
        
    }
}