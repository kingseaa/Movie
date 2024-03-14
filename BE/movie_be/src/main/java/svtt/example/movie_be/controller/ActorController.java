package svtt.example.movie_be.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import svtt.example.movie_be.entities.Actor;
import svtt.example.movie_be.entities.Movies;
import svtt.example.movie_be.security.ApiResponse;
import svtt.example.movie_be.service.ActorMovieService;


@RestController
@RequestMapping("/api")
@Service
public class ActorController {
	private final ActorMovieService actorService;
	
	public ActorController(ActorMovieService actorService) {
        this.actorService = actorService;
    }
    
    @PostMapping(value = {"/actor"})
    public ResponseEntity<ApiResponse> getAllActorMovies(@RequestBody Movies requestbody) {
    	
    	int movie_id = requestbody.getMovie_id();
    	
    	List<Map<String, Object>> genres = actorService.getActorsMovie(movie_id);
    		
    	if (genres.size() <= 0) {
    	
    		ApiResponse response = new ApiResponse("Không tồn tại actor movies", new ArrayList<Map<String, Object>>());

    		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    	}	
    	ApiResponse response = new ApiResponse("Thành công", genres);
        return ResponseEntity.ok(response);
    }
    
   
}
