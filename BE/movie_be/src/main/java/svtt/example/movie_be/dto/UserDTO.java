
package svtt.example.movie_be.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDTO {

    private String user_name;


    private String user_password;


    private String user_email;
}
