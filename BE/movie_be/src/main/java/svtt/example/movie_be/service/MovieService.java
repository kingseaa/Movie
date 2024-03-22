package svtt.example.movie_be.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import svtt.example.movie_be.entities.Movies;
import svtt.example.movie_be.repository.GenreMovieRepository;
import svtt.example.movie_be.repository.MoviesRepository;
import svtt.example.movie_be.service.imp.MovieServiceIplm;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class MovieService implements MovieServiceIplm {
	
	@Autowired
    private final MoviesRepository movieRepository;
	@Autowired
	private final GenreMovieRepository genreMovieRepository;
   
    
	@PersistenceContext
	private EntityManager entityManager;
	public MovieService(MoviesRepository movieRepository, GenreMovieRepository genreMovieRepository) {
        this.movieRepository = movieRepository;
        this.genreMovieRepository = genreMovieRepository;
    }

	@Override
	public List<Movies> findByTitleContaining(String title) {
	    return movieRepository.findByTitleContaining( title );
	}
	
    public List<Map<String, Object>> getAllMovies() {
    	 List<Object[]> resultList = genreMovieRepository.getMovies();
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
    
    public List<Map<String, Object>> getSuggestMovies(Integer[] movieIds) {
   	 List<Object[]> resultList = movieRepository.getMoviesRecommend(movieIds);
        List<Map<String, Object>> movies = new ArrayList<>();

        for (Object[] row : resultList) {
            Map<String, Object> movieMap = new HashMap<>();
            movieMap.put("movie_id", row[0]);
            movieMap.put("title", row[2]);
            movieMap.put("descriptions", row[3]);
            movieMap.put("release_date", row[4]);
            movieMap.put("duration", row[5]);
            movieMap.put("original_language", row[6]);
            movieMap.put("vote_average", row[8]);
            movieMap.put("vote_count", row[9]);
            movieMap.put("poster", row[10]);
            movieMap.put("url", row[11]);
            
            movieMap.put("genre_name", row[12]);
            
            
            
            movies.add(movieMap);
        }
        return movies;
       
   }
    
    public List<Movies> getFirst20Movies() {
        return movieRepository.findFirst20By();
    }
    
  
    private String pythonServerUrl = "http://127.0.0.1:7999"; // This should be something like "http://localhost:5000"

    public Integer[] fetchMovieIdsFromPythonServer(Integer requestId) {
    	System.out.println(requestId);
    	 RestTemplate restTemplate = new RestTemplate();
    	 String url = pythonServerUrl + "/process_request?request_id=" + requestId;
    	 Map<String, Integer> requestData = new HashMap<>();
         requestData.put("request_id", requestId);
         ResponseEntity<Integer[]>  responseEntity = restTemplate.postForEntity(url, requestData,Integer[].class);
         Integer[] movieIdsArray = responseEntity.getBody();	
         return movieIdsArray;
    }

    	
    public Integer isMovieExists(String title) {
        return movieRepository.existMovie(title);
    }

    public Integer isMovieExists_id(int movie_id) {
        return movieRepository.existMovie_id(movie_id);
    }
    public void createMovie(String premiumAccess, String title, String descriptions, String releaseDate,
            int duration, String originalLanguage, String statuses, String poster, String url) {
			
    		
    	movieRepository.createMovie(premiumAccess, title, descriptions, releaseDate, duration,
			originalLanguage, statuses, poster, url);
    }
    public void deleteMovie(int movie_id) {
    	movieRepository.deleteById(movie_id);
    }
    public void updateMovie(int movie_id,String premiumAccess, String title, String descriptions, String releaseDate,
        int duration, String originalLanguage, String statuses, String poster, String url) {
    	movieRepository.updateMovie(movie_id,premiumAccess, title, descriptions, releaseDate, duration,
    			originalLanguage, statuses, poster, url);
    }
   

}
