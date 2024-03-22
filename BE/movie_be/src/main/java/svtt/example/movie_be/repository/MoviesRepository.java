package svtt.example.movie_be.repository;


import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import jakarta.transaction.Transactional;
import svtt.example.movie_be.entities.Movies;

@Repository
public interface MoviesRepository extends JpaRepository<Movies, Integer> {

    
	List<Movies> findByTitleContaining(String title);

//	List<Movies> findMovieByMovieId(Integer movie_id);
	List<Movies> findFirst20By();
	
	@Query(value = "SELECT M.*, G.genre_name FROM genre AS G "  +
			" INNER JOIN genre_movie AS GM on G.genre_id = GM.genre_id " +
			" INNER JOIN movies AS M on M.movie_id = GM.movie_id " +
			" Where M.movie_id in :movieIds" +
			" ORDER BY M.movie_id;"
			,nativeQuery = true)
	List<Object[]> getMoviesRecommend(@Param("movieIds") Integer[] movieIds);
	
	@Transactional
	@Modifying
	@Query(value = "INSERT INTO movies (movie_id, premiumAccess, title, descriptions, release_date, duration, original_language, statuses, poster, url) " +
	            "SELECT (COALESCE(MAX(movie_id), 0) + 1), :premiumAccess, :title, :descriptions, :release_date, " +
	            ":duration, :original_language, :statuses, :poster, :url FROM movies", nativeQuery = true)
	void createMovie(@Param("premiumAccess") String premiumAccess, @Param("title") String title, @Param("descriptions") String descriptions,
	                @Param("release_date") String release_date, @Param("duration") int duration,
	                @Param("original_language") String original_language, @Param("statuses") String statuses,
	                @Param("poster") String poster, @Param("url") String url);

	@Transactional
    @Query(value = "SELECT CASE WHEN COUNT(m.title) > 0 THEN 1 ELSE 0 END FROM movies AS m WHERE m.title = :title", nativeQuery = true)
    int existMovie(@Param("title") String title);
	
	@Transactional
    @Query(value = "SELECT CASE WHEN COUNT(m.movie_id) > 0 THEN 1 ELSE 0 END FROM movies AS m WHERE m.movie_id = :movie_id", nativeQuery = true)
    int existMovie_id(@Param("movie_id") int movie_id);
	
	public void deleteById(Integer movie_id);
//	@Query(value = "delete from movies where movie_id = :movie_id", nativeQuery = true)
//	void deleteMovie(@Param("movie_id") int movie_id);
	
	@Transactional
	@Modifying
	@Query(value = "update movies set premiumAccess = :premiumAccess, title = :title, descriptions = :descriptions, release_date = :release_date, duration = :duration, original_language = :original_language, statuses = :statuses, poster = :poster, url = :url where movie_id = :movie_id", nativeQuery = true)
	void updateMovie(@Param("movie_id") int movie_id, @Param("premiumAccess") String premiumAccess, @Param("title") String title, @Param("descriptions") String descriptions, @Param("release_date") String release_date, @Param("duration") int duration, @Param("original_language") String original_language, @Param("statuses") String statuses, @Param("poster") String poster, @Param("url") String url);
}

