package svtt.example.movie_be;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan(basePackages = {"svtt.example.movie_be", "svtt.example.movie_be.controller, svtt.example.movie_be.service, svtt.example.movie_be.entities, svtt.example.movie_be.repository"}) 
public class MovieBeApplication {

	public static void main(String[] args) {
		SpringApplication.run(MovieBeApplication.class, args);
	}

}
