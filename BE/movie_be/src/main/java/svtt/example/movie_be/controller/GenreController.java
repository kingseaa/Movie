package svtt.example.movie_be.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import svtt.example.movie_be.entities.Genre;
import svtt.example.movie_be.service.GenreService;

@RestController
@RequestMapping("/api")
@Service
public class GenreController {
	private final GenreService genreService;
    
    public GenreController(GenreService genreService) {
        this.genreService = genreService;
    }
    
    @GetMapping("/genre")
    public ResponseEntity<List<Genre>> getAllGenre() {
    	
    	List<Genre> genres = genreService.getAllGenre();
        return ResponseEntity.ok(genres);
    }

}
