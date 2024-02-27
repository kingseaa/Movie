
package svtt.example.movie_be.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import svtt.example.movie_be.entities.GenreMovie;
import svtt.example.movie_be.entities.Movies;


@Repository

public interface GenreMovieRepository extends JpaRepository<GenreMovie,Integer> {
	@Query(value = "SELECT M.*, G.genre_name FROM genre AS G "  +
			" INNER JOIN genre_movie AS GM on G.genre_id = GM.genre_id" +
			" INNER JOIN movies AS M on M.movie_id = GM.movie_id " +
			" WHERE M.movie_id in " +
			"(SELECT M1.movie_id FROM genre AS G1 " +
			 " INNER JOIN genre_movie AS GM1 on G1.genre_id = GM1.genre_id "
			+ " INNER JOIN movies AS M1 on M1.movie_id = GM1.movie_id "
			+ " WHERE G1.genre_name = ?1 ) "
			+ " ORDER BY M.movie_id; "
			
			,nativeQuery = true)
	List<Object[]> findMoviesByGenre(String genreName);
	
	List<Object[]> findFirst20By();
	
	@Query(value = "SELECT M.*, G.genre_name FROM genre AS G "  +
			" INNER JOIN genre_movie AS GM on G.genre_id = GM.genre_id " +
			" INNER JOIN movies AS M on M.movie_id = GM.movie_id " +
			" ORDER BY M.movie_id;"
			,nativeQuery = true)
	List<Object[]> getMovies();
	
	
}