package svtt.example.movie_be.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import jakarta.transaction.Transactional;
import svtt.example.movie_be.entities.Movies;
import svtt.example.movie_be.entities.Rating;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Integer> {
	
	List<Rating> findAll();

	Optional<Rating> findById(Integer ratingId);
//	@Query(value = "SELECT r FROM rating r WHERE r.id = :rating_id;"
//			,nativeQuery = true)
//	List<Object[]> getRatingById(Integer movie_id);
	
	@Transactional
	@Modifying
	@Query(value = "insert into rating (user_id, movie_id, rating) \r\n"
			+ "values (:user_id, :movie_id,:rating)"
			,nativeQuery = true)
	public void addRating(@Param( "user_id") int user_id,@Param( "movie_id") int movie_id,@Param( "rating") int rating);
}
