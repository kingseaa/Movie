package svtt.example.movie_be.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "movies")
public class Movies {
	 	@Id
	   @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Integer movie_id;	    
	    private String title;
	    private String poster;
	    private String original_language;
	    private String release_date;
	    private Double vote_average;
	   
	    
		
		public Integer getMovie_id() {
			return movie_id;
		}
		public void setMovie_id(Integer movie_id) {
			this.movie_id = movie_id;
		}
		public String getTitle() {
			return title;
		}
		public void setTitle(String title) {
			this.title = title;
		}
		public String getPoster() {
			return poster;
		}
		public void setPoster(String poster) {
			this.poster = poster;
		}
		public String getOriginal_language() {
			return original_language;
		}
		public void setOriginal_language(String original_language) {
			this.original_language = original_language;
		}
		public String getRelease_date() {
			return release_date;
		}
		public void setRelease_date(String release_date) {
			this.release_date = release_date;
		}
		public Double getVote_average() {
			return vote_average;
		}
		public void setVote_average(Double vote_average) {
			this.vote_average = vote_average;
		}
	    
	    
	    
	
	    
	    
		
	    
}
