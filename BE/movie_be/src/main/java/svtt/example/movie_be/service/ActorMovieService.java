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
    		movieMap.put("title", row[2]);
    		movieMap.put("descriptions", row[3]);
    		movieMap.put("release_date", row[4]);
    		movieMap.put("duration", row[5]);
    		movieMap.put("original_language", row[6]);
    		movieMap.put("vote_average", row[8]);
    		movieMap.put("vote_count", row[9]);
    		movieMap.put("poster", row[10]);
    		movieMap.put("url", row[11]);
    		movieMap.put("actor_name", row[12]);
    		movieMap.put("actor_id", row[13]);
    		movieMap.put("actor_image", row[14]);
    		movieMap.put("characters", row[15]);
    		
    	
    		actors.add(movieMap);
    	}
    	
    	return actors;
    	
    }

}
