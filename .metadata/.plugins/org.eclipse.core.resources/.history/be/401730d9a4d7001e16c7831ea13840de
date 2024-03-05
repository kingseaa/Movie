package svtt.example.movie_be.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import svtt.example.movie_be.entities.ActorMovie;


public interface ActorMovieRepository extends JpaRepository<ActorMovie,Integer> {
	@Query(value = "SELECT  M.movie_id, A.actor_name, A.actor_id, A.actor_image, AM.characters FROM actor AS A "  +
			" INNER JOIN actor_movie AS AM on AM.actor_id = A.actor_id " +
			" INNER JOIN movies AS M on M.movie_id = AM.movie_id " +
			" WHERE M.movie_id = ?1" +
			" ORDER BY M.movie_id;"
			,nativeQuery = true)
	List<Object[]> getActorsMovie(int id);
}
