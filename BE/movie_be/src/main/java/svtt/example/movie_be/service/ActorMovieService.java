package svtt.example.movie_be.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import svtt.example.movie_be.repository.ActorMovieRepository;

@Service
public class ActorMovieService {
private final ActorMovieRepository actorMovieRepository;

    
    public ActorMovieService(ActorMovieRepository actorMovieRepository) {
        this.actorMovieRepository = actorMovieRepository;
    }
    
    public List<Map<String, Object>> getActorsMovie(int actor_id) {
    	List<Object[]> resultList = actorMovieRepository.getActorsMovie(actor_id);
    	List<Map<String, Object>> actors = new ArrayList<>();
    	
    	for (Object[] row : resultList) {
    		Map<String, Object> movieMap = new HashMap<>();
    		movieMap.put("movie_id", row[0]);
    		movieMap.put("actor_name", row[1]);
    		movieMap.put("actor_id", row[2]);
    		movieMap.put("actor_image", row[3]);
    		movieMap.put("characters", row[4]);
    		actors.add(movieMap);
    	}
    	
    	return actors;
    	
    }

}
