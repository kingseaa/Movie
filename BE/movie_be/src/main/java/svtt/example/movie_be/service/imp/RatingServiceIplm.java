package svtt.example.movie_be.service.imp;

import java.util.List;
import java.util.Optional;

import svtt.example.movie_be.entities.Rating;


public interface RatingServiceIplm {
	public List<Rating> getAllRatings();
	
	public void addRating(Integer rating, Integer user_id, Integer movie_id);
//	public double getAverageRatingForMovie(Integer movieId);


	Optional<Rating> getRatingById(Integer movie_id);
	 
	 
    
}
