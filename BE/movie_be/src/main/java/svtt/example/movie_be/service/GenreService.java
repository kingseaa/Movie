package svtt.example.movie_be.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import svtt.example.movie_be.entities.Genre;
import svtt.example.movie_be.repository.GenreRepository;


@Service
public class GenreService {
	
private final GenreRepository genreRepository;
   
    
    @Autowired
	public GenreService(GenreRepository genreRepository) {
        this.genreRepository = genreRepository;
    }

    public List<Genre> getAllGenre() {
        return genreRepository.findAll();
    }
    
    

}
