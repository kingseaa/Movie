package svtt.example.movie_be.dto;

public class MovieDTO {
	private Integer movie_id; 
	private String premiumAccess;
    private String title;
    private String descriptions;
    private String release_date;
    private int duration;
    private String original_language;
    private String statuses;
    private String poster;
    private String url;
	public Integer getMovie_id() {
		return movie_id;
	}
	public void setMovie_id(Integer movie_id) {
		this.movie_id = movie_id;
	}
	public String getPremiumAccess() {
		return premiumAccess;
	}
	public void setPremiumAccess(String premiumAccess) {
		this.premiumAccess = premiumAccess;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescriptions() {
		return descriptions;
	}
	public void setDescriptions(String descriptions) {
		this.descriptions = descriptions;
	}
	public String getRelease_date() {
		return release_date;
	}
	public void setRelease_date(String release_date) {
		this.release_date = release_date;
	}
	public int getDuration() {
		return duration;
	}
	public void setDuration(int duration) {
		this.duration = duration;
	}
	public String getOriginal_language() {
		return original_language;
	}
	public void setOriginal_language(String original_language) {
		this.original_language = original_language;
	}
	public String getStatuses() {
		return statuses;
	}
	public void setStatuses(String statuses) {
		this.statuses = statuses;
	}
	public String getPoster() {
		return poster;
	}
	public void setPoster(String poster) {
		this.poster = poster;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	
    
    

}
