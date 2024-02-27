package svtt.example.movie_be.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;


import svtt.example.movie_be.entities.Movies;
import svtt.example.movie_be.security.ApiResponse;
import svtt.example.movie_be.service.MovieService;

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
    
    @GetMapping("/limited")
    public ResponseEntity<List<Movies>> getFirst20Movies() {
        List<Movies> movies = movieService.getFirst20Movies();
        return ResponseEntity.ok(movies);
    }
    

}