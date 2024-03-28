package svtt.example.movie_be.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int user_id;

	@Column(name = "user_name")
	private String user_name;

	@Column(name = "user_password")
	private String user_password;

	@Column(name = "user_email")
	private String email;

	@Column(name = "user_age")
	private int user_age;

	@Column(name = "user_gender")
	private int user_gender;

	@Column(name = "user_image")
	private String user_image;

	@Column(name = "user_role")
	private String user_role;

	@Column(name = "user_upgrade_status")
	private String user_upgrade_status;
}
