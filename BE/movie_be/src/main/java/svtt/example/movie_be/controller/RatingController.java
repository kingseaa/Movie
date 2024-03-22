package svtt.example.movie_be.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import svtt.example.movie_be.dto.RatingDTO;
import svtt.example.movie_be.entities.Rating;
import svtt.example.movie_be.service.RatingService;

@RestController
@RequestMapping("/api")
@Controller
public class RatingController {
	@Autowired
	private RatingService ratingService;

    
   
	
	@GetMapping("/rating")
    public List<Rating> getAllRatings() {
        return ratingService.getAllRatings();
    }

	@GetMapping("/rating/{movie_id}") 
    public Optional<Rating> getRatingsById(@PathVariable Integer movie_id) {
        return ratingService.getRatingById(movie_id);
    }

	
    @PostMapping("/rating")
    public ResponseEntity<?> addRating(@RequestBody RatingDTO ratingDTO) {
       ratingService.addRating( ratingDTO.getUser_id(), ratingDTO.getMovie_id(), ratingDTO.getRating());
       return ResponseEntity.status(300).body("rated sucessully");
    }

//	public ResponseEntity<?> addRating(@RequestBody Rating rating) {
//        boolean ratingAdded = ratingService.addRating(rating);
//        if (ratingAdded) {
//            return ResponseEntity.ok("Rating added successfully");
//        } else {
//            return ResponseEntity.status(400).body("Failed to add rating");
//        }
//    }
}
