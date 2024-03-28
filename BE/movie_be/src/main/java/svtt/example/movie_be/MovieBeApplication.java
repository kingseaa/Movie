package svtt.example.movie_be;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication

@ComponentScan(basePackages = {"svtt.example.movie_be",
		"controller", 
		"repository", 
		"service",
		"entity", 
		"dto",
		"service.imp", 
		"security"}) 

public class MovieBeApplication {

	public static void main(String[] args) {
		SpringApplication.run(MovieBeApplication.class, args);
	}

}
