package svtt.example.movie_be.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import svtt.example.movie_be.entities.GenreMovie;
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
    public List<Map<String, Object>> getMoviesByGenre(@RequestBody Map<String, String> requestBody) {
    	System.out.println("Received data from React: " + requestBody.get("genreName"));
    	String genreName = requestBody.get("genreName");
    	System.out.println(genreMovieService.getMoviesByGenre(genreName));
        return genreMovieService.getMoviesByGenre(genreName);
    }
    

}