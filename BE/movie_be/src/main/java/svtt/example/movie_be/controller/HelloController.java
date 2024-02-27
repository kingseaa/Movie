package svtt.example.movie_be.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

@RestController
public class HelloController {

	@GetMapping("/")
	public String index() {
		
		return "Greetings from Spring Boot!";
	}
	
	@Autowired
    private DataSource dataSource;
    
    @GetMapping("/checkConnection")
    public ResponseEntity<String> checkDatabaseConnection() {
    	System.out.println("checkDatabaseConnection here!");
        try (Connection connection = dataSource.getConnection()) {
            return ResponseEntity.ok("Connected to database: " + connection.getMetaData().getDatabaseProductName());
        } catch (SQLException e) {
            return ResponseEntity.status(500).body("Unable to connect to database: " + e.getMessage());
        }
    }

}