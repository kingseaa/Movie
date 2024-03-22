package svtt.example.movie_be.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import svtt.example.movie_be.entities.Genre;
import svtt.example.movie_be.entities.GenreMovie;
import svtt.example.movie_be.security.ApiResponse;
import svtt.example.movie_be.service.GenreMovieService;

@RestController
@RequestMapping("/api")
@Service

public class GenreMovieController {
    private final GenreMovieService genreMovieService;

    @Autowired
    public GenreMovieController(GenreMovieService genreMovieService) {
        this.genreMovieService = genreMovieService;
    }

    @GetMapping("/genremovies")
    public List<Object[]> getAllGenreMovies() {
        return genreMovieService.get20GenreMovies();
    }
    
    @PostMapping("/findgenre")
    public ResponseEntity<ApiResponse> getMoviesByGenre(@RequestBody Genre requestBody) {
    	System.out.println("Received data from React: " + requestBody.getGenre_name());
    	
    	String genre_name = requestBody.getGenre_name();
    	
    		if (genre_name == "") {
    			ApiResponse response = new ApiResponse("Không thể phân loại phim", new ArrayList<Map<String, Object>>());
    			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    		}
    		
    	List<Map<String, Object>> genreMovies = genreMovieService.getMoviesByGenre(genre_name);
     	ApiResponse response = new ApiResponse("Thành công", genreMovies);
        return ResponseEntity.ok(response);
    }
    

}