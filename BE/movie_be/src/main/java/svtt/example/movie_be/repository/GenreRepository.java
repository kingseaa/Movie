

package svtt.example.movie_be.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import svtt.example.movie_be.entities.Genre;


@Repository
public interface GenreRepository extends JpaRepository<Genre, Integer> {
	
}