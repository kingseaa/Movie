package svtt.example.movie_be.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "actor_movie")
public class ActorMovie {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer actor_movie_id;
	
	private String characters;
	
	public String getCharacters() {
		return characters;
	}
	public void setCharacters(String characters) {
		this.characters = characters;
	}
	
    public Integer getActor_movie_id() {
		return actor_movie_id;
	}


	public void setActor_movie_id(Integer actor_movie_id) {
		this.actor_movie_id = actor_movie_id;
	}


	public Movies getMovie() {
		return movie;
	}


	public void setMovie(Movies movie) {
		this.movie = movie;
	}


	public Actor getActor() {
		return actor;
	}


	public void setActor(Actor actor) {
		this.actor = actor;
	}


	@ManyToOne
    @JoinColumn(name = "movie_id")
    private Movies movie;
    
   
    @ManyToOne
    @JoinColumn(name = "actor_id")
    private Actor actor;
   
    
    
}
