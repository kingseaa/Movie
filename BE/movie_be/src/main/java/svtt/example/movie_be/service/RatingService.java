package svtt.example.movie_be.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import svtt.example.movie_be.entities.Rating;
import svtt.example.movie_be.repository.RatingRepository;
import svtt.example.movie_be.service.imp.RatingServiceIplm;

@Service
public class RatingService implements RatingServiceIplm {
	
	@Autowired
	private RatingRepository ratingRepository;
	
	public  RatingService(RatingRepository ratingRepository) {
        this.ratingRepository = ratingRepository;
    }
	public List<Rating> getAllRatings() {
        return ratingRepository.findAll();
    }

    public void addRating(Integer user_id,Integer movie_id,Integer rating ) {
         ratingRepository.addRating( user_id, movie_id, rating);
    }
//	 public boolean addRating(Rating rating) {
//	        try {
//	            ratingRepository.addRating(rating);
//	            return true; // Rating added successfully
//	        } catch (Exception e) {
//	            e.printStackTrace();
//	            return false; // Failed to add rating
//	        }
//	    }
	
    public Optional<Rating> getRatingById(Integer movie_id) {
        return  ratingRepository.findById(movie_id);
    }


	
	
	
}