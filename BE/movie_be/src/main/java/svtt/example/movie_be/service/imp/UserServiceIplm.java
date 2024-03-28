package svtt.example.movie_be.service.imp;

import svtt.example.movie_be.dto.UserDTO;
import svtt.example.movie_be.entities.User;

public interface UserServiceIplm {
   
    User registerUser(UserDTO userDTO);
    UserDTO loginUser(String email, String password);
}
