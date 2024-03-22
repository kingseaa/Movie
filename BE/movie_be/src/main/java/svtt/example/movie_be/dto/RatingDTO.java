package svtt.example.movie_be.dto;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class RatingDTO {

	public Integer getRating_id() {
		return rating_id;
	}
	public void setRating_id(Integer rating_id) {
		this.rating_id = rating_id;
	}

	public Integer getUser_id() {
		return user_id;
	}
	public void setUser_id(Integer user_id) {
		this.user_id = user_id;
	}
	public Integer getMovie_id() {
		return movie_id;
	}
	public void setMovie_id(Integer movie_id) {
		this.movie_id = movie_id;
	}
	private Integer rating_id;
	private Integer rating;
	public Integer getRating() {
		return rating;
	}
	public void setRating(Integer rating) {
		this.rating = rating;
	}
	private Integer user_id;
	private Integer movie_id;
}
