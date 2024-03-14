package svtt.example.movie_be.security;

import java.util.List;
import java.util.Map;

public class ApiResponse {
	 private String message;
     private List<Map<String, Object>> data;
     
     public ApiResponse(String message, List<Map<String, Object>> data) {
         this.message = message;
         this.data = data;
     }

   
     public String getMessage() {
         return message;
     }

     public void setMessage(String message) {
         this.message = message;
     }

     public List<Map<String, Object>> getData() {
         return data;
     }

     public void setData(List<Map<String, Object>> data) {
         this.data = data;
     }

}
