package svtt.example.movie_be.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import svtt.example.movie_be.dto.MovieDTO;
import svtt.example.movie_be.entities.Movies;
import svtt.example.movie_be.security.ApiResponse;
import svtt.example.movie_be.service.MovieService;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;


@RestController
@RequestMapping("/api")
@Service
public class MovieController {
    private final MovieService movieService;
    
    @Autowired
    
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

   
    @GetMapping("/search")
    public List<Movies> searchByTitle(@RequestParam String title) {
        return movieService.findByTitleContaining( title );
    }

    @GetMapping("/movies")
    public List<Map<String, Object>> getAllMovies() {
    	List<Map<String, Object>> movies = movieService.getAllMovies();
        return movies;       
    }
    
    @GetMapping("/suggestmovie")
    public ResponseEntity<ApiResponse>fetchData(@RequestParam Integer request_id) {
    		
    			Integer[] suggestIdForUser = movieService.fetchMovieIdsFromPythonServer(request_id);	    	
		    	List<Map<String, Object>> suggestedMovies = movieService.getSuggestMovies(suggestIdForUser);
		    	if (suggestedMovies.size() <= 0) {
		    		ApiResponse response = new ApiResponse("Không có đề xuất", new ArrayList<Map<String, Object>>());	
		    		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
		    	}	
		    	ApiResponse response = new ApiResponse("Thành công", suggestedMovies);
		        return ResponseEntity.ok(response);
    }
    

    
    @GetMapping("/limited")
    public ResponseEntity<List<Movies>> getFirst20Movies() {
        List<Movies> movies = movieService.getFirst20Movies();
        return ResponseEntity.ok(movies);
    }
    
    
    @PostMapping("/createMovie")
    public ResponseEntity<?> createMovie(@RequestBody MovieDTO movieDTO) {
//    	ApiResponse response = new ApiResponse("Tạo không thành công", new ArrayList<>());
    	
    	if(movieService.isMovieExists(movieDTO.getTitle()) < 1) {
    		movieService.createMovie(movieDTO.getPremiumAccess(), movieDTO.getTitle(), movieDTO.getDescriptions(), movieDTO.getRelease_date(), movieDTO.getDuration(), movieDTO.getOriginal_language(), movieDTO.getStatuses(), movieDTO.getPoster(), movieDTO.getUrl());
    		return ResponseEntity.status(HttpStatus.OK).body("Create movie successfully!");
    	} else {
    		return ResponseEntity.status(300).body("Movie already exist");
    	} 	
    }
    @PostMapping("/deleteMovie")
    public ResponseEntity<?> deleteMovie(@RequestBody MovieDTO movieDTO) {
//    	ApiResponse response = new ApiResponse("Tạo không thành công", new ArrayList<>());
    	
    	if(movieService.isMovieExists_id(movieDTO.getMovie_id()) > 0) {
    		movieService.deleteMovie(movieDTO.getMovie_id());
    		return ResponseEntity.status(HttpStatus.OK).body("Updatae movie successfully!");
    	} else {
    		return ResponseEntity.status(300).body("Movie haven't already exist");
    	} 	
    }
    @PostMapping("/updateMovie")
    public ResponseEntity<?> updateMovie(@RequestBody MovieDTO movieDTO) {
    	if(movieService.isMovieExists_id(movieDTO.getMovie_id()) > 0) {
    		movieService.updateMovie(movieDTO.getMovie_id(),movieDTO.getPremiumAccess(), movieDTO.getTitle(), movieDTO.getDescriptions(), movieDTO.getRelease_date(), movieDTO.getDuration(), movieDTO.getOriginal_language(), movieDTO.getStatuses(), movieDTO.getPoster(), movieDTO.getUrl());
    		return ResponseEntity.status(HttpStatus.OK).body("update movie successfully!");
    	} else {
    		return ResponseEntity.status(300).body("Movie haven't already exist");
    	} 		
    }
    

}