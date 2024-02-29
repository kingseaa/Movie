package svtt.example.movie_be.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import svtt.example.movie_be.service.ActorMovieService;


@RestController
@RequestMapping("/api")
@Service
public class ActorController {
	private final ActorMovieService actorService;
	
	public ActorController(ActorMovieService actorService) {
        this.actorService = actorService;
    }
    
    @PostMapping("/actor")
    public ResponseEntity<List<Map<String, Object>>> getAllGenre(@RequestBody Map<String, Integer> requestbody) {
    	int actor_id = requestbody.get("id");
    	List<Map<String, Object>> genres = actorService.getActorsMovie(actor_id);
        return ResponseEntity.ok(genres);
    }
}
