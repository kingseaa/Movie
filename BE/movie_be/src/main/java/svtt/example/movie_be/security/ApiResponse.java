package svtt.example.movie_be.security;

public class ApiResponse<T> {
	private String status;
	private T data;
	
	public ApiResponse(String status, T data) {
		this.status = status;
		this.data = data;
	}
}
