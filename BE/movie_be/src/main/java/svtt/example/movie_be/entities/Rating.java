package svtt.example.movie_be.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;


@Entity
@Table(name = "rating")

public class Rating {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private Integer rating_id;
	private Integer rating;
	private Integer user_id;
	private Integer movie_id;
	
	
	
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


//	public void setUser(User user) {
//		this.user = user;
//	}



	
    public float getRating() {
		return rating;
	}


	public void setRating(Integer rating) {
		this.rating = rating;
	}


//	@ManyToOne
//    @JoinColumn(name = "movie_id")
//    private Movies movie;
//    
//   
//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    private User user;





	public Integer getRating_id() {
		return rating_id;
	}


	public void setRating_id(Integer rating_id) {
		this.rating_id = rating_id;
	}

//
//	public Movies getMovie() {
//		return movie;
//	}
//
//
//	public void setMovie(Movies movie) {
//		this.movie = movie;
//	}
//
//
//	public Movies getUser() {
//		// TODO Auto-generated method stub
//		return null;
//	}


//	public Users getUser() {
//		return user;
//	}
//
//
//	public void setUser(Users user) {
//		this.user = user;
//	}
// 
	

	

    
}
