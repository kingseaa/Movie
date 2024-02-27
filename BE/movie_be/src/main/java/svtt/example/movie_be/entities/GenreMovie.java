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
@Table(name = "genre_movie")

public class GenreMovie {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer genre_movie_id;
	
	
    @ManyToOne
    @JoinColumn(name = "movie_id")
    private Movies movie;
    
   
    @ManyToOne
    @JoinColumn(name = "genre_id")
    private Genre genre;
 
	

	public Movies getMovie() {
		return movie;
	}

	public void setMovie(Movies movie) {
		this.movie = movie;
	}

	public Genre getGenre() {
		return genre;
	}

	public void setGenre(Genre genre) {
		this.genre = genre;
	}

    // Getters and setters
}
